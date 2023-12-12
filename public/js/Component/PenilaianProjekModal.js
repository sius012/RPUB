export default class PenilaianProjekModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.nama_component = "PenilaianProjekModal";
        this.isLayout = true;
    }

    load(id) {
        alert(id);
    }

    globalEventListener() {}
}
