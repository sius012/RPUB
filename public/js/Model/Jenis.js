import Jurusan from "./Jurusan.js";

export default class Jenis {
    constructor() {
        this.id;
        this.nama;
        this.keterangan;
        this.tipe;
        this.id_jurusan;
        this.jurusan;
    }

    static find(id, cb = null) {
        var jenis = new Jenis();
        $.ajax({
            url: "/jenis/" + id,
            type: "GET",
            async: cb == null ? false : true,
            success: function (data) {
                jenis = Jenis.parse(data);
                if (cb != null) {
                    cb(jenis);
                }
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
        jenis.keterangan = json["keterangan"];
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

    toJson() {
        let json = {};
        json["nama"] = this.nama;
        json["keterangan"] = this.keterangan;
        json["tipe"] = this.tipe;
        json["id_jurusan"] = this.id_jurusan;
        return json;
    }

    simpan(cb, e) {
        const formdata = new FormData(e);

        formdata.append("nama", this.nama);
        formdata.append("keterangan", this.keterangan);
        formdata.append("id_jurusan", this.id_jurusan);
        formdata.append("tipe", this.tipe);

        if (this.id != undefined) {
            formdata.append("id", this.id);
        }

        console.log(formdata);

        let type = this.id == undefined ? "post" : "put";
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/jenis",
            data: formdata,
            processData: false,
            contentType: false,
            type: "post",
            success: function (data) {
                cb(data);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }
}
