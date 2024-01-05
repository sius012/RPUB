import Taskboard from "../Component/TaskBoard.js";
import pageSetup from "../Component/PageSetup.js";
import Tugas from "../Model/Tugas.js";
import TugasDetailView from "../Component/TugasDetailView.js";
import Helper from "../Helper/Helper.js";
import VersiModal from "../Component/VersiModal.js";
import ContextMenu from "../Component/ContextMenu.js";
import Versi from "../Model/Versi.js";

$(document).ready(function () {
    const taskboard = new Taskboard($("#taskboard"));
    const tugasDetailView = new TugasDetailView($("#tugas-detail-view"));
    const versiModal = new VersiModal($("#versi-modal"));
    const contextMenuStatus = new ContextMenu();
    const contextMenuStatusLaporan = new ContextMenu();
    contextMenuStatus.nama_component = "ContextMenuStatus";
    contextMenuStatusLaporan.nama_component = "ContextMenuStatusLaporan";

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
            ],
            [
                "Ditinjau",
                function (id) {
                    let tugas = pageSetup.getTugasCache(id);
                    tugas.changeStatus("Ditinjau");
                },
            ],
        ],
        function (ctx) {
            taskboard.load();
        }
    );

    contextMenuStatusLaporan.init(
        [
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

    //taskboard.load(40);
    taskboard.load(Helper.getCurrentAuthSiswa().id);
    pageSetup.add(taskboard);
    pageSetup.add(tugasDetailView);
    pageSetup.add(versiModal);
    pageSetup.add(contextMenuStatus);
    pageSetup.add(contextMenuStatusLaporan);
    pageSetup.init();
});
