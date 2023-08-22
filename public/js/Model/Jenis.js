class Jenis {
    constructor(){
        this.nama;
        this.tipe;
        this.id_jurusan;
        this.icon;
    }

    static find(id){
        var jenis = new Jenis;
        $.ajax({
            url: "/jenis/"+id,
            type: "GET",
            async:false,
            success:function(data){
                jenis=Jenis.parse(data)
            }
        });
        return jenis
    }

    static byJurusan(id){
        var jenis = [];
        $.ajax({
            url: "/jenis",
            type: "GET",
            async: false,
            data: {
                id_jurusan: id,
            },
            success: function (data){
                jenis = data.map(function (e){
                    return Jenis.parse(e);
                });
            }
        });
    }
    static parse(json){
        var jenis = new Jenis
        jenis.id = json["id"];
        jenis.nama=json["nama"];
        jenis.kategori=json["kategori"];
        jenis.id_jurusan=json["id_jurusan"];
        jenis.icon=json["icon"];
        return jenis;
    }
    static all(){
        var jenis = [];
        $.ajax({
            url: "/jenis/",
            type: "GET",
            async:false,
            success:function(data){
                jenis=data.map(function(e){
                    return Jenis.parse(e)
                    
                })
            }
        })
        return jenis;
    }
}