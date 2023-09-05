class VersiModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.versi = new Versi();

        this.nama_component = "VersiModal";
        this.page_setup;
    }

    load(id_tugas) {
        this.versi.id_tugas = id_tugas;
        this.modal.show();
    }

    parseFromElement() {
        this.versi.id_tugas = this.getElement("id_tugas").val();
        this.versi.nama = this.getElement("nama").val();
        this.versi.keterangan = this.getElement("keterangan", "textarea").val();
        this.versi.lampiran = this.getElement("lampiran")[0];
        this.versi.nomor_versi = this.getElement("nomor_versi").val();
        this.versi.status = this.getElement("status", "select").val();
    }

    globalEventListener() {
        var ctx = this;
        ctx.container.delegate("form", "submit", function (e) {
           e.preventDefault();
           ctx.parseFromElement();
           ctx.versi.simpan(function (ed) {
            ctx.reset();
            ctx.page_setup.getComponent("TugasDetailView").loadVersi();
            });
        });
    }

    getElement(name,type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }

    reset() {
        this.getElement("nama").val("");
        this.getElement("keterangan", "textarea").val("");
        this.getElement("lampiran").val("");
        this.getElement("nomor_versi").val("");
        this.getElement("status", "select").val("");
        this.modal.hide();
    }
}