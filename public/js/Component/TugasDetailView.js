//TUGAS DETAIL VIEW

//FUNGSI
//1. MENAMPILKAN TUGAS DETAIL, PARTISIPAN DAN LAPORANNYA

//RELASI FILE
//VIEW: siswa_list_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/siswa

import pageSetup from "./PageSetup.js";
import Versi from "../Model/Versi.js";
import Helper from "../Helper/Helper.js";
import Tugas from "../Model/Tugas.js";
import Siswa from "../Model/Siswa.js";

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
            this.loadIndikatorKompetensi();
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

    loadIndikatorKompetensi() {
        let ctx = this;
        this.tugas.getIndikator(function (data) {
            let table = ctx.container
                .find("#indikator-kompetensi")
                .find("tbody");
            table.empty();
            data.forEach(function (e, i) {
                table.append(`<tr>
            <td>${1 + (i + 1) / 10}</td>
            <td>${e.nama}</td>
            <td>${e.nilai_max}</td>
            <td></td>
        </tr>`);
            });
        });
    }

    versiCard(versi) {
        console.log(versi.lampiran);
        return `
        <div class='card mb-2 versi-card row-laporan' data-id='${versi.id}'>
        <div class='row  p-3' >
        <div class='col-3'>
            <img style="width: 100%; aspect-ratio:1/1; object-fit: cover;" src='${
                versi.lampiran != null
                    ? "/versi/" + versi.lampiran
                    : "/img/logo/logo1.svg"
            }'>
        </div>
       
        <div class='col-9'>
        <span class='text-sm'>${versi.siswa.nama} ${
            versi.siswa.kelasDanJurusan
        }</span><b><br>${versi.nama}</b> ${Helper.formatShortDate(
            versi.timestamp.created_at
        )}<br><span>
        ${versi.keterangan}</span>
        <div class='row'>
        <div class='col-12'>
        <div class="btn-group" role="group" aria-label="Basic example">
        ${Helper.status(versi.status, false, {
            class: "status-laporan",
            type: "button",
        })}
        ${
            versi.controlled == true
                ? `<button class='btn btn-warning btn-edit-laporan btn-sm'><i class='fa fa-edit'></i></button><button class='btn btn-danger btn-hapus-laporan btn-sm'><i class='fa fa-trash'></i></button>`
                : ""
        }
</div>
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
            versimodal.reset();
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

        this.container.delegate(".btn-hapus-laporan", "click", function () {
            let id = $(this).closest(".row-laporan").data("id");
            Swal.fire({
                title: "Apakah anda yakin ingin menghapus laporan?",
                showCancelButton: true,
                confirmButtonText: "Hapus",
                target: ctx.container[0],
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    let versi = Versi.find(id);
                    versi.hapus(function () {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Data Berhasil dihapus",
                            showConfirmButton: false,
                            timer: 1500,
                            target: ctx.container[0],
                        });
                        ctx.loadversi();
                    });
                }
            });
            s;
        });

        this.container.delegate(".btn-info-laporan", "click", function () {
            let id = $(this).closest(".row-laporan").data("id");
            let lDM = pageSetup.getComponent("LaporanDetailModal");

            lDM.load(id);
        });

        this.container.delegate(".btn-edit-laporan", "click", function () {
            let id = $(this).closest(".row-laporan").data("id");
            pageSetup.getComponent("VersiModal").editVersi(id);
        });

        this.container
            .find("#tab-tugas-detail-view")[0]
            .addEventListener("show.bs.tab", function (event) {
                var btn = $(event.target);
                let tab = btn.data("bs-target");
                // switch (tab) {
                //     case "#versi1":
                //         ctx.loadversi();
                //         break;
                //     case "#partisipan1":
                //         ctx.loadPartisipan();
                //         break;
                //     case "#indikator-kompetensi":
                //         ctx.loadIndikatorKompetensi();
                //     default:
                //         break;
                // }
            });
    }
}
