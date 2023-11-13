export default class JurusanModal{
    constructor(container){
        this.container;
        this.modal = new bootstrap.Modal(container);
        this.ProjekData;
        this.jurusan;
        this.mode = "kirim";
    }

    load(id){
        this.jurusan = jurusan.find(id);
        this.mode = "edit";
        this.container.find("form").find("button[type=submit]").text("Tambah Perbarui")
        this.modal.show();
    }



    reset(){
        this.jurusan = jurusan.find(id);
        this.mode = "edit";
        this.container.find("form").find("button[type=submit]").text("Tambah jurusan")
        this.getElement("jurusan").val("");
        this.getElement("keterangan").val("");
    }   



    parseFromElement(){
        this.jurusan.jurusan = this.getElement("jurusan")
        this.jurusan.keterangan = this.getElement("keterangan")
    }

    globalEventListener(){
        var ctx = this

        //tombol tambah jurusan ditekan
        this.container.find("form").submit(function(e){
            e.preventDefault()
            switch (ctx.mode){
                case "kirim":
                    this.parseFromElement();
                    this.jurusan.simpan();
                    break;

                default:
                    break;    
            }
        })
    }

    getElement(name, type = "input"){
        return this.container.find(`${type}[name=${name}]`)
    }
}