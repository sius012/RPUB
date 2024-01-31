class Tugas {
    constructor() {
        this.id_tugas;
        this.nama;
        this.keterangan;
        this.id_projek;
        this.id_parent;
        this.tanggal_awal;
        this.tanggal_akhir;
        this.status;
        this.id_kategori;
        this.created_at;
        this.updated_at;
        this.children = [];
        this.indent_level;
        this.tipe;
        this.nilai_max;
        this.tugasCount;
        this.tugasStatusArr = [];
    }

    static byProjek(id) {
        //mengambil data tugas-tugas dar id projek
        var projekList = [];
        $.ajax({
            url: "/tugas/",
            type: "GET",
            data: {
                id_projek: id,
            },
            async: false,
            success: function (data) {
                data.forEach((element) => {
                    projekList.push(Tugas.rekursifParse(element, 1));
                });
            },
        });
        return projekList;
    }
    static parse(json) {
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
            if (Array.isArray(json["tugasStatusArr"])) {
                for (var i in json["tugasStatusArr"]) {
                    tugas.tugasStatusArr.push([i, json["tugasStatusArr"][i]]);
                }
            } else {
                tugas.tugasStatusArr = json["tugasStatusArr"];
            }
        } else {
        }

        if (json["nilai_max"] != undefined) {
            tugas.nilai_max = json["nilai_max"];
        }

        return tugas;
    }
    static rekursifParse(json, indentLevel) {
        //mirip seperti yang diatas,namun bedanya ini untuk membaca children
        var tugas = Tugas.parse(json);
        tugas.indent_level = indentLevel;
        json["children"].forEach((element) => {
            tugas.children.push(Tugas.rekursifParse(element, indentLevel + 1));
        });
        return tugas;
    }
    toJson() {
        var json = {};
        json["id_parent"] = this.id_parent;
        json["id_projek"] = this.id_projek;
        json["nama"] = this.nama;
        json["keterangan"] = this.keterangan;
        json["tanggal_awal"] = this.tanggal_awal;
        json["tangggal_akhir"] = this.tanggal_akhir;
        json["id_kategori"] = this.id_kategori;
        json["nilai_max"] = this.nilai_max;

        return json;
    }
    simpan() {
        var ctx = this;
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/tugas",
            type: "post",
            data: ctx.toJson(),
            success: function (data) {},
            error: function (err) {
                alert(err.responseText);
            },
        });
    }
}
