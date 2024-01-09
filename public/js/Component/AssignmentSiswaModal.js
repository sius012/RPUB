import pageSetup from "./PageSetup.js";
import Siswa from "../Model/Siswa.js";
import Penugasan from "../Model/Penugasan.js";
import Angkatan from "../Model/Angkatan.js";

export default class AssigmentSiswaModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.siswaList;
        this.id_jurusan;
        this.projek;
        this.tugas;
        this.page_setup;
        this.params = { kelas: [], kw: null };
        this.nama_component = "AssignmentSiswaModal";
    }

    init(id_jurusan, tugas) {
        let ctx = this;
        this.id_jurusan = id_jurusan;
        this.tugas = tugas;
        this.container.find("input[name=id_projek]").val(id_jurusan);
        this.container.find("input[name=id_tugas]").val(this.tugas.id);

        let containerSiswa = this.container.find(".container-kelas");
        containerSiswa.empty();
        //fill kelas filter;
        Angkatan.getClass(function (data) {
            console.log(data);
            data.forEach(function (e) {
                containerSiswa.append(`<div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" name='kelas' data-value='${e.id_angkatan}' checked>
            <label class="form-check-label" for="flexSwitchCheckChecked" >Kelas ${e.kelas}</label>
        </div>`);
            });

            ctx.loadContext();
        });
    }

    loadContext() {
        var ctx = this;
        let datas = {
            id_jurusan: this.id_jurusan,
            id_tugas: this.tugas.id_tugas,
        };
        if (this.params.kw != null) {
            datas.nama = this.params.kw;
        } else {
            datas.kw = "";
        }

        //renderparams
        this.params.kelas = [];

        this.container.find("input[name=kelas]").each(function () {
            if ($(this).is(":checked")) {
                ctx.params.kelas.push($(this).data("value"));
            }
        });

        datas.kelas = this.params.kelas;

        console.log(this.params);

        this.container.find(".siswa-container").empty();
        Siswa.byQuery(datas, function (data) {
            ctx.siswaList = data;
            console.log(data);
            ctx.container.find(".siswa-list-container").html("");
            ctx.siswaList.forEach((element) => {
                if (element.ikut_penugasan == true) {
                    ctx.tambahPartisipan(element.id);
                }
                let input = ctx.container
                    .find(".siswa-container")
                    .find("input[value=" + element.id + "]");

                ctx.container
                    .find(".siswa-list-container")
                    .append(ctx.siswaListCard(element, input));
            });
        });
    }

    show() {
        this.modal.show();
    }

    globalEventListener() {
        var ctx = this;
        this.container.find(".input-siswa").keyup(function () {
            ctx.params.kw = $(this).val();
            ctx.loadContext();
        });
        this.container.delegate(".btn-tambah-siswa", "click", function () {
            var id = $(this).closest(".row").data("id");
            var containersiswa = ctx.container.find(".container-siswa");
            if ($(this).is(":checked")) {
                ctx.tambahPartisipan(id);
            } else {
                ctx.container
                    .find(".siswa-container")
                    .find("input[value=" + id + "]")
                    .remove();
            }
        });
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.kirimPartisipan();
        });

        this.container.delegate("input[name=kelas]", "change", function () {
            ctx.loadContext();
        });
        this.container.find("input[name=pilih_semua]").click(function () {
            ctx.container
                .find(".siswa-list-container")
                .find(".row")
                .each(function () {
                    let val = $(this).data("penugasan");
                    var id = $(this).data("id");
                    $(this)
                        .find("input")
                        .attr("checked", function (index, attr) {
                            let check = attr == "checked" ? null : "checked";
                            if (val == 1) {
                                check = "checked";
                            }
                            return check;
                        });

                    if ($(this).find("input").is(":checked")) {
                        ctx.tambahPartisipan(id);
                    } else {
                        ctx.container
                            .find(".siswa-container")
                            .find("input[value=" + id + "]")
                            .remove();
                    }
                });
        });
    }

    tambahPartisipan(id) {
        let input = this.container
            .find(".siswa-container")
            .find("input[value=" + id + "]").length;
        if (input < 1) {
            var containersiswa = this.container.find(".siswa-container");
            containersiswa.append(`
                  <input type='hidden' name='id_siswa' value='${id}' class='id-siswa'>
            `);
        }
    }

    kirimPartisipan() {
        let ctx = this;
        let listSiswa = [];
        this.container
            .find(".siswa-container")
            .children("input")
            .each(function (e) {
                let penugasan = new Penugasan();
                penugasan.id_tugas = ctx.tugas.id_tugas;
                penugasan.id_siswa = $(this).val();
                penugasan.keterangan = "Test Assignment";
                penugasan.id_penugas = 1;
                listSiswa.push(penugasan.toJson());
            });
        console.log(listSiswa);
        Penugasan.tambahPenugasan(listSiswa, ctx.tugas, function (data) {
            ctx.modal.hide();
            let detailProjekView = pageSetup.getComponent("DetailProjekView");
            detailProjekView.loadTugas();
            detailProjekView.loadPartisipan();
        });
    }

    siswaListCard(element, input) {
        console.log("tes: " + element.ikut_penugasan);
        return `
        <div class='row' data-id="${element.id}" data-penugasan='${
            element.ikut_penugasan == true ? 1 : 0
        }'>
        <div class='col-md-2'>  <img style="width: 20px; height: 20px; object-fit: cover; border-radius: 50%" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg'></div>
        <div class='col-md-8'>${element.nama} ${element.kelasDanJurusan}</div>
        <div class='col-md-2'><input class='btn-tambah-siswa' type='checkbox' ${
            input.length > 0 || element.ikut_penugasan == true ? "checked" : ""
        }></div>
        </div>
        </div>  
        `;
    }
}
