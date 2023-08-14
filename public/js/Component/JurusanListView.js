class JurusanListView{
    constructor(container){
        this.container = container;
        this.jurusanList = [];
        this.page_setup;
        this.nama_component;
        
    }


load(){
    this.container.find(".row-jurusan").html("")
    this.jurusanList.forEach(element => {
        var jurusanCard = new JurusanCard(element);
        this.container.find(".row-jurusan").append(jurusanCard.load())
    });
    }
}