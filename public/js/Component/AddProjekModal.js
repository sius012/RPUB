class ProjekModal{
    constructor(container){
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.page_setup;
        this.nama_component = "ProjekModal";
    }

    globalEventListener(){
        var ctx = this;
        this.container.find("#clear-jurusan").click(function(){
            var jLV = ctx.page_setup.getComponent("JurusanListView").container
        })
    }
}