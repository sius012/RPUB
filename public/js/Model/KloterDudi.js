import Siswa from "./Siswa.js";
import SiswaMagangDudi from "./SiswaMagangDudi.js";

export default class KloterDudi {
    constructor() {
        this.id;
        this.id_dunia_industri;
        this.nama;
        this.tanggal_mulai;
        this.tanggal_selesai;
        this.timestamps = {
            created_at: null,
            updated_at: null,
        };
    }

    static parse(json) {
        let kloterDudi = new KloterDudi();
        kloterDudi.id = json["id"];
        kloterDudi.id_dunia_industri = json["id_dunia_industri"];
        kloterDudi.nama = json["nama"];
        kloterDudi.tanggal_mulai = json["tanggal_mulai"];
        kloterDudi.tanggal_selesai = json["tanggal_selesai"];
        kloterDudi.timestamps = {
            created_at: json["created_at"],
            updated_at: json["updated_at"],
        };
        return kloterDudi;
    }

    static byDudi(id_dudi, cb) {
        let kloterDudi = [];
        $.ajax({
            url: "/kloterdudi",
            data: {
                id_dudi: id_dudi,
            },
            type: "get",
            success: function (data) {
                kloterDudi = data.map(function (e) {
                    return KloterDudi.parse(e);
                });
                cb(kloterDudi);
            },
        });
    }

    static find(id) {
        let kloterDudi = null;
        $.ajax({
            url: "/kloterdudi/" + id,
            type: "get",
            async: false,
            success: function (data) {
                kloterDudi = KloterDudi.parse(data);
            },
        });
        return kloterDudi;
    }

    toJson() {
        let json = {};
        json["id_dunia_industri"] = this.id_dunia_industri;
        json["nama"] = this.nama;
        json["tanggal_mulai"] = this.tanggal_mulai;
        json["tanggal_selesai"] = this.tanggal_selesai;

        return json;
    }

    simpan(cb) {
        console.log(this.toJson());
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/kloterdudi",
            type: "post",
            data: this.toJson(),
            success: function (data) {
                cb(KloterDudi.parse(data));
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    siswaKloter(cb) {
        $.ajax({
            url: "/kloterdudi/" + this.id,
            type: "get",
            data: {
                siswaKloter: 1,
            },
            success: function (data) {
                let siswakloter = data.map(function (e) {
                    return SiswaMagangDudi.parse(e);
                });
                cb(siswakloter);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }
}
