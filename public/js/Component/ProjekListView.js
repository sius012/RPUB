class ProjekListView {
    constructor(container) {
        this.container = container;
        this.projekList = [];
        this.page_setup;
        this.nama_component = "ProjekListView";
        this.id_jurusan;
        this.container.hide();
    }

    load(id_jurusan = null) {
        let breadcrumb = window.pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([this.nama_component, "active"]);

        this.page_setup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined) {
                element.container.hide();
            }
        });

        this.container.show();
        if (id_jurusan != null) {
            //cek apakah ada parameter jurusan, jika ada perbarui datanya, jika tidak gunakan yag sudah ada
            this.projekList = Projek.byJurusan(id_jurusan);
            this.id_jurusan = id_jurusan;
        }
        this.container.find(".row-view").html("");
        this.projekList.forEach((element) => {
            var projekCard = new ProjekCard(element);
            this.container.find(".row-view").append(projekCard.load());
        });

        //assign modal id_jurusan
        var modal = this.page_setup.getComponent("ProjekModal");
        modal.init(this.id_jurusan);
    }

    globalEventListener() {
        //GlobalEventListener
        var ctx = this;
        this.container.find(".tambah-projek").click(function () {
            var modal = ctx.page_setup.getComponent("ProjekModal");
            modal.modal.show();
        });

        //Updatean
        this.container.delegate(".projek-card", "click", function () {
            var id_projek = $(this).data("id");
            var dPV = ctx.page_setup.getComponent("DetailProjekView");
            dPV.load(id_projek);
        });
    }
}
