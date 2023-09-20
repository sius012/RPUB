import TugasCard from "./Card/TugasCard.js";
import Tugas from "../Model/Tugas.js";
import pageSetup from "./PageSetup.js";

export default class TaskBoard {
    constructor(container) {
        this.container = container;
        this.listBoard = [];
        this.page_setup;
        this.nama_component = "TasKBoard";
        this.id_siswa = null;
    }

    load(id_siswa = null) {
        if (id_siswa != null) {
            this.id_siswa = id_siswa;
        } else {
            id_siswa = this.id_siswa;
        }
        var contBelumDikerjakan = this.container.find(
            "#container-belum-dikerjakan"
        );

        var contDalamPengerjaan = this.container.find(
            "#container-dalam-pengerjaan"
        );

        var contSelesai = this.container.find("#container-selesai");

        var contRevisi = this.container.find("#container-revisi");

        this.listBoard["Belum Dikerjakan"] = Tugas.getTaskBoard(
            id_siswa,
            "Belum Dimulai",
            function (data) {
                contBelumDikerjakan.html("");
                data.forEach((element) => {
                    let tugasCard = new TugasCard(element);
                    contBelumDikerjakan.append(tugasCard.load());
                });
            }
        );
        this.listBoard["Dalam Pengerjaan"] = Tugas.getTaskBoard(
            id_siswa,
            "Dalam Pengerjaan",
            function (data) {
                contDalamPengerjaan.html("");
                data.forEach((element) => {
                    let tugasCard = new TugasCard(element);
                    contDalamPengerjaan.append(tugasCard.load());
                });
            }
        );
        this.listBoard["Revisi"] = Tugas.getTaskBoard(
            id_siswa,
            "Revisi",
            function (data) {
                contRevisi.html("");
                data.forEach((element) => {
                    let tugasCard = new TugasCard(element);
                    contRevisi.append(tugasCard.load());
                });
            }
        );
        this.listBoard["Selesai"] = Tugas.getTaskBoard(
            id_siswa,
            "Selesai",
            function (data) {
                contSelesai.html("");
                data.forEach((element) => {
                    let tugasCard = new TugasCard(element);
                    contSelesai.append(tugasCard.load());
                });
            }
        );
    }

    globalEventListener() {
        let ctx = this;
        this.container.delegate(".tugas-card", "click", function () {
            pageSetup.getComponent("TugasDetailView").load($(this).data("id"));
        });
        this.container.delegate(".status", "click", function (e) {
            e.stopPropagation();
            console.log(pageSetup.getComponent("ContextMenuStatus"));
            pageSetup
                .getComponent("ContextMenuStatus")
                .trigger(
                    $(this).closest(".task"),
                    $(this).closest(".task").data("id")
                );
        });
    }
}
