import Jurusan from "./Jurusan.js";
import Siswa from "./Siswa.js";

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
        projek.penanggung_jawab = json["penanggung_jawab"];
        projek.jenis_projek = json["jenis_projek"];
        projek.klien = json["klien"];
        projek.deskripsi = json["deskripsi"];
        projek.status = json["status"];
        projek.pembuat = json["pembuat"];
        projek.id_jurusan = json["id_jurusan"];

        if (json["image"] != undefined) {
            projek.image = json["image"];
        }

        if (params.withEtc == true) {
            projek.etc["jumlah_tugas"] = json["jumlah_tugas"];
            projek.etc["tugas_selesai"] = json["tugas_selesai"];
            projek.etc["proses"] = json["proses"];
        }

        if (json["partisipan"] != undefined) {
            projek.partisipan = json["partisipan"].map(function (e) {
                return Siswa.parse(e);
            });
        }

        if (json["jurusan"] != undefined) {
            this.jurusan = json["jurusan"].map(function (e) {
                return Jurusan.parse(e);
            });
        }

        return projek;
    }
    static all() {
        var projek = [];
        $.ajax({
            url: "/projek",
            type: "GET",
            async: false,
            success: function (data) {
                projek = data.map(function (e) {
                    return Projek.parse(e);
                });
            },
        });
        return projek;
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

    toJson() {
        var json = {};
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
        return json;
    }

    simpan(params = null) {
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
}
