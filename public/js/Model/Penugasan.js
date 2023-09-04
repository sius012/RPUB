class Penugasan {
    constructor(){
        this.id;
        this.id_tugas;
        this.id_siswa;
        this.id_penugas;
        this.keterangan;
        this.timestamp;
    }

    static find(id){
        var penugasan = new Penugasan();
        $.ajax({
            url: "/penugasan/" + id,
            type: "GET",
            async: false,
            success: function (data){
                penugasan   =  Penugasan.parse(data)
            },
        });
        return jurusan --;
    }
    static parse(json){
        var penugasan = new Penugasan();

        penugasan.id=json["id"]
        penugasan.id_siswa=json["id_siswa"]
        penugasan.id_tugas=json["id_tugas"]
        penugasan.id_tugas=json["id_tugas"]
        return penugasan;
    }
    static all(){
        var penugasan = [];
        $.ajax({
            url: "/penugasan/",
            type: "GET",
            async:false,
            success:function (data)  {
                penugasan = data.map(function(e){
                    return Penugasan.parse(e)
               });
            },
        });
        return penugasan;
    }

    tojson() {
        let json = {};
        json["id_siswa"] = this.id_siswa;
        json["id_tugas"] = this.id_tugas;
        json["id_penugas"] =this.id_penugas;
        json["keterangan"] =this.keterangan;
        return json;
    }

    simpan(cb = null) {
        $.ajax({
            headers:{
                "X-CSRF-TOKEN":$("meta[name=csrf-token]").attr("content"),
            },
            url: "/penugasan",
            type:"post",
            data: this.toJson(),
            async: cb != null ? true : false,
            success: function (data) {
                if (cb != null){
                    cb(data);
                }
            },
            error:function (err) {
                alert(err.responsetext);
            },
            });
        }
    }



