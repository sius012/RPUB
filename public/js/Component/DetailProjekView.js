//DETAIL PROJEK VIEW

//FUNGSI

//1. MENAMPILKAN DETAIL PROJEK YANG DIPILIH

//TERLETAK DI MENU PROJEK

//RELASI FILE

//VIEW: detail_projek_view.blade.php;

//TERSIMPAN DIHALAMAN = pages/projek

import pageSetup from "./PageSetup.js";

import Projek from "../Model/Projek.js";

import Tugas from "../Model/Tugas.js";

import Penugasan from "../Model/Penugasan.js";

import Helper from "../Helper/Helper.js";

import SiswaCard from "./Card/SiswaCard.js";

import User from "../Model/User.js";

import PenilaianProjek from "../Model/PenilaianProjek.js";

import Versi from "../Model/Versi.js";

import Jurusan from "../Model/Jurusan.js";

export default class DetailProjekView {
    constructor(container) {
        this.container = container; //ELEMENT DETAIL PROJEK VIEW

        this.projek; //DATA PROJEK (SINGLE DATA)

        this.tugasList; //TUGAS TUGAS YANG ADA DIDALAM PROJEK

        this.nama_component = "DetailProjekView"; //NAMA KOMPONENT (WAJIB ADA DISETIAP COMPONENT)
    }

    load(id) {
        //MEMUAT SEMUA DATA PROJEK BERDASARKAN ID PROJEK

        const ctx = this;

        //curl

        Helper.curl("/pages/projek/" + id);

        //Caching

        Helper.permissionProjek(id, function (result) {
            //MENENGECEK APAKAH AKUN MEMILIKI HAK AKSES

            if (result) {
                //JIKA IYA

                let breadcrumb = pageSetup.getComponent("Breadcrumb");

                breadcrumb.add([ctx.nama_component, "active"]);

                pageSetup.componentList.forEach((element) => {
                    //Menyembunyikan element yang lainnya

                    if (
                        element.isLayout == undefined &&
                        element.modal == undefined
                    ) {
                        element.container.hide();
                    }
                });

                ctx.container.find(".perbarui-informasi").hide();

                ctx.container.show();

                ctx.loadData(id);

                ctx.loadInfoProjek();

                ctx.loadPartisipan();

                ctx.loadTugas();
            } else {
                //JIKA TIDAK

                Swal.fire(
                    "Gagal",

                    "Anda tidak memiliki hak akses untuk projek ini"
                );
            }
        });
    }

    loadData(id) {
        //MEMUAT DATA UTAMA PROJEK (TANPA TUGAS, PARTISIPAN DLL)

        this.projek = Projek.find(id);

        pageSetup.tambahCacheProjek(this.projek);

        this.tugasList = Tugas.byProjek(id);
    }

    loadInfoProjek() {
        //MENAMPILKAN INFORMASI PROJEK

        const ctx = this;

        var infoprojek = this.container.find("#informasi-projek");

        //ubah semua kolom inputan menjadi readonly

        infoprojek.find("input").each(function () {
            $(this).attr("readonly", "readonly");
        });

        //ubah semua kolom inputan menjadi disable

        infoprojek.find("select,input[type=checkbox").each(function () {
            $(this).attr("disabled", "disabled");
        });

        console.log(this.projek);

        this.container.find(".main-title").text(this.projek.nama);

        this.container

            .find(".container-status-main")

            .html(
                `<span class='badge status ${Helper.status(
                    this.projek.status,

                    true
                )}'>${this.projek.status}</span>`
            );

        infoprojek.find(".nama-projek").val(this.projek.nama);

        infoprojek.find(".deskripsi").val(this.projek.deskripsi);

        infoprojek.find(".id-projek").val(this.projek.id);

        infoprojek.find(".tanggal-awal").val(this.projek.tanggal_awal);

        infoprojek.find(".tanggal-akhir").val(this.projek.tanggal_akhir);

        infoprojek.find(".jenis-projek").val(this.projek.jenis_projek);

        infoprojek.find(".klien").val(this.projek.klien);

        infoprojek.find(".deskripsi").val(this.projek.deskripsi);

        infoprojek.find(".status").val(this.projek.status);

        infoprojek.find(".nominal").val(this.projek.nominal);

        infoprojek.find(".lokasi-projek").val(this.projek.lokasi_projek);

        infoprojek

            .find(".penanggung_jawab")

            .val(this.projek.penanggung_jawab.name);

        if (this.projek.jenis_projek == "Projek Eksternal") {
            infoprojek.find("input[name=klien]").closest(".form-group").hide();

            infoprojek

                .find("input[name=nominal]")

                .closest(".form-group")

                .show();
        } else {
            infoprojek.find("input[name=klien]").closest(".form-group").hide();

            infoprojek

                .find("input[name=nominal]")

                .closest(".form-group")

                .hide();
        }

        infoprojek.find(".container-jurusan-row").empty();

        Jurusan.all({ ubjurusan: true }, function (jurusan) {
            jurusan.forEach(function (e) {
                infoprojek.find(".container-jurusan-row").append(
                    `<div class="form-check">

                    <input class="form-check-input" type="checkbox" value="${e.id}" name='id_jurusan' id="flexCheckIndeterminate">

                    <label class="form-check-label" for="flexCheckIndeterminate">

                      ${e.jurusan}

                    </label>

                  </div>`
                );
            });

            infoprojek

                .find(".container-jurusan-row")

                .children(".form-check")

                .each(function (e) {
                    if (
                        ctx.projek.jurusan

                            .map(function (e) {
                                return e.id;
                            })

                            .includes(parseInt($(this).find("input").val()))
                    ) {
                        $(this).find("input").attr("checked", "checked");
                    } else {
                    }

                    $(this).find("input").attr("disabled", "disabled");
                });
        });

        ctx.initPj();
    }

    loadTugas() {
        //MENAMPILKAN DATA TUGAS (KOMPETENSI) YANG ADA PROJEK YANG DIPILIH

        var ctx = this;

        //simpan posisi terakhir

        var previousScroll = $(window).scrollTop();

        var tugasView = this.container.find("#tugas").find("tbody");

        tugasView.empty();

        this.tugasList = Tugas.byProjek(this.projek.id);

        console.log(this.tugasList);

        this.tugasList.forEach((element, i) => {
            tugasView.append(ctx.#rekursifTugas(element, 1 + i));
        });

        tugasView.closest("table").DataTable();

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
        //MENAMPILKAN TIMELINER (BELUM TERPAKAI)

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
        //MENAMPILKAN PARTISIPAN (SISWA) YANG IKUT MENGERJAKAN PROJEK

        let partisipan = Projek.find(this.projek.id, { partisipan: true });

        partisipan.partisipan.forEach(function (event) {
            pageSetup.tambahSiswaLaporan(event);
        });

        this.container.find("#partisipan").html(
            SiswaCard.autoList(partisipan.partisipan, {
                redirect: true,

                penilaianProjek: true,
            })
        );
    }

    loadLaporan() {
        // MEMUAT DATA LAPORAN PROJEK (VERSI) YANG DIKIRIMKAN SISWA (PARTISIPAN)

        const ctx = this;

        if (pageSetup.cache.laporan.length < 1) {
            // Swal.showLoading();

            Versi.byProjek(ctx.projek.id, function (data) {
                ctx.renderLaporan(data);

                //Swal.hideLoading();
            });
        } else {
            ctx.renderLaporan(pageSetup.cache.laporan);
        }
    }

    renderLaporan(data) {
        // MENAMPILKAN DATA LAPORAN PROJEK (VERSI) YANG DIKIRIMKAN SISWA (PARTISIPAN)

        let ctx = this;

        let table = ctx.container.find("#laporan").find("tbody");

        table.empty("");

        data.forEach(function (e, i) {
            pageSetup.tambahCacheLaporan(e);

            table.append(
                `<tr class='laporan-row' data-id='${e.id}'><td>${
                    i + 1
                }</td><td>${e.nama}</td><td>${e.keterangan}</td><td data-id='${
                    e.id
                }'>${Helper.status(e.status, false, {
                    class: "status-laporan",
                })}</td><td>${e.tugas.nama}</td><td>${Helper.formatShortDate(
                    e.timestamp.created_at
                )}</td><td>${e.siswa.nama}</td></tr>`
            );
        });

        table.closest("table").DataTable();
    }

    #rekursifTugas(tugas, index) {
        // MENAMPILKAN DATA TUGAS SECARA REKURSIF

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

        <td style="padding-left: ${
            tugas.indent_level * 10
        }px"><div class='row'><div class='col-1'>

        ${
            tugas.tipe == "tugas"
                ? "<i class='fa fa-tasks mx-2'></i>"
                : "<i class='fa fa-circle-o mx-2'></i>"
        }</div><div class='col'>${tugas.nama}</div></div><span>

       </span>

        </td>

        <td class='status'>${
            tugas.tipe == "indikator" ? "" : Helper.status(tugas.status)
        }</td>

        <td ><span style='overflow: hidden;

        text-overflow: ellipsis;

        white-space: nowrap;'>${Helper.shortText(
            tugas.keterangan
        )}  </span></td>

        <td>${tugas.tanggal_awal != null ? tugas.tanggal_awal : ""}</td>

        <td>${tugas.tanggal_akhir != null ? tugas.tanggal_akhir : ""}</td>

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
        // MENAMPILKAN FOTO SISWA YANG MENGERJAKAN TUGAS (KOMPETENSI) DI TAB TUGAS

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

            let tugas = pageSetup.getTugasCache(id);

            if (tugas.tipe == "tugas") {
                if (data.length > 0) {
                    data.forEach(function (e, i) {
                        if (i < 5) {
                            console.log("datanya");

                            console.log(e);

                            cont.append(
                                `<img style="width: 20px;height: 20px; object-fit: cover; border-radius: 50%" src="${e.siswa.getFotoProfil()}">` +
                                    ","
                            );
                        }
                    });

                    cont.append(`<span>${data.length}</span>`);
                } else {
                    cont.html(
                        "<button class='btn btn-sm btn-primary'>Tambah Partisipan</button>"
                    );
                }
            }
        });
    }

    validasiInformasi() {
        // MENGECEK APAKAH DATA INFORMASI YANG DIEDIT SUDAH VALID, SEBELUM DIKIRIM KEDALAM SERVER UNTUK DIPERBARUI

        let ctx = this;

        let jurusanCount = 0;

        let inputFieldCheck = true;

        let selectFieldCheck = true;

        ctx.container

            .find(".container-jurusan-row")

            .children(".form-check")

            .each(function () {
                if ($(this).find("input").is(":checked")) {
                    jurusanCount += 1;
                }
            });

        let projekEksternalField = ["nominal", "klien"];

        ctx.container

            .find("#informasi-projek")

            .find("input")

            .each(function () {
                if ($(this).attr("type") != "checkbox") {
                    console.log($(this).attr("name"));

                    if ($(this).val().length < 1) {
                        if (
                            ctx.projek.jenis_projek != "Projek Eksternal" &&
                            projekEksternalField.includes($(this).attr("name"))
                        ) {
                        } else {
                            inputFieldCheck = false;
                        }
                    }
                }
            });

        //Mengecek inputan <select> apakah ada yang kosong

        this.container

            .find("#informasi-projek")

            .find("select")

            .each(function () {
                if (
                    $(this).val() == null &&
                    $(this).attr("name") != "jenis_projek"
                ) {
                    selectFieldCheck = false;
                }
            });

        if (jurusanCount > 0 && inputFieldCheck && selectFieldCheck) {
            return true;
        } else {
            return false;
        }
    }

    globalEventListener() {
        // MENDETEKSI EVENT YANG SEDANG BERLANGSUNG (TOMBOL KIRIM,KEYUP INPUTAN DLL)

        var ctx = this;

        this.container.delegate(".pp-item", "click", function (e) {
            e.preventDefault();

            let penilaianProjekModal = pageSetup.getComponent(
                "PenilaianProjekModal"
            );

            if ($(this).closest(".profile-siswa").attr("id-pp") != undefined) {
                let id_pp = $(this).closest(".profile-siswa").attr("id-pp");

                penilaianProjekModal.load(id_pp);
            } else {
                let id_projek = ctx.projek.id;

                let id_siswa = $(this)
                    .closest(".profile-siswa")

                    .attr("data-id");

                penilaianProjekModal.init(id_projek, id_siswa);

                penilaianProjekModal.modal.show();
            }
        });

        this.container.find("#tugas").delegate("td", "click", function (e) {
            //e.preventDefault();

            e.stopPropagation();

            var ctxmenu = pageSetup.getComponent("ContextMenuTugas");

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

            .find("#laporan")

            .delegate(".status", "click", function (e) {
                e.preventDefault();
            });

        this.container

            .find("#tugas")

            .delegate(".partisipan", "click", function (e) {
                e.preventDefault();

                let id = $(this).closest("tr").attr("data-id");

                let aSM = pageSetup.getComponent("AssignmentSiswaModal");

                console.log(pageSetup);

                aSM.init(
                    ctx.projek.jurusan.map(function (e) {
                        return e.id;
                    }),

                    pageSetup.getTugasCache(id)
                );

                aSM.loadContext();

                aSM.modal.show();
            });

        this.container.find(".tambah-tugas").click(function () {
            var tugasModal = pageSetup.getComponent("TugasModal");

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

        ctx.container.find("button").click(function () {
            if ($(this).attr("data-bs-target") == "#laporan") {
                ctx.loadLaporan();
            }
        });

        ctx.container

            .find("#informasi-projek")

            .find(".btn-edit")

            .click(function () {
                let infoprojek = ctx.container.find("#informasi-projek");

                infoprojek

                    .find(".nama-projek")

                    .attr("readonly", function (index, attr) {
                        return attr == "readonly" ? null : "readonly";
                    });

                infoprojek

                    .find(".tanggal-awal")

                    .attr("readonly", function (index, attr) {
                        return attr == "readonly" ? null : "readonly";
                    });

                infoprojek

                    .find(".tanggal-akhir")

                    .attr("readonly", function (index, attr) {
                        return attr == "readonly" ? null : "readonly";
                    });

                infoprojek

                    .find(".klien")

                    .attr("readonly", function (index, attr) {
                        return attr == "readonly" ? null : "readonly";
                    });

                infoprojek

                    .find(".deskripsi")

                    .attr("readonly", function (index, attr) {
                        return attr == "readonly" ? null : "readonly";
                    });

                infoprojek

                    .find(".status")

                    .attr("disabled", function (index, attr) {
                        return attr == "disabled" ? null : "disabled";
                    });

                infoprojek

                    .find(".penanggung_jawab")

                    .attr("disabled", function (index, attr) {
                        return attr == "disabled" ? null : "disabled";
                    });

                infoprojek

                    .find(".nominal")

                    .attr("readonly", function (index, attr) {
                        return attr == "readonly" ? null : "readonly";
                    });

                infoprojek

                    .find(".lokasi-projek")

                    .attr("readonly", function (index, attr) {
                        return attr == "readonly" ? null : "readonly";
                    });

                if (ctx.container.find(".perbarui-informasi").is(":hidden")) {
                    ctx.container.find(".perbarui-informasi").show();
                } else {
                    ctx.container.find(".perbarui-informasi").hide();
                }

                infoprojek.find("input[type=checkbox]").each(function () {
                    $(this).attr("disabled", function (index, attr) {
                        return attr == "disabled" ? null : "disabled";
                    });
                });
            });

        ctx.container.delegate("input[name=id_jurusan]", "click", function (e) {
            let jurusanList = [];

            let container = ctx.getElement("id_penanggung_jawab", "select");

            container.empty();

            ctx.getElement("id_jurusan").each(function (e) {
                if ($(this).is(":checked")) {
                    jurusanList.push($(this).val());
                }
            });

            User.getListUBJurusan(jurusanList, function (data) {
                console.log(jurusanList);

                let userlist = data

                    .map(function (e) {
                        return `<option value='${e.id}'>${e.nama}</option>`;
                    })

                    .join("");

                container.html(userlist);

                ctx.initPj();
            });

            $(this).parent().find(".pj-list");
        });

        ctx.container

            .find("#informasi-projek")

            .find("form")

            .submit(function (e) {
                e.preventDefault();

                if (ctx.validasiInformasi()) {
                    // Create FormData object

                    var formData = new FormData(this);

                    // Convert FormData to an array

                    var dataArray = Array.from(formData.entries());

                    // Display the array in the console (you can remove this line in a real application)

                    let params = {};

                    dataArray.forEach(function (value, key) {
                        if (params.hasOwnProperty(value[0])) {
                            // If it does, convert the value to an array

                            if (!Array.isArray(params[value[0]])) {
                                params[value[0]] = [params[value[0]]]; // Convert to array
                            }

                            params[value[0]].push(value[1]); // Add the new value to the array
                        } else {
                            params[value[0]] = value[1]; // Add new key-value pair
                            if (value[0] == "id_jurusan") {
                                params[value[0]] = [value[1]];
                            }
                        }
                    });

                    console.log("the params");

                    let projek = Projek.parse(params);

                    console.log(dataArray);

                    projek.simpan({
                        cb: function (data) {
                            console.log(data);

                            Swal.fire({
                                icon: "success",

                                title: "Data berhasil diperbarui",

                                target: ctx.container[0],
                            });

                            ctx.load(ctx.projek.id);
                        },
                    });
                }
            });

        ctx.container

            .find("#konfigurasi-projek")

            .find(".btn-arsip")

            .click(function () {
                Swal.fire({
                    title: "Apakah yakin ingin menghapus projek?",

                    showDenyButton: true,

                    showCancelButton: true,

                    confirmButtonText: "Save",

                    denyButtonText: `Don't save`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */

                    if (result.isConfirmed) {
                        Swal.fire("Projek berhasil diarsipkan", "", "success");

                        ctx.projek.arsipan(function () {
                            window.location = "/pages/projek";
                        });
                    } else if (result.isDenied) {
                        Swal.fire("Changes are not saved", "", "info");
                    }
                });
            });

        ctx.container

            .find("#konfigurasi-projek")

            .find(".btn-export")

            .click(function () {
                window.location = "/projek/" + ctx.projek.id + "?download=1";
            });

        this.container.delegate(".status-laporan", "click", function () {
            let container = $(this).closest("td");

            console.log(pageSetup.getComponent("ContextMenuStatusLaporan"));

            pageSetup

                .getComponent("ContextMenuStatusLaporan")

                .trigger(container, container.data("id"));
        });

        this.container.delegate(".laporan-row", "click", function () {
            let laporanDetailModal =
                pageSetup.getComponent("LaporanDetailModal");

            laporanDetailModal.load($(this).data("id"));
        });
    }

    initPj() {
        // INISIALISASI PENANGGUNG JAWAB PROJEK

        const ctx = this;

        let jurusanList = [];

        let container = ctx.getElement("id_penanggung_jawab", "select");

        container.empty();

        ctx.getElement("id_jurusan").each(function (e) {
            if ($(this).is(":checked")) {
                jurusanList.push($(this).val());
            }
        });

        User.getListUBJurusan(jurusanList, function (data) {
            console.log(jurusanList);

            let userlist = data

                .map(function (e) {
                    return `<option value='${e.id}'>${e.nama}</option>`;
                })

                .join("");

            container.html(userlist);

            container.children("option").each(function (e) {
                if (ctx.projek.penanggung_jawab.id == $(this).attr("value")) {
                    $(this).attr("selected", "selected");
                }
            });
        });

        $(this).parent().find(".pj-list");
    }

    getElement(name, type = "input") {
        //MENDAPATKAN NILAI INPUTAN BERDASARKAN NAMA

        return this.container.find(`${type}[name=${name}]`);
    }
}
