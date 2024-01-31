//JURUSAN LIST VIEW

//FUNGSI
//1. MENAMBAH, MENGEDIT DAN MENGHAPUS DATA JURUSAN

//RELASI FILE
//VIEW: projek_list_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/projek

import pageSetup from "./PageSetup.js";
import Projek from "../Model/Projek.js";
import ProjekCard from "./Card/ProjekCard.js";
import Jurusan from "../Model/Jurusan.js";
import Helper from "../Helper/Helper.js";

export default class ProjekListView {
    constructor(container) {
        this.container = container; // ELEMEN PENAMPUNG (CONTAINER) BISA BERUPA CLASS(.) ATAU (ID)
        this.projekList = []; //DATA PROJEK (SESUAI UB JURUSAN) (MULTIPLE DATA)
        this.nama_component = "ProjekListView";
        this.mode = "card";
        this.id_jurusan;
        this.container.hide();
    }

    load(id_jurusan = null) {
        //MENAMPILKAN DATA PROJEK
        const ctx = this;

        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });

        let breadcrumb = pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([this.nama_component, "active"]);
        ctx.container.find(".filter-jurusan").html("");
        //loadfilter;
        let jurusan = Jurusan.all({ ubjurusan: true }, function (data) {
            data.forEach(function (e, i) {
                if (i == 0) {
                    ctx.container
                        .find(".filter-jurusan")
                        .append("<option value='semua'>Semua</option>");
                }
                ctx.container
                    .find(".filter-jurusan")
                    .append(`<option value='${e.id}'>${e.jurusan}</option>`);
            });
        });

        this.container.show();
        if (id_jurusan != null) {
            //cek apakah ada parameter jurusan, jika ada perbarui datanya, jika tidak gunakan yag sudah ada
            this.projekList = Projek.byJurusan(id_jurusan);
            this.id_jurusan = id_jurusan;
        } else {
            switch (ctx.mode) {
                case "card":
                    ctx.container.find(".row-view")
                        .html(`<div class='row justify-content-center' style='width: 100%'><div class="spinner-grow text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                      <div class="spinner-grow text-secondary" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                      <div class="spinner-grow text-success" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                      <div class="spinner-grow text-danger" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                      <div class="spinner-grow text-warning" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                      <div class="spinner-grow text-info" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                      <div class="spinner-grow text-light" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                      <div class="spinner-grow text-dark" role="status">
                        <span class="sr-only">Loading...</span>
                      </div></div>`);
                    this.projekList = Projek.byRole(function (data) {
                        console.log(data);
                        ctx.container.find(".row-view").html("");
                        data.forEach((element) => {
                            var projekCard = new ProjekCard(element);
                            ctx.container
                                .find(".row-view")
                                .append(projekCard.load());
                        });

                        var modal = pageSetup.getComponent("ProjekModal");
                        modal.init();
                    });
                    break;
                case "table":
                    this.projekList = Projek.byRole(function (data) {
                        console.log(data);
                        ctx.container
                            .find(".row-view-table")
                            .find("tbody")
                            .empty();
                        data.forEach((element, i) => {
                            ctx.container.find(".row-view-table").find("tbody")
                                .append(`
                                <tr data-id='${element}'>
                                    <td>${i + 1}</td>
                                    <td>${element.nama}</td>
                                    <td>${element.penanggung_jawab.nama}</td>
                                    <td>${element.jenis_projek}</td>
                                    <td>${element.jurusan
                                        .map(function (e) {
                                            return `<span class='badge bg-primary'>${e.jurusan}</span>`;
                                        })
                                        .join("")}</td>
                                    <td>${Helper.status(element.status)}</td>
                                    <td>${element.tanggal_awal}</td>
                                    <td>${element.tanggal_akhir}</td>
                                    <td><button class='btn btn-info btn-sm projek-card' data-id='${
                                        element.id
                                    }'><i class='fa fa-info'></i></button></td>
                                </tr>`);
                        });

                        var modal = pageSetup.getComponent("ProjekModal");
                        modal.init();
                    });

                    ctx.container
                        .find(".row-view-table")
                        .find("table")
                        .DataTable();
                    break;
                default:
                    break;
            }
        }
    }

    globalEventListener() {
        // MENDETEKSI EVENT YANG SEDANG BERJALAN DI DALAM CONTAINER
        //GlobalEventListener
        var ctx = this;

        this.container.find(".tambah-projek").click(function () {
            var modal = pageSetup.getComponent("ProjekModal");
            modal.modal.show();
        });

        //Updatean
        this.container.delegate(".projek-card", "click", function (e) {
            e.preventDefault();
            var id_projek = $(this).data("id");
            var dPV = pageSetup.getComponent("DetailProjekView");
            dPV.load(id_projek);
        });

        ctx.container.find(".filter-jurusan").change(function () {
            let val = $(this).val();
            if (val != "semua") {
                ctx.container
                    .find(".row-view")
                    .children(".col-projek")
                    .each(function () {
                        let jurusanList = $(this)
                            .find(".projek-card")
                            .data("jurusan")
                            .split(",");
                        $(this).hide();
                        if (jurusanList.includes(val)) {
                            $(this).show();
                        }
                    });
            } else {
                ctx.container
                    .find(".row-view")
                    .children(".col-projek")
                    .each(function () {
                        $(this).show();
                    });
            }
        });

        this.container.find(".btn-table").click(function () {
            ctx.mode = "table";
            ctx.load();
        });

        this.container.find(".btn-import").click(function () {
            let importProjekModal = pageSetup.getComponent("ImportProjekModal");
            importProjekModal.load();
        });

        ctx.container.find("");
    }
}
