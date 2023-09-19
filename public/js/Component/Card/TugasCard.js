import Helper from "../../Helper/Helper.js";

export default class TugasCard {
    constructor(tugas) {
        this.tugas = tugas;
        this.elementStr = ``;
    }

    load() {
        this.elementStr = `
        <div class="task tugas-card" data-id='${this.tugas.id_tugas}'>
            <div class="row g-0">
                <div class='col-md-12'><img src="/dashboard/assets/img/avatars/6.png" style='width: 100%; height: 100px;object-fit: cover' class="img-fluid" alt="..."></div>
                <div class='w-100'></div>
                <div class="col p-2">
                    <h6 class="nama-tugas m-0" style='font-size: 10pt'>${
                        this.tugas.nama
                    }</h6>
                    <p class='m-0' style='font-size: 8pt'>${
                        this.tugas.keterangan
                    }</p>
                    <p class="due-date" style='font-size: 8pt'>Tenggat: ${
                        this.tugas.tanggal_awal
                    } - ${this.tugas.tanggal_akhir}</p>
                    ${Helper.status(this.tugas.status)}
                </div>
               
            </div>
          </div>
        </div>

`;
        return this.elementStr;
    }
}
