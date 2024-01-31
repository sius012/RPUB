import Helper from "../../Helper/Helper.js";

export default class TaskboardCard {
    constructor(tugas) {
        this.tugas = tugas;
    }

    static render(tugas) {
        return `            <div class="card task p-2 mb-2 tugas-card" data-id=${
            tugas.id_tugas
        }>
        <div class="row">
            <div class="col text-sm "><span>Due date: ${Helper.formatShortDate(
                tugas.tanggal_awal
            )}</span></div>
            <div class="col text-sm text-end">${Helper.status(
                tugas.status
            )}</div>
        </div>
        <div class="row my-2">
            <div class="col-12">
                <span style="font-size: 15pt;font-weight: bold">${
                    tugas.nama
                }</span>
            </div>
        </div>
        <div class="row">
            <div class="col text-sm">Ditugaskan kepada: Anda, Rizky</div>

        </div>
     </div>`;
    }
}
