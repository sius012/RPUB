class DetailProjekView {
    constructor(container) {
        this.container = container;
        this.projek;
        this.tugasList;

        this.page_setup;
        this.nama_component = "DetailProjekView";
    }

    loadData(id) {
        this.projek = projek.find(id);
        this.tugasList = Tugas.byProjek(id);
    }



    loadInfoProjek() {
        var infoProjek = this.container.find("#informasiprojek");
        infoprojek.find(".nama-projek").val(this.projek.nama);
        infoprojek.find(".tanggal-awal").val(this.projek.tanggal_awal);
        infoprojek.find(".tanggal-akhir").val(this.projek.tanggal_akhir);
        infoprojek.find(".penanggung-jawab").val(this.projek.penanggung_jawab);
        infoprojek.find(".jenis-projek").val(this.projek.jenis_projek);
        infoprojek.find(".klien").val(this.projek.klien);
        infoprojek.find(".deskripsi").val(this.projek.deskripsi);
        infoprojek.find(".status").val(this.projek.status);
        

    }

    loadTugas() {
        var ctx = this;
        var tugasView = this.container.find("#tugas").find("tbody");
        tugasView.html("");
        this.tugasList.forEach((element, i) => {
            tugasView.append(ctx.#rekursifTugas(element, 1 + i));
        });

        tugasView.children("tr").each(function(i) {
            $(this).find(".no").text(i + 1)
        })
    }

    #rekursifTugas(tugas, index) {
        var barStr = "<div class='progress position-relative'>";
        for (var i in tugas.tugasStatusArr) {
            var color = "";
            switch (i) {
                case "Selesai":
                    color ="bg-primary"
                    break;
                case "Belum Selesai":
                    color = "bg-warning"
                    break;
                default:
                    break; 
            }
            barStr +=`<div class="progress-bar ${color}" style=="width:${tugas.tugasStatusArr[i] / tugas.tugasCount * 100}%"></div>`
     }
     barStr += "</div>"   

     var tugasStr =`
     <tr data-id='$(tugas.id_tugas)">
        <td class="no">$(index)</td>
        <td style="padding-left: $(tugas.indent_level * 20)px">$(tugas.nama)</td>
        <td>$(tugas.tugasCount > 0 ? barStr : "<span class='badge bg-primary'>" + tugas.status + "</span>")</td>
        <td>$(tugas.keterangan)</td>
        <td>$(tugas.tanggal_awal)</td>
        <td>$(tugas.tanggal_akhir)</td>
        <td>$(tugas.tugasCount)</td>
     </tr>
     `

     if (tugas.children.length > 0) {
        tugas.children.forEach(element => {
            tugasStr += this.#rekursifTugas(element, index)
        });
     }

     return tugasStr

    }

globalEventListener() {
    var ctx = this;
    this.container.find("#tugas").delegate("td","click", function (e) {
        e.preventDefault()
        var ctxmenu = ctxpage_setup.getComponent("ContextMenu");
        ctxmenu.trigger($(this),closest("tr").attr("data-id"))
    })
}
}