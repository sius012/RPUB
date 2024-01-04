import Siswa from "../Model/Siswa.js";

export default class RaportModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.ProjekData;
        this.page_setup;
        this.nama_component = "RaportModal";
    }

    load(id) {
        const ctx = this;

        let table = ctx.container.find("#output").find("table").find("tbody");
        Siswa.find(id, {
            projek_semester: 1,
            cb: function (data) {
                console.log(data);
                table.empty();
                data.penilaian_projek_rapor.forEach((element, i) => {
                    table.append(`<tr>
                    <td>${element.nama}</td>
                    <td>${element.penilaian_projek_avg.n_nformal}</td>
                    <td>${element.penilaian_projek_avg.inisiatif}</td>
                    <td>${element.penilaian_projek_avg.antusias}</td>
                    <td>${element.penilaian_projek_avg.kejujuran}</td>
                    <td>${element.penilaian_projek_avg.kreativitas}</td>
                    <td>${element.penilaian_projek_avg.tanggung_jawab}</td>
                    <td>${element.penilaian_projek_avg.komunikasi}</td>
                    <td>${element.penilaian_projek_avg.etika_sopansantun}</td>
                    <td>${element.penilaian_projek_avg.k3}</td>
                </tr>`);
                });
                ctx.modal.show();
            },
        });
    }
}
