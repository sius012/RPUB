import DuniaIndustri from "./DuniaIndustri.js";
import TemplateMagangDetail from "./TemplateMagangDetail.js";

export default class TemplateMagang {
    constructor(){
        this.id_dunia_industri;
        this.nama;
        this.deskripsi;
        this.timestamps = {created_at: null, updated_at: null}
        this.status;
    }

    simpan(cb){
        $.ajax({
            url: "/templatemagang",
            headers: {"X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content")},
            type: "post",
            data: this.toJson(),
            success: function(data){
                console.log(data);
                cb(data);
            },error: function(err){
                alert(err.responseText)
            }
        })
    }

    toJson(){
        let json = {};
        json.nama = this.nama;
        json.deskripsi = this.deskripsi;
        json.template_magang_detail_raw = this.templateMagangDetailRaw;
        json.id_dunia_industri = this.id_dunia_industri;
        json.status = "Belum Dipublish";
        return json;
    }

    static parse(json){
        let templateMagang = new TemplateMagang;
        templateMagang.id = json["id"];
        templateMagang.nama = json["nama"];
        templateMagang.deskripsi = json["deskripsi"];
        templateMagang.id_dunia_industri = json["id_dunia_industri"];

        if(json["template_magang_detail"] != undefined ){
            templateMagang.template_magang_detail = json["template_magang_detail"].map(function(e){
                return TemplateMagangDetail.parse(e)
            })
        }
        templateMagang.status = json["status"];

        return templateMagang;
    }

    static find(id, params = {template_magang_detail: 1}){
        let tm = new TemplateMagang();
        $.ajax({
            url: "/templatemagang/"+id,
            type: "get",
            data: params,
            async: false,
            success: function(data){
                tm = TemplateMagang.parse(data);
            }
        })
        return tm;
    }

    static findByDuniaIndustri(id,cb){
        $.ajax({
            url: "/templatemagang",
            data: {
                id_dunia_industri: id,
                status: "Aktif",
            },
            type: "get",
            success: function(data){
                let dudi = data.map((e)=>TemplateMagang.parse(e));
                cb(dudi);
            }
        })
    }

    delete(cb){
        $.ajax({
            url: "/templatemagang/"+this.id,
            type: "delete",
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content")
            },
            success:function(){
                cb()
            },error: function(err){
                alert(err.responseText)
            }
        }) 
    }

    publish(cb){
        $.ajax({
            url: "/templatemagang/"+this.id,
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content")
            },
            type: "put",
            data: {
                status: "Aktif",
            },success: function(data){
                cb(data)
            }
        })
    }

    nonaktif(cb){
        $.ajax({
            url: "/templatemagang/"+this.id,
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content")
            },
            type: "put",
            data: {
                status: "Nonaktif",
            },success: function(data){
                cb(data)
            }
        })
    }

    checkFormDanPenilaian(){
        let hasPenilaian = false;
        $.ajax({
            url: "/templatemagang/"+this.id,
            type: "get",
            data: {
                formDanPenilaian: 1
            },
            async: false,
            success: function(data){
                hasPenilaian = data;
            }
        })
        return hasPenilaian;
    }

    aktif(cb){
        $.ajax({
            url: "/templatemagang/"+this.id,
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content")
            },
            type: "put",
            data: {
                status: "Aktif",
            },success: function(data){
                cb(data)
            }
        })
    }
}