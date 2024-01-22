//KONFIGURASI SISWA VIEW

//FUNGSI
//1. MENAMPILKAN LIST SISWA DIAPLIKASI RUBI
//2. MENAMBAHKAN DAN MENGEDIT DATA PENGGUNA

//RELASI FILE
//VIEW: konfigurasi_siswa_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/konfigurasi

import Siswa from "../Model/Siswa.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiSiswaView {
    constructor(container) {
        this.container = container; //ELEMENT PENAMPUNG (CONTAINER) BISA BERUPA CLASS(.) ATAU ID(#)
        this.siswaList = []; //LIST SISWA (MULTIPLE DATA)
        this.nama_component = "KonfigurasiSiswaView"; //NAMA KOMPONENT WAJIB ADA DISETIAP COMPONENT
    }

    load(params = {}) {
        //MENAMPILKAN DATA SISWA
        const ctx = this;
        let breadcrumb = pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([ctx.nama_component, "active"]);

        let table = this.container.find("table").find("tbody");
        table.empty();
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });

        this.siswaList = params.data == undefined ? Siswa.all() : params.data;
        this.siswaList.forEach(function (e, i) {
            table.append(`<tr data-id="${e.id}">
            <td><img src='${e.getFotoProfil()}' style='width: 30px; aspect-ratio: 1/1; object-fit:cover;border-radius: 50%'></td>
            <td>${e.nama}</td>
            <td>${e.id_angkatan}</td>
            <td>${e.jurusan.jurusan}</td>
            <td>${e.kelasDanJurusan}</td>
            <td>${e.email}</td>
            <td>${e.jk}</td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-warning btn-sm btn-delete"><i class='fa fa-edit'></i></button>
            <button type="button" class="btn btn-danger btn-sm"><i class='fa fa-trash'></i></button>
          </div></td>
            </tr>`);
        });

        table.closest("table").DataTable();
        this.container.show();
    }

    globalEventListener() {
        //MENDETEKSI EVENT YANG SEDANG BERJALAN DIDALAM CONTAINER
        const ctx = this;
        ctx.container.find(".btn-tambah-siswa").click(function () {
            let siswaModal = pageSetup.getComponent("SiswaModal");
            siswaModal.init();
        });
        ctx.container.find(".btn-raporkarakter").click(function () {
            Swal.fire({
                title: "Import data siswa dari rapor karakter",
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Siswa.importFromRaporKarakter(function () {
                        ctx.load();
                    });
                }
            });
        });
        ctx.container.delegate(".btn-delete", "click", function () {
            let siswaModal = pageSetup.getComponent("SiswaModal");
            let id = $(this).closest("tr").data("id");

            siswaModal.load(id);
        });

        ctx.container.find("#searchForm").submit(function (e) {
            //
            e.preventDefault();
            let angkatan = ctx.container.find("#angkatan").val();
            let jurusan = ctx.container.find("#jurusan").val();
            let nama = ctx.container.find("input[name=siswa]").val();
            Siswa.filter(
                {
                    id_angkatan: angkatan,
                    id_jurusan: jurusan,
                    nama: nama,
                    filter: 1,
                },
                function (data) {
                    ctx.load({ data: data });
                }
            );
        });
    }
}
