export default class ProjekJurusan {
    constructor() {
        this.id;
        this.id_projek;
        this.id_jurusan;
        this.timestamp;
    }

    static parse(json) {
        let pj = new ProjekJurusan();
        pj.id =
            json["id"] != undefined || json["id"] != null
                ? json["id"]
                : undefined;
        pj.id_projek = json["id_projek"];
        pj.id_jurusan = json["id_jurusan"];
        pj.timestamp= json[''];
    }
}
