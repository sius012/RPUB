import pageSetup from "../Component/PageSetup.js";

import Breadcrumb from "../Component/Breadcrumb.js";
import JurusanListView from "../Component/JurusanListView.js";
import ProjekListView from "../Component/ProjekListView.js";
import ProjekModal from "../Component/ProjekModal.js";
import DetailProjekView from "../Component/DetailProjekView.js";
import TugasModal from "../Component/TugasModal.js";
import ContextMenu from "../Component/ContextMenu.js";
import TugasDetailView from "../Component/TugasDetailView.js";
import AssignmentSiswaModal from "../Component/AssignmentSiswaModal.js";
import PenilaianProjekModal from "../Component/PenilaianProjekModal.js";
import Helper from "../Helper/Helper.js";

import Jurusan from "../Model/Jurusan.js";
import Projek from "../Model/Projek.js";

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

    //ContextMenu
    var contextMenuTugas = new ContextMenu();
    var contextMenuStatus = new ContextMenu();
    var contextMenuPartisipan = new ContextMenu();

    contextMenuTugas.nama_component = "ContextMenuTugas";
    contextMenuStatus.nama_component = "ContextMenuStatus";
    contextMenuPartisipan.nama_component = "ContextMenuPartisipan";
    contextMenuTugas.init([
        [
            "Buka",
            function (id) {
                tugasDetailView.load(id);
            },
            function (id) {
                let tugas = pageSetup.getTugasCache(id);
                if (tugas.tipe == "grup") {
                    return false;
                }
            },
        ],
        [
            "Hapus",
            function (id) {
                console.log(pageSetup.getTugasCache(id));
                pageSetup.getTugasCache(id).hapus(function () {
                    detailProjekView.loadTugas();
                });
            },
        ],
        [
            "Subtugas",
            function (id) {
                pageSetup.getComponent("TugasModal").attach(id);
            },
        ],
        ["Duplikat"],
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

    //Check jika ada projek yang redirect
    if (Helper.exurl().length == 3) {
        detailProjekView.load(Helper.exurl()[2]);
    } else {
        projekListView.load();
    }

    pageSetup.init();
});
