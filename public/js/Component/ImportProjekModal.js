//IMPORT PROJEK MODAL
export default class ImportProjekModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.nama_component = "ImportProjekModal";
    }

    load() {// MENAMPILKAN MODAL
        this.modal.show();
    }
}
