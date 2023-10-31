import pageSetup from "./PageSetup.js";

export default class KonfigurasiView {
    constructor(container) {
        this.container = container;

        this.nama_component = "KonfigurasiView";
    }

    globalEventListener() {
        const ctx = this;
        this.container.find(".konfigurasi-pengguna").click(function () {
            alert("Halaman Konfigurasi Pengguna");
        });

        this.container.find(".konfigurasi-angkatan").click(function () {
            alert("Halaman Konfigurasi Angkatan");
        });

        this.container.find(".konfigurasi-jurusan").click(function () {
            alert("Halaman Konfigurasi Jurusan");
        });

        this.container.find(".konfigurasi-kategori-jenis").click(function () {
            alert("Halaman Konfigurasi Pengguna");
        });
    }
}
