export default class JurusanListView {
    constructor(container) {
        this.container = container;
        this.jurusanList = [];
        this.page_setup;
        this.nama_component = "JurusanListView";
    }

    load() {
        //applybreadcrumb
        let breadcrumb = window.pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([this.nama_component, "active"]);

        if (this.page_setup != undefined) {
            this.page_setup.componentList.forEach((element) => {
                if (element.isLayout == undefined) {
                    element.container.hide();
                }
            });
        }

        this.container.show();

        this.container.find(".row-jurusan").html("");

        this.jurusanList.forEach((element) => {
            var jurusanCard = new JurusanCard(element);
            this.container.find(".row-jurusan").append(jurusanCard.load());
        });
    }

    globalEventListener() {
        var ctx = this;
        console.log(ctx.page_setup);
        this.container.find("#tambah-jurusan").click(function () {
            var modal = ctx.page_setup.getComponent("JurusanModal").modal;
            modal.show();
        });

        this.container.delegate(".jurusan-card", "click", function () {
            //New Update
            var projekListView = ctx.page_setup.getComponent("ProjekListView");
            var id = $(this).data("id");
            projekListView.load(id);
        });
    }
}
