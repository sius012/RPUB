import Angkatan from "../Model/Angkatan.js";
import pageSetup from "./PageSetup.js";
export default class SiswaKelasView {
    constructor(container) {
        this.container = container;
        this.nama_component = "SiswaKelasView";
    }

    load(id_jurusan) {
        const ctx = this;
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
                        `<div class='col-md-4'><div class='card card-class'  data-id='${e.id_angkatan}' data-idj='${id_jurusan}'><div class='card-body'><h3>Kelas ${e.kelas}</h3></div></div></div>`
                    );
            });
        });
    }

    globalEventListener() {
        const ctx = this;
        ctx.container.delegate(".card-class", "click", function () {
            let sLV = pageSetup.getComponent("SiswaListView");
            sLV.load($(this).data("id"), $(this).data("idj"));
        });
    }
}
