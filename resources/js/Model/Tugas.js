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
    }

    static find(id){
        var tugas = new Tugas;
        $.ajax({
            url: "/tugas/"+id,
            type: "GET",
            async:false,
            success:function(data){
                tugas=Tugas.parse(data)
            }
        })
        return tugas
    }
    static parse(json){
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
        return tugas;
    }
    static all(){
        var tugas = [];
        $.ajax({
            url: "/tugas/",
            type: "GET",
            async:false,
            success:function(data){
                tugas=data.map(function(e){
                    return Tugas.parse(e)
                    
                })
            }
        })
        return tugas;
    }
}