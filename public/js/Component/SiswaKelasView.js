//SISWA JURUSAN VIEW
//FUNGSI
//1. MENAMPILKAN 3 KELAS BERDASARKAN ANGKATAN AKTIF
//RELASI FILE
//VIEW: siswa_kelas_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/siswa
import Angkatan from "../Model/Angkatan.js";
import pageSetup from "./PageSetup.js";
export default class SiswaKelasView {
    constructor(container) {
        this.container = container; //ELEMENT PENAMPUNG (CONTAINER) BISA BERUPA CLASS(.) ATAU ID(.)
        this.nama_component = "SiswaKelasView";
        this.container.hide();
    }
    load(id_jurusan) {
        // MENAMPILKAN KELAS
        const ctx = this;
        let breadcrumb = pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([
            this.nama_component,
            "active",
            function (component) {
                component.load(id_jurusan);
            },
        ]);
        Angkatan.getClass(function (data) {
            pageSetup.componentList.forEach((element) => {
                //Menyembunyikan element yang lainnya
                if (
                    element.isLayout == undefined &&
                    element.modal == undefined
                ) {
                    element.container.hide();
                }
            });
            ctx.container.show();
            ctx.container.find(".row").empty();
            data.forEach(function (e) {
                ctx.container
                    .find(".row")
                    .append(
                        `<div class='col-md-4'><div class='card card-class'  data-id='${e.id_angkatan}' data-idj='${id_jurusan}' data-kelas='${e.kelas}'><div class='card-body'>Kelas ${e.kelas}</div><button class='btn btn-primary btn-raport'>Raport</button></div></div>`
                    );
            });
        });
    }
    globalEventListener() {
        // MENDETEKSI EVENT YANG SEDANG BERJALAN DIDALAM CONTAINER
        const ctx = this;
        ctx.container.delegate(".card-class", "click", function () {
            let sLV = pageSetup.getComponent("SiswaListView");
            sLV.load($(this).data("id"), $(this).data("idj"));
        });
        ctx.container.delegate(".btn-raport", "click", function (e) {
            e.stopPropagation();
            let kelas = $(this).closest(".card-class").data("kelas");
            let jurusan = $(this).closest(".card-class").data("idj");
            let eRM = pageSetup.getComponent("ExportRaportModal");
            eRM.load(kelas, jurusan);
        });
    }
}
