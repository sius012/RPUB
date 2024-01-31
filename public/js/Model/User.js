import UBJurusan from "./UBJurusan.js";

export default class User {
    constructor() {
        this.id;
        this.nama;
        this.email;
        this.password;
        this.rolesStr;
        this.ub_jurusan = [];
        this.selected_role = "";
    }

    static find(id) {
        var user = new User();
        $.ajax({
            url: "/user/" + id,
            type: "GET",
            async: false,
            success: function (data) {
                user = User.parse(data);
            },
        });
        return user;
    }

    getUBJurusan() {
        this.ub_jurusan = UBJurusan.byPengguna(this.id);
        return this;
    }

    static parse(json) {
        var user = new User();

        user.id = json["id"];
        user.nama = json["name"];
        user.email = json["email"];
        user.password = json["password"];

        if (json["rolesStr"] != undefined) {
            user.rolesStr = json["rolesStr"];
        }
        return user;
    }
    static all() {
        var user = [];
        $.ajax({
            url: "/user/",
            type: "GET",
            async: false,
            success: function (data) {
                user = data.map(function (e) {
                    return User.parse(e);
                });
            },
        });
        return user;
    }

    toJson() {
        let json = {};
        if (this.id != undefined) {
            json["id"] = this.id;
        }
        json["name"] = this.nama;
        json["email"] = this.email;
        json["password"] = this.password;
        json["selected_role"] = this.selected_role;
        return json;
    }

    simpan(cb) {
        let type = this.id == undefined ? "post" : "put";
        console.log(this.toJson());
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/user" + (type == "post" ? "" : "/" + this.id),
            data: this.toJson(),
            type: type,
            success: function (data) {
                console.log(data);
                cb(data);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    storeUBJurusan(cb) {
        console.log(this.ub_jurusan);
        if (this.ub_jurusan != undefined) {
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
                },
                url: "/ubjurusan",
                data: {
                    id_pengguna: this.id,
                    ub_jurusan:
                        this.ub_jurusan.length > 0
                            ? this.ub_jurusan.map(function (e) {
                                  return e.toJson();
                              })
                            : [],
                },
                type: "post",
                success: function (data) {
                    console.log(data);
                    cb(data);
                },
                error: function (err) {
                    alert(err.responseText);
                },
            });
        }
    }

    getUBJurusanStr() {
        return this.ub_jurusan
            .map(function (e) {
                return e.jurusan.jurusan;
            })
            .join(",");
    }

    static getListUBJurusan(jurusanListID, cb) {
        $.ajax({
            url: "/user",
            data: {
                jurusan_list_id: jurusanListID,
            },
            type: "get",
            success: function (data) {
                let user = data.map(function (e) {
                    return User.parse(e);
                });
                console.log(user);
                cb(user);
            },
            error: function (err) {
                alert(err.responseText);
            },
        });
    }

    hapus(cb) {
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            url: "/user/" + this.id,
            type: "delete",
            success: function () {
                cb();
            },
        });
    }
}
