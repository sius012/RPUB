import Jurusan from "./Jurusan.js";
import Siswa from "./Siswa.js";
import User from "./User.js";

export default class Projek {
    constructor() {
        this.id;
        this.nama;
        this.tanggal_awal;
        this.tanggal_akhir;
        this.penanggung_jawab;
        this.jenis_projek;
        this.klien;
        this.deskripsi;
        this.status;
        this.pembuat;
        this.lokasi_projek;
        this.id_jurusan = [];
        this.image;
        this.jurusan = [];
        this.partisipan = [];
        this.etc = {};
    }

    static find(id, params = { partisipan: false }) {
        var projek = new Projek();
        $.ajax({
            url: "/projek/" + id,
            type: "GET",
            data: {
                partisipan: params.partisipan == true ? 1 : 0,
            },
            async: false,
            success: function (data) {
                projek = Projek.parse(data);
            },
        });
        return projek;
    }

    static parse(json, params = { withEtc: false }) {
        var projek = new Projek();

        projek.id = json["id"];
        projek.nama = json["nama"];
        projek.tanggal_awal = json["tanggal_awal"];
        projek.tanggal_akhir = json["tanggal_akhir"];
        projek.jenis_projek = json["jenis_projek"];
        projek.klien = json["klien"];
        projek.deskripsi = json["deskripsi"];
        projek.status = json["status"];
        projek.pembuat = json["pembuat"];
        projek.id_jurusan = json["id_jurusan"];
        projek.lokasi_projek = json["lokasi_projek"];
        if (json["penanggung_jawab"] != undefined) {
            projek.penanggung_jawab = User.parse(json["penanggung_jawab"]);
        }

        if (json["image"] != undefined) {
            projek.image = json["image"];
        }

        if (params.withEtc == true) {
            projek.etc["jumlah_tugas"] = json["xjumlah_tugas"];
            projek.etc["tugas_selesai"] = json["tugas_selesai"];
            projek.etc["proses"] = json["proses"];
        }

        if (json["partisipan"] != undefined) {
            projek.partisipan = json["partisipan"].map(function (e) {
                return Siswa.parse(e);
            });
        }

        if (json["projek_jurusan"] != undefined) {
            projek.jurusan = json["projek_jurusan"].map(function (e) {
                return Jurusan.parse(e["jurusan"]);
            });
        }

        if (json["id_penanggung_jawab"] != undefined) {
            projek.id_penanggung_jawab = json["id_penanggung_jawab"];
        }

        if (json["nominal"] != undefined) {
            projek.nominal = json["nominal"];
        }
        return projek;
    }
    static all(params) {
        var projek = [];
        $.ajax({
            url: "/projek",
            type: " ",
            async: params.cb == undefined ? false : true,
            success: function (data) {
                projek = data.map(function (e) {
                    return Projek.parse(e);
                });
                if (params.cb != undefined) {
                    params.cb(projek);
                }
            },
        });
        return projek;
    }

    toJson() {
        var json = {};
        if (this.id != undefined) {
            json["id"] = this.id;
        }
        json["nama"] = this.nama;
        json["tanggal_awal"] = this.tanggal_awal;
        json["tanggal_akhir"] = this.tanggal_akhir;
        json["id_penanggung_jawab"] = this.id_penanggung_jawab;
        json["jenis_projek"] = this.jenis_projek;
        json["klien"] = this.klien;
        json["deskripsi"] = this.deskripsi;
        json["status"] = this.status;
        json["id_jurusan"] = this.id_jurusan;
        json["id_pembuat"] = 0;
        json["lokasi_projek"] = this.lokasi_projek;
        if (json["jenis_projek"] == "Projek Eksternal") {
            json["nominal"] = this.nominal;
        }
        return json;
    }

    simpan(params = null) {
        console.log(this.toJson());
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/projek",
            type: "post",
            data: this.toJson(),
            async: false,
            success: function (response) {
                console.log(response);
                if (params.cb != undefined) {
                    params.cb(response);
                }
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
        if (params != null) {
            if (params.withJurusan == true) {
                this.simpanJurusan();
            }
        }
    }

    arsipan(cb) {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/projek/" + this.id,
            type: "delete",
            success: function () {
                Swal.fire("Data berhasil diarsipkan");
                cb();
            },
        });
    }

    static byJurusan(id) {
        var projek = [];
        $.ajax({
            url: "/projek",
            type: "GET",
            data: {
                id_jurusan: id,
            },
            async: false,
            success: function (data) {
                data.forEach((element) => {
                    projek.push(Projek.parse(element));
                });
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
        console.log(projek);
        return projek;
    }

    static bySiswa(id, cb = null) {
        var projek = [];
        $.ajax({
            url: "/projek",
            type: "GET",
            data: {
                id_siswa: id,
            },
            async: cb == null ? false : true,
            success: function (data) {
                data.forEach((element) => {
                    projek.push(Projek.parse(element));
                });

                if (cb != null) cb(projek);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
        console.log(projek);
        return projek;
    }

    static byRole(cb) {
        var projek = [];
        $.ajax({
            url: "/projek",
            type: "GET",
            data: { byRole: 1 },
            success: function (data) {
                projek = data.map(function (e) {
                    return Projek.parse(e);
                });
                cb(projek);
            },
        });
        return projek;
    }
}
