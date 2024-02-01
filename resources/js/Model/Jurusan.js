class Jurusan {
    constructor(){
        this.id;
        this.jurusan;
        this.keterangan;
        this.timestamp
    }

    static find(id){
        var jurusan = new Jurusan;
        $.ajax({
            url: "/jurusan/"+id,
            type: "GET",
            async:false,
            success:function(data){
                jurusan=Jurusan.parse(data)
            }
        })
        return jurusan
    }
    static parse(json){
        var jurusan = new Jurusan

        jurusan.id=json["id"]
        jurusan.jurusan=json["jurusan"]
        jurusan.keterangan=json["keterangan"]
        jurusan.timestamp={created_at: json["created_at"], updated_at: json["updated_at"]}
        return jurusan;
    }
    static all(){
        var jurusan = [];
        $.ajax({
            url: "/jurusan/",
            type: "GET",
            async:false,
            success:function(data){
                jurusan=data.map(function(e){
                    return Jurusan.parse(e)
                    
                })
            }
        })
        return jurusan;
    }
}