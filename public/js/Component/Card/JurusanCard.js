class JurusanCard{
    constructor(jurusan){
        this.jurusan = jurusan;
        this.elementStr;
        
    }


    load() {
        this.elementStr = `
        <a href="#" class='jurusan-card' data-id="${this.jurusan.id}">
            <div class="col">
            <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${this.jurusan.jurusan}</h5>
                <p class="card-text"></p>
                <p class="card-text">
                    <small class="text-muted">Jumlah Projek</small>
                </p>
          </div>
        </div>
      </div></a>`;
        return this.elementStr;
        }
    }