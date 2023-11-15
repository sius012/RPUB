import User from "../Model/User.js";

export default class PenggunaModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.mode = "simpan";
        this.nama_component = "PenggunaModal";
        this.pengguna = new User();
    }

    load(id = null) {
        if (id != null) {
            this.pengguna = User.find(id);
            this.mode = "edit";
            this.getElement("name").val(this.pengguna.nama);
            this.getElement("email").val(this.pengguna.email);
            this.getElement("password").val("");
        }
        this.modal.show();
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

                default:
                    break;
            }
        });
    }

    parseFromElement() {
        this.pengguna.nama = this.getElement("name").val();
        this.pengguna.email = this.getElement("email").val();
        this.pengguna.password = this.getElement("password").val();

        console.log(this.pengguna);
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }
}
