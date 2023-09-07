export default class Tugasmodal {
    constructor(container) {
        this.container = container;
        this.projek_data;
        this.modal = new bootstrap.Modal(this.container);
        this.tugas = new Tugas();
        this.page_setup;
        this.nama_component = "TugasModal";
    }

    init(projekdata) {
        this.projek_data = projekdata;
        this.getElement("id_projek").val(this.projek_data.id);

        var jenis = this.getElement("id_jenis", "select");
        var jenisdata = Jenis.byJurusan(projekdata.id_jurusan);
        jenis.html("");
        console.log(jenisdata);
        jenis.append(
            "<option value=''>Pilih Tugas/Grup (Sesuai dengan jurusan)</option>"
        );
        jenisdata.forEach(function (element) {
            jenis.append(
                `<option value='${element.id}' data-tipe='${element.tipe}'>${element.nama}   (${element.tipe})</option>`
            );
        });

        this.reset();
    }

    attach(id) {
        this.reset();
        this.tugas = Tugas.find(id, { jenis: true });
        this.getElement("id_parent").val(id);
        this.modal.show();
    }

    fromElement() {
        this.tugas = new Tugas();
        this.tugas.id_parent = this.getElement("id_parent").val();
        this.tugas.id_projek = this.getElement("id_projek").val();
        this.tugas.nama = this.getElement("nama").val();
        this.tugas.keterangan = this.getElement("keterangan", "textarea").val();
        this.tugas.id_jenis = this.getElement("id_jenis", "select").val();
        this.tugas.tanggal_awal = this.getElement("tanggal_awal").val();
        this.tugas.tanggal_akhir = this.getElement("tanggal_akhir").val();
        this.tugas.status = this.getElement("status", "select").val();
    }

    reset() {
        this.getElement("status", "select").closest(".row").hide();
        this.getElement("id_parent").val("");
        this.getElement("nama").val("");
        this.getElement("keterangan", "textarea").val("");
        this.getElement("id_jenis", "select").val("");
        this.getElement("tanggal_awal").val("");
        this.getElement("tanggal_akhir").val("");
        this.getElement("status", "select").val("Belum Dimulai");
    }

    globalEventListener() {
        var ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.fromElement();
            ctx.tugas.simpan();
            ctx.modal.hide();
            var dpv = ctx.page_setup.getComponent("DetailProjekView");
            dpv.loadTugas();
        });

        this.container.delegate(
            "select[name=id_jenis]",
            "change",
            function (q) {
                var option = $(this).find(`option[value=${$(this).val()}]`);
                var status = ctx.getElement("status", "select").closest(".row");
                if (option.data("tipe") == "grup") {
                    status.hide();
                } else {
                    status.show();
                }
            }
        );
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }
}
