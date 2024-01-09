import Helper from "../Helper/Helper.js";
import Projek from "../Model/Projek.js";
import Siswa from "../Model/Siswa.js";
import Versi from "../Model/Versi.js";
import pageSetup from "./PageSetup.js";

export default class LaporanDetailModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.laporan;
        this.isLayout = true;
        this.nama_component = "LaporanDetailModal";
    }

    load(id) {
        let laporan = Versi.find(id);
        let tugas = pageSetup.getTugasCache(laporan.id_tugas);
        let siswa = Siswa.find(laporan.id_siswa);
        let projek = Projek.find(tugas.id_projek);
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
