import Versi from "../Model/Versi.js";
import pageSetup from "./PageSetup.js";

export default class LaporanListModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.nama_component = "LaporanListModal";
    }

    load(idtugas, idsiswa) {
        let ctx = this;
        Versi.byTugasDanSiswa(idtugas, idsiswa, function (data) {
            let container = ctx.container.find(".container-laporan");
            container.empty();
            data.forEach((element) => {
                container.append(`<div class='row laporan-row mb-2' data-id='${element.id}'><div class='card p-3'><div class='row'>
                <div class='col-8'>${element.nama}</div><div class='col-4 text-end'><button class='btn btn-primary btn-sm buka-detail'><i class='fa fa-info'></i></button></div>
                </div></div></div>`);
            });
            ctx.modal.show();
        });
    }

    globalEventListener() {
        let ctx = this;
        ctx.container.delegate(".buka-detail", "click", function () {
            let lDM = pageSetup.getComponent("LaporanDetailModal");
            lDM.load($(this).closest(".laporan-row").data("id"));
        });
    }
}
