class ProjekCard{
    constructor(projek){
        this.projek =projek;
        this.elementStr =``;
    }


load() {
    this.elementStr = `<div class="row row-cols-1 row-cols-md-3 g-4">
        <a href="">
        <div class="col">
        <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nama Projek</h5>
            <p class="card-text">Deskripsi Projek</p>
            <p class="card-text">
                <small class="text-muted">Jenis Projek</small>
            </p>
      </div>
    </div>
  </div></a>

  </div>`;
    return this.elementStr;
    }
}