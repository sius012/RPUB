import PenilaianProjek from "./PenilaianProjek.js";
import Siswa from "./Siswa.js";
import Tugas from "./Tugas.js";
export default class Penugasan {
    constructor() {
        this.id;
        this.id_tugas;
        this.id_siswa;
        this.id_penugas;
        this.keterangan;
        this.siswa;
        this.timestamp;
        this.tugas = null;
        this.penilaian = null;
    }

    static find(id) {
        var penugasan = new Penugasan();
        $.ajax({
            url: "/penugasan/" + id,
            type: "GET",
            async: false,
            success: function (data) {
                penugasan = Penugasan.parse(data);
            },
        });
        return jurusan;
    }
    static parse(json) {
        var penugasan = new Penugasan();

        penugasan.id = json["id"];
        penugasan.id_siswa = json["id_siswa"];
        penugasan.id_tugas = json["id_tugas"];
        penugasan.id_tugas = json["id_tugas"];
        if (json["siswa"] != undefined) {
            penugasan.siswa = Siswa.parse(json["siswa"]);
        }
        if (json["tugas"] != undefined) {
            penugasan.tugas = Tugas.parse(json["tugas"]);
        }
        if (json["penilaian"] != undefined) {
            penugasan.penilaian = json["penilaian"].map(function (e) {
                return PenilaianProjek.parse(e);
            });
        }
        return penugasan;
    }
    static all() {
        var penugasan = [];
        $.ajax({
            url: "/penugasan/",
            type: "GET",
            async: false,
            success: function (data) {
                penugasan = data.map(function (e) {
                    return Penugasan.parse(e);
                });
            },
        });
        return penugasan;
    }

    toJson() {
        let json = {};
        json["id_siswa"] = this.id_siswa;
        json["id_tugas"] = this.id_tugas;
        json["id_penugas"] = this.id_penugas;
        json["keterangan"] = this.keterangan;
        return json;
    }

    simpan(cb = null) {
        let ctx = this;
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/penugasan",
            type: "post",
            data: this.toJson(),
            async: cb != null ? true : false,
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

    static tambahPenugasan(siswa, tugas, cb = function () {}) {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/penugasan",
            type: "post",
            data: {
                siswa: siswa,
                tugas: tugas,
            },
            async: false,
            success: function (data) {
                console.log(data);
                cb(data);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    static byTugas(id, cb = null) {
        let penugasan = [];
        $.ajax({
            url: "/penugasan",
            type: "GET",
            data: {
                id_tugas: id,
            },
            success: function (data) {
                penugasan = data.map((element) => {
                    return Penugasan.parse(element);
                });
                if (cb != null) {
                    cb(penugasan);
                }
            },
        });

        return penugasan;
    }
}
