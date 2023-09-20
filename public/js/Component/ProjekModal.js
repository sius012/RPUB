import Projek from "../Model/Projek.js";
export default class ProjekModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.ProjekData;
        this.page_setup;
        this.nama_component = "ProjekModal";
    }

    init(id_jurusan) {
        this.getElement("id_jurusan").val(id_jurusan);

        //this.getElement("id_jenis", "select").html(optionJenisStr);
    }

    parse() {
        var projek = new Projek();
        projek.nama = this.getElement("nama").val();
        projek.tanggal_awal = this.getElement("tanggal_awal").val();
        projek.tanggal_akhir = this.getElement("tanggal_akhir").val();
        projek.id_penanggung_jawab = 1; //this.getElement("id_penanggung_jawab").val();
        projek.jenis_projek = this.getElement("jenis_projek", "select").val();
        projek.klien = this.getElement("klien").val();
        projek.deskripsi = this.getElement("deskripsi").val();
        projek.status = this.getElement("status").val();
        projek.id_pembuat = this.getElement("id_pembuat").val();
        projek.id_jurusan = this.getElement("id_jurusan").val();
        this.ProjekData = projek;
    }

    load(id_projek = null) {
        if ((id_projek = null)) {
            this.ProjekData = Projek.find(id_projek);
        }
        this.getElement("id").val(this.ProjekData.id);
        this.getElement("nama").val(this.ProjekData.nama);
        this.getElement("tanggal_awal").val(this.ProjekData.tanggal_awal);
        this.getElement("tanggal_akhir").val(this.ProjekData.tanggal_akhir);
        this.getElement("id_penanggung_jawab").val(
            this.ProjekData.id_penanggung_jawab
        );
        this.getElement("jenis_projek").val(this.ProjekData.jenis_projek);
        this.getElement("klien").val(this.ProjekData.klien);
        this.getElement("deskripsi").val(this.ProjekData.deskripsi);
        this.getElement("status").val(this.ProjekData.status);
        this.getElement("id_jurusan").val(this.ProjekData.id_jurusan);
    }

    reset() {
        this.getElement("id").val("");
        this.getElement("nama").val("nama");
        this.getElement("tanggal_awal").val("");
        this.getElement("tanggal_akhir").val("");
        this.getElement("id_penanggung_jawab").val("");
        this.getElement("jenis_projek").val("");
        this.getElement("klien").val("");
        this.getElement("deskripsi").val("");
        this.getElement("status").val("");
        this.getElement("id_jurusan").val("");
        this.ProjekData = new Projek();
    }

    kirim() {
        this.parse();
        this.ProjekData.simpan();
        this.modal.hide();
        var pLV = this.page_setup.getComponent("ProjekListView");
        pLV.load(pLV.id_jurusan);
    }

    globalEventListener() {
        var ctx = this;
        this.container.find("#clear-Jurusan").click(function () {
            var jLV = ctx.page_setup.getComponent("JurusanListView").container;
        });

        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.kirim();
            var pLV = ctx.page_setup.getComponent("ProjekListView");
        });
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }
}
