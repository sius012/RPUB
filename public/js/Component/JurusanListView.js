class JurusanListView{
    constructor(container){
        this.container = container;
        this.jurusanList = [];
        this.page_setup;
        this.nama_component;
        
    }


load(){
    this.jurusanList.forEach(element => {
        var jurusanCard =new ProjekCard(element);
        this.container.find(".row").append(jurusanCard.load())
    });
    }
}