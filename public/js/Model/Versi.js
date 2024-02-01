import Siswa from "./Siswa.js";
import Tugas from "./Tugas.js";
export default class Versi {
    constructor() {
        this.id;
        this.id_tugas;
        this.id_siswa;
        this.nomor_versi;
        this.nama;
        this.keterangan;
        this.lampiran;
        this.status;
        this.timestamp;
        this.siswa;
        this.controlled;
        this.tugas;
    }

    static find(id) {
        var versi = new Versi();
        $.ajax({
            url: "/versis/" + id,
            type: "GET",
            async: false,
            success: function (data) {
                versi = Versi.parse(data);
            },
        });
        return versi;
    }
    static parse(json) {
        var versi = new Versi();

        versi.id = json["id"];
        versi.id_tugas = json["id_tugas"];
        versi.id_siswa = json["id_siswa"];
        versi.nomor_versi = json["nomor_versi"];
        versi.nama = json["nama"];
        versi.keterangan = json["keterangan"];
        versi.lampiran = json["lampiran"];
        versi.status = json["status"];
        versi.timestamp = {
            created_at: json["created_at"],
            updated_at: json["updated_at"],
        };
        if (json["tugas"] != undefined) {
            versi.tugas = Tugas.parse(json["tugas"]);
        }
        if (json["siswa"] != undefined) {
            versi.siswa = Siswa.parse(json["siswa"]);
        }
        if (json["controlled"] != undefined) {
            versi.controlled = json["controlled"];
        }
        //versi.siswa = Siswa.find(versi.id_siswa);
        return versi;
    }
    static all(cb = null) {
        var versi = [];
        $.ajax({
            url: "/versis/",
            type: "GET",
            async: cb == null ? false : true,
            success: function (data) {
                versi = data.map(function (e) {
                    return Versi.parse(e);
                });
                if (cb != null) {
                    cb(versi);
                }
            },
        });
        return versi;
    }

    static byTugas(id, cb = null) {
        let versi = [];
        $.ajax({
            url: "/versis",
            data: {
                id_tugas: id,
            },
            type: "get",
            success: function (data) {
                versi = data.map(function (e) {
                    return Versi.parse(e);
                });

                if (typeof cb == "function") {
                    cb(data);
                }
            },
        });
    }

    toJson() {
        let json = [];
        json["id_tugas"] = this.id_tugas;
        json["id_siswa"] = this.id_siswa;
        json["nomor_versi"] = this.nomor_versi;
        json["nama"] = this.nama;
        json["keterangan"] = this.keterangan;
        json["lampiran"] = this.lampiran;
        json["status"] = this.status;
        return json;
    }

    simpan(cb = null, e = null) {
        console.log(e);
        var formdata = new FormData(e);

        formdata.append("id_tugas", this.id_tugas);
        formdata.append("id_siswa", this.id_siswa);
        formdata.append("nomor_versi", this.nomor_versi);
        formdata.append("nama", this.nama);
        formdata.append("keterangan", this.keterangan);
        formdata.append("status", this.status);

        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/versis",
            type: "post",
            data: formdata,
            processData: false,
            contentType: false,
            success: function (data) {
                if (cb != null) {
                    cb(data);
                }
                console.log(data);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    update(cb = null, e = null) {
        var formdata = new FormData(e);

        formdata.append("nama", this.nama);
        formdata.append("keterangan", this.keterangan);
        formdata.append("id", this.id);

        console.log("idnya: ");

        console.log(formdata);
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/versis/",
            type: "post",
            data: formdata,
            processData: false,
            contentType: false,
            success: function (data) {
                if (cb != null) {
                    cb(data);
                }
                console.log(data);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    static byProjek(id, cb = null) {
        var versi = [];
        $.ajax({
            url: "/versis/",
            type: "GET",
            data: {
                id_projek: id,
            },
            async: cb == null ? false : true,
            success: function (data) {
                versi = data.map(function (e) {
                    return Versi.parse(e);
                });
                if (cb != null) {
                    cb(versi);
                }
            },
        });
        return versi;
    }

    changeStatus(status, cb) {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/versis/" + this.id,
            type: "put",
            data: {
                status: status,
            },
            success: function (data) {
                cb(data);
            },
        });
    }

    static byTugasDanSiswa(idtugas, idsiswa, cb) {
        $.ajax({
            url: "/versis/",
            data: {
                byTugasDanSiswa: 1,
                id_siswa: idsiswa,
                id_tugas: idtugas,
            },
            type: "get",
            success: function (data) {
                let versi = data.map(function (e) {
                    return Versi.parse(e);
                });
                cb(versi);
            },
        });
    }

    hapus(cb) {
        $.ajax({
            url: "/versis/" + this.id,
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            type: "delete",
            success: function (data) {
                cb();
            },
        });
    }
}
