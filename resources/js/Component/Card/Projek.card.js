class ProjekCard{
    constructor(projek){
        this.projek =projek;
        this.elementStr =``;
    }


load() {
    this.elementStr = `<div class="col pb-3"><div class="card" style="width: 18 rem; height: 18 rem">
    <div class="card-body">
        <h5 class="card-title">${this.projek.nama}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this.projek.jenis_projek}</h6>
        <p class="card-text">${this.projek.deskripsi}</p>
        <a href="#" class="card-link">Card link<a/>
        <a href="#" class="card-link">Another link<a/>
    </div>
    </div></div>`;
    return this.elementStr;
    }
}