import Jurusan from "../Model/Jurusan.js";

export default class ProjekJurusanChart {
    constructor(container) {
        this.container = container;
        this.nama_component = "ProjekJurusanChart";
        this.page_setup;
        this.jurusan = Jurusan.all();
    }

    load() {
        const ctx = this;
        var data = {
            labels: this.jurusan.map((e) => e.jurusan),
            datasets: [
                {
                    label: "Projek",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                    data: this.jurusan.map((e) => e.jumlah_projek),
                },
            ],
        };

        // Opsi konfigurasi untuk diagram batang
        var options = {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };

        // Membuat objek diagram batang
        var myBarChart = new Chart(ctx.container.getContext("2d"), {
            type: "bar",
            data: data,
            options: options,
        });
    }
}
