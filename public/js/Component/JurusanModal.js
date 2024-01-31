//JURUSAN MODAL

//FUNGSI
//1. MENAMBAHKAN JURUSAN/MENGEDIT/DAN MENGAPUS DATA JURUSAN

//TERLETAK DI MENU KONFIGURASI

//RELASI FILE
//VIEW: jurusan_modal.blade.php;
//TERSIMPAN DIHALAMAN = pages/konfigurasi

import Jurusan from "../Model/Jurusan.js";
import pageSetup from "./PageSetup.js";

export default class JurusanModal {
    constructor(container) {
        this.container = container;//ELEMENT MODAL (BERUPA CLASS(.) atau class(#))
        this.modal = new bootstrap.Modal(container);
        this.jurusan = new Jurusan();//DATA JURUSAN (SINGLE DATA) (JIKA TAMBAH DATA, OTOMATIS KOSONG)
        this.nama_component = "JurusanModal";//NAMA KOMPONENT (WAJIB ADA DISETIAP COMPONENT)
        this.mode = "kirim";// MODE MODAL (KIRIM UNTUK MENAMBAHKAN JURUSAN BARU/EDIT UNTUK MEMPERBARUI DATA)
    }

    load(id) {//MENAMPILKAN DATA JURUSAN BERDASARKAN ID JURUSAN
        this.jurusan = Jurusan.find(id); //MENAMPILKAN DATA SECARA SINKRONUS
        this.mode = "edit";
        this.container
            .find("form")
            .find("button[type=submit]")
            .text("Perbarui");
        this.modal.show();
        this.getElement("jurusan").val(this.jurusan.jurusan);
        this.getElement("keterangan", "textarea").val(this.jurusan.keterangan);
    }

    reset() {//MERESET MODAL
        this.jurusan = jurusan.find(id);
        this.mode = "edit";
        this.container
            .find("form")
            .find("button[type=submit]")
            .text("Tambah jurusan");
        this.getElement("jurusan").val("");
        this.getElement("keterangan").val("");
    }

    parseFromElement() {//MENGISI MODEL JURUSAN DARI INPUTAN YANG TERSEDIA DIMODAL
        this.jurusan.jurusan = this.getElement("jurusan").val();
        this.jurusan.keterangan = this.getElement(
            "keterangan",
            "textarea"
        ).val();
    }

    globalEventListener() {//MENDETEKSI EVENT YANG BERLAKU DIMODAL
        var ctx = this;

        //tombol tambah jurusan ditekan
        this.container.find("form").submit(function (e) {//KETIKA FORM TERKIRIM
            e.preventDefault();
            switch (ctx.mode) {
                case "kirim"://JIKA MODE MODALNYA KIRIM
                    ctx.parseFromElement();
                    ctx.jurusan.simpan(function (data) { //JIKA TERJADI ERROR, DICOMENT SAJA SYNTAX INI
                        ctx.modal.hide();
                        pageSetup.getComponent("KonfigurasiJurusanView").load();
                        Swal.fire("Data berhasil dimasukan");
                    });
                    break;

                case "edit"://JIKA MODE MODALNYA EDIT
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
