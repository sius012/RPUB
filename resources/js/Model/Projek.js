class Projek {
    constructor(){
        this.id;
        this.nama;
        this.tanggal_awal;
        this.tanggal_akhir;
        this.penanggung_jawab;
        this.jenis_projek;
        this.klien;
        this.deskripsi;
        this.status;
        this.pembuat;
        this.id_jurusan;
    }

    static find(id){
        var projek = new Projek;
        $.ajax({
            url: "/projek/"+id,
            type: "GET",
            async:false,
            success:function(data){
                projek=Projek.parse(data)
            }
        })
        return projek
    }
    static parse(json){
        var projek = new Projek

        projek.id=json["id"]
        projek.nama=json["nama"]
        projek.tanggal_awal=json["tanggal_awal"]
        projek.tanggal_akhir=json["tanggal_akhir"]
        projek.penanggung_jawab=json["penanggung_jawab"]
        projek.jenis_projek=json["jenis_projek"]
        projek.klien=json["klien"]
        projek.deskripsi=json["deskripsi"]
        projek.status=json["status"]
        projek.pembuat=json["pembuat"]
        projek.id_jurusan=json["id_jurusan"]
        return projek;
    }
    static all(){
        var projek = [];
        $.ajax({
            url: "/projek/",
            type: "GET",
            async:false,
            success:function(data){
                projek=data.map(function(e){
                    return Projek.parse(e)
                    
                })
            }
        })
        return projek;
    }
}