class ProjekListView{
    constructor(container){
        this.container = container;
        this.projekList = [];
        this.page_setup;
        this.nama_component = "ProjekListView";
        this.container.hide();
    }

load(id_jurusan = null){
    this.page_setup.componentList.forEach(element=>{ //Menyembunyikan element yang lainnya
        if(element.isLayout == undefined){
            element.container.hide()
        }

    })
    this.container.show();
    if(id_jurusan!=null){ //cek apakah ada parameter jurusan, jika ada perbarui datanya, jika tidak gunakan yag sudah ada
        this.projekList = Projek.byJurusan(id_jurusan);
    }
    this.container.find(".row-view").html("")
    this.projekList.forEach(element =>{
        var projekCard =new ProjekCard(element);
        this.container.find("row-view").append(projekCard.load())
    });
    }
}