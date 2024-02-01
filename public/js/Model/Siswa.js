import Projek from "../Model/Projek.js";
import Jurusan from "../Model/Jurusan.js";
import PenilaianProjek from "./PenilaianProjek.js";
import Penugasan from "./Penugasan.js";
import Angkatan from "./Angkatan.js";
export default class Siswa {
    constructor() {
        this.id;
        this.nis;
        this.nama;
        this.jk;
        this.id_angkatan;
        this.id_jurusan;
        this.kelas;
        this.fotoprofil;
        this.password;
        this.email;
        this.ikut_penugasan;
        this.list_projek = [];
        this.kelasDanJurusan;
        this.jurusan;
        this.penilaianProjek = null;
        this.penilaian_projek_rapor;
    }

    static byQuery(query, cb) {
        query.byQuery = "yes";
        console.log(query);
        let siswa = [];
        $.ajax({
            url: "/siswa",
            data: query,
            type: "get",
            success: function (data) {
                siswa = data.map(function (e) {
                    return Siswa.parse(e);
                });
                cb(siswa);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    static find(id, params = {}) {
        var siswa = new Siswa();
        let data = { projek_semester: params.projek_semester };
        $.ajax({
            url: "/siswa/" + id,
            type: "GET",
            data: data,
            async: params.cb != undefined ? true : false,
            success: function (data) {
                siswa = Siswa.parse(data);
                console.log("newdata");
                console.log(siswa);
                if (params.cb != undefined) {
                    params.cb(siswa);
                }
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
        return siswa;
    }

    toJson() {
        let json = {};
        json["id"] = this.id;
        json["nis"] = this.nis;
        json["nama"] = this.nama;
        json["jk"] = this.jk;
        json["id_angkatan"] = this.id_angkatan;
        json["id_jurusan"] = this.id_jurusan;
        json["kelas"] = this.kelas;
        json["fotoprofil"] = this.fotoprofil;
        json["email"] = this.email;
        json["password"] = this.password;
    }
    static parse(json) {
        var siswa = new Siswa();

        siswa.id = json["id"];
        siswa.nis = json["nis"];
        siswa.nama = json["nama"];
        siswa.jk = json["jk"];
        siswa.id_angkatan = json["id_angkatan"];
        siswa.id_jurusan = json["id_jurusan"];
        siswa.kelas = json["kelas"];
        siswa.fotoprofil = json["fotoprofil"];
        siswa.password = json["password"];
        siswa.email = json["email"];
        siswa.kelasDanJurusan = json["kelasDanJurusan"];

        if (json["ikut_penugasan"]) {
            siswa.ikut_penugasan = json["ikut_penugasan"];
        }

        if (json["jurusan"] != undefined) {
            siswa.jurusan = Jurusan.parse(json["jurusan"]);
        }

        if (json["angkatan"] != undefined) {
            siswa.angkatan = Angkatan.parse(json["angkatan"]);
        }

        if (json["penilaianProjek"] != undefined) {
            siswa.penilaianProjek = PenilaianProjek.parse(
                json["penilaianProjek"]
            );
        }

        if (json["penilaian_projek_rapor"] != undefined) {
            siswa.penilaian_projek_rapor = json["penilaian_projek_rapor"];
        }

        return siswa;
    }
    static all() {
        var siswa = [];
        $.ajax({
            url: "/siswa/",
            type: "GET",
            async: false,
            success: function (data) {
                siswa = data.map(function (e) {
                    return Siswa.parse(e);
                });
            },
        });
        return siswa;
    }

    getListProjek(cb) {
        const ctx = this;
        console.log(this);
        $.ajax({
            url: "/siswa/" + ctx.id,
            data: {
                withProjek: 1,
            },
            type: "get",
            success: function (data) {
                console.log(data);
                ctx.list_projek = data.map(function (e) {
                    return Projek.parse(e, { withEtc: true });
                });

                cb(ctx.list_projek);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    getFotoProfil() {
        return "/img/profilsiswa/" + this.fotoprofil;
    }

    simpan(cb = null, e = null) {
        let ctx = this;
        var formdata = new FormData(e);
        console.log(formdata);

        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/siswa",
            type: "post",
            data: formdata,
            processData: false,
            contentType: false,
            success: function (data) {
                if (cb != null) {
                    cb(data);
                }
                console.log(data);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    static importFromRaporKarakter(cb) {
        Swal.showLoading();
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/api/siswa",
            type: "post",
            success: function (data) {
                if (data["keterangan"] == "berhasil") {
                    cb();
                } else {
                    // alert("");
                }
            },
        });
    }

    static filter(query, cb) {
        console.log(query);
        let siswa = [];
        $.ajax({
            url: "/siswa",
            data: query,
            type: "get",
            success: function (data) {
                siswa = data.map(function (e) {
                    return Siswa.parse(e);
                });
                cb(siswa);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    tugasByProjek(id_projek, cb) {
        $.ajax({
            url: "/siswa/" + this.id,
            data: {
                tugasByProjek: 1,
                id_projek: id_projek,
            },
            type: "get",
            success: function (data) {
                let penugasan = data.penugasan.map(function (e) {
                    return Penugasan.parse(e);
                });
                cb(penugasan);
            },
        });
    }

    getUrl() {
        return (
            "/pages/siswa/" +
            this.id_jurusan +
            "/" +
            this.id_angkatan +
            "/" +
            this.id
        );
    }

    getKelasDanJurusan() {
        let ctx = this;
        let kelasDanJurusan = "";
        $.ajax({
            url: "/siswa/" + this.id,
            type: "get",
            data: {
                kelasDanJurusan: 1,
            },
            async: false,
            success: function (data) {
                ctx.kelasDanJurusan = data;
                kelasDanJurusan = data;
            },
        });
        return kelasDanJurusan;
    }
}
