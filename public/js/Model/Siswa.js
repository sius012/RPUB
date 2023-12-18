import Projek from "../Model/Projek.js";
import Jurusan from "../Model/Jurusan.js";
import PenilaianProjek from "./PenilaianProjek.js";
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
                alert("teds");
                cb(siswa);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    static find(id) {
        var siswa = new Siswa();
        $.ajax({
            url: "/siswa/" + id,
            type: "GET",
            async: false,
            success: function (data) {
                siswa = Siswa.parse(data);
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

        if (json["penilaianProjek"] != undefined) {
            siswa.penilaianProjek = PenilaianProjek.parse(
                json["penilaianProjek"]
            );
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
                ctx.list_projek = data.map(function (e) {
                    return Projek.parse(e, { withEtc: true });
                });
                console.log(data);

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
}
