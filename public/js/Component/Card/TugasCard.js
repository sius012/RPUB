import Helper from "../../Helper/Helper.js";

export default class TugasCard {
    constructor(tugas) {
        this.tugas = tugas;
        this.elementStr = ``;
    }

    load() {
        console.log(this.tugas);
        this.elementStr = `
        <div class="task tugas-card" data-id='${this.tugas.id_tugas}'>
            <div class="row g-0">
                <div class='col-md-12'>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  ${this.tugas.image
                      .map(
                          (e) => `<div class="carousel-item active">
                  <img src="/versi/${e}" style="height: 50px;object-fit: cover" class="d-block w-100" alt="...">
                </div>`
                      )
                      .join("")}
                </div>
              </div>
                </div>
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
