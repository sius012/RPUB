export default class TemplateMagangDetail{
    constructor(){
        this.id;
        this.id_template_magang;
        this.nama;
        this.nilai_max;
    }

    static parse(json){
        let tmd = new TemplateMagangDetail();
        tmd.id = json["id"];
        tmd.id_template_magang = json["id_template_magang"];
        tmd.nama = json["nama"];
        tmd.nilai_max = json["nilai_max"];
        tmd.aspek = json["aspek"];
        return tmd;
    }

    toJson(){
        
    }
}