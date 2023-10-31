import Jurusan from "../Model/Jurusan.js";

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
                    `<div class='col-md-4 mb-3'><div class='card'><div class='card-body'>${e.jurusan}</div></div></div>`
                );
        });
    }
}
