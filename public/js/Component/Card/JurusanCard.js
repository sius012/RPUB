export default class JurusanCard {
    constructor(jurusan) {
        this.jurusan = jurusan;
        this.elementStr;
    }

    load() {
        this.elementStr = `
        <div class="col-md-3 mb-3">
        <a href="#" class='jurusan-card' data-id="${this.jurusan.id}">
            
            <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${this.jurusan.jurusan}</h5>
                <p class="card-text"></p>
                <p class="card-text">
                    <small class="text-muted">Jumlah Projek ${this.jurusan.jumlah_projek}</small>
                </p>
          </div>
        </div>
      </a></div>`;
        return this.elementStr;
    }
}
