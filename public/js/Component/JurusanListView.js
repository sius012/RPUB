class JurusanListView{
    constructor(container){
        this.container = container;
        this.jurusanList = [];
        this.page_setup;
        this.nama_component = "JurusanListView";
    }


load(){
    this.container.find(".row-jurusan").html("")
    this.jurusanList.forEach(element => {
        var jurusanCard = new JurusanCard(element);
        this.container.find(".row-jurusan").append(jurusanCard.load())
    });
    }

globalEventListener(){
    var ctx = this;
    console.log(ctx.page_setup)
    this.container.find("#tambah-jurusan").click(function(){
        var modal = ctx.page_setup.getComponent("ProjekModal").modal;
        modal.show()
    })
}
}