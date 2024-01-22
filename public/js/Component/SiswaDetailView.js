//SISWA DETAIL VIEW

//FUNGSI
//1. MELIHAT DATA SISWA DAN DATA LAINNYA YANG BERKAITAN DENGAN SISWA

//RELASI FILE
//VIEW: siswa_detail_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/siswa

import Helper from "../Helper/Helper.js";
import Siswa from "../Model/Siswa.js";
import pageSetup from "./PageSetup.js";

export default class SiswaDetailView {
    constructor(container) {
        this.container = container;
        this.siswa; //DATA SISWA (SINGLE DATA)
        this.nama_component = "SiswaDetailView";
    }

    load(id_siswa) {
        // MENAMPILKAN DATA SISWA
        this.siswa = Siswa.find(id_siswa);
        Helper.curl(
            "/pages/siswa/" +
                this.siswa.id_jurusan +
                "/" +
                this.siswa.id_jurusan +
                "/" +
                this.siswa.id
        );
        const ctx = this;
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });
        this.siswa = Siswa.find(id_siswa);

        this.siswa.getListProjek(function (data) {
            ctx.container.find(".container-projek").empty();

            data.forEach(function (e) {
                ctx.container.find(
                    ".container-projek"
                ).append(` <div class="row mb-2">
            <div class="card card-projek" data-id='${e.id}'>
                <div class="card-body ">
                    <div class="row">
                        <div class="col-7">
                        <b>${e.nama}</b> <p class='m-0'> ${e.tanggal_awal} s/d ${e.tanggal_akhir}</p></div>
                        <div class='col text-center'>
                        <b>Tugas</b><div class='row'>
                        <div class="col" style='font-size:8pt'>${e.etc.jumlah_tugas}<p class='m-0'>Total</p> </div>
                        <div class="col" style='font-size:8pt'>${e.etc.tugas_selesai}<p class='m-0'>Selesai</p></div>
                        <div class="col" style='font-size:8pt'>${e.etc.proses}<p class='m-0'>Proses</p></div>
                        </div></div>
                    </div>
                </div>
            </div>
        </div>`);
            });
        });

        this.container.find("#title-main").text(this.siswa.nama);
        this.container.find("#profile-nama").text(this.siswa.nama);
        this.container.find("#profile-jk").text(this.siswa.jk);
        this.container.find("#profile-email").text(this.siswa.email);
        this.container.find("#profile-angkatan").text(this.siswa.id_angkatan);
        this.container
            .find("#profile-jurusan")
            .text(this.siswa.jurusan.jurusan);
        this.container
            .find("#profile-image")
            .attr("src", this.siswa.getFotoProfil());
        this.container.find("#kelas").text(this.siswa.kelasDanJurusan);
        this.container.show();
    }

    globalEventListener() {
        //MENDETEKSI EVENT YANG BERJALAN DIDALAM CONTAINER
        const ctx = this;
        ctx.container.delegate(".raportcard", "click", function (e) {
            e.preventDefault();
            let rM = pageSetup.getComponent("RaportModal");
            rM.load(ctx.siswa.id);
        });

        ctx.container.delegate(".card-projek", "click", function () {
            window.location = "/pages/projek/" + $(this).data("id");
        });
    }
}
