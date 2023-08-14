class PagesSetup{
    constructor(){
        this.componentList = [];
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