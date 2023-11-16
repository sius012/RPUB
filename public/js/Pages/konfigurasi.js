import AngkatanModal from "../Component/AngkatanModal.js";
import JenisModal from "../Component/JenisModal.js";
import JurusanModal from "../Component/JurusanModal.js";
import KonfigurasiAngkatanView from "../Component/KonfigurasiAngkatanView.js";
import KonfigurasiJurusanView from "../Component/KonfigurasiJurusanView.js";
import KonfigurasiKategoriJenisView from "../Component/KonfigurasiKategoriJenisView.js";
import KonfigurasiPenggunaView from "../Component/KonfigurasiPenggunaView.js";
import KonfigurasiView from "../Component/KonfigurasiView.js";
import pageSetup from "../Component/PageSetup.js";
import PenggunaModal from "../Component/PenggunaModal.js";
import UBJurusanModal from "../Component/UBJurusanModal.js";

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
    var jurModal = new JurusanModal($("#konfigurasi-jurusan-modal"));
    var pgnModal = new PenggunaModal($("#pengguna-modal"));
    var uBJModal = new UBJurusanModal($("#ub-jurusan-modal"));
    var jnsModal = new JenisModal($("#jenis-modal"));

    pageSetup.add(konfigurasiPage);
    pageSetup.add(kav);
    pageSetup.add(kjv);
    pageSetup.add(kpv);
    pageSetup.add(kkjv);

    //Add Modal
    pageSetup.add(angModal);
    pageSetup.add(jurModal);
    pageSetup.add(pgnModal);
    pageSetup.add(uBJModal);
    pageSetup.add(jnsModal);

    pageSetup.init();
});
