import PenilaianProjek from "../Model/PenilaianProjek.js";
import pageSetup from "./PageSetup.js";

export default class PenilaianProjekModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.nama_component = "PenilaianProjekModal";
        this.isLayout = true;
        this.penilaianProjek = new PenilaianProjek();
        this.mode = "simpan";
    }

    init(id_projek, id_siswa) {
        this.mode = "simpan";
        this.reset();
        this.getElement("id_projek").val(id_projek);
        this.getElement("id_siswa").val(id_siswa);
    }

    load(id_penilaian) {
        this.mode = "edit";
        let penilaianProjek = PenilaianProjek.find(id_penilaian);
        this.penilaianProjek = penilaianProjek;
        this.getElement("id_projek").val(penilaianProjek.id_projek);
        this.getElement("id_siswa").val(penilaianProjek.id_siswa);
        this.getElement("id_penilai").val(penilaianProjek.id_penilai);
        this.getElement("n_nformal").val(penilaianProjek.n_nformal);
        this.getElement("antusias", "select").val(penilaianProjek.antusias);
        this.getElement("kejujuran", "select").val(penilaianProjek.kejujuran);
        this.getElement("kreativitas", "select").val(
            penilaianProjek.kreativitas
        );
        this.getElement("tanggung_jawab", "select").val(
            penilaianProjek.id_projek
        );
        this.getElement("komunikasi", "select").val(penilaianProjek.komunikasi);
        this.getElement("etika_sopansantun", "select").val(
            penilaianProjek.etika_sopansantun
        );
        this.getElement("k3", "select").val(penilaianProjek.k3);
        this.getElement("tanggung_jawab", "select").val(
            penilaianProjek.tanggung_jawab
        );
        this.getElement("keterangan", "textarea").val(
            penilaianProjek.keterangan
        );

        console.log(penilaianProjek);
        this.modal.show();
    }

    reset() {
        this.getElement("id_projek").val("");
        this.getElement("id_siswa").val("");
        this.getElement("id_penilai").val("");
        this.getElement("n_nformal").val("");
        this.getElement("antusias", "select").val("");
        this.getElement("kejujuran", "select").val("");
        this.getElement("kreativitas", "select").val("");
        this.getElement("tanggung_jawab", "select").val("");
        this.getElement("komunikasi", "select").val("");
        this.getElement("etika_sopansantun", "select").val("");
        this.getElement("k3", "select").val("");
        this.getElement("tanggung_jawab", "select").val("");
        this.getElement("keterangan", "textarea").val("");
    }

    globalEventListener() {
        const ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.parseFromElement();
            if (ctx.mode == "simpan") {
                ctx.penilaianProjek.simpan(function (data) {
                    ctx.modal.hide();
                    pageSetup.getComponent("DetailProjekView").loadPartisipan();
                });
            } else {
                ctx.penilaianProjek.update(
                    ctx.penilaianProjek.id,
                    function (data) {
                        ctx.modal.hide();
                        pageSetup
                            .getComponent("DetailProjekView")
                            .loadPartisipan();
                    }
                );
            }
        });
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }

    parseFromElement() {
        this.penilaianProjek.id_projek = this.getElement("id_projek").val();
        this.penilaianProjek.id_siswa = this.getElement("id_siswa").val();
        this.penilaianProjek.id_penilai = this.getElement("id_penilai").val();
        this.penilaianProjek.n_nformal = this.getElement("n_nformal").val();
        this.penilaianProjek.antusias = this.getElement(
            "antusias",
            "select"
        ).val();
        this.penilaianProjek.kejujuran = this.getElement(
            "kejujuran",
            "select"
        ).val();
        this.penilaianProjek.kreatifitas = this.getElement(
            "kreativitas",
            "select"
        ).val();
        this.penilaianProjek.tanggung_jawab = this.getElement(
            "tanggung_jawab",
            "select"
        ).val();
        this.penilaianProjek.komunikasi = this.getElement(
            "komunikasi",
            "select"
        ).val();
        this.penilaianProjek.etika_sopansantun = this.getElement(
            "etika_sopansantun",
            "select"
        ).val();
        this.penilaianProjek.k3 = this.getElement("k3", "select").val();
        console.log(this.penilaianProjek);
        this.penilaianProjek.keterangan = this.getElement(
            "keterangan",
            "textarea"
        ).val();
        console.log("hasil parsing:");
        console.log(this);
    }
}
