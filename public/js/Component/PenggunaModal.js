import Jurusan from "../Model/Jurusan.js";
import Role from "../Model/Role.js";
import User from "../Model/User.js";
import pageSetup from "./PageSetup.js";

export default class PenggunaModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.mode = "simpan";
        this.nama_component = "PenggunaModal";
        this.pengguna = new User();
    }

    load(id = null) {
        const ctx = this;
        this.getElement("role", "select").html("");
        Role.all(function (data) {
            data.forEach((element) => {
                ctx.getElement("role", "select").append(
                    `<option value='${element.name}'>${element.name}</option>`
                );
            });
        });
        if (id != null) {
            this.pengguna = User.find(id);
            this.mode = "edit";
            this.getElement("name").val(this.pengguna.nama);
            this.getElement("email").val(this.pengguna.email);
            this.getElement("password").val("");
            this.container.find("button[type='submit']").text("Perbarui");
            this.getElement("password").removeAttr("required");
        }
        this.modal.show();
    }

    reset() {
        this.pengguna = new User();
        this.mode = "simpan";
        this.getElement("name").val("");
        this.getElement("email").val("");
        this.getElement("password").val("");
        this.getElement("role", "select").val("");
    }

    globalEventListener() {
        const ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            switch (ctx.mode) {
                case "simpan":
                    ctx.parseFromElement();
                    ctx.pengguna.simpan(function () {});
                    break;

                case "edit":
                    ctx.parseFromElement();
                    ctx.pengguna.simpan(function () {
                        pageSetup
                            .getComponent("KonfigurasiPenggunaModal")
                            .load();
                    });
                    break;

                default:
                    break;
            }
            ctx.reset();
            ctx.modal.hide();
        });
    }

    parseFromElement(id = null) {
        this.pengguna.nama = this.getElement("name").val();
        this.pengguna.email = this.getElement("email").val();
        if (this.getElement("password").val().length > 0) {
            this.pengguna.password = this.getElement("password").val();
        } else {
            this.pengguna.password = "";
        }
        this.pengguna.selected_role = this.getElement("role", "select").val();
        if (id != null) {
            this.pengguna.id = id;
        }
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }
}
