export default class ProjekCard {
    constructor(projek) {
        this.projek = projek;
        this.elementStr = ``;
    }

    load() {
        this.elementStr = `
        
        <div class="col-md-3 mb-3">
        <a href="#" class='projek-card' data-id="${this.projek.id}">
        <div class="card h-100">

        <div class="card-body">
            <h5 class="card-title">${this.projek.nama}</h5>
            <p class="card-text">${this.projek.deskripsi}</p>
            <p class="card-text">
                <small class="text-muted">${this.projek.jenis_projek}</small>
            </p>
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
