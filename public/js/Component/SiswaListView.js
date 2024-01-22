//SISWA LIST VIEW

//FUNGSI
//1. MENAMPILKAN LIST SISWA DISUATU KELAS

//RELASI FILE
//VIEW: siswa_list_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/siswa

import Siswa from "../Model/Siswa.js";
import SiswaCard from "./Card/SiswaCard.js";
import pageSetup from "./PageSetup.js";

export default class SiswaListView {
    constructor(container) {
        this.container = container; //ELEMENT PENAMPUNG (CONTAINER) BISA BERUPA CLASS(.) ATAU ID (#)
        this.siswaList = null;

        this.page_setup;
        this.nama_component = "SiswaListView";
    }
    load(id_angkatan, id_jurusan) {
        // MENAMPILKAN DATA SISWA BERDASARKAN KELAS DAN JURUSAN
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });

        const ctx = this;

        let breadcrumb = pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([
            this.nama_component,
            "active",
            function (element) {
                element.load(id_angkatan, id_jurusan);
            },
        ]);

        console.log(`${id_angkatan} ${id_jurusan}`);
        Siswa.byQuery(
            {
                id_jurusan: id_jurusan,
                id_angkatan: id_angkatan,
                getClassMember: 1,
            },
            function (data) {
                ctx.container.html(SiswaCard.autoList(data));
                ctx.container.show();
                console.log(ctx.container.find(".row"));
            }
        );
    }

    globalEventListener() {
        //MENDETEKSI EVENT YANG SEDANG BERJALAN DIDALAM CONTAINER
        const ctx = this;
        ctx.container.delegate(".profile-siswa", "click", function () {
            let sDV = pageSetup.getComponent("SiswaDetailView");
            sDV.load($(this).data("id"));
        });
    }
}
