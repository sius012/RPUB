import Siswa from "../Model/Siswa.js";
import SiswaCard from "./Card/SiswaCard.js";
import pageSetup from "./PageSetup.js";

export default class SiswaListView {
    constructor(container) {
        this.container = container;
        this.siswaList = null;

        this.page_setup;
        this.nama_component = "SiswaListView";
    }
    load(id_angkatan, id_jurusan) {
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
        const ctx = this;
        ctx.container.delegate(".profile-siswa", "click", function () {
            let sDV = pageSetup.getComponent("SiswaDetailView");
            sDV.load($(this).data("id"));
        });
    }
}
