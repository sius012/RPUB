//KONFIGURASI KATEGORI JENIS

//KOMPONENT INI TIDAK TERPAKAI LAGI(19/01/2024) 

import Helper from "../Helper/Helper.js";
import Jenis from "../Model/Jenis.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiKategoriJenisView {
    constructor(container) {
        this.container = container;
        this.kategoriJenisList;
        this.nama_component = "KonfigurasiKategoriJenisView";
        this.page_setup;
    }

    load() {
        this.kategoriJenisList = Jenis.all({ jurusan: 1 });
        console.log(this.kategoriJenisList[0]);
        pageSetup.hideAllComponent();
        let table = this.container.find(".kategori-jenis-table").find("tbody");

        table.empty();
        this.kategoriJenisList.forEach(function (e, i) {
            table.append(`
             <tr>
             <td><img src='${e.icon()}' style='width: 20px'></td>
             <td>${e.nama}</td>
             <td>${e.keterangan}</td>
             <td>${e.tipe}</td>
             <td>${e.jurusan.jurusan}</td>
             <td>${Helper.aksi(e.id, "edit-jenis", "hapus-jenis")}</td>
             </tr>
             `);
        });
        this.container.show();
    }

    globalEventListener() {
        this.container.find("#btn-jenis").click(function () {
            pageSetup.getComponent("JenisModal").load();
        });

        this.container.delegate(".edit-jenis", "click", function () {
            let modal = pageSetup.getComponent("JenisModal");
            modal.load($(this).data("id"));
        });
    }
}
