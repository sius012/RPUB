import PenilaianProjek from "../Model/PenilaianProjek.js";

export default class PenilaianProjekModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.nama_component = "PenilaianProjekModal";
        this.isLayout = true;
        this.penilaianProjek = new PenilaianProjek();
    }

    init(id_projek, id_siswa) {
        this.getElement("id_projek").val(id_projek);
        this.getElement("id_siswa").val(id_siswa);
    }

    globalEventListener() {
        const ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.parseFromElement();
            ctx.penilaianProjek.simpan(function (data) {
                ctx.modal.hide();
                Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "Data Berhasil dibuat",
                    target: ctx.container[0],
                });
            });
        });
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }

    parseFromElement() {
        this.penilaianProjek.id_projek = this.getElement("id_projek",).val();
        this.penilaianProjek.id_siswa = this.getElement("id_siswa").val();
        this.penilaianProjek.id_penilai = this.getElement("id_penilai").val();
        this.penilaianProjek.n_nformal = this.getElement("n_nformal").val();
        this.penilaianProjek.antusias = this.getElement("antusias").val();
        this.penilaianProjek.kejujuran = this.getElement("kejujuran").val();
        this.penilaianProjek.kreatifitas = this.getElement("kreativitas").val();
        this.penilaianProjek.tanggung_jawab =
            this.getElement("tanggung_jawab").val();
        this.penilaianProjek.komunikasi = this.getElement("komunikasi").val();
        this.penilaianProjek.etika_sopansantun =
            this.getElement("etika_sopansantun").val();
        this.penilaianProjek.k3 = this.getElement("k3").val();
        console.log(this.penilaianProjek);
        this.penilaianProjek.keterangan = this.getElement("keterangan").val();
    }
}
