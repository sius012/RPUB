import Jurusan from "../Model/Jurusan.js";
import User from "../Model/User.js";

export default class ProjekJurusanChart {
    constructor(container) {
        this.container = container;
        this.nama_component = "ProjekJurusanChart";
        this.page_setup;
        this.jurusan;
    }

    load() {
        const ctx = this;

        Jurusan.all({ ubjurusan: true }, function (data) {
            let dataJurusan = data;
            var data = {
                labels: dataJurusan.map((e) => e.jurusan),
                datasets: [
                    {
                        label: "Projek",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                        data: dataJurusan.map((e) => e.jumlah_projek),
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
        });
    }
}
