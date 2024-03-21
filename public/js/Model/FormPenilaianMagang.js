import Siswa from "./Siswa.js";
import TemplateMagang from "./TemplateMagang.js";

export default class FormPenilaianMagang{
    constructor(){
        this.id = null;
        this.id_dunia_industri;
        this.id_template_magang;
        this.list_siswa = [];
        this.url;
    }

    toJson(){
        let json = {};
        if(this.id != null){
            json["id"] = this.id;
        }
        json["id_dunia_industri"] = this.id_dunia_industri;
        json["id_template_magang"] = this.id_template_magang;
        json["list_siswa"] = this.list_siswa_raw;
        json["expired_form"] = this.expired_form;
        json["token"] = this.token;
        return json;
    }

    simpan(cb){
        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content")
            },
            url: "/formpenilaianmagang",
            type: "post",
            data: this.toJson(),
            success: function(e){
                cb(e);
            },error: function(err){
                alert(err.responseText)
            }
        })
    }

    static parse(json){
        let form = new FormPenilaianMagang();
        form.id = json["id"];
        form.id_dunia_industri = json["id_dunia_industri"];
        form.id_template_magang = json["id_template_magang"];
        if(json["template_magang"]!=undefined){
            form.template_magang = TemplateMagang.parse(json["template_magang"]);
            
        }
        form.token = json["token"];
        form.expired_form = json["expired_form"];
        form.url = json["url"];
        if(json["siswa"]!=undefined){
            form.siswa = json["siswa"].map(function(e){
                return Siswa.parse(e);
            })
        }

        return form;
    }

    static find(id){
        let formpenilaianmagang = null;
        $.ajax({
            url: "/formpenilaianmagang/"+id,
            type: "get",
            async: false,
            success: function(data){
                formpenilaianmagang = FormPenilaianMagang.parse(data);

                console.log(data);
            },error: function(err){
                alert(err.responseText)
            }
        })

        return formpenilaianmagang;
    }

    hapus(cb){
        $.ajax({
            url: "/formpenilaianmagang/"+this.id,
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
            },
            type: "delete",
            success:  function(data){
                cb(data)
            },error: function(err){
                alert(err.responseText)
            }
        })
    }
}