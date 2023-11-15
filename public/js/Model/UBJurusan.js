export default class UBJurusan {
    constructor() {
        this.id;
        this.id_jurusan;
        this.id_pengguna;
        this.timestamps = {};
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
        this.id = json["id"];
        this.id_jurusan = json["id_jurusan"];
        this.id_pengguna = json["id_pengguna"];
        this.timestamps = {
            created_at: json["created_at"],
            updated_at: json["updated_at"],
        };
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
                user = data.map(function (e) {
                    return UBJurusan.parse(e);
                });
            },
        });
        return ub;
    }
}
