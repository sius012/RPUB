//CardJurusanDashboardVertical

//FUNGSI
//1. menampilkan data - data jurusan mengenai projek

//TERLETAK DIPAGE DASHBOARD

//RELASI FILE
//VIEW: index.blade.php;
//TERSIMPAN DIHALAMAN = pages/dashboard

import Jurusan from "../Model/Jurusan.js"; //IMPORT MODEL JURUSAN

export default class CardJurusanVertical {
    constructor(container) {
        this.container = container //ELEMENT PENAMPUNG CARD JURUSAN;
        this.nama_component = "CardJurusanDashboardVertical" //NAMA KOMPONENT (WAJIB ADA DISETIAP KOMPONENT);
        this.jurusan = Jurusan.all({ detail_level: 3 }) //DATA JURUSAN (MULTIPLE DATA);
    }

    load() { //MENAMPILKAN DATA
        const ctx = this;
        this.jurusan.forEach(function (e) { //MELOOP DATA
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
