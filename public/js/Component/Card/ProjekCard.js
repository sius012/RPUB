import Helper from "../../Helper/Helper.js";

export default class ProjekCard {
    constructor(projek) {
        this.projek = projek;
        this.elementStr = ``;
    }

    load() {
        console.log(this.projek);
        this.elementStr = `
        
        <div class="col-md-4 mb-3 col-projek">
        <a href="#" class='projek-card' data-id="${
            this.projek.id
        }" data-jurusan="${this.projek.jurusan
            .map(function (e) {
                return e.id;
            })
            .join(",")}">
        <div class="card h-100">

        <div class="card-body"><div class='row'><div class='col-6'>
        <div class='rows d-flex mb-2'>   ${this.projek.jurusan
            .map(function (e) {
                return `<div class=''><span class="badge bg-primary mr-4">${e.jurusan}</span></div><div class='m-2'></div>`;
            })
            .join("")}</div></div></div>
    
        
            <h4 class="card-title mx-0 my-2">${this.projek.nama}</h4>
            <p class="card-text m-0">
                <small class="text-muted m-0">${
                    this.projek.jenis_projek
                }</small>
            </p>
            <span class='m-0'>${Helper.formatShortDate(
                this.projek.tanggal_akhir
            )}</span>
      </div>
    </div>
        </a>
  </div>
`;
        return this.elementStr;
    }
}

// <img src="/versi/${this.projek.image
//     .map((e) => e)
//     .join("")}" class="card-img-top" alt="...">
