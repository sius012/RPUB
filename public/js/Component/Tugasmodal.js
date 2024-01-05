import Tugas from "../Model/Tugas.js";
import Jenis from "../Model/Jenis.js";
import Helper from "../Helper/Helper.js";
import pageSetup from "./PageSetup.js";
export default class TugasModal {
    constructor(container) {
        this.container = container;
        this.projek_data;
        this.modal = new bootstrap.Modal(this.container);
        this.tugas = new Tugas();
        this.page_setup;
        this.nama_component = "TugasModal";
        this.tipe = "tugas";

        this.mode = "tambah";
    }

    init(projekdata) {
        let ctx = this;
        this.projek_data = projekdata;

        Helper.validasiTanggal(this, {
            min: ctx.projek_data.tanggal_awal,
            max: ctx.projek_data.tanggal_akhir,
        });
        this.getElement("id_projek").val(this.projek_data.id);

        var jenis = this.getElement("id_jenis", "select");
        // var jenisdata = Jenis.byProjek(projekdata.id_jurusan, function (data) {
        //     jenis.html("");
        //     jenis.append(
        //         "<option value=''>Pilih Tugas/Grup (Sesuai dengan jurusan)</option>"
        //     );
        //     data.forEach(function (element) {
        //         jenis.append(
        //             `<option value='${element.id}' data-tipe='${element.tipe}'>${element.nama}   (${element.tipe}) (${element.id_jurusan})</option>`
        //         );
        //     });

        //     ctx.reset();
        // });
        console.log(ctx);
        this.container.find("button[type=submit]").text("Tambah");
    }

    attach(id) {
        this.reset();

        this.mode = "tambah";
        this.tugas = Tugas.find(id, { jenis: true });
        this.getElement("id_parent").val(id);
        this.container.find(".modal-title").text("Tambah Indikator Penilaian");

        this.getElement("tanggal_awal").closest(".row").hide();
        this.getElement("tanggal_akhir").closest(".row").hide();

        this.getElement("tanggal_awal").removeAttr("required");
        this.getElement("tanggal_akhir").removeAttr("required");

        this.getElement("nilai_max").closest(".row").show();
        this.getElement("nilai_max").attr("required", "required");

        this.container.find("#nama-tugas-label").text("Indikator");
        this.modal.show();

        this.tipe = "indikator";
        this.container.find("button[type=submit]").text("Tambah");
    }

    fromElement() {
        this.tugas = new Tugas();
        this.tugas.id_parent = this.getElement("id_parent").val();
        this.tugas.id_projek = this.getElement("id_projek").val();
        this.tugas.nama = this.getElement("nama").val();
        this.tugas.keterangan = this.getElement("keterangan", "textarea").val();

        this.tugas.tipe = this.tipe == "tugas" ? "tugas" : "indikator";

        this.tugas.tanggal_awal =
            this.tipe == "tugas" ? this.getElement("tanggal_awal").val() : null;
        this.tugas.tanggal_akhir =
            this.tipe == "tugas"
                ? this.getElement("tanggal_akhir").val()
                : null;
        this.tugas.status = this.getElement("status", "select").val();

        if (this.tipe == "indikator") {
            this.tugas.nilai_max = this.getElement("nilai_max").val();
        }

        if (this.getElement("id_tugas").val().length > 0) {
            this.tugas.id_tugas = this.getElement("id_tugas").val();
        }
        console.log(this.getElement("id_jenis", "select"));
        console.log("setelah diparsing");
        console.log(this);
    }

    reset() {
        this.getElement("status", "select").closest(".row").hide();
        this.getElement("id_parent").val("");
        this.getElement("nama").val("");
        this.getElement("keterangan", "textarea").val("");
        this.getElement("id_jenis", "select").val("");
        this.getElement("tanggal_awal").val("");
        this.getElement("tanggal_akhir").val("");

        this.getElement("tanggal_awal").attr("required", "required");
        this.getElement("tanggal_akhir").attr("required", "required");

        this.getElement("status", "select").val("Belum Dimulai");

        this.container.find(".modal-title").text("Tambah Tugas/Kompetensi");

        this.container.find("#nama-tugas-label").text("Nama Tugas");

        this.getElement("tanggal_awal").closest(".row").show();
        this.getElement("tanggal_akhir").closest(".row").show();
        this.getElement("nilai_max").closest(".row").hide();
        this.getElement("nilai_max").removeAttr("required");

        this.tipe = "tugas";
    }

    loadTugas(id) {
        let tugas = pageSetup.getTugasCache(id);
        this.mode = "edit";
        this.getElement("status", "select").val(tugas.status);
        this.getElement("id_parent").val(tugas.id_parent);
        this.getElement("id_tugas").val(tugas.id_tugas);
        this.getElement("nama").val(tugas.nama);
        this.getElement("keterangan", "textarea").val(tugas.keterangan);
        this.getElement("id_jenis", "select").val(tugas.id_jenis);
        this.getElement("tanggal_awal").val(tugas.tanggal_awal);
        this.getElement("tanggal_akhir").val(tugas.tanggal_akhir);
        this.container.find("button[type=submit]").text("Perbarui");

        switch (tugas.tipe) {
            case "tugas":
                this.tipe = "tugas";
                this.getElement("tanggal_awal").closest(".row").show();
                this.getElement("tanggal_akhir").closest(".row").show();

                this.getElement("tanggal_awal").attr("required", "required");
                this.getElement("tanggal_akhir").attr("required", "required");

                this.getElement("nilai_max").closest(".row").hide();
                this.getElement("nilai_max").removeAttr("required");

                this.getElement("status", "select").closest(".row").show();

                this.container
                    .find(".modal-title")
                    .text("Edit Tugas/Kompetensi");
                break;

            case "indikator":
                this.tipe = "indikator";
                this.getElement("tanggal_awal").closest(".row").hide();
                this.getElement("tanggal_akhir").closest(".row").hide();

                this.getElement("tanggal_awal").removeAttr("required");
                this.getElement("tanggal_akhir").removeAttr("required");

                this.container.find(".modal-title").text("Edit Indikator");

                this.getElement("nilai_max").closest(".row").show();
                this.getElement("nilai_max").attr("required", "required");
                this.getElement("nilai_max").val(tugas.nilai_max);
                this.getElement("status", "select").closest(".row").hide();

                break;
            default:
                break;
        }

        this.container.find("#nama-tugas-label").text("Nama Tugas");

        this.modal.show();
    }

    globalEventListener() {
        var ctx = this;

        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.fromElement();

            if (ctx.mode == "edit") {
                ctx.tugas.update(function () {});
            } else {
                ctx.tugas.simpan();
            }

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
                if (option.attr("value") == "grup") {
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
