import Siswa from "./Siswa.js";

export default class SiswaMagangDudi {
    constructor() {
        this.id = null;
        this.id_kloter_dudi = null;
        this.id_siswa = null;
        this.sebagai = null;
        this.timestamps = { created_at: null, updated_at: null };
    }
    static parse(json) {
        let sMD = new SiswaMagangDudi();
        sMD.id = json["id"];
        sMD.id_kloter_dudi = json["id_kloter_dudi"];
        sMD.id_siswa = json["id_siswa"];
        sMD.sebagai = json["sebagai"];
        sMD.timestamps = {
            created_at: json["created_at"],
            updated_at: json["updated_at"],
        };
        if (json["siswa"] != undefined) {
            sMD.siswa = Siswa.parse(json["siswa"]);
        }
        return sMD;
    }

    toJson() {
        let json = {};
        json.id_kloter_dudi = this.id_kloter_dudi;
        json.id_siswa = this.id_siswa;
        json.sebagai = this.sebagai;
        return json;
    }
    static simpan() {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/siswamagangdudi",
            type: "post",
            data: this.toJson(),
            success: function (data) {},
        });
    }

    static multipleSimpan(data) {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/siswamagangdudi",
            type: "post",
            data: {
                dataList: data.map(function (e) {
                    return e.toJson();
                }),
            },
            success: function (data) {
                alert("tes");
            },
            error: function (e) {
                alert(e.responseText);
            },
        });
    }
}
