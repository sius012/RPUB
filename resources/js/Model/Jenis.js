class Jenis {
    constructor(){
        this.nama;
        this.kategori;
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
                user=Jenis.parse(data)
            }
        })
        return jenis
    }
    static parse(json){
        var jenis = new Jenis

        user.nama=json["nama"]
        user.kategori=json["kategori"]
        user.id_jurusan=json["id_jurusan"]
        user.icon=json["icon"]
        return jenis;
    }
    static all(){
        var jenis = [];
        $.ajax({
            url: "/jenis/",
            type: "GET",
            async:false,
            success:function(data){
                user=data.map(function(e){
                    return Jenis.parse(e)
                    
                })
            }
        })
        return jenis;
    }
}