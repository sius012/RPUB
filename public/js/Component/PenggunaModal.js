//PENGGUNA MODAL

//FUNGSI
//1. MENAMBAH, MENGEDIT DAN MENGHAPUS DATA PENGGUNA

//RELASI FILE
//VIEW: pengguna_modal_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/konfigurasi

import Jurusan from "../Model/Jurusan.js";
import Role from "../Model/Role.js";
import User from "../Model/User.js";
import pageSetup from "./PageSetup.js";

export default class PenggunaModal {
    constructor(container) {
        this.container = container; //ELEMEN MODAL BISA BERUPA CLASS(.) ATAU (ID)
        this.modal = new bootstrap.Modal(container);
        this.mode = "simpan"; //MODE MODAL (SIMPAN ATAU EDIT)
        this.nama_component = "PenggunaModal";
        this.pengguna = new User();
    }

    load(id = null) {
        //MENAMPILKAN DATA BERDASARKAN ID, JIKA ID NULL MAKA HANYA MENAMPILKAN MODAL SAJA, TANPA MELOAD DATA

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
        // MERESET  MODAL
        this.pengguna = new User();
        this.mode = "simpan";
        this.getElement("name").val("");
        this.getElement("email").val("");
        this.getElement("password").val("");
        this.getElement("role", "select").val("");
    }

    globalEventListener() {
        //MENDETEKSI EVENT YANG SEDANG BERJALAN DI DALAM CONTAINER
        const ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            switch (ctx.mode) {
                case "simpan":
                    ctx.parseFromElement();
                    ctx.pengguna.simpan(function () {
                        pageSetup
                            .getComponent("KonfigurasiPenggunaView")
                            .load();
                    });
                    break;

                case "edit":
                    ctx.parseFromElement();
                    ctx.pengguna.simpan(function () {
                        pageSetup
                            .getComponent("KonfigurasiPenggunaView")
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
        //MENGISI MODEL PENGGUNA DARI INPUTAN YANG TELAH DIISI OLEH USER
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
        //MENPATKAN INPUTAN DARI FIELD INPUTAN
        return this.container.find(`${type}[name=${name}]`);
    }
}
