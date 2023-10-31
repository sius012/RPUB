export default class Jenis {
    constructor() {
        this.id;
        this.nama;
        this.tipe;
        this.id_jurusan;
        this.icon;
    }

    static find(id) {
        var jenis = new Jenis();
        $.ajax({
            url: "/jenis/" + id,
            type: "GET",
            async: false,
            success: function (data) {
                jenis = Jenis.parse(data);
            },
        });
        return jenis;
    }

    static byJurusan(id) {
        var jenis = [];
        $.ajax({
            url: "/jenis",
            type: "GET",
            async: false,
            data: {
                id_jurusan: id,
            },
            success: function (data) {
                jenis = data.map(function (e) {
                    return Jenis.parse(e);
                });
            },
        });
        return jenis;
    }

    static byProjek(id, cb) {
        var jenis = [];
        $.ajax({
            url: "/jenis",
            type: "GET",
            data: {
                id_projek: id,
            },
            success: function (data) {
                jenis = data.map(function (e) {
                    return Jenis.parse(e);
                });
                cb(jenis);
            },
        });
        return jenis;
    }
    static parse(json) {
        var jenis = new Jenis();
        jenis.id = json["id"];
        jenis.nama = json["nama"];
        jenis.tipe = json["tipe"];
        jenis.id_jurusan = json["id_jurusan"];
        jenis.icon = json["icon"];
        return jenis;
    }
    static all() {
        var jenis = [];
        $.ajax({
            url: "/jenis/",
            type: "GET",
            async: false,
            success: function (data) {
                jenis = data.map(function (e) {
                    return Jenis.parse(e);
                });
            },
        });
        return jenis;
    }
}
