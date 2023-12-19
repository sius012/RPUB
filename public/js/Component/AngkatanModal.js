import Angkatan from "../Model/Angkatan.js";

export default class AngkatanModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.ProjekData;
        this.angkatan = new Angkatan();
        this.mode = "kirim";
        this.nama_component = "AngkatanModal";
    }

    load(id) {
        this.angkatan = Angkatan.find(id);
        this.mode = "edit";
        this.container
            .find("form")
            .find("button[type=submit]")
            .text(" Perbarui");
        this.modal.show();
    }

    reset() {
        this.angkatan = Angkatan.find(id);
        this.mode = "edit";
        this.container
            .find("form")
            .find("button[type=submit]")
            .text("Tambah angkatan");
        this.getElement("id_angkatan").val("");
        this.getElement("dari").val("");
        this.getElement("sampai").val("");
        this.getElement("keterangan").val("");
    }

    parseFromElement() {
        if (this.mode != "kirim") {
            this.angkatan.id_angkatan = this.getElement("angkatan").val();
        }

        this.angkatan.dari = this.getElement("dari").val();
        this.angkatan.sampai = this.getElement("sampai").val();
        this.angkatan.keterangan = this.getElement("keterangan").val();
    }

    globalEventListener() {
        var ctx = this;
        //tombol tambah angkatan ditekan
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            switch (ctx.mode) {
                case "kirim":
                    ctx.parseFromElement();
                    ctx.angkatan.simpan();
                    Swal.fire("Data berhasil dimasukan");
                    break;

                default:
                    break;
            }
        });
    }

    getElement(name, { type } = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }
}
