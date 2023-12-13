import Jurusan from "../Model/Jurusan.js";
import pageSetup from "./PageSetup.js";
import JurusanCard from "./Card/JurusanCard.js";

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
            let jurusan = new JurusanCard(e);

            ctx.container
                .find(".row")
                .append(
                    jurusan.load()
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
