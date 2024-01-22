//JENIS MODAL 

//KOMPONENT INI SUDAH TIDAK TERPAKAI LAGI (19/01/2024)




import Jenis from "../Model/Jenis.js";
import Jurusan from "../Model/Jurusan.js";
import pageSetup from "./PageSetup.js";

export default class JenisModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.isLayout = true;
        this.jenis = new Jenis();
        this.mode = "simpan";
        this.nama_component = "JenisModal";
    }

    load(id = null) {
        const ctx = this;
        this.getElement("jurusan", "select").empty();
        Jurusan.all(null, function (data) {
            data.forEach((element) => {
                ctx.getElement("jurusan", "select").append(
                    `<option value='${element.id}'>${element.jurusan}</option>`
                );
            });
        });
        if (id != null) {
            this.mode = "edit";
            Jenis.find(id, function (data) {
                ctx.getElement("nama").val(data.nama);
                ctx.getElement("keterangan").val(data.keterangan);
                ctx.getElement("jurusan").val(data.id_jurusan);
                ctx.getElement("tipe").val(data.tipe);
                ctx.jenis = data;

                ctx.modal.show();
            });
        } else {
            ctx.jenis = new Jenis();
            ctx.modal.show();
        }
    }

    globalEventListener() {
        const ctx = this;
        this.container.find("form").submit(function (e) {
            let ctx2 = this;
            e.preventDefault();
            ctx.parseFromElement();
            ctx.jenis.simpan(function (data) {
                console.log(data);
                pageSetup.getComponent("KonfigurasiKategoriJenisView").load();
                ctx.modal.hide();
            }, ctx2);
        });
    }

    parseFromElement() {
        this.jenis.nama = this.getElement("nama").val();
        this.jenis.keterangan = this.getElement("keterangan").val();
        this.jenis.id_jurusan = this.getElement("jurusan", "select").val();
        this.jenis.tipe = this.getElement("tipe", "select").val();
        this.jenis.icon = this.getElement("icon")[0];
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }
}
