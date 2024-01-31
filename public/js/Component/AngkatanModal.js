//ANGKATAN MODAL

//FUNGSI
//1. MENAMBAHKAN ANGKATAN
//2. MENGEDIT ANGKATAN

//RELASI FILE
//VIEW: angkatan_modal.blade;
//TERSIMPAN DIHALAMAN = pages/konfigurasi/

import Angkatan from "../Model/Angkatan.js"; //MODEL ANGKATAN

export default class AngkatanModal {
    constructor(container) {
        this.container = container; //ELEMEN MODAL
        this.modal = new bootstrap.Modal(container);
        this.ProjekData; //DATA PROJEK (SINGLE DATA)
        this.angkatan = new Angkatan() //DATA ANGKATAN (SINGLE DATA);
        this.mode = "kirim"; //MODE MODAL (KIRIM UNTUK MENAMBAHKAN DATA/EDIT UNTUK MENGEDIT DATA)
        this.nama_component = "AngkatanModal";
    }

    load(id) { //MENAMPILKAN DATA ANGKATAN (SINGLE DATA)
        this.angkatan = Angkatan.find(id);
        this.mode = "edit";
        this.container
            .find("form")
            .find("button[type=submit]")
            .text(" Perbarui");
        this.modal.show();
    }

    reset() {// MERESET / MENGOSONGKAN INPUTAN YANG ADA DIMODAL
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

    parseFromElement() { //MENGAMBIL DATA DI INPUTAN, DAN DIUBAH MENJADI MODEL ANGKATAN
        if (this.mode != "kirim") {
            this.angkatan.id_angkatan = this.getElement("angkatan").val();
        }

        this.angkatan.dari = this.getElement("dari").val();
        this.angkatan.sampai = this.getElement("sampai").val();
        this.angkatan.keterangan = this.getElement("keterangan").val();
    }

    globalEventListener() { //MENDETEKSI EVENT YANG TERJADI DIMODAL (SEPERTI TOMBOL KIRIM DITEKAN, DLL)
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

    getElement(name, { type } = "input") { // MENDAPATKAN INPUTAN BERDASARKAN NAME
        return this.container.find(`${type}[name=${name}]`);
    }
}
