import Jurusan from "./Jurusan.js";

export default class Jenis {
    constructor() {
        this.id;
        this.nama;
        this.tipe;
        this.id_jurusan;
        this.jurusan;
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
        if (json["jurusan"] != undefined) {
            jenis.jurusan = Jurusan.parse(json["jurusan"]);
        }
        return jenis;
    }
    static all(params = {}) {
        var jenis = [];
        $.ajax({
            url: "/jenis/",
            type: "GET",
            async: false,
            data: params,
            success: function (data) {
                jenis = data.map(function (e) {
                    return Jenis.parse(e);
                });
            },
        });
        return jenis;
    }

    icon() {
        let type = this.tipe == "grup" ? "grup.png" : "task.png";
        return "/img/icons/jenis/" + type;
    }
}
