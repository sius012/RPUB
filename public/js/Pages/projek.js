import pageSetup from "../Component/PageSetup.js";

import Breadcrumb from "../Component/Breadcrumb.js";
import JurusanListView from "../Component/JurusanListView.js";
import ProjekListView from "../Component/ProjekListView.js";
import ProjekModal from "../Component/ProjekModal.js";
import DetailProjekView from "../Component/DetailProjekView.js";
import TugasModal from "../Component/Tugasmodal.js";
import ContextMenu from "../Component/ContextMenu.js";
import TugasDetailView from "../Component/TugasDetailView.js";
import AssignmentSiswaModal from "../Component/AssignmentSiswaModal.js";
import PenilaianProjekModal from "../Component/PenilaianProjekModal.js";
import Helper from "../Helper/Helper.js";
import Versi from "../Model/Versi.js";
import LaporanDetailModal from "../Component/LaporanDetailModal.js";
import LaporanListModal from "../Component/LaporanListModal.js";
import Tugas from "../Model/Tugas.js";
import VersiModal from "../Component/VersiModal.js";
import ImportProjekModal from "../Component/ImportProjekModal.js";

$(document).ready(function () {
    var breadcrumb = new Breadcrumb($("#breadcrumb"));

    //Komponen Utama
    var projekListView = new ProjekListView($("#projek-list-view"));
    var projekModal = new ProjekModal($("#projek-modal"));
    var detailProjekView = new DetailProjekView($("#detail-projek-view"));
    var tugasModal = new TugasModal($("#tugas-modal"));
    var tugasDetailView = new TugasDetailView($("#tugas-detail-view"));
    var assignmentSiswaModal = new AssignmentSiswaModal(
        $("#assignment-siswa-modal")
    );
    var penilaianProjekModal = new PenilaianProjekModal(
        $("#penilaian-projek-modal")
    );
    var laporanDetailModal = new LaporanDetailModal($("#laporan-detail-modal"));
    var laporanListModal = new LaporanListModal($("#laporan-list-modal"));
    var versiModal = new VersiModal($("#versi-modal"));
    var importProjekModal = new ImportProjekModal($("#import-projek-modal"));

    //ContextMenu
    var contextMenuTugas = new ContextMenu();
    var contextMenuStatus = new ContextMenu();
    var contextMenuPartisipan = new ContextMenu();
    var contextMenuStatusLaporan = new ContextMenu();

    contextMenuTugas.nama_component = "ContextMenuTugas";
    contextMenuStatus.nama_component = "ContextMenuStatus";
    contextMenuPartisipan.nama_component = "ContextMenuPartisipan";
    contextMenuStatusLaporan.nama_component = "ContextMenuStatusLaporan";
    contextMenuTugas.init([
        [
            "Buka",
            function (id) {
                tugasDetailView.load(id);
            },
            function (id) {
                let tugas = pageSetup.getTugasCache(id);
                if (tugas.tipe == "indikator") {
                    return false;
                }
            },
        ],
        [
            "Hapus",
            function (id) {
                console.log(pageSetup.getTugasCache(id));
                Swal.fire({
                    title: "Apakah anda yakin ingin menghapus?",
                    showCancelButton: true,
                    confirmButtonText: "Hapus",
                    cancelButtonText: "Batalkan",
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        pageSetup.getTugasCache(id).hapus(function () {
                            detailProjekView.loadTugas();
                        });
                    } else if (result.isDenied) {
                        Swal.fire("Data batal dihapus", "", "info");
                    }
                });
            },
        ],
        [
            "Indikator",
            function (id) {
                pageSetup.getComponent("TugasModal").attach(id);
            },
            function (id) {
                let tugas = pageSetup.getTugasCache(id);
                if (tugas.tipe == "indikator") {
                    return false;
                }
            },
        ],
        [
            "Duplikat",
            function (id) {
                console.log(pageSetup.getTugasCache(id));
                pageSetup.getTugasCache(id).duplikat(function (data) {
                    detailProjekView.loadTugas();
                });
            },
        ],
        [
            "Edit",
            function (id) {
                pageSetup.getComponent("TugasModal").loadTugas(id);
            },
        ],
    ]);

    contextMenuStatus.init(
        [
            [
                "Revisi",
                function (id) {
                    let tugas = pageSetup.getTugasCache(id);
                    tugas.changeStatus("Revisi");
                },
            ],
            [
                "Selesai",
                function (id) {
                    let tugas = pageSetup.getTugasCache(id);
                    tugas.changeStatus("Selesai");
                },
            ],
            [
                "Belum Dikerjakan",
                function (id) {
                    let tugas = pageSetup.getTugasCache(id);
                    tugas.changeStatus("Belum Dimulai");
                },
            ],
            [
                "Dalam Pengerjaan",
                function (id) {
                    let tugas = pageSetup.getTugasCache(id);
                    tugas.changeStatus("Dalam Pengerjaan");
                },
            ],
            [
                "Siap Dikerjakan",
                function (id) {
                    let tugas = pageSetup.getTugasCache(id);
                    tugas.changeStatus("Siap Dikerjakan");
                },

                "Ditinjau",
                function (id) {
                    let tugas = pageSetup.getTugasCache(id);
                    tugas.changeStatus("Siap Dikerjakan");
                },
            ],
        ],
        function (ctx) {
            detailProjekView.loadTugas();
        }
    );
    contextMenuPartisipan.init([
        [
            "Beri Nilai",
            function (id) {
                penilaianProjekModal.init(detailProjekView.projek.id, id);
                penilaianProjekModal.modal.show();
            },
        ],
    ]);

    contextMenuStatusLaporan.init(
        [
            [
                "Selesai",
                function (id) {
                    let versi = Versi.find(id);
                    versi.changeStatus("Selesai", function () {
                        pageSetup
                            .getComponent("TugasDetailView")
                            .load(versi.id_tugas);
                    });
                },
            ],
            [
                "Belum Dimulai",
                function (id) {
                    let versi = Versi.find(id);
                    versi.changeStatus("Belum Dimulai", function () {
                        pageSetup
                            .getComponent("TugasDetailView")
                            .load(versi.id_tugas);
                    });
                },
            ],
            [
                "Dalam Pengerjaan",
                function (id) {
                    let versi = Versi.find(id);
                    versi.changeStatus("Dalam Pengerjaan", function () {
                        pageSetup
                            .getComponent("TugasDetailView")
                            .load(versi.id_tugas);
                    });
                },
            ],
            [
                "Siap Dikerjakan",
                function (id) {
                    let versi = Versi.find(id);
                    versi.changeStatus("Siap Dikerjakan", function () {
                        pageSetup
                            .getComponent("TugasDetailView")
                            .load(versi.id_tugas);
                    });
                },
            ],
        ],
        function () {
            taskboard.load();
        }
    );
    pageSetup.add(projekListView);
    pageSetup.add(projekModal);
    pageSetup.add(detailProjekView);

    pageSetup.add(tugasDetailView);
    pageSetup.add(contextMenuTugas);
    pageSetup.add(contextMenuStatus);
    pageSetup.add(contextMenuPartisipan);
    pageSetup.add(assignmentSiswaModal);
    pageSetup.add(breadcrumb);
    pageSetup.add(penilaianProjekModal);
    pageSetup.add(tugasModal);
    pageSetup.add(laporanDetailModal);
    pageSetup.add(laporanListModal);
    pageSetup.add(contextMenuStatusLaporan);
    pageSetup.add(versiModal);
    pageSetup.add(importProjekModal);

    //Check jika ada projek yang redirect
    if (Helper.exurl().length == 3) {
        detailProjekView.load(Helper.exurl()[2]);
    } else if (Helper.exurl().length == 4) {
        let tugas = Tugas.find(Helper.exurl()[3]);
        detailProjekView.load(tugas.id_projek);
        tugasModal.loadTugas(tugas.id_tugas);
    } else {
        projekListView.load();
    }

    pageSetup.init();
});
