export default class Siswa {
    constructor() {
        this.id;
        this.nis;
        this.nama;
        this.jk;
        this.id_angkatan;
        this.id_jurusan;
        this.kelas;
        this.foto_profil;
        this.password;
        this.email;
        this.ikut_penugasan;
    }

    static byQuery(query, cb) {
        query.byQuery = "yes";
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
    static parse(json) {
        var siswa = new Siswa();

        siswa.id = json["id"];
        siswa.nis = json["nis"];
        siswa.nama = json["nama"];
        siswa.jk = json["jk"];
        siswa.id_angkatan = json["id_angkatan"];
        siswa.id_jurusan = json["id_jurusan"];
        siswa.kelas = json["kelas"];
        siswa.foto_profil = json["foto_profil"];
        siswa.password = json["password"];
        siswa.email = json["email"];

        if (json["ikut_penugasan"]) {
            siswa.ikut_penugasan = json["ikut_penugasan"];
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
}
