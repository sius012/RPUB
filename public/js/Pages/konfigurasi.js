import AngkatanModal from "../Component/AngkatanModal.js";
import KonfigurasiAngkatanView from "../Component/KonfigurasiAngkatanView.js";
import KonfigurasiJurusanView from "../Component/KonfigurasiJurusanView.js";
import KonfigurasiKategoriJenisView from "../Component/KonfigurasiKategoriJenisView.js";
import KonfigurasiPenggunaView from "../Component/KonfigurasiPenggunaView.js";
import KonfigurasiView from "../Component/KonfigurasiView.js";
import pageSetup from "../Component/PageSetup.js";

$(document).ready(function () {
    var konfigurasiPage = new KonfigurasiView($("#konfigurasi-page"));
    var kav = new KonfigurasiAngkatanView($("#konfigurasi_angkatan_view"));
    var kjv = new KonfigurasiJurusanView($("#konfigurasi_jurusan_view"));
    var kpv = new KonfigurasiPenggunaView($("#konfigurasi_pengguna_view"));
    var kkjv = new KonfigurasiKategoriJenisView(
        $("#konfigurasi-kategori-jenis-view")
    );

    //Modal
    var angModal = new AngkatanModal($("#angkatan-modal"));

    pageSetup.add(konfigurasiPage);
    pageSetup.add(kav);
    pageSetup.add(kjv);
    pageSetup.add(kpv);
    pageSetup.add(kkjv);

    //Add Modal
    pageSetup.add(angModal);

    pageSetup.init();
});
