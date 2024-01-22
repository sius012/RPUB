//JURUSAN DASHBOARD

//FUNGSI
//1. MENAMPILKAN JUMLAH PROJEK YANG BERJALAN DISETIAP JURUSAN

//TERLETAK DI MENU PROJEK

//RELASI FILE
//VIEW: detail_projek_view.blade.php;
//TERSIMPAN DIHALAMAN = pages/projek


import Jurusan from "../Model/Jurusan.js";//MENGIMPORT MODEL JURUSAN
export default class JurusanDashboard {
    constructor(container) {
        this.container = container;
        this.jurusanList;
        this.nama_component = "JurusanDashboard";
    }

    load() {//MENAMPILKAN DATA JURUSAN DAN DATA PROJEKNYA
        const ctx = this;
        var colors = [
            "#FF6347",
            "#4CAF50",
            "#2196F3",
            "#FFC107",
            "#9C27B0",
            "#FF9800",
        ];

        Jurusan.all({ ubjurusan: true }, function (data) {//MENGAMBIL DATA JURUSAN
            data.forEach(function (e, i) {
                ctx.container.append(`
                <div class='col-md-3 mb-3'>
                <div class='card-jurusan-dashboard' style='background-color:${colors[i]}'>
                <h3>${e.jurusan}</h3>
                <p style="height: 60px">${e.keterangan}</p>
                <p style='font-size: 15pt'><b>${e.jumlah_projek} Projek</b> </p>
                </div>
                </div>
    
                `);
            });
            this.jurusanList = data;
        });
    }
}
