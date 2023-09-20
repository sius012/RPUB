import Jurusan from "../Model/Jurusan.js";

export default class CardJurusanVertical {
    constructor(container) {
        this.container = container;
        this.nama_component = "CardJurusanDashboardVertical";
        this.jurusan = Jurusan.all({ detail_level: 3 });
    }

    load() {
        const ctx = this;
        this.jurusan.forEach(function (e) {
            ctx.container.append(`
            <div class='card p-3 mb-3'>
            <div class='row'>
            <div class='col-1'></div>
            <div class='col-11'><b>${e.keterangan}</b><br><span>Jumlah siswa: ${e.jumlah_siswa}</span>
            <div class='row'><div class='col'>Siswa Aktif Projek: ${e.siswa_aktif_projek}</div><div class='col'></div></div>
            </div> 
            </div>
            </div>
            `);
        });
    }
}
