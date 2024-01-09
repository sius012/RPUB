import Helper from "../Helper/Helper.js";
import Versi from "../Model/Versi.js";
import pageSetup from "./PageSetup.js";

export default class VersiModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.versi = new Versi();
        this.mode = "store";
        this.nama_component = "VersiModal";
        this.page_setup;
    }

    load(id_tugas) {
        this.mode = "store";
        this.versi.id_tugas = id_tugas;
        this.getElement("id_tugas").val(id_tugas);
        this.modal.show();
    }

    parseFromElement() {
        this.versi.id_siswa = Helper.getCurrentAuthSiswa().id;
        this.versi.nama = this.getElement("nama").val();
        this.versi.keterangan = this.getElement("keterangan", "textarea").val();
        if (this.getElement("lampiran")[0] != undefined) {
            this.versi.lampiran = this.getElement("lampiran")[0];
        }
        if (this.getElement("nomor_versi").val() != undefined) {
            this.versi.nomor_versi = this.getElement("nomor_versi").val();
        }

        this.versi.status = this.getElement("status", "select").val();
    }

    globalEventListener() {
        var ctx = this;
        ctx.container.delegate("form", "submit", function (e) {
            e.preventDefault();
            let form = this;
            ctx.parseFromElement();
            if (ctx.mode == "store") {
                ctx.versi.simpan(function (ed) {
                    ctx.reset();
                    pageSetup.getComponent("TugasDetailView").loadversi();
                }, form);
            } else if (ctx.mode == "edit") {
                ctx.versi.update(function (ed) {
                    Swal.fire("Tess");
                    pageSetup.getComponent("TugasDetailView").loadversi();
                }, form);
            }

            ctx.modal.hide();
        });
        ctx.getElement("lampiran").change(function (event) {
            var file = event.target.files[0];

            if (file) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    ctx.container
                        .find(".img-lampiran")
                        .attr("src", e.target.result);
                };

                reader.readAsDataURL(file);
            } else {
                ctx.container.find(".img-lampiran").attr("src", "");
            }
        });
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }

    editVersi(id) {
        this.mode = "edit";
        let versi = Versi.find(id);
        this.versi.id = id;
        this.container.find(".modal-title").text("Edit Laporan");
        this.getElement("nama").val(versi.nama);
        this.getElement("keterangan", "textarea").val(versi.keterangan);
        this.getElement("lampiran").val("");
        this.container
            .find(".img-lampiran")
            .attr("src", "/versi/" + versi.lampiran);
        this.modal.show();
    }

    reset() {
        this.mode = "store";
        this.versi.id = null;
        this.container.find(".modal-title").text("Buat Laporan");
        this.getElement("nama").val("");
        this.getElement("keterangan", "textarea").val("");
        this.getElement("lampiran").val("");
        this.getElement("nomor_versi").val("");
        this.getElement("status", "select").val("");
        this.modal.hide();
    }
}
