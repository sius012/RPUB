import Jenis from "./Jenis.js";
import pageSetup from "../Component/PageSetup.js";
import Penugasan from "./Penugasan.js";
import Siswa from "./Siswa.js";
export default class Tugas {
    constructor() {
        this.id_tugas;
        this.nama;
        this.keterangan;
        this.id_projek;
        this.id_parent;
        this.tanggal_awal;
        this.tanggal_akhir;
        this.status;
        this.created_at;
        this.updated_at;
        this.children = [];
        this.indent_level;
        this.tipe;
        this.tugasCount;
        this.tugasStatusArr = [];
        this.statusArr = [];
        this.nilai_max = null;
        this.data_jenis;
        this.partisipan;
    }

    static find(id, params = { jenis: false }) {
        var tugas = new Tugas();
        $.ajax({
            url: "/tugas/" + id,
            type: "GET",
            async: false,
            success: function (data) {
                tugas = Tugas.parse(data, params);
            },
        });
        pageSetup.tambahCacheTugas(tugas);
        return tugas;
    }

    static byProjek(id, params = { rekursif: true }) {
        //mengambil data tugas-tugas dar id projek]
        var projekList = [];
        $.ajax({
            url: "/tugas/",
            type: "GET",
            data: {
                id_projek: id,
            },
            async: false,
            success: function (data) {
                if (params.rekursif == true) {
                    data.forEach((element) => {
                        let tugas = Tugas.rekursifParse(element, 1);
                        projekList.push(tugas);
                    });
                } else {
                    let current = data;
                    let parentsAndChildren = current.flatMap((parent) => [
                        parent,
                        ...parent.children.map((child) => child),
                    ]);
                    console.log("datanya:");
                    console.log(parentsAndChildren);
                    projekList = parentsAndChildren;
                }
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
        return projekList;
    }
    static parse(json, params = { jenis: false, partisipan: false }) {
        //mengubah data json menjadi objek tugas
        var tugas = new Tugas();

        tugas.id_tugas = json["id"];
        tugas.nama = json["nama"];
        tugas.keterangan = json["keterangan"];
        tugas.id_projek = json["id_projek"];
        tugas.id_parent = json["id_parent"];
        tugas.tanggal_awal = json["tanggal_awal"];
        tugas.tanggal_akhir = json["tanggal_akhir"];
        tugas.status = json["status"];
        tugas.id_kategori = json["id_kategori"];
        tugas.created_at = json["created_at"];
        tugas.updated_at = json["updated_at"];
        tugas.tugasCount = json["tugasCount"];
        if (json["tugasStatusArr"] != undefined) {
            tugas.tugasStatusArr = json["tugasStatusArr"];
            tugas.statusArr = json["statusArr"];
        } else {
        }

        if (params.partisipan == true) {
            tugas.partisipan = Penugasan.byTugas(tugas.id);
        }

        if (json["image"] != undefined) {
            tugas.image = json["image"];
        }
        if (json["nilai_max"] != null) {
            tugas.nilai_max = json["nilai_max"];
        }
        tugas.tipe = json["tipe"];

        return tugas;
    }
    static rekursifParse(json, indentLevel) {
        //mirip seperti yang diatas,namun bedanya ini untuk membaca children
        var tugas = Tugas.parse(json, { jenis: true });
        pageSetup.tambahCacheTugas(tugas);
        tugas.indent_level = indentLevel;
        json["children"].forEach((element) => {
            tugas.children.push(Tugas.rekursifParse(element, indentLevel + 1));
        });
        return tugas;
    }
    toJson() {
        console.log("datanya");
        console.log(this);
        var json = {};
        json["id_parent"] = this.id_parent;
        json["id_projek"] = this.id_projek;
        json["nama"] = this.nama;
        json["keterangan"] = this.keterangan;
        json["tanggal_awal"] = this.tanggal_awal;
        json["tanggal_akhir"] = this.tanggal_akhir;
        json["status"] = this.status;
        json["tipe"] = this.tipe;
        if (this.nilai_max != null) {
            json["nilai_max"] = this.nilai_max;
        }
        console.log(json);
        return json;
    }
    simpan() {
        var ctx = this;
        console.log(ctx.toJson());
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/tugas",
            type: "post",
            data: ctx.toJson(),
            success: function (data) {
                console.log(data);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    update(cb) {
        let ctx = this;
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/tugas/" + this.id_tugas,
            type: "put",
            data: ctx.toJson(),
            success: function (data) {
                console.log(data);
                cb(data);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    duplikat(cb = null) {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/tugas",
            type: "post",
            data: {
                id: this.id_tugas,
                duplikat: 1,
            },
            success: function (data) {
                if (cb != null) {
                    cb(data);
                }
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    changeStatus(status) {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/tugas/" + this.id_tugas,
            data: {
                status: status,
            },
            type: "put",
            success: function () {},
        });
    }

    hapus(cb = null) {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/tugas/" + this.id_tugas,
            type: "delete",
            success: function (data) {
                console.log(data);
                if (cb != null) {
                    cb();
                }
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    static getTaskBoard(id_siswa, status, cb = null) {
        let tugas = [];
        $.ajax({
            url: "/gettaskboardstudent",
            type: "get",
            data: {
                id_siswa: id_siswa,
                status: status,
            },
            async: cb != null ? true : false,
            success: function (data) {
                console.log(data);
                tugas = data.map((e) => Tugas.parse(e));
                tugas.forEach(function (e) {
                    pageSetup.tambahCacheTugas(e);
                });
                cb(tugas);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
        return tugas;
    }

    getVersionImage(cb) {
        let ctx = this;
        $.ajax({
            url: "/tugas/" + ctx.id_tugas,
            type: "get",
            data: {
                params: "version_image",
            },
            success: function (data) {},
        });
    }

    getIndikator(cb) {
        $.ajax({
            url: "/tugas/" + this.id_tugas,
            data: {
                getIndikator: 1,
            },
            type: "get",
            success: function (data) {
                let indikator = data.map(function (e) {
                    return Tugas.parse(e);
                });
                cb(indikator);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    getPartisipan(cb) {
        let ctx = this;
        $.ajax({
            url: "/tugas/" + this.id_tugas,
            data: {
                partisipan: 1,
            },
            type: "get",
            success: function (data) {
                console.log(data);
                let partisipan = data["penugasan"].map(function (e) {
                    return Siswa.parse(e["siswa"]);
                });
                ctx.partisipan = partisipan;
                cb(partisipan);
            },
        });
    }
}
