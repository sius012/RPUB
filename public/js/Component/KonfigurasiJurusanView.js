//KONFIGURASI JURUSAN VIEW

//FUNGSI
//1. MENAMPILAN DATA JURUSAN YANG TERSEDIA DIDATABASE
//2. MENAMBAHKAN , MENGEDIT DAN MENGHAPUS DATA

//RELASI FILE
//VIEW: konfigurasi_jurusan.blade.php;
//TERSIMPAN DIHALAMAN = pages/konfigurasi

import Jurusan from "../Model/Jurusan.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiJurusanView {
    constructor(container) {
        this.container = container; //ELEMEN CONTAINER (BERUPA CLASS(.) ATAU id(''))
        this.jurusanList = Jurusan.all();
        this.nama_component = "KonfigurasiJurusanView";
    }

    load() {    
        // MENAMPILKAN DATA JURUSAN
        this.jurusanList = Jurusan.all();
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });

        let breadcrumb = pageSetup.getComponent("Breadcrumb"); //MEMPERBARUI BREADCRUMB
        breadcrumb.add([this.nama_component, "active"]);

        let table = this.container.find(".jurusan-table").find("tbody");
        table.empty();
        console.log(table);
        this.jurusanList.forEach(function (e, i) {
            table.append(`  
             <tr data-id='${e.id}'>
                <td>${i + 1}</td>
                <td>${e.jurusan}</td>
                <td>${e.keterangan}</td>
                <td>
                <button class='btn btn-sm btn-edit btn-warning'><i class='bi bi-pencil'></i></button>
                </td>
             </tr>
            `);
        });
        table.closest("table").DataTable();
        this.container.show();
    }

    globalEventListener() {
        //MENDETEKSI EVENT YANG SEDANG BERJALAN DIDALAM CONTAINER (SEPERTI TMBOL DIKLIK DLL)
        const ctx = this;
        $("#btn-jurusan").click(function () {
            let modal = pageSetup.getComponent("JurusanModal");
            modal.modal.show();
        });

        this.container.delegate(".btn-sm", "click", function () {
            let modal = pageSetup.getComponent("JurusanModal");
            modal.load($(this).closest("tr").data("id"));
        });
    }
}
