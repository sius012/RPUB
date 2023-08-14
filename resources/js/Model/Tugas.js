class Tugas {
    constructor(){
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
    }

    static byprojek(id){ //mengambil data tugas-tugas dar id projek
        var projekList = [];
        $.ajax({
            url: "/tugas/",
            type: "GET",
            data: {
                id_projek: id
            },
            async:false,
            success:function(data){
                data.forEach(element => {
                    projekList.push(Tugas.rekursifParse(element,1));
                 });
            }
        })
        return projekList
    }
    static parse(json){ //mengubah data json menjadi objek tugas
        var tugas = new Tugas

        tugas.id_tugas=json["id_tugas"]
        tugas.nama=json["nama"]
        tugas.keterangan=json["keterangan"] 
        tugas.id_projek=json["id_projek"]
        tugas.id_parent=json["id_parent"]
        tugas.tanggal_awal=json["tanggal_awal"]
        tugas.tanggal_akhir=json["tanggal_akhir"]
        tugas.status=json["status"]
        tugas.id_kategori=json["id_kategori"]
        tugas.created_at =json["created_at"]
        tugas.updated_at =json["updated_at"]
        return tugas;
    }
    static rekursifParse(json,indentLevel){ //mirip seperti yang diatas,namun bedanya ini untuk membaca children
        var tugas =Tugas.parse(json);
        tugas.indent_level = indentLevel
        json["children"].forEach(element => {
            tugas.children.push(Tugas.rekursifParse(element, indentLevel+1));
        });
        return tugas

    }

}
       