//SISWA MODAL

//FUNGSI
//1. MENAMBAHKAN, MENGEDIT, DATA SISWA

//RELASI FILE
//VIEW: siswa_modal.blade.php;
//TERSIMPAN DIHALAMAN = pages/konfigurasi

import Angkatan from "../Model/Angkatan.js";
import Jurusan from "../Model/Jurusan.js";
import Siswa from "../Model/Siswa.js";

export default class SiswaModal {
    constructor(container) {
        this.container = container; //ELEMENT PENAMPUNG (CONTAINER) BISA BERUPA CLASS(.) ATAU ID(#)
        this.modal = new bootstrap.Modal(container);
        this.siswa = new Siswa(); //DATA SISWA KOSONG
        this.mode = "simpan"; //MODE MODAL
        this.nama_component = "SiswaModal"; //NAMA COMPONENT WAJIB DISETIAP COMPONENT
    }

    init(load = false) {
        //INISIALSASI SISWA MODAL
        const ctx = this;
        ctx.reset();
        this.mode = "simpan";
        let angkatan = Angkatan.all();
        ctx.getElement("id_angkatan", "select").empty();
        angkatan.forEach(function (e) {
            ctx.getElement("id_angkatan", "select").append(
                `<option value="${e.id_angkatan}">${e.id_angkatan}</option>`
            );
        });

        let jurusan = Jurusan.all();

        ctx.getElement("id_jurusan", "select").empty();
        jurusan.forEach(function (e) {
            ctx.getElement("id_jurusan", "select").append(
                `<option value="${e.id}">${e.jurusan}</option>`
            );
        });
        if (load == false) {
            this.modal.show();
        }
    }

    load(id) {
        //MENAMPILKAN DATA SISWA DARI ID
        this.init();
        this.mode = "edit";
        this.siswa = Siswa.find(id);
        console.log(this.siswa);
        this.getElement("nama").val(this.siswa.nama);
        this.getElement("email").val(this.siswa.email);
        this.getElement("id_jurusan", "select").val(this.siswa.id_jurusan);
        this.getElement("id_angkatan", "select").val(this.siswa.id_angkatan);
        this.getElement("jk", "select").val(this.siswa.jk);
        this.getElement("id").val(this.siswa.id);
        this.getElement("nis").val(this.siswa.nis);
        this.container.find(".pp-viewer").show();
        this.container
            .find(".pp-viewer")
            .attr("src", this.siswa.getFotoProfil());
        this.modal.show();
    }

    reset() {
        //MERESET MODAL
        this.getElement("nama").val("");
        this.getElement("email").val("");
        this.getElement("id_jurusan", "select").val("");
        this.getElement("id_angkatan", "select").val("");
        this.getElement("jk", "select").val("");
        this.getElement("id").val("");
        this.getElement("nis").val("");
        this.container.find(".pp-viewer").hide();
    }

    globalEventListener() {
        //MENDETEKSI EVENT YANG SEDANG BERJALAN DI DALAM CONTAINER
        const ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            let form = this;
            ctx.siswa.simpan(function (data) {
                if (data["keterangan"] == "berhasil") {
                    Swal.fire("success", "Berhasil dimasukan");
                    ctx.modal.hide();
                    pageSetup.getComponent("KonfigurasiSiswaView").load();
                } else {
                    ctx.modal.hide();
                    Swal.fire("error", "Data gagal dimasukan");
                }
            }, form);
        });
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }
}
