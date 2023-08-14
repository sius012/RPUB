class PagesSetup{
    constructor(){
        this.componentList = [];
    }

    init(){
        this.componentList.forEach(element=>{
            element.page_setup = this;
        })
    }

    add(component){
        this.componentList.push(component);
    }
    

    getComponent(namakomponent){
        var component = this.componentList.filter(element=>element.nama_component == namakomponent);
        if(component.length > 0){
            return component[0]
        }else{
            return null
        }
    }
}