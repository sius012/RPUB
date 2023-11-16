import Jurusan from "./Jurusan.js";

export default class UBJurusan {
    constructor() {
        this.id;
        this.id_jurusan;
        this.id_pengguna;
        this.timestamps = {};
        this.jurusan;
    }

    static find(id) {
        let user = new UBJurusan();
        $.ajax({
            url: "/ubjurusan/" + id,
            type: "get",
            async: false,
            success: function (data) {
                user = UBJurusan.parse(data);
            },
        });
        return user;
    }

    static parse(json) {
        let ubjurusan = new UBJurusan();
        ubjurusan.id = json["id"];
        ubjurusan.id_jurusan = json["id_jurusan"];
        ubjurusan.id_pengguna = json["id_pengguna"];
        ubjurusan.timestamps = {
            created_at: json["created_at"],
            updated_at: json["updated_at"],
        };

        if (json["jurusan"] != undefined) {
            ubjurusan.jurusan = Jurusan.parse(json["jurusan"]);
        }
        return ubjurusan;
    }

    toJson() {
        let json = {};
        json["id_pengguna"] = this.id_pengguna;
        json["id_jurusan"] = this.id_jurusan;
        return json;
    }

    static byPengguna(id) {
        let ub = [];
        $.ajax({
            url: "/ubjurusan",
            type: "get",
            data: {
                id_pengguna: id,
            },
            async: false,
            success: function (data) {
                ub = data.map(function (e) {
                    return UBJurusan.parse(e);
                });
            },
        });
        return ub;
    }
}
