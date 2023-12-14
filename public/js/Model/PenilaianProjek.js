export default class PenilaianProjek {
    constructor() {
        this.id;
        this.id_projek;
        this.id_penilaian;
        this.id_siswa;
        this.n_nformal;
        this.antusias;
        this.kejujuran;
        this.kreatifitas;
        this.tanggung_jawab;
        this.etika_sopansantun;
        this.k3;
        this.keterangan;
    }

    simpan(cb = null) {
        let json = this.toJson();
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/penilaianprojek",
            data: json,
            type: "post",
            success: function (data) {
                if (cb != null) {
                    cb(data);
                }
            },
        });
    }

    toJson() {
        let json = {};
        json["id_projek"] = this.id_projek;
        json["id_penilaian"] = this.id_penilaian;
        json["id_siswa"] = this.id_siswa;
        json["n_nformal"] = this.n_nformal;
        json["antusias"] = this.antusias;
        json["kejujuran"] = this.kejujuran;
        json["kreatifitas"] = this.kreatifitas;
        json["tanggung_jawab"] = this.tanggung_jawab;
        json["etika_sopansantun"] = this.etika_sopansantun;
        json["k3"] = this.k3;
        json["keterangan"] = this.keterangan;
        return json;
    }

    static parse(json) {
        let pp = new PenilaianProjek();
        pp.id_projek = json["id_projek"];
        pp.id_penilaian = json["id_penilaian"];
        pp.id_siswa = json["id_siswa"];
        pp.n_nformal = json["n_nformal"];
        pp.antusias = json["antusias"];
        pp.kejujuran = json["kejujuran"];
        pp.kreatifitas = json["kreatifitas"];
        pp.tanggung_jawab = json["tanggung_jawab"];
        pp.etika_sopansantun = json["etika_sopansantun"];
        pp.k3 = json["k3"];
        pp.keterangan = json["keterangan"];
        return pp;
    }
}
