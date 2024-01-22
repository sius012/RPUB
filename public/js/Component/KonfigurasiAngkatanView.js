//KONFIGURASI ANGKATAN VIEW

//FUNGSI
//1. MENAMBAHKAN LIST ANGKATAN YANG TERSEDIA DIDATABASE
//2. MENAMBAHKAN DATA, MENGEDIT DAN MENGHAPUS

//RELASI FILE
//VIEW: konfigurasi_angkatan.blade.php;
//TERSIMPAN DIHALAMAN = pages/konfigurasi


import Helper from "../Helper/Helper.js";
import Angkatan from "../Model/Angkatan.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiAngkatanView {
    constructor(container) {
        this.container = container;//ELEMENT CONTAINER (BERUPA CLASS(.) ATAU ID(#))
        this.angkatanList = Angkatan.all();//MENDAPATKAN DATA ANGKATAN SECARA SINKRONUS
        this.nama_component = "KonfigurasiAngkatanView";//NAMA KOMPONENT, WAJIB ADA DISETIAP KOMPONEN
        this.page_setup;
    }

    load() {//MENAMPILKAN DATA
        const ctx = this;
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });

        let breadcrumb = pageSetup.getComponent("Breadcrumb");//MEMPERBARUI BREADCRUMB
        breadcrumb.add([this.nama_component, "active"]);

        let table = this.container.find(".angkatan-table").find("tbody");
        table.empty();
        this.angkatanList.forEach(function (e) {
            table.append(`
            <tr>
            <td>${e.id_angkatan}</td>
            <td>${e.dari}</td>
            <td>${e.sampai}</td>
            <td></td>
            <td>${Helper.aksi(
                e.id_angkatan,
                "edit-angkatan",
                "hapus-angkatan"
            )}</td>
            </tr>
            `);
        });
        table.closest("table").DataTable();
        this.container.show();
    }

    globalEventListener() {//MENDETEKSI EVENT YANG SEDANG BERJALAN DIDALAM CONTAINER
        const ctx = this;
        ctx.container.find(".btn-tambah-angkatan").click(function () {//KETIKA TOMBOL ANGKATAN DIKLIK
            pageSetup.getComponent("AngkatanModal").modal.show();//AKAN MEMANGGIL KOMPONENT MODAL DAN MENGAKTIFKAN MODALNYA
        });
    }
}
