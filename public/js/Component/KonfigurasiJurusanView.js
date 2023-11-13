import Jurusan from "../Model/Jurusan.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiJurusanView {
    constructor(container) {
        this.container = container;
        this.jurusanList = Jurusan.all();
        this.nama_component = "KonfigurasiJurusanView";
    }

    load() {
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });

        let table = this.container.find(".jurusan-table").find("tbody");
        table.empty();
        console.log(table);
        this.jurusanList.forEach(function (e, i) {
            table.append(`  
             <tr>
                <td>${i + 1}</td>
                <td>${e.jurusan}</td>
                <td>${e.keterangan}</td>
                <td><button class='btn btn-sm btn-danger'><i class='bi bi-trash'></i></button>
                <button class='btn btn-sm btn-warning'><i class='bi bi-pencil'></i></button>
                </td>
             </tr>
            `);
        });
        this.container.show();
    }
}
