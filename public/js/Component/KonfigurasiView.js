//KONFIGURASI VIEW

//FUNGSI
//1. MENAMPILKAN MENU UTAMA KONFIGURAS
//2. SEBAGAI JALAN UNTUK KE MENU KONFIGURASI YANG LEBIH DETAI;

//RELASI FILE
//VIEW: konfigurasi_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/konfigurasi

import Helper from "../Helper/Helper.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiView {
    constructor(container) {
        this.container = container; //ELEMENT PENAMPUNG (CONTAINER) BISA BERUPA CLASS(.) ATAU (ID)

        this.nama_component = "KonfigurasiView";
    }

    load() {//MENAMPILKAN MENU KONFIGURASI
        const ctx = this;
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });
        
        Helper.isSuperAdmin(
            function () {
                let breadcrumb = pageSetup.getComponent("Breadcrumb");
                breadcrumb.add([ctx.nama_component, "active"]);

                ctx.container.show();
            },
            function () {
                Swal.fire("Anda tidak memiliki Akses di menu Konfigurasi");
                // ctx.container.empty();
            }
        );
    }

    globalEventListener() {// MENDETEKSI EVENT YANG SEDANG BERLANGSUNG DIDALAM CONTAINER
        const ctx = this;

        this.container.find(".konfigurasi-pengguna").click(function () {
            pageSetup.getComponent("KonfigurasiPenggunaView").load();
        });

        this.container.find(".konfigurasi-angkatan").click(function () {
            pageSetup.getComponent("KonfigurasiAngkatanView").load();
        });

        this.container.find(".konfigurasi-jurusan").click(function () {
            pageSetup.getComponent("KonfigurasiJurusanView").load();
        });

        this.container.find(".konfigurasi-kategori-jenis").click(function () {
            pageSetup.getComponent("KonfigurasiKategoriJenisView").load();
        });

        this.container.find(".konfigurasi-siswa").click(function () {
            pageSetup.getComponent("KonfigurasiSiswaView").load();
        });
    }
}
