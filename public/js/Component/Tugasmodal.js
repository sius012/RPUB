class Tugasmodal{
    constructor(container){
        this.container = container;
        this.projek_data;
        this.modal = new bootstrap.Modal(container);
        this.tugas = new Tugas;
        this.page_setup;
        this.nama_component = "TugasModal";
    }

    init(projekdata){
        this.projek_data = projekdata;
        this.container.find("input[name=id-projek]").val(this.projek_data.id)
    }

    attach(id){
        this.tugas = Tugas.find(id);
        this.container.find("input[name=id-parent]").val(id);
        this.modal.show();
    }

    fromElement(){
        this.tugas = new Tugas;
        this.tugas.id_parent = this.getElement("id_parent").val();
        this.tugas.id_projek = this.getElement("id_projek").val();
        this.tugas.nama = this.getElement("nama").val();
        this.tugas.keterangan = this.getElement("keterangan").val();
        this.tugas.id_kategori = this.getElement("id_kategori").val();
    }

    globalEventListener(){
        var ctx =this;
        this.container.find("form").submit(function(){
            e.preventDefault();
            ctx.fromElement();
            console.log(ctx.tugas.toJson());
        })
    }

    getElement(name, type = "input"){
        return this.container.find(`${type}[name=${name}]`)
    }
}