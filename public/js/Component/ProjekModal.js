//PROJEK MODAL



//FUNGSI

//1. MENAMBAH, MENGEDIT DATA PROJEK



//RELASI FILE

//VIEW: projek_modal.blade.php;

//TERSIMPAN DIHALAMAN = pages/projek



import Projek from "../Model/Projek.js";

import Jurusan from "../Model/Jurusan.js";

import User from "../Model/User.js";

import Helper from "../Helper/Helper.js";

import pageSetup from "./PageSetup.js";

export default class ProjekModal {

    constructor(container) {

        this.container = container; //ELEMENT PENAMPUNG (CONTAINER) BISA BERUPA CLASS(.) ATAU ID(#)

        this.modal = new bootstrap.Modal(container);

        this.ProjekData; //DATA PROJEK (SINGLE DATA)

        this.nama_component = "ProjekModal";

    }



    init() {

        // INISIALISASI DATA (MENDAPATKAN JURUSAN YANG TERSEDIA)

        let cjr = this.container.find(".container-jurusan-row");

        cjr.empty();

        Jurusan.all({ ubjurusan: true }, function (jurusan) {

            jurusan.forEach(function (e) {

                cjr.append(

                    `<div class="form-check">

                    <input class="form-check-input" type="checkbox" value="${e.id}" name='id_jurusan' id="flexCheckIndeterminate">

                    <label class="form-check-label" for="flexCheckIndeterminate"></label>

                      ${e.jurusan}

                    </label>

                  </div>`

                );

            });

        });



        //this.getElement("id_jenis", "select").html(optionJenisStr);



        // this.getElement("jenis_projek", "select").select2();

    }



    parse() {

        //MENGISI MODEL PROJEK DARI INPUTAN YANG ADA DIDALAM KOMPONENT

        var projek = new Projek();

        projek.nama = this.getElement("nama").val();

        projek.tanggal_awal = this.getElement("tanggal_awal").val();

        projek.tanggal_akhir = this.getElement("tanggal_akhir").val();

        projek.jenis_projek = this.getElement("jenis_projek", "select").val();

        projek.klien = this.getElement("klien").val();

        projek.deskripsi = this.getElement("deskripsi").val();

        projek.status = this.getElement("status").val();

        projek.id_pembuat = this.getElement("id_pembuat").val();

        projek.id_jurusan = this.getElement("id_jurusan").val();

        projek.id_penanggung_jawab = this.getElement("id_penanggung_jawab");

        projek.lokasi_projek = this.getElement("lokasi_projek");

        this.ProjekData = projek;

    }



    fastParse(json) {

        //MENGISI MODEL PROJEK DARI INPUTAN YANG ADA DIDALAM KOMPONENT

        var projek = new Projek();

        projek.nama = json["nama"];

        projek.tanggal_awal = json["tanggal_awal"];

        projek.tanggal_akhir = json["tanggal_akhir"];

        projek.id_penanggung_jawab = json["id_penanggung_jawab"];

        projek.jenis_projek = json["jenis_projek"];

        projek.klien = json["klien"];

        projek.deskripsi = json["deskripsi"];

        projek.status = json["status"];

        projek.id_pembuat = 0;

        projek.id_jurusan = json["id_jurusan"];

        projek.lokasi_projek = json["lokasi_projek"];

        projek.nominal = json["nominal"];

        this.ProjekData = projek;

    }



    load(id_projek = null) {

        //MENAMPILKAN DATA PROJEK BERDASARKAN ID

        if ((id_projek = null)) {

            this.ProjekData = Projek.find(id_projek);

        }

        this.getElement("id").val(this.ProjekData.id);

        this.getElement("nama").val(this.ProjekData.nama);

        this.getElement("tanggal_awal").val(this.ProjekData.tanggal_awal);

        this.getElement("tanggal_akhir").val(this.ProjekData.tanggal_akhir);

        this.getElement("id_penanggung_jawab").val(

            this.ProjekData.id_penanggung_jawab

        );

        this.getElement("jenis_projek").val(this.ProjekData.jenis_projek);

        this.getElement("klien").val(this.ProjekData.klien);

        this.getElement("deskripsi").val(this.ProjekData.deskripsi);

        this.getElement("status").val(this.ProjekData.status);

        this.getElement("id_jurusan").val(this.ProjekData.id_jurusan);

    }



    reset() {

        // MERESET MODAL

        this.getElement("id").val("");

        this.getElement("nama").val("nama");

        this.getElement("tanggal_awal").val("");

        this.getElement("tanggal_akhir").val("");

        this.getElement("id_penanggung_jawab").val("");

        this.getElement("jenis_projek").val("");

        this.getElement("klien").val("");

        this.getElement("deskripsi").val("");

        this.getElement("status").val("");

        this.getElement("id_jurusan").val("");

        this.ProjekData = new Projek();

    }



    kirim() {

        // KIRIM PROJEK

        //  this.parse();

        console.log("Datanya adalah:");

        console.log(this.ProjekData);

        this.ProjekData.simpan();

        this.modal.hide();

        var pLV = pageSetup.getComponent("ProjekListView");

        pLV.load(pLV.id_jurusan);

    }



    globalEventListener() {

        //MENDETEKSI EVENT YANG SEDANG BERJALAN DI DALAM CONTAINER

        var ctx = this;

        this.container.find("#clear-Jurusan").click(function () {

            var jLV = pageSetup.getComponent("JurusanListView").container;

        });



        this.container.find("form").submit(function (e) {

            e.preventDefault();



            //  ctx.kirim();

            var formData = $(this)

                .serializeArray()

                .filter(function (item) {

                    return item.name !== "id_jurusan";

                });

            let newFormData = {};

            formData.push({

                name: "id_jurusan",

                value: $('input[name="id_jurusan"]:checked')

                    .map(function () {

                        return $(this).val();

                    })

                    .get(),

            });



            formData.forEach(function (e) {

                newFormData[e["name"]] = e["value"];

            });

            console.log(newFormData);

            ctx.fastParse(newFormData);



            if (newFormData["id_penanggung_jawab"].length > 0) {

                ctx.kirim();

            } else {

                alert("Pastikan Penanggung Jawab Terisi");

            }

            // Display form data (you can also send it to the server via AJAX)



            var pLV = pageSetup.getComponent("ProjekListView");

        });



        ctx.getElement("nilai_projek").closest(".row").hide();



        this.getElement("jenis_projek", "select").change(function () {

            if ($(this).val() == "Projek Eksternal") {

                ctx.getElement("nilai_projek").closest(".row").show();

                ctx.getElement("klien").closest(".row").show();

                ctx.getElement("klien").removeAttr("disabled");

            } else {

                ctx.getElement("nilai_projek").closest(".row").hide();

                ctx.getElement("klien").closest(".row").hide();

                ctx.getElement("klien").attr("disabled", "disabled");

            }

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

            });

            $(this).parent().find(".pj-list");

        });



        this.getElement("nama_penanggungjawab").keyup(function () {

            let jurusanList = [];

            let container = $(this).parent().find(".pj-list");

            let containerPj = $(this).parent().find(".container-pj");

            container.empty();

            containerPj.empty();



            ctx.getElement("id_jurusan").each(function (e) {

                if ($(this).is(":checked")) {

                    jurusanList.push($(this).val());

                }

            });

            console.log(jurusanList);

            User.getListUBJurusan(jurusanList, function (data) {

                let userlist = data

                    .map(function (e) {

                        return `<option value='${e.id}'>${e.nama}</option>`;

                    })

                    .join("");

                container.html(userlist);

            });

            $(this).parent().find(".pj-list");

        });



        ctx.container.delegate(".pj-list-item", "click", function () {

            let containerPj = $(this).closest(".col").find(".container-pj");

            containerPj.empty();

            containerPj.append(

                `<input type='hidden' name='id_penanggung_jawab' value='${$(

                    this

                ).attr("value")}'>`

            );

            console.log(containerPj);

        });



        Helper.validasiTanggal(ctx);

    }



    getElement(name, type = "input") {

        // MENDAPATKAN INPUTAN YANG ADA DIDALAM KOMPONENT BERDASARKAN NAME

        return this.container.find(`${type}[name=${name}]`);

    }



    validasi(cb) {}

}

