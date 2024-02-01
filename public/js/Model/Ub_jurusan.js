class Ub_jurusan {
    constructor() {
        this.id;
        this.id_pengguna;
        this.id_jurusan;
        this.k3;
        this.timestamp;
    }

    static find(id) {
        var ub_jurusan = new Ub_jurusan();
        $.ajax({
            url: "/ub_jurusan/" + id,
            type: "GET",
            async: false,
            success: function (data) {
                ub_jurusan = Ub_jurusan.parse(data);
            },
        });
        return ub_jurusan;
    }
    static parse(json) {
        var ub_jurusan = new Ub_jurusan();

        ub_jurusan.id = json["id"];
        ub_jurusan.id_pengguna = json["id_pengguna"];
        ub_jurusan.id_jurusan = json["id_jurusan"];
        if (json["k3"] != undefined) ub_jurusan.k3 = json["k3"];
        ub_jurusan.timestamp = json["timestamp"];
        return ub_jurusan;
    }
    static all() {
        var ub_jurusan = [];
        $.ajax({
            url: "/ub_jurusan/",
            type: "GET",
            async: false,
            success: function (data) {
                user = data.map(function (e) {
                    return Ub_jurusan.parse(e);
                });
            },
        });
        return ub_jurusan;
    }
}
