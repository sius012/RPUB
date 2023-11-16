export default class Role {
    constructor() {
        this.id;
        this.name;
        this.guard_name;
        this.timestamps = {};
    }

    static parse(json) {
        let role = new Role();
        role.id = json["id"];
        role.name = json["name"];
        role.guard_name = json["guard_name"];
        role.timestamps = {
            created_at: json["created_at"],
            updated_at: json["updated_at"],
        };
        return role;
    }

    static find(id) {
        let role = new Role();
        $.ajax({
            url: "/role/" + id,
            type: "get",
            async: false,
            success: function (data) {
                role = Role.parse(data);
            },
        });
        return role;
    }

    static all(cb) {
        let role = [];
        $.ajax({
            url: "/role",
            type: "get",
            success: function (data) {
                role = data.map(function (e) {
                    return Role.parse(e);
                });
                cb(role);
            },
        });
    }
}
