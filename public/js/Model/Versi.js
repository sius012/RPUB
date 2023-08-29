class Versi {
    constructor(){
        this.id_versi;
        this.tugas;
        this.id_siswa;
        this.nomor_versi;
        this.nama;
        this.keterangan;
        this.lampiran;
        this.status;
        this.timestamp
    }

    static find(id){
        var versi = new Versi;
        $.ajax({
            url: "/versi/"+id,
            type: "GET",
            async:false,
            success:function(data){
                versi=Versi.parse(data)
            }
        })
        return versi
    }
    static parse(json){
        var versi = new Versi

        tugas.id_versi=json["id_versi"]
        tugas.id_tugas=json["id_tugas"]
        tugas.id_siswa=json["id_siswa"] 
        tugas.nomor_versi=json["nomor_versi"]
        tugas.nama=json["nama"]
        tugas.keterangan=json["keterangan"]
        tugas.lampiran=json["lampiran"]
        tugas.status=json["status"]
        tugas.timestamp={created_at: json["created_at"], updated_at: json["updated_at"]}
        return versi;
    }
    static all(){
        var versi = [];
        $.ajax({
            url: "/versi/",
            type: "GET",
            async:false,
            success:function(data){
                tugas=data.map(function(e){
                    return Versi.parse(e)
                    
                })
            }
        })
        return versi;
    }

    static byTugas(id, cb = null) {
        let versi = [];
        $.ajax({
            url:"/versi",
            data: {
                id_tugas: id,
            },
            type: "get",
            success: function(data){
                versi = data.map(function (e){
                    return Versi.parse(e);
                });

                if (typeof cb == "function"){
                    cb(data);
                }
            }
        });
    }

    toJson(){
        let json = [];
        json["id_tugas"] = this.id_tugas;
        json["id_siswa"] = this.id_siswa;
        json["nomor_versi"] = this.nomor_versi;
        json["nama"] = this.nama;
        json["keterangan"] = this.keterangan;
        json["lampiran"] = this.lampiran;
        json["status"] = this.status;
        return json;
    }

    simpan(cb=null){
        const formdata = new FormData();
        this.toJson().forEach(function (e, i){
            formdata.append(i, e);
        });

        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("context")
            },
            url: "/versi",
            type: "post",
            data: formdata,
            processData: false,
            contextType: false,
            success: function(data){
                if(cb=null){
                    cb(data);
                }
            },error: function(err){
                alert(err.responseText);
            }
        });
    }
}

