//LAPORAN DETAIL VIEW

//FUNGSI
//1. MENAMPILKAN DETAIL LAPORAN SISWA SECARA PRESENTATIF

//RELASI FILE
//VIEW: laporan_detail_modal.blade.php;
//TERSIMPAN DIHALAMAN = pages/konfigurasi

import Helper from "../Helper/Helper.js";
import Projek from "../Model/Projek.js";
import Siswa from "../Model/Siswa.js";
import Versi from "../Model/Versi.js";
import pageSetup from "./PageSetup.js";

export default class LaporanDetailModal {
    constructor(container) {
        this.container = container; //ELEMEN CONTAINER MODAL BISA BERUPA CLASS(.) ATAU ID(#)
        this.modal = new bootstrap.Modal(container);
        this.laporan;//DATA LAPORAN (SINGLE DATA)
        this.nama_component = "LaporanDetailModal"; //NAMA COMPONENT WAJIB ADA DISETIAP KOMPONENT AGAR BISA DIPANGGIL DICOMPONENT LAIN
    }

    load(id) {// MENAMPILKAN LAPORAN
        let laporan;
        if (pageSetup.getLaporanCache(id) != null) {
            laporan = pageSetup.getLaporanCache(id);
        } else {
            laporan = Versi.find(id);
        }

        let tugas = pageSetup.getTugasCache(laporan.id_tugas);

        let siswa;
        if (pageSetup.getCacheSiswa(laporan.id_siswa) == null) {
            siswa = Siswa.find(laporan.id_siswa);
        } else {
            siswa = pageSetup.getCacheSiswa(laporan.id_siswa);
        }
        let projek;
        if (pageSetup.getCacheProjek(tugas.id_projek) == null) {
            projek = Projek.find(tugas.id_projek);
        } else {
            projek = pageSetup.getCacheProjek(tugas.id_projek);
        }

        this.container.find("#dibuat-oleh").text(siswa.nama);
        this.container
            .find("#tanggal-laporan")
            .text(Helper.formatShortDate(laporan.timestamp.created_at));
        this.container.find("#tugas-laporan").text(tugas.nama);
        this.container.find("#projek-laporan").text(projek.nama);
        this.container.find("#judul-laporan").text(laporan.nama);
        this.container.find("#keterangan").text(laporan.keterangan);
        this.container.find("#status-laporan").text(laporan.status);
        this.container
            .find(".img-preview")
            .attr(
                "src",
                laporan.lampiran != null
                    ? "/versi/" + laporan.lampiran
                    : "/img/logo/logo1.svg"
            );
        this.modal.show();
    }
}
