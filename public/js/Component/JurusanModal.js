import Jurusan from "../Model/Jurusan.js";
import pageSetup from "./PageSetup.js";

export default class JurusanModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.ProjekData;
        this.jurusan = new Jurusan();
        this.nama_component = "JurusanModal";
        this.mode = "kirim";
    }

    load(id) {
        this.jurusan = Jurusan.find(id);
        this.mode = "edit";
        this.container
            .find("form")
            .find("button[type=submit]")
            .text("Perbarui");
        this.modal.show();
        this.getElement("jurusan").val(this.jurusan.jurusan);
        this.getElement("keterangan", "textarea").val(this.jurusan.keterangan);
    }

    reset() {
        this.jurusan = jurusan.find(id);
        this.mode = "edit";
        this.container
            .find("form")
            .find("button[type=submit]")
            .text("Tambah jurusan");
        this.getElement("jurusan").val("");
        this.getElement("keterangan").val("");
    }

    parseFromElement() {
        this.jurusan.jurusan = this.getElement("jurusan").val();
        this.jurusan.keterangan = this.getElement(
            "keterangan",
            "textarea"
        ).val();
    }

    globalEventListener() {
        var ctx = this;

        //tombol tambah jurusan ditekan
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            switch (ctx.mode) {
                case "kirim":
                    ctx.parseFromElement();
                    ctx.jurusan.simpan(function (data) {
                        ctx.modal.hide();
                        pageSetup.getComponent("KonfigurasiJurusanView").load();
                    });
                    break;

                case "edit":
                    ctx.parseFromElement();
                    ctx.jurusan.simpan(function (data) {
                        ctx.modal.hide();
                        pageSetup.getComponent("KonfigurasiJurusanView").load();
                    });

                default:
                    break;
            }
        });
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }
}
