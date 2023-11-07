export default class Angkatan {
    constructor() {
        this.id_angkatan;
        this.keterangan;
        this.kelas;
        this.dari;
        this.sampai;
        this.timestamp;
    }

    static find(id) {
        var angkatan = new Angkatan();
        $.ajax({
            url: "/angkatan/" + id,
            type: "GET",
            async: false,
            success: function (data) {
                angkatan = Angkatan.parse(data);
            },
        });
        return angkatan;
    }
    static parse(json) {
        var angkatan = new Angkatan();

        angkatan.id_angkatan = json["id_angkatan"];
        angkatan.keterangan = json["keterangan"];
        angkatan.dari = json["dari"];
        angkatan.sampai = json["sampai"];
        angkatan.kelas = json["kelas"];
        angkatan.timestamp = {
            created_at: json["created_at"],
            updated_at: json["updated_at"],
        };
        return angkatan;
    }
    static all() {
        var angkatan = [];
        $.ajax({
            url: "/angkatan/",
            type: "GET",
            async: false,
            success: function (data) {
                angkatan = data.map(function (e) {
                    return Angkatan.parse(e);
                });
            },
        });
        return angkatan;
    }

    toJson() {
        var json = {};
        json["id_angkatan"] = this.id_angkatan;
        json["keterangan"] = this.keterangan;
        json["dari"] = this.dari;
        json["sampai"] = this.sampai;
        return json;
    }

    simpan() {
        $.ajax({
            headers: {
                "X=CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/angkatan",
            data: this.toJson(),
            type: "post",
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    static getClass(cb) {
        const ctx = this;
        $.ajax({
            url: "/angkatan",
            data: {
                activeClass: 1,
            },
            type: "get",
            success: function (data) {
                let parsed = data.map(function (e) {
                    return Angkatan.parse(e);
                });
                cb(parsed);
            },
        });
    }
}
