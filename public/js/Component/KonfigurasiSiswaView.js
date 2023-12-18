import Siswa from "../Model/Siswa.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiSiswaView {
    constructor(container) {
        this.container = container;
        this.siswaList = [];
        this.nama_component = "KonfigurasiSiswaView";
    }

    load(params = {}) {
        let table = this.container.find("table").find("tbody");
        table.empty();
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });

        this.siswaList = Siswa.all();
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
        this.container.show();
    }

    globalEventListener() {
        const ctx = this;
        ctx.container.find(".btn-tambah-siswa").click(function () {
            let siswaModal = pageSetup.getComponent("SiswaModal");
            siswaModal.init();
        });
        ctx.container.delegate(".btn-delete", "click", function () {
            let siswaModal = pageSetup.getComponent("SiswaModal");
            let id = $(this).closest("tr").data("id");

            siswaModal.load(id);
        });
    }
}
