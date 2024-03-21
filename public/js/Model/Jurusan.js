import User from "./User.js";

export default class Jurusan {
    constructor() {
        this.id;

        this.jurusan;

        this.keterangan;

        this.timestamp;

        this.jumlah_projek = [];

        this.jumlah_siswa;

        this.siswa_aktif_projek;

        this.siswa_nonaktif_projek;
    }

    static find(id) {
        var jurusan = new Jurusan();

        $.ajax({
            url: "/jurusan/" + id,

            type: "GET",

            async: false,

            success: function (data) {
                jurusan = Jurusan.parse(data);
            },
        });

        return jurusan;
    }

    static parse(json) {
        var jurusan = new Jurusan();

        jurusan.id = json["id"];

        jurusan.jurusan = json["jurusan"];

        jurusan.keterangan = json["keterangan"];

        jurusan.timestamp = {
            created_at: json["created_at"],

            updated_at: json["updated_at"],
        };

        if (json["jumlah_projek"] != undefined) {
            jurusan.jumlah_projek = json["jumlah_projek"];
        }

        if (json["jumlah_siswa"] != undefined) {
            jurusan.jumlah_siswa = json["jumlah_siswa"];
        }

        if (json["siswa_aktif_projek"] != undefined) {
            jurusan.siswa_aktif_projek = json["siswa_aktif_projek"];
        }

        return jurusan;
    }

    1;

    toJson() {
        let json = {};

        json["jurusan"] = this.jurusan;

        json["keterangan"] = this.keterangan;

        if (this.id != undefined) {
            json["id"] = this.id;
        }

        return json;
    }

    static all(params = null, cb = null) {
        var jurusan = [];

        $.ajax({
            url: "/jurusan/",

            type: "GET",

            async: cb != null ? true : false,

            data: params != null ? params : {},

            success: function (data) {
                console.log(data);

                jurusan = data.map(function (e) {
                    return Jurusan.parse(e);
                });

                if (cb != null) {
                    cb(jurusan);
                }
            },

            error: function (err) {
                alert(err.responseText);
            },
        });

        return jurusan;
    }

    simpan(cb) {
        let type = this.id == undefined ? "post" : "put";

        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },

            url: "/jurusan" + (type == "post" ? "" : "/" + this.id),

            data: this.toJson(),

            type: type,

            success: function (data) {
                console.log(data);

                cb(data);
            },

            error: function (err) {
                alert(err.responseText);
            },
        });
    }
}
