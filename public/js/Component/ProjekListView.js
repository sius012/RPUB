import pageSetup from "./PageSetup.js";
import Projek from "../Model/Projek.js";
import ProjekCard from "./Card/ProjekCard.js";
import Jurusan from "../Model/Jurusan.js";
export default class ProjekListView {
    constructor(container) {
        this.container = container;
        this.projekList = [];
        this.page_setup;
        this.nama_component = "ProjekListView";
        this.id_jurusan;
        this.container.hide();
    }

    load(id_jurusan = null) {
        const ctx = this;
        let breadcrumb = pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([this.nama_component, "active"]);
        ctx.container.find(".filter-jurusan").html("");
        //loadfilter;
        let jurusan = Jurusan.all({ ubjurusan: true }, function (data) {
            data.forEach(function (e, i) {
                if (i == 0) {
                    ctx.container
                        .find(".filter-jurusan")
                        .append("<option>Semua</option>");
                }
                ctx.container
                    .find(".filter-jurusan")
                    .append(`<option value='${e.id}'>${e.jurusan}</option>`);
            });
        });

        this.container.show();
        if (id_jurusan != null) {
            //cek apakah ada parameter jurusan, jika ada perbarui datanya, jika tidak gunakan yag sudah ada
            this.projekList = Projek.byJurusan(id_jurusan);
            this.id_jurusan = id_jurusan;
        } else {
            ctx.container.find(".row-view")
                .html(`<div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>`);
            this.projekList = Projek.all({
                cb: function (data) {
                    ctx.container.find(".row-view").html("");
                    data.forEach((element) => {
                        var projekCard = new ProjekCard(element);
                        console.log(this.container);
                        ctx.container
                            .find(".row-view")
                            .append(projekCard.load());
                    });

                    var modal = pageSetup.getComponent("ProjekModal");
                    modal.init();
                },
            });
        }
    }

    globalEventListener() {
        //GlobalEventListener
        var ctx = this;

        this.container.find(".tambah-projek").click(function () {
            var modal = pageSetup.getComponent("ProjekModal");
            modal.modal.show();
        });

        //Updatean
        this.container.delegate(".projek-card", "click", function () {
            var id_projek = $(this).data("id");
            var dPV = pageSetup.getComponent("DetailProjekView");
            dPV.load(id_projek);
        });

        ctx.container.find(".filter-jurusan").change(function () {
            alert("tes");
        });
    }
}
