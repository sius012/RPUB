class Angkatan {
    constructor(){
        this.id_angkatan;
        this.keterangan;
        this.timestamp
    }

    static find(id){
        var angkatan = new Angkatan;
        $.ajax({
            url: "/angkatan/"+id,
            type: "GET",
            async:false,
            success:function(data){
                angkatan=Angkatan.parse(data)
            }
        })
        return angkatan
    }
    static parse(json){
        var angkatan = new Angkatan

        angkatan.id_angkatan=json["id_angkatan"]
        angkatan.keterangan=json["keterangan"]
        angkatan.timestamp={created_at: json["created_at"], updated_at: json["updated_at"]}
        return angkatan;
    }
    static all(){
        var angkatan = [];
        $.ajax({
            url: "/angkatan/",
            type: "GET",
            async:false,
            success:function(data){
                angkatan=data.map(function(e){
                    return Angkatan.parse(e)
                    
                })
            }
        })
        return angkatan;
    }
}