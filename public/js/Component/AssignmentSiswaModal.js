//ASSIGNMENT SISWA MODAL

//FUNGSI
//1. MENAMBAHKAN PENUGASAN KEPADA SISWA
//2. MENGEDIT PENUGASAN KEPADA SISWA

//RELASI FILE
//VIEW: assignment_siswa_modal.blade;
//TERSIMPAN DIHALAMAN = pages/projek/

import pageSetup from "./PageSetup.js";
import Siswa from "../Model/Siswa.js";
import Penugasan from "../Model/Penugasan.js";
import Angkatan from "../Model/Angkatan.js";

export default class AssigmentSiswaModal {
    constructor(container) {
        this.container = container; //ELEMEN MODAL
        this.modal = new bootstrap.Modal(container);
        this.siswaList; //BERISI DATA SISWA (MULTIPLE ADATA)
        this.id_jurusan; //ID DARI JURUSAN YANG MENGIKUTI PROJEK
        this.projek; // DATA PROJEK TERKAIT
        this.tugas; // DATA TUGAS TERKAIT
        this.params = { kelas: [], kw: null }; //FILTER BERDASARKAN NAMA DAN KELAS
        this.nama_component = "AssignmentSiswaModal"; //NAMA KOMPONEN (WAJIB ADA DISETIAP KOMPONEN)
    }

    init(id_jurusan, tugas) { //INISIALISI MODAL (MENGISI ID_JURUSAN DAN TUGASNYA APA)
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

    loadContext() { //MENAMPILKAN DATA
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

    show() {// MENAMPILKAN MODAL
        this.modal.show();
    }

    globalEventListener() { //MENDETEKSI EVENT YANG TERJADI DIDALAM MODAL (SEPERTI TOMBOL KIRIM,DLL)
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

    tambahPartisipan(id) {//MENAMBAHKAN PARTISIPAN KEDALAM TUGAS
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

    kirimPartisipan() { //MENGIRIM PARTISIPAN KEDALAM DATABASE
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

    siswaListCard(element, input) { //SISWA LIST CARD
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
