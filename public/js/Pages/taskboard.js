import Taskboard from "../Component/TaskBoard.js";
import pageSetup from "../Component/PageSetup.js";
import Tugas from "../Model/Tugas.js";
import TugasDetailView from "../Component/TugasDetailView.js";
import Helper from "../Helper/Helper.js";
import VersiModal from "../Component/VersiModal.js";
import ContextMenu from "../Component/ContextMenu.js";

$(document).ready(function () {
    const taskboard = new Taskboard($("#taskboard"));
    const tugasDetailView = new TugasDetailView($("#tugas-detail-view"));
    const versiModal = new VersiModal($("#versi-modal"));
    const contextMenuStatus = new ContextMenu();
    contextMenuStatus.nama_component = "ContextMenuStatus";

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

    //taskboard.load(40);
    taskboard.load(Helper.getCurrentAuthSiswa().id);
    pageSetup.add(taskboard);
    pageSetup.add(tugasDetailView);
    pageSetup.add(versiModal);
    pageSetup.add(contextMenuStatus);
    pageSetup.init();
});
