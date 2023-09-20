import Jurusan from "../Model/Jurusan.js";
export default class JurusanDashboard {
    constructor(container) {
        this.container = container;
        this.jurusanList;
        this.nama_component = "JurusanDashboard";
    }

    load() {
        const ctx = this;
        var colors = [
            "#FF6347",
            "#4CAF50",
            "#2196F3",
            "#FFC107",
            "#9C27B0",
            "#FF9800",
        ];

        this.jurusanList = Jurusan.all();
        this.jurusanList.forEach(function (e, i) {
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
    }
}
