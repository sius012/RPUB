import Siswa from "./Siswa.js";
import TemplateMagang from "./TemplateMagang.js";

export default class PenilaianMagang{
    constructor(){
        this.id;
        this.id_template_magang;
        this.id_siswa;
        this.nama_penilai;
        this.sebagai;
        this.tanggal_pengisian;
    }

    static find(id){
        let penilaian = null;
        $.ajax({
            url: "/penilaianmagang/"+id,
            type: "get",
            async: false,
            success: function(data){
                penilaian = PenilaianMagang.parse(data);
            }
        })
        return penilaian;
    }

    static parse(json){
        let penilaian = new PenilaianMagang();

        penilaian.id = json["id"];
        penilaian.id_siswa = json["id_siswa"];
        penilaian.id_template_magang = json["id_template_magang"];
        penilaian.nama_penilai = json["nama_penilai"];
        penilaian.sebagai = json["sebagai"];
        penilaian.tanggal_pengisian = json["tanggal_pengisian"];


        if(json["template_magang"]!=undefined){
            console.log(json["template_magang"]);
            penilaian.template_magang = TemplateMagang.parse(json["template_magang"])
        }

        if(json["penilaian_magang_detail"]!=undefined){
            penilaian.penilaian_magang_detail = json["penilaian_magang_detail"];
        }

        
        if(json["penilaian_magang_informal"]!=undefined){
            penilaian.penilaian_magang_informal = json["penilaian_magang_informal"];
        }

        if(json["siswa"]!=undefined){
            penilaian.siswa = Siswa.parse(json["siswa"]);
        }
        return penilaian;
    }

    static getBySiswa(id_siswa,cb){
       
        $.ajax({
            url: "/penilaianmagang",
            type: "get",
            data: {
                get_by_siswa: 1,
                id_siswa: id_siswa
            },
            success: function(data){
                console.log(data);
                let penilaian = data.map(function(e){
                    return PenilaianMagang.parse(e)
                })
                cb(penilaian)
            },error: function(err){
                alert(err.responseText)
            }
        }
        )
    }

    hapus(cb){
        $.ajax({
            url: "/penilaianmagang/"+this.id,
            type: "delete",
            headers: {
                "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content")
            },
            success: function(){
                cb()
            },
            error: function(err){
                alert(err.responseText)
            }
        })
    }
}