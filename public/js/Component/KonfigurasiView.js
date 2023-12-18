import pageSetup from "./PageSetup.js";

export default class KonfigurasiView {
    constructor(container) {
        this.container = container;

        this.nama_component = "KonfigurasiView";
    }

    globalEventListener() {
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
