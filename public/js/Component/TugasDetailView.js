class TugasDetailView{
    constructor(container){
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.tugas;
        this.page_setup;
        this.nama_component = "TugasDetailView";
        this.versiList;
        this.isLayout = true;
    }

    load(id) {
        this.tugas = window.pageSetup.getTugasCache(id);
        this.render();
    }

    loadversi() {
        var ctx = this;

        this.versiList = Versi.byTugas(this.tugas.id_tugas, function (data) {
            let versiList = ctx.container.find("#versi").find("#versi-list");
            versiList.html("");
            data.forEach((element) => {
                versiList.append(versiCard(element));
            });
        });
    }

    render(){
        if(this.tugas != undefined){
            //mengisi data projek
            this.getElement("nama_tugas").val(this.tugas.nama);
            this.getElement("keterangan","textarea").val(
                this.tugas.keterangan
            );
            this.getElement("tanggal_awal").val(this.tugas.tanggal_awal);
            this.getElement("tanggal_akhir").val(this.tugas.tanggal_akhir);
        }
    }

    getElement(name, type = "input") {
        return this.container.find('$type)[name=($name)]');
    }


    versiCard(versi) {
        return `
        <div class='row' data-id='${versi.id_versi}'>
        <div class='col-3'>
            <img src=''>
        </div>
        <div class='col-9><b>${versi.nama + "_v" + versi.nomor}</b><span>
        ${versi.keterangan}</span></div>
        </div>

        `;
    }
}