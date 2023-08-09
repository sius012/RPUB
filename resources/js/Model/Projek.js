class Projek {
    constructor(){
        this.id;
        this.projek;
        this.keterangan;
        this.timestamp
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

        jurusan.id=json["id"]
        jurusan.projek=json["projek"]
        jurusan.keterangan=json["keterangan"]
        jurusan.timestamp=json["timestamp"]
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