//LAPORAN LIST MODAL

//FUNGSI
//1. MENAMPILKAN LAPORAN LIST DISETIAP TUUGAS


//RELASI FILE
//VIEW: laporan_list_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/projek

import Versi from "../Model/Versi.js";
import pageSetup from "./PageSetup.js";

export default class LaporanListModal {
    constructor(container) {
        this.container = container;//ELEMENT UNTUK MENAMPUNG DATANYA, BISA BERUPA CLASS(.) ATAU ID(#)
        this.modal = new bootstrap.Modal(container);
        this.nama_component = "LaporanListModal";// NAMA COMPONENT WAJIB ADA DISETIAP COMPONENT
    }

    load(idtugas, idsiswa) {// MENAMPILKAN LIST LAPORAN
        let ctx = this;
        Versi.byTugasDanSiswa(idtugas, idsiswa, function (data) {
            let container = ctx.container.find(".container-laporan");
            container.empty();
            data.forEach((element) => {
                container.append(`<div class='row laporan-row mb-2' data-id='${element.id}'><div class='card p-3'><div class='row'>
                <div class='col-8'>${element.nama}</div><div class='col-4 text-end'><button class='btn btn-primary btn-sm buka-detail'><i class='fa fa-info'></i></button></div>
                </div></div></div>`);
            });
            ctx.modal.show();
        });
    }

    globalEventListener() {// MENDETEKSI EVENT YANG SEDANG BERJALAN DIDALAM CONTAINER
        let ctx = this;
        ctx.container.delegate(".buka-detail", "click", function () {//TOMBOL DENGAN CLASS BUKA DETAIL DIKLIK
            let lDM = pageSetup.getComponent("LaporanDetailModal");
            lDM.load($(this).closest(".laporan-row").data("id"));
        });
    }
}
