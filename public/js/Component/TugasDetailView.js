import pageSetup from "./PageSetup.js";
import Versi from "../Model/Versi.js";
import Helper from "../Helper/Helper.js";

export default class TugasDetailView {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.tugas;
        this.page_setup;
        this.nama_component = "TugasDetailView";
        this.versiList;
        this.isLayout = true;
    }

    load(id) {
        const ctx = this;
        Helper.checkGuard(function (guard) {
            if (guard == "admin") {
                ctx.container.find(".tombol-tambah-versi").hide();
            } else {
                ctx.container.find(".tombol-tambah-versi").show();
            }
            ctx.tugas = pageSetup.getTugasCache(id);
            ctx.render();
        });
    }

    loadversi() {
        var ctx = this;

        this.versiList = Versi.byTugas(this.tugas.id_tugas, function (data) {
            let versiList = ctx.container.find("#versi1").find("#versi-list");
            versiList.html("");
            console.log(data);
            data.forEach((element) => {
                versiList.append(ctx.versiCard(Versi.parse(element)));
            });
        });
    }

    render() {
        if (this.tugas != undefined) {
            //mengisi data projek
            this.getElement("nama").val(this.tugas.nama);
            this.getElement("keterangan", "textarea").val(
                this.tugas.keterangan
            );
            this.getElement("tanggal_awal").val(this.tugas.tanggal_awal);
            this.getElement("tanggal_akhir").val(this.tugas.tanggal_akhir);
            this.loadversi();
            this.loadPartisipan();
            this.modal.show();
        }
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }

    loadPartisipan() {
        let container = this.container.find("#partisipan-container");
        container.empty();
        this.tugas.getPartisipan(function (data) {
            data.forEach(function (e) {
                container.append(
                    `<div class='row mb-3'><div class='card p-3'><div class='row'><div class='col-2 position-relative'><img style='width: 100%; aspect-ratio:1/1; object-fit: cover; border-radius: 50%' src='${e.getFotoProfil()}'></div><div class='col-8'>${
                        e.nama
                    }</div></div></div></div>`
                );
            });
        });
    }

    versiCard(versi) {
        console.log(versi);
        return `
        <div class='card mb-2 versi-card' data-id='${versi.id}'>
        <div class='row  p-3' >
        <div class='col-2'>
            <img style="width: 100%; height: 100%; object-fit: cover;" src='/versi/${
                versi.lampiran
            }'>
        </div>
        <div class='col-10'><b>${versi.nama}</b> ${Helper.formatShortDate(
            versi.timestamp.created_at
        )}<br><span>
        ${versi.keterangan}</span>
        <div class='row'>
        <div class='col-6'>
        ${Helper.status(versi.status, false, { class: "status-laporan" })}
        </div>
        <div class='col-6'>
            ${versi.siswa.nama}
        </div>
        </div>
        </div>
        </div>
        </div>
        `;
    }

    globalEventListener() {
        var ctx = this;

        this.container.delegate(".tombol-tambah-versi", "click", function (e) {
            const versimodal = ctx.page_setup.getComponent("VersiModal");
            versimodal.load(ctx.tugas.id_tugas);
        });

        this.container.delegate(".status-laporan", "click", function (e) {
            e.stopPropagation();
            pageSetup
                .getComponent("ContextMenuStatusLaporan")
                .trigger(
                    $(this).closest(".versi-card"),
                    $(this).closest(".versi-card").data("id")
                );
        });
    }
}
