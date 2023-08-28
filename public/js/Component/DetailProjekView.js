class DetailProjekView {
    constructor(container) {
        this.container = container;
        this.projek;
        this.tugasList;

        this.page_setup;
        this.nama_component = "DetailProjekView";
    }

    load(id) {
        let breadcrumb = window.pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([this.nama_component, "active"]);

        this.page_setup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya
            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });
        
        this.container.show();

        this.loadData(id);
        this.loadInfoProjek();
        this.loadTugas();
    }

    loadData(id) {
        this.projek = Projek.find(id);
        this.tugasList = Tugas.byProjek(id);
    }

    loadInfoProjek() {
        var infoprojek = this.container.find("#informasi-projek");
        console.log(this.projek);
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
        //simpan posisi terakhir
        var previousScroll = $(window).scrollTop();
        var tugasView = this.container.find("#tugas").find("tbody");

        tugasView.empty();

        this.tugasList = Tugas.byProjek(this.projek.id);
        this.tugasList.forEach((element, i) => {
            tugasView.append(ctx.#rekursifTugas(element, 1 + i));
        });

        tugasView.children("tr").each(function (i) {
            $(this)
                .find(".no")
                .text(i + 1);
        });

        //mengisi id_projek
        var tugasModal = this.page_setup.getComponent("TugasModal");
        tugasModal.init(this.projek);
        $(window).scrollTop(previousScroll);
    }

    #rekursifTugas(tugas, index) {
        var barStr = "<div class='progress position-relative'>";
        for (var i in tugas.statusArr) {
            var color = Helper.status(i, true);

            barStr += `<div class="progress-bar ${color}" style="width:${
                (tugas.statusArr[i] / tugas.tugasCount) * 100
            }%"></div>`;
        }
        barStr += "</div>";

        var tugasStr = `
     <tr data-id='${tugas.id_tugas}'>
        <td class="no">${index}</td>
        <td style="padding-left: ${tugas.indent_level * 20}px">${tugas.nama} ${
            tugas.data_jenis.tipe
        }</td>
        <td class='status'>${
            tugas.data_jenis.tipe == "grup"
                ? barStr
                : Helper.status(tugas.status)
        }</td>
        <td>${tugas.keterangan}</td>
        <td>${tugas.tanggal_awal}</td>
        <td>${tugas.tanggal_akhir}</td>
     </tr>
     `;

        if (tugas.children.length > 0) {
            tugas.children.forEach((element) => {
                tugasStr += this.#rekursifTugas(element, index);
            });
        }

        return tugasStr;
    }

    globalEventListener() {
        var ctx = this;
        this.container.find("#tugas").delegate("td", "click", function (e) {
            //e.preventDefault();
            e.stopPropagation();
            var ctxmenu = ctx.page_setup.getComponent("ContextMenuTugas");
            ctxmenu.trigger($(this), $(this).closest("tr").attr("data-id"));
        });

        this.container
            .find("#tugas")
            .delegate(".status", "click", function (e) {
                e.preventDefault();
                var ctxmenu = ctx.page_setup.getComponent("ContextMenuStatus");
                ctxmenu.trigger($(this), $(this).closest("tr").attr("data-id"));
            });

        this.container.find(".tambah-tugas").click(function () {
            var tugasModal = ctx.page_setup.getComponent("TugasModal");
            tugasModal.reset();
            tugasModal.modal.show();
        });
    }
}
