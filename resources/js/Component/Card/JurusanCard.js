class JurusanCard{
    constructor(jurusan){
        this.jurusan = jurusan;
        this.elementStr;
        
    }


    load() {
        this.elementStr = `<div class="row row-cols-1 row-cols-md-3 g-4">
        <a href="">
            <div class="col">
            <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Nama Jurusan</h5>
                <p class="card-text"></p>
                <p class="card-text">
                    <small class="text-muted">Jumlah Projek</small>
                </p>
          </div>
        </div>
      </div></a>

      </div>`;
        return this.elementStr;
        }
    }