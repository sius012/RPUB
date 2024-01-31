//KONFIGURASI PENGGUNA VIEW

//FUNGSI
//1. MENAMPILKAN LIST PENGGUNA DIAPLIKASI RUBI
//2. MENAMBAHKAN DAN MENGEDIT DATA PENGGUNA
//3. MENAMBAHKAN HAK AKSES

//RELASI FILE
//VIEW: konfigurasi_pengguna_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/konfigurasi

import Helper from "../Helper/Helper.js";
import User from "../Model/User.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiPenggunaView {
    constructor(container) {
        this.container = container;//ELEMEN CONTAINER PEMBUNGKUS (BERUPA CLASS(.) ATAU ID(#))
        this.userList = [];//LIST PENGGUNA (MULTIPLE DATA)
        this.nama_component = "KonfigurasiPenggunaView"; //NAMA KOMPONENT WAJIB ADA DISETIP KOMPONENT AGAR BISA DIPANGGIL OLEH KOMPONENT LAIN
    }

    load() {//MENAMPILKAN DATA PENGGUNA
        const ctx = this;

        let breadcrumb = pageSetup.getComponent("Breadcrumb");//MEMPERBARUI BREADCRUMB
        breadcrumb.add([this.nama_component, "active"]);

        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });
        this.userList = User.all();
        let table = this.container.find(".pengguna-table").find("tbody");
        table.empty();
        this.userList.forEach((element, i) => {
            pageSetup.hideAllComponent();
            table.append(`
            <tr>
              <td>${i + 1}</td>
              <td>${element.nama}</td>
              <td>${element.email}</td>
              <td>${element.rolesStr}</td>
              <td><div class='container '>${
                  element.rolesStr == "Admin"
                      ? `<a href='#' class='btn-ubjurusan text-center' data-id="${
                            element.id
                        }">${element
                            .getUBJurusan()
                            .getUBJurusanStr()}<i class='bi bi-pencil'></i></a></`
                      : ""
              }</div>
              <td>${Helper.aksi(element.id, "edit-user", "hapus-user")}</td>
            </tr>
            `);
        });
        table.closest("table").DataTable();
        this.container.show();
    }

    globalEventListener() {//MENDETEKSI EVENT YANG SEDANG BERJALAN DIDALAM KONTAINER PEMBUNGKUS
        const ctx = this;
        const modal = pageSetup.getComponent("PenggunaModal");//MEMANGGIL KOMPONEN MODAL
        this.container.find("#btn-pengguna").click(function () {//KETIKA TOMBOL TAMBAH PENGGUNA DITEKAN
            modal.load();
        });

        this.container.delegate(".edit-user", "click", function () {//KETIKA TOMBOL EDIT DITEKAN
            modal.load($(this).data("id"));
        });

        this.container.delegate(".hapus-user", "click", function () {//KETIKA TOMBOL HAPUS DITEKAN
            Swal.fire({
                title: "Apakah yakin ingin menghapus akun?",
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    User.find($(this).data("id")).hapus(function () {
                        pageSetup
                            .getComponent("KonfigurasiPenggunaView")
                            .load();
                    });
                }
            });
        });

        this.container.delegate(".btn-ubjurusan", "click", function (e) {//KETIKA UB JURUSAN DITEKAN
            e.preventDefault();
            let id = $(this).data("id");
            let modalUB = pageSetup.getComponent("UBJurusanModal").load(id);
        });
    }
}
