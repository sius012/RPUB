class Penugasan {
    constructor(){
        this.id;
        this.nis;
        this.penugas;
        this.keterangan;
        this.timestamp
    }

    static find(id){
        var penugasan = new Penugasan;
        $.ajax({
            url: "/penugasan/"+id,
            type: "GET",
            async:false,
            success:function(data){
                penugasan=Penugasan.parse(data)
            }
        })
        return jurusan
    }
    static parse(json){
        var penugasan = new Penugasan

        penugasan.id=json["id"]
        penugasan.nis=json["nis"]
        penugasan.penugas=json["penugas"]
        penugasan.timestamp={created_at: json["created_at"], updated_at: json["updated_at"]}
        return penugasan;
    }
    static all(){
        var penugasan = [];
        $.ajax({
            url: "/penugasan/",
            type: "GET",
            async:false,
            success:function(data){
                penugasan=data.map(function(e){
                    return Penugasan.parse(e)
                    
                })
            }
        })
        return penugasan;
    }
}