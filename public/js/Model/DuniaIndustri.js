import FormPenilaianMagang from "./FormPenilaianMagang.js";
import Jurusan from "./Jurusan.js";
import Siswa from "./Siswa.js";
import TemplateMagang from "./TemplateMagang.js";
import User from "./User.js";

export default class DuniaIndustri {
    constructor() {
        this.id;
        this.nama;
        this.deskripsi;
        this.alamat;
        this.logo;
        this.timestamps = { created_at: null, updated_at: null };
        this.jurusan;
        this.template_magang;
    }

    static parse(json) {
        console.log(json);
        let dudi = new DuniaIndustri();
        dudi.id = json["id"];
        dudi.nama = json["nama"];
        dudi.deskripsi = json["deskripsi"];
        dudi.alamat = json["alamat"];
        dudi.logo = json["logo"];
        dudi.timestamps.created_at = json["created_at"];
        dudi.timestamps.updated_at = json["updated_at"];
        dudi.jurusan = json["jurusan_dudi"].map(function (e) {
            return Jurusan.parse(e.jurusan);
        });

        if(json["template_magang"]!=undefined){
            dudi.template_magang = json["template_magang"].map(function(e){
                return TemplateMagang.parse(e);
            })
        }
        return dudi;
    }

    static find(id) {
        let dudi = null;
        $.ajax({
            url: "/duniaindustri/" + id,
            type: "get",
            async: false,
            success: function (data) {
                dudi = DuniaIndustri.parse(data);
            },
        });
        return dudi;
    }

    static all() {
        let dudi = [];
        $.ajax({
            url: "/duniaindustri/",
            type: "get",
            async: false,
            success: function (data) {
                dudi = data["dudi"].map(function (e) {
                    return DuniaIndustri.parse(e);
                });
            },
        });
        return dudi;
    }

    static fromArray(data){
        let dudi = new DuniaIndustri;
        dudi.nama = data.nama;
        dudi.alamat = data.alamat;
        dudi.deskripsi = data.deskripsi;
        dudi.logo = data.logo;
        dudi.jurusanRaw = data.jurusanRaw;

        return dudi;
    }

    simpan(){
        let form = new FormData();
        let imageFile = this.logo;
        form.append("logo",imageFile);
        form.append("nama", this.nama);
        form.append("deskripsi", this.deskripsi);
        form.append("alamat", this.alamat)
        form.append("jurusan", this.jurusanRaw)
        $.ajax({
            url: "/duniaindustri",
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content")
            },
            data:form,
            type: "post",
            processData: false,
            contentType: false,
            success: function(data){
                console.log(data);
            },error: function(err){
                alert(err.responseText);
            }
        })
    }

    templateMagang(cb){
        const ctx = this;
        $.ajax({
            url: "/duniaindustri/"+this.id,
            type: "get",
            data: {
                templateMagang: 1,
            },success: function(data){
                let dudi = DuniaIndustri.parse(data);
                ctx.template_magang = DuniaIndustri.template_magang;
                cb(dudi);
            }

        })
    }

    getAnakMagang(query = {nama: null},cb){
        $.ajax({
            url: "/duniaindustri/"+this.id,
            type: "get",
            data: {
                nama: query.nama,
                onlyStudent: true,
            },
            success: function(data){
                let user = data.map(function(e){
                    return Siswa.parse(e)
                })
                cb(user)
            },
            error: function(err){
                alert(err.responseText)
            }
        })
    }

    getFormPenilaian(cb){
        $.ajax({
            url: "/formpenilaianmagang",
            data: {
                id_dunia_industri: this.id
            },
            type: "get",
            success: function(data){
                let form = data.map(function(e){
                    return FormPenilaianMagang.parse(e);
                })
                cb(form);
            }
        })
    }

    
}
