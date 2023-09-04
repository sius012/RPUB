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
    }

    globalEventListener() {
        var ctx = this;
        ctx.container.delegate("form", "submit", function (e) {
            ctx.versi.simpan(function (e) {
                alert("berhasil");
            });
        });
    }

    getElement(name,type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }

}