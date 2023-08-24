class AssigmentSiswaModal {
    constructor(container){
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.siswaList;
        this.id_jurusan;
        this.projek;
        this.tugas;
        this.page_setup;
        this.nama_component = "AssigmentSiswaModal";
    }

    init(projek, tugas){
        this.id_jurusan = projek.id_jurusan;
        this.projek = projek;
        this.tugas = tugas;
        this.container.find("input[name=id_projek]").val(this.projek.id);
        this.container.find("input[name=id_tugas]").val(this.tugas.id);


    }

    loadContext(kw = null){
        this.siswaList =
            Siswa.byQuery({ id_jurusan: this.id_jurusan, nama: kw });

        this.container.find(".siswa-container").html("");
        this.siswaList.forEach(element => {
            this.container.find(".siswa-container").append(`
            <div class='row' data-id='${element.id}'>
            <div class='col-10'>
                 <h1>${element.id}</h1>
            </div>
            <div class='col-2>
                 <button class='btn btn-primary tambah-button btn-tambah-siswa'></button>
            </div>     
            </div>
             `);

        });
    }

    show() {
        this.modal.show();
    }

    globalEventListener(){
        var ctx = this;
        this.container.find(".input-siswa").kwyup(function(){
            ctx.loadContext(null, $(this).val());
        });
        this.container.delegate(".btn-tambah-siswa", "click", function(){
           var id = $(this).closest(".row").date("id");
           var containersiswa = ctx.container.find(".container-siswa");
           containersiswa.append(`
                <input type='hidden' name='id_siswa{}' value='${id}'>
           `);
        });
        this.container.find("form").submit(function (e){

        });
    }

    
}  