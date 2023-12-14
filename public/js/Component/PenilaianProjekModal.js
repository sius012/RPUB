import PenilaianProjek from "../Model/PenilaianProjek.js";

export default class PenilaianProjekModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.nama_component = "PenilaianProjekModal";
        this.isLayout = true;
        this.penilaianProjek = new PenilaianProjek();
    }

    init(pp) {
        this.penilaianProjek = pp;
    }

    globalEventListener() {
        const ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.parseFromElement();
            ctx.penilaianProjek.simpan(function () {});
        });
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }

    parseFromElement() {
        this.penilaianProjek.id_projek = this.getElement("id_projek");
        this.penilaianProjek.id_siswa = this.getElement("id_siswa");
        this.penilaianProjek.id_penilai = this.getElement("id_penilai");
        this.penilaianProjek.n_nformal = this.getElement("n_nformal");
        this.penilaianProjek.antusias = this.getElement("antusias");
        this.penilaianProjek.kejujuran = this.getElement("kejujuran");
        this.penilaianProjek.kreatifitas = this.getElement("kreatifitas");
        this.penilaianProjek.tanggung_jawab = this.getElement("tanggung_jawab");
        this.penilaianProjek.komunikasi = this.getElement("komunikasi");
        this.penilaianProjek.etika_sopansantun =
            this.getElement("etika_sopansantun");
        this.penilaianProjek.k3 = this.getElement("k3");
        console.log(this.penilaianProjek);
    }
}
