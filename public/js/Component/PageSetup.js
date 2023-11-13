class PageSetup {
    constructor() {
        this.componentList = [];
        this.cache = {
            tugas: [],
            projek: [],
        };
    }

    init() {
        this.componentList.forEach((element) => {
            element.page_setup = this;
            if (typeof element.globalEventListener == "function") {
                element.globalEventListener();
            }
        });
    }

    add(component) {
        this.componentList.push(component);
    }

    getComponent(namakomponent) {
        var component = this.componentList.filter(
            (element) => element.nama_component == namakomponent
        );
        if (component.length > 0) {
            return component[0];
        } else {
            return null;
        }
    }

    getTugasCache(id) {
        let tugas = this.cache.tugas.filter(
            (element) => element.id_tugas == id
        );
        if (tugas.length > 0) {
            return tugas[0];
        } else {
            return null;
        }
    }

    tambahCacheTugas(tugas) {
        let tugass = this.cache.tugas.filter(
            (element) => element.id_tugas != tugas.id_tugas
        );
        this.cache.tugas = tugass;
        this.cache.tugas.push(tugas);
    }

    hideAllComponent() {
        this.componentList.forEach((element) => {
            if (element.isLayout == undefined) {
                element.container.hide();
            }
        });
    }
}

const pageSetup = new PageSetup();
export default pageSetup;
