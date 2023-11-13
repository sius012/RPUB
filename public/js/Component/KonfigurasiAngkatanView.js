import Helper from "../Helper/Helper.js";
import Angkatan from "../Model/Angkatan.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiAngkatanView {
    constructor(container) {
        this.container = container;
        this.angkatanList = Angkatan.all();
        this.nama_component = "KonfigurasiAngkatanView";
        this.page_setup;
    }

    load() {
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });

        let table = this.container.find(".angkatan-table").find("tbody");
        table.empty();
        this.angkatanList.forEach(function (e) {
            table.append(`
            <tr>
            <td>${e.id_angkatan}</td>
            <td>${e.dari}</td>
            <td>${e.sampai}</td>
            <td></td>
            <td>${Helper.aksi(
                e.id_angkatan,
                "edit-angkatan",
                "hapus-angkatan"
            )}</td>
            </tr>
            `);
        });
        this.container.show();
    }

    globalEventListener() {
        const ctx = this;
        ctx.container.find(".btn-tambah-angkatan").click(function () {
            pageSetup.getComponent("AngkatanModal").modal.show();
        });
    }
}
