//TAKSBOARD

//FUNGSI
//1. MENAMPILKAN JOBDESK SISWA

//RELASI FILE
//VIEW: taskboard.blade.php;
//TERSIMPAN DIHALAMAN = pages/taskboard

import TugasCard from "./Card/TugasCard.js";
import Tugas from "../Model/Tugas.js";
import pageSetup from "./PageSetup.js";
import TaskboardCard from "./Card/TaskboardCard.js";
import Helper from "../Helper/Helper.js";

export default class TaskBoard {
    constructor(container) {
        this.container = container; //ELEMEN PENAMPUNG (CONTAINER) BISA BERUPA CLASS(.) ATAU ID(#)
        this.listBoard = []; //LIST BOARD (PER STATUS)
        this.nama_component = "TaskBoard";
        this.id_siswa = null;
    }

    load(id_siswa = null) {
        //TAMPILKAN BERDASARKAN ID SISWA
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
                    contBelumDikerjakan.append(TaskboardCard.render(element));
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
                    contDalamPengerjaan.append(TaskboardCard.render(element));
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
                    contRevisi.append(TaskboardCard.render(element));
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
                    contSelesai.append(TaskboardCard.render(element));
                });
            }
        );
    }

    globalEventListener() {
        //MENDETEKSI EVENT YANG SEDANG BERJLAN DI CONTAINER
        let ctx = this;

        this.container.delegate(".tugas-card", "click", function () {
            pageSetup.getComponent("TugasDetailView").load($(this).data("id"));
        });

        this.container.find("#taskStatus").change(function () {
            var contBelumDikerjakan = ctx.container.find(
                "#container-belum-dikerjakan"
            );

            var contDalamPengerjaan = ctx.container.find(
                "#container-dalam-pengerjaan"
            );

            var contSelesai = ctx.container.find("#container-selesai");

            var contRevisi = ctx.container.find("#container-revisi");

            ctx.container.children(".col-md").each(function () {
                $(this).hide();
            });

            let key = $(this).val();
            switch (key) {
                case "semua":
                    ctx.container.children(".col-md").each(function () {
                        $(this).show();
                    });
                    break;
                case "todo":
                    console.log(contBelumDikerjakan);
                    contBelumDikerjakan.closest(".col-md").show();
                    break;
                case "onprogress":
                    console.log(contDalamPengerjaan);
                    contDalamPengerjaan.closest(".col-md").show();
                    break;
                case "done":
                    console.log(contDalamPengerjaan);
                    contSelesai.closest(".col-md").show();
                    break;
                case "revision":
                    console.log(contDalamPengerjaan);
                    contRevisi.closest(".col-md").show();
                    break;
                default:
                    break;
            }
        });
    }
}
