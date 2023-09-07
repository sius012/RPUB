export default class TugasCard {
    constructor(tugas) {
        this.tugas = tugas;
        this.elementStr = ``;
    }

    load() {
        this.elementStr = `
        
        <div class="task">${this.tugas.nama}
                <p>${this.tugas.deskripsi}</p>
                <p class="due-date">Due Date: ${this.tugas.tanggal_awal}</p>
                <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
`;
        return this.elementStr;
        
    }
}
