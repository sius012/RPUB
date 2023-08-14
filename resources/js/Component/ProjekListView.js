class ProjekListView{
    constructor(container){
        this.container = container;
        this.projekList = [];
        this.page_setup;
        this.nama_component;
        
    }


load(){
    this.projekList.forEach(element => {
        var projekCard =new ProjekCard(element);
        this.container.find(".row").append(projekCard.load());
    });
    }
}