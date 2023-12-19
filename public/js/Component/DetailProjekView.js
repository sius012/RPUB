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
        this.container = container;
        this.projek;
        this.tugasList;

        this.page_setup;
        this.nama_component = "DetailProjekView";
    }

    load(id) {
        const ctx = this;

        //curl
        Helper.curl("/pages/projek/" + id);

        Helper.permissionProjek(id, function (result) {
            if (result) {
                let breadcrumb = pageSetup.getComponent("Breadcrumb");
                breadcrumb.add([ctx.nama_component, "active"]);

                ctx.page_setup.componentList.forEach((element) => {
                    //Menyembunyikan element yang lainnya
                    if (
                        element.isLayout == undefined &&
                        element.modal == undefined
                    ) {
                        element.container.hide();
                    }
                });

                ctx.container.show();
                ctx.loadData(id);
                ctx.loadInfoProjek();
                ctx.loadPartisipan();
                ctx.loadTugas();
            } else {
                Swal.fire(
                    "Gagal",
                    "Anda tidak memiliki hak akses untuk projek ini"
                );
            }
        });
    }

    loadData(id) {
        this.projek = Projek.find(id);
        this.tugasList = Tugas.byProjek(id);
    }

    loadInfoProjek() {
        const ctx = this;
        var infoprojek = this.container.find("#informasi-projek");
        console.log(this.projek);
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

        infoprojek
            .find(".penanggung_jawab")
            .val(this.projek.penanggung_jawab.name);

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
                });
        });

        ctx.initPj();
    }
    loadTugas() {
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
        console.log(partisipan.partisipan);
        this.container.find("#partisipan").html(
            SiswaCard.autoList(partisipan.partisipan, {
                redirect: true,
                penilaianProjek: true,
            })
        );
    }

    loadLaporan() {
        const ctx = this;
        Versi.all(function (data) {
            let table = ctx.container.find("#laporan").find("tbody");
            table.empty("");
            data.forEach(function (e, i) {
                table.append(
                    `<tr><td>${i + 1}</td><td>${e.nama}</td><td>${
                        e.keterangan
                    }</td><td>${Helper.status(e.status)}</td><td>${
                        e.tugas.nama
                    }</td><td>${Helper.formatShortDate(
                        e.timestamp.created_at
                    )}</td><td>${e.siswa.nama}</td></tr>`
                );
            });
            console.log(table);
            // table.closest("table").DataTable({
            //     searching: false,
            // });
            // table.Data
        });
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
                console.log("datanya");
                console.log(e);
                cont.append(
                    `<img style="width: 20px;height: 20px; object-fit: cover; border-radius: 50%" src="${e.siswa.getFotoProfil()}">` +
                        ","
                );
            });
        });
    }

    globalEventListener() {
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
            .find("#laporan")
            .delegate(".status", "click", function (e) {
                e.preventDefault();
            });

        this.container
            .find("#tugas")
            .delegate(".partisipan", "click", function (e) {
                e.preventDefault();
                let id = $(this).closest("tr").attr("data-id");
                let aSM = ctx.page_setup.getComponent("AssignmentSiswaModal");
                console.log(ctx.page_setup);
                aSM.init(
                    ctx.projek.jurusan.map(function (e) {
                        return e.id;
                    }),
                    pageSetup.getTugasCache(id)
                );
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
                    .attr("readonly", function (index, attr) {
                        return attr == "readonly" ? null : "readonly";
                    });
                infoprojek
                    .find(".penanggung_jawab")
                    .attr("readonly", function (index, attr) {
                        return attr == "readonly" ? null : "readonly";
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
                    }
                });
                let projek = Projek.parse(params);
                projek.simpan();
            });

        ctx.container
            .find("#konfigurasi-projek")
            .find(".btn-arsip")
            .click(function () {
                Swal.fire({
                    title: "Apakah yakin ingin mengarsipan projek?",
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
    }

    initPj() {
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

    filterLaporan() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = this.container.find("#laporan").find("table").find("tbody");
        switching = true;

        while (switching) {
            switching = false;
            rows = table.children("tr");

            for (i = 0; i < rows.length; i++) {
                alert("tes");
            }

            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }
}
