class TugasDetailView{
    constructor(container){
        this.container = container;
        this.modal = new bootstrap.modal(container);
        this.tugas;
        this.page_setup;
        this.nama_component = "TugasDetailView";
    }

    load(id) {
        this.tugas = Tugas.find(id);
    }

    render(){
        if(this.tugas != undefined){
            //mengisi data projek
            this.container.find(".nama-tugas");
            this.container.find(".keterangan");
            this.container.find(".tanggal-awal");
            this.container.find("tanggal-akhir");
            this.container.find("status");
            this.container.find(".jenis")
        }
    }
}