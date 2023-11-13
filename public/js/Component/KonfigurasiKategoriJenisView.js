import Helper from "../Helper/Helper.js";
import Jenis from "../Model/Jenis.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiKategoriJenisView {
    constructor(container) {
        this.container = container;
        this.kategoriJenisList = Jenis.all({ jurusan: 1 });
        this.nama_component = "KonfigurasiKategoriJenisView";
        this.page_setup;
    }

    load() {
        console.log(this.kategoriJenisList[0]);
        pageSetup.hideAllComponent();
        let table = this.container.find(".kategori-jenis-table").find("tbody");

        table.empty();
        this.kategoriJenisList.forEach(function (e, i) {
            table.append(`
             <tr>
             <td><img src='${e.icon()}' style='width: 20px'></td>
             <td>${e.nama}</td>
             <td>Lorem ipsum</td>
             <td>${e.tipe}</td>
             <td>${e.jurusan.jurusan}</td>
             <td>${Helper.aksi(e.id, "edit-jenis", "hapus-jenis")}</td>
             </tr>
             `);
        });
        this.container.show();
    }
}
