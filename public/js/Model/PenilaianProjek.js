export default class PenilaianProjek {
    constructor() {
        this.id;
        this.id_tugas;
        this.id_siswa;

        this.penilaian_non_formal;
        this.penilaian_informal;
    }

    static find(id) {
        var pp = new PenilaianProjek();
        $.ajax({
            url: "/penilaianprojek/" + id,
            type: "GET",
            async: false,
            success: function (data) {
                pp = PenilaianProjek.parse(data);
                console.log(id);
            },
        });
        return pp;
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
                console.log(data);
                if (cb != null) {
                    cb(data);
                }
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    update(cb) {
        const ctx = this;
        let json = this.toJson();
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/penilaianprojek/" + ctx.id,
            data: json,
            type: "put",
            success: function (data) {
                console.log(data);
                if (cb != null) {
                    cb(data);
                }
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    toJson() {
        let json = {};

        if (this.id != undefined) {
        }
        json["id_tugas"] = this.id_tugas;
        json["id_siswa"] = this.id_siswa;

        json["penilaian_non_formal"] = this.penilaian_non_formal.map(function (
            e
        ) {
            let data = { indikator: e.id_tugas, nilai: e.nilai };
            if (e.id != undefined) {
                data.id = e.id;
            }
            return data;
        });

        json["penilaian_informal"] = {
            inisiatif: this.penilaian_informal.inisiatif,
            antusias: this.penilaian_informal.antusias,
            kejujuran: this.penilaian_informal.kejujuran,
            kreativitas: this.penilaian_informal.kreativitas,
            tanggung_jawab: this.penilaian_informal.tanggung_jawab,
            komunikasi: this.penilaian_informal.komunikasi,
            kedisiplinan: this.penilaian_informal.kedisiplinan,
            etika_sopansantun: this.penilaian_informal.etika_sopansantun,
            k3: this.penilaian_informal.k3,
        };

        if (this.penilaian_informal.id != undefined) {
            json["penilaian_informal"].id = this.penilaian_informal.id;
        }
        return json;
    }

    static parse(json) {
        let pp = new PenilaianProjek();
        console.log("datahasilparse");
        pp.id = json["id"];
        pp.id_tugas = json["id_tugas"];
        pp.id_siswa = json["id_siswa"];
        pp.id_penilaian = json["id_penilai"];
        pp.penilaian_informal = json["penilaian_informal"];
        pp.penilaian_non_formal = json["penilaian_non_formal"];
        return pp;
    }

    hapus(cb) {
        $.ajax({
            url: "/penilaianprojek/" + this.id,
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            type: "delete",
            success: function () {
                cb();
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }
}
