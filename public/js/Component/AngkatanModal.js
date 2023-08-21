class AngkatanModal{
    constructor(container){
        this.container;
        this.modal = new bootstrap.Modal(container);
        this.ProjekData;
        this.angkatan;
        this.mode = "kirim";
    }

    load(id){
        this.angkatan = Angkatan.find(id);
        this.mode = "edit";
        this.container.find("form").find("button[type=submit]").text(" Perbarui")
        this.modal.show();
    }



    reset(){
        this.angkatan = Angkatan.find(id);
        this.mode = "edit";
        this.container.find("form").find("button[type=submit]").text("Tambah angkatan")
        this.getElement("id_angkatan").val("");
        this.getElement("dari").val("");
        this.getElement("sampai").val("");
        this.getElement("keterangan").val("");
    }



    parseFromElement(){
        this.angkatan.id_angkatan = this.getElement("angkatan")
        this.angkatan.dari = this.getElement("dari")
        this.angkatan.sampai = this.getElement("sampai")
        this.angkatan.keterangan = this.getElement("keterangan")
        return angkatan;
    }

    globalEventListener(){
        var ctx = this

        //tombol tambah angkatan ditekan
        this.container.find("form").submit(function(e){
            e.preventDefault()
            switch (ctx.mode){
                case "kirim":
                    this.parseFromElement();
                    this.angkatan.simpan();
                    break;

                default:
                    break;    
            }
        })
    }

    getElement(name, type = "input"){
        return this.container.find(`$(type)[name=$(name)]`)
    }
}