export default class AssigmentSiswaModal {
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

    init(id_jurusan, tugas){
        this.id_jurusan = id_jurusan;
       
        this.tugas = tugas;
        this.container.find("input[name=id_projek]").val(id_jurusan);
        this.container.find("input[name=id_tugas]").val(this.tugas.id);
        console.log(this.tugas);


    }

    loadContext(kw = null){
       var ctx = this;
       Siswa.byQuery(
        {
            id_jurusan: this.id_jurusan,
            nama: kw,
        },
        function (data) {
            ctx.siswaList = data;
            ctx.container.find(".siswa-list-container").html("");
            ctx.siswaList.forEach(element => {
                let input = ctx.container
                    .find(".siswa-container")
                    .find(".input[value="+ element.id + "]");
                console.log(input.length);

                ctx.container
                     .find(".siswa-list-container")
                     .append(ctx.siswaListCard(element, input));
            });
        }
       )
    }

    show() {
        this.modal.show();
    }

    globalEventListener(){
        var ctx = this;
        this.container.find(".input-siswa").keyup(function(){
            ctx.loadContext($(this).val());
        });
        this.container.delegate(".btn-tambah-siswa", "click", function(){
           var id = $(this).closest(".row").date("id");
           var containersiswa = ctx.container.find(".container-siswa");
          if ($(this).is(":checked")){
            ctx.tambahPartisipan(id);
          } else {
            ctx.container
                .find(".siswa-container")
                .find("input[value=" + id + "]")
                .remove();
          }
        });
        this.container.find("form").submit(function (e){
            e.preventDefault();
            ctx.kirimPartisipan();

        });
    }

    tambahPartisipan(id){
        let input = this.container
            .find(".siswa-container")
            .find("input[value=" + id + "]").length;
        if (input < 1) {
            var containersiswa = this.container.find(".siswa-container");
            containersiswa.append(`
                  <input type='hidden' name='id_siswa' value='${id}' class='id-siswa'>
            `);
        }
    }

    
}  