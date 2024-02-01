//SISWA JURUSAN VIEW

//FUNGSI
//1. MENAMPILKAN JURUSAN SISWA BERDASARKAN ROLE

//RELASI FILE
//VIEW: siswa_jurusan_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/siswa

import Jurusan from "../Model/Jurusan.js";
import pageSetup from "./PageSetup.js";
import JurusanCard from "./Card/JurusanCard.js";

export default class SiswaJurusanView {
    constructor(container) {
        this.container = container; //ELEMENT PENAMPUNG CONTAINER BISA BERUPA CLASS(.) ATAU (#)
        this.jurusanList = [];
        this.nama_component = "SiswaJurusanView"; //NAMA COMPONENT WAJIB ADA DISETIAP COMPONENT
    }

    load() {
        //MENAMPILKAN LIST JURUSAN;
        const ctx = this;

        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });

        let breadcrumb = pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([this.nama_component, "active"]);

        this.container.find(".row").empty();

        Jurusan.all({ ubjurusan: 1 }, function (data) {
            data.forEach(function (e) {
                let jurusan = new JurusanCard(e);

                ctx.container.find(".row").append(jurusan.load());
            });
            ctx.jurusanList = data;
            ctx.container.show();
        });
    }

    globalEventListener() {
        const ctx = this;
        ctx.container.delegate(".jurusan-card", "click", function () {
            let sKV = pageSetup.getComponent("SiswaKelasView");
            sKV.load($(this).data("id"));
        });
    }
}
