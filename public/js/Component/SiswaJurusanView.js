import Jurusan from "../Model/Jurusan.js";
import pageSetup from "./PageSetup.js";

export default class SiswaJurusanView {
    constructor(container) {
        this.container = container;
        this.jurusanList = Jurusan.all();

        this.nama_component = "SiswaJurusanView";
    }

    load() {
        const ctx = this;
        console.log(this.container);
        this.container.find(".row").empty();

        this.jurusanList.forEach(function (e) {
            ctx.container
                .find(".row")
                .append(
                    `<div class='col-md-4 mb-3'><div class='card jurusan-card' data-id='${e.id}'><div class='card-body'>${e.jurusan}</div></div></div>`
                );
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
