class ProjekModal{
    constructor(container){
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.ProjekData;
        this.page_setup;
        this.nama_component = "ProjekModal";
    }

    parse(){
        var projek = new Projek();
        if(id_projek =null){
          this.ProjeekData = Projek.find(id_projek);
        }
        projek.nama = this.getElement("nama");
        projek.tanggal_awal = this.getElement("tanggal_awal");
        projek.tanggal_akhir = this.getElement("tanggal_akhir");
        projek.id_penanggung_jawab = this.getElement("id_penanggung_jawab");
        projek.jenis_projek = this.getElement("jenis_projek");
        projek.klien = this.getElement("klien");
        projek.deskripsi = this.getElement("deskripsi");
        projek.status = this.getElement("status");
        projek.id_pembuat = this.getElement("id_pembuat");
        projek.id_jurusan = this.getElement("id_jurusan");
        this.ProjekData = projek;

    }

    load(id_projek = null){
        if(id_projek = null){
            this.ProjekData = Projek.find(id_projek);
        }
        this.getElement("id").val(this.ProjekData.id);
        this.getElement("nama").val(this.ProjekData.nama);
        this.getElement("tanggal_awal").val(this.ProjekData.tanggal_awal);
        this.getElement("tanggal_akhir").val(this.ProjekData.tanggal_akhir);
        this.getElement("id_penanggung_jawab").val(this.ProjekData.id_penanggung_jawab);
        this.getElement("jenis_projek").val(this.ProjekData.jenis_projek);
        this.getElement("klien").val(this.ProjekData.klien);
        this.getElement("deskripsi").val(this.ProjekData.deskripsi);
        this.getElement("status").val(this.ProjekData.status);
        this.getElement("id_jurusan").val(this.ProjekData.id_jurusan);
    }

    reset(){
        this.getElement("id").val("");
        this.getElement("nama").val("nama");
        this.getElement("tanggal_awal").val("");
        this.getElement("tanggal_akhir").val("");
        this.getElement("id_penanggung_jawab").val("");
        this.getElement("jenis_projek").val("");
        this.getElement("klien").val("");
        this.getElement("deskripsi").val("");
        this.getElement("status").val("");
        this.getElement("id_jurusan").val(""); 
        this.ProjekData = new Projek();
    }

    kirim(){
        this.parse();
        this.ProjekData.simpan()
    }

    globalEventListener(){
        var ctx = this;
        this.container.find("#clear-Jurusan").click(function(){
            var jLV = ctx.page_setup.getComponent("JurusanListView").container
        })
    }

    getElement(nam, type = "input"){
        return this.container.find(`${type}[name=${name}]`)
    }
}