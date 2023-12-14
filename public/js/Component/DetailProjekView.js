import pageSetup from "./PageSetup.js";
import Projek from "../Model/Projek.js";
import Tugas from "../Model/Tugas.js";
import Penugasan from "../Model/Penugasan.js";
import Helper from "../Helper/Helper.js";
import SiswaCard from "./Card/SiswaCard.js";
import User from "../Model/User.js";
import PenilaianProjek from "../Model/PenilaianProjek.js";
export default class DetailProjekView {
    constructor(container) {
        this.container = container;
        this.projek;
        this.tugasList;

        this.page_setup;
        this.nama_component = "DetailProjekView";
    }

    load(id) {
        let breadcrumb = pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([this.nama_component, "active"]);

        this.page_setup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });

        this.container.show();

        this.loadData(id);
        this.loadInfoProjek();
        this.loadPartisipan();
        this.loadTugas();
        this.loadTimeliner();
    }

    loadData(id) {
        this.projek = Projek.find(id);
        this.tugasList = Tugas.byProjek(id);
    }

    loadInfoProjek() {
        var infoprojek = this.container.find("#informasi-projek");
        console.log(this.projek);
        infoprojek.find(".nama-projek").val(this.projek.nama);
        infoprojek.find(".tanggal-awal").val(this.projek.tanggal_awal);
        infoprojek.find(".tanggal-akhir").val(this.projek.tanggal_akhir);

        infoprojek.find(".jenis-projek").val(this.projek.jenis_projek);
        infoprojek.find(".klien").val(this.projek.klien);
        infoprojek.find(".deskripsi").val(this.projek.deskripsi);
        infoprojek.find(".status").val(this.projek.status);

        infoprojek
            .find(".penanggung_jawab")
            .val(this.projek.penanggung_jawab.name);
    }
    loadTugas() {
        var ctx = this;
        //simpan posisi terakhir
        var previousScroll = $(window).scrollTop();
        var tugasView = this.container.find("#tugas").find("tbody");

        tugasView.empty();

        this.tugasList = Tugas.byProjek(this.projek.id);
        this.tugasList.forEach((element, i) => {
            tugasView.append(ctx.#rekursifTugas(element, 1 + i));
        });

        tugasView.children("tr").each(function (i) {
            let id = $(this).data("id");
            $(this)
                .find(".no")
                .text(i + 1);
            ctx.loadPenugasan(id);
        });

        //mengisi id_projek
        var tugasModal = this.page_setup.getComponent("TugasModal");
        tugasModal.init(this.projek);

        //this.container.find("#tugas").find("table").Timeliner();
    }

    loadTimeliner() {
        let data = Tugas.byProjek(this.projek.id, { rekursif: false });

        let timeliner = new Timechart(this.container.find("#canvas")[0], data);
        timeliner.config = {
            title: "nama",
            start_date: "tanggal_awal",
            end_date: "tanggal_akhir",
        };
        timeliner.data = data;
        timeliner.render();
    }

    loadPartisipan() {
        let partisipan = Projek.find(this.projek.id, { partisipan: true });
        this.container.find("#partisipan").html(
            SiswaCard.autoList(partisipan.partisipan, {
                redirect: true,
                penilaianProjek: true,
            })
        );
    }

    #rekursifTugas(tugas, index) {
        var barStr = "<div class='progress position-relative'>";
        console.log(tugas);
        for (var i in tugas.statusArr) {
            var color = Helper.status(i, true);

            barStr += `<div class="progress-bar ${color}" style="width:${
                (tugas.statusArr[i] / tugas.tugasCount) * 100
            }%"></div>`;
        }
        barStr += tugas.statusArr + " </div>";

        var tugasStr = `
     <tr data-id='${tugas.id_tugas}'>
        <td class="no">${index}</td>
        <td style="padding-left: ${tugas.indent_level * 20}px">${tugas.nama}
        <img src='' style='width: 15px'>
        </td>
        <td class='status'>${
            tugas.tipe == "grup" ? barStr : Helper.status(tugas.status)
        }</td>
        <td>${tugas.keterangan}</td>
        <td>${tugas.tanggal_awal}</td>
        <td>${tugas.tanggal_akhir}</td>
        <td class='partisipan'>
        <div>

        </div>
        </td>
     </tr>
     `;

        if (tugas.children.length > 0) {
            tugas.children.forEach((element) => {
                tugasStr += this.#rekursifTugas(element, index);
            });
        }

        return tugasStr;
    }

    loadPenugasan(id) {
        let ctx = this;

        let container = ctx.container
            .find("tr[data-id=" + id + "]")
            .find(".partisipan");

        console.log(id);

        Penugasan.byTugas(id, function (data) {
            let cont = ctx.container
                .find("tr[data-id=" + id + "]")
                .find(".partisipan");
            cont.empty();
            data.forEach(function (e) {
                cont.append(
                    '<img style="width: 20px;height: 20px; object-fit: cover; border-radius: 50%" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg">' +
                        ","
                );
            });
        });
    }

    globalEventListener() {
        var ctx = this;
        this.container.delegate(".pp-item", "click", function (e) {
            e.preventDefault();
            let id_projek = ctx.projek.id;
            let id_siswa = $(this).closest(".profile-siswa").attr("data-id");
            let penilaianProjekModal = pageSetup.getComponent(
                "PenilaianProjekModal"
            );
            penilaianProjekModal.init(id_projek, id_siswa);
            penilaianProjekModal.modal.show();
        });

        this.container.find("#tugas").delegate("td", "click", function (e) {
            //e.preventDefault();
            e.stopPropagation();

            var ctxmenu = ctx.page_setup.getComponent("ContextMenuTugas");
            ctxmenu.trigger($(this), $(this).closest("tr").attr("data-id"));
        });

        this.container
            .find("#tugas")
            .delegate(".status", "click", function (e) {
                e.preventDefault();
                var ctxmenu = pageSetup.getComponent("ContextMenuStatus");
                ctxmenu.trigger($(this), $(this).closest("tr").attr("data-id"));
            });

        this.container
            .find("#tugas")
            .delegate(".partisipan", "click", function (e) {
                e.preventDefault();
                let id = $(this).closest("tr").attr("data-id");
                let aSM = ctx.page_setup.getComponent("AssignmentSiswaModal");
                console.log(ctx.page_setup);
                aSM.init(ctx.projek.id_jurusan, pageSetup.getTugasCache(id));
                aSM.modal.show();
            });

        this.container.find(".tambah-tugas").click(function () {
            var tugasModal = ctx.page_setup.getComponent("TugasModal");
            tugasModal.reset();
            tugasModal.modal.show();
        });

        // this.container.delegate("status").click(function () {
        //     pageSetup
        //         .getComponent("ContextMenuStatus")
        //         .trigger(
        //             $(this).closest("td"),
        //             $(this).closest("tr").data("id")
        //         );
        // });
    }
}
