//LIST SISWA VIEW

import pageSetup from "./PageSetup.js";

//FUNGSI
//1. MENAMPILKAN LIST SISWA DIMENU SISWA
//2. MELIHAT INFORMASI DETAIL SISWA DAN PROJEKNYA

//RELASI FILE
//VIEW: konfigurasi_pengguna_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/konfigurasi

export default class ListSiswaView {
    constructor(container) {
        this.container = container; //ELEMENT UNTUK MENAMPUNG LISTNYA
        this.jurusanList = []; //BERISI DATA JURUSAN (MULTIPLE DATA)
        this.nama_component = "ListSiswaView";// NAMA COMPONENT WAJIB ADA DISETIAP COMPONENT
    }

    load() {// MENAMPILKAN LIST DATA SISWA
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });
        this.container.show();
        this.container.find(".row-jurusan").html("");
        this.jurusanList.forEach((element) => {
            var jurusanCard = new JurusanCard(element);
            this.container.find(".row-jurusan").append(jurusanCard.load());
        });
    }

    globalEventListener() {//MENDETEKSI EVENT YANG SEDANG BERJALAN DIDALAM CONTAINER
        var ctx = this;
        this.container.find("#tambah-jurusan").click(function () {
            var modal = pageSetup.getComponent("ProjekModal").modal;
            modal.show();
        });
    }
}
