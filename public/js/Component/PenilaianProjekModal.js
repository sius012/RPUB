import PenilaianProjek from "../Model/PenilaianProjek.js";
import pageSetup from "./PageSetup.js";
import Siswa from "../Model/Siswa.js";
import Penugasan from "../Model/Penugasan.js";

export default class PenilaianProjekModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.nama_component = "PenilaianProjekModal";
        this.isLayout = true;
        //this.penilaianProjek = new PenilaianProjek();
        this.id_siswa;
        this.id_tugas;
        this.mode = "simpan";
        this.editable = false;
    }

    init(id_projek, id_siswa) {
        const ctx = this;
        let containerTugas = ctx.container.find(".container-tugas");
        let containerPenilaian = ctx.container.find(".container-penilaian");
        this.id_siswa = id_siswa;
        containerPenilaian.hide();
        containerTugas.show();
        this.mode = "simpan";
        this.reset();
        this.getElement("id_projek").val(id_projek);
        this.getElement("id_siswa").val(id_siswa);

        let siswa = Siswa.find(id_siswa);

        containerTugas.empty();
        siswa.tugasByProjek(id_projek, function (data) {
            data.forEach((element) => {
                console.log(element);
                containerTugas.append(
                    `<div class='row mb-3'><div class='card'><div class='card-body'>
                    <div class='row'>
                    <div class='col-1'>
                    <i class='fa fa-tasks m-0' style='font-size: 20pt'></i>
                    </div>
                    <div class='col-5 align-middle'><p class=''>${
                        element.tugas.nama
                    }</p></div>
                    <div class='col-6 text-end'><div class='btn-group'>
                    <button ${
                        element.penilaian.length > 0
                            ? "data-id-penilaian='" +
                              element.penilaian[0].id +
                              "'"
                            : ""
                    } class='btn btn-sm ${
                        element.penilaian.length > 0
                            ? "btn-primary"
                            : "btn-secondary"
                    } tugas-siswa' type='button' data-id='${
                        element.tugas.id_tugas
                    }'>Beri Nilai</button>
                    <button class='btn btn-sm btn-primary buka-laporan' data-id-siswa='${
                        element.id_siswa
                    }' data-id-tugas='${
                        element.id_tugas
                    }'>Lihat Laporan</button>
                    ${
                        element.penilaian.length > 0
                            ? `<button data-id-penilaian='${element.penilaian[0].id}' type='button' class='btn  btn-sm btn-danger hapus-penugasan'>Hapus</button><button data-id-penilaian='${element.penilaian[0].id}' class='btn btn-sm btn-success download-penilaian'><i class='fa fa-download'></i></button>`
                            : ""
                    }</div></div>
                    </div>
                    </div></div></div>`
                );
            });
        });

        //menyembunyikan modal footer
        this.container.find(".modal-footer").hide();

        //tampilkan tombol submit
        this.container.find(".submit-penilaian").show();
    }

    load(id_penilaian) {
        this.mode = "edit";
        let penilaianProjek = PenilaianProjek.find(id_penilaian);

        this.container.find(".submit-penilaian").hide();
        let containerTugas = this.container.find(".container-tugas");
        let containerPenilaian = this.container.find(".container-penilaian");
        containerTugas.hide();

        //render Penilaian;
        let penilaian = PenilaianProjek.find(id_penilaian);
        let containerIndikator = this.container
            .find(".container-indikator")
            .find("tbody");
        containerIndikator.empty();

        //penilaian non formal
        penilaian.penilaian_non_formal.forEach(function (e) {
            containerIndikator.append(
                `<tr><th>${e.indikator.nama}</th><th><input class='form-control nilai-max' readonly value='${e.indikator.nilai_max}'></th><th><input name='indikator' data-id-pnf='${e.id}' data-id='${e.indikator.id}' class='form-control' readonly value='${e.nilai}'></th></tr>`
            );
        });

        //penilaian informal
        this.getElement("id_penilaian").val(id_penilaian);

        this.getElement("id_pif").val(penilaian.penilaian_informal.id);

        this.getElement("inisiatif", "select").val(
            penilaian.penilaian_informal.inisiatif
        ),
            this.getElement("antusias", "select").val(
                penilaian.penilaian_informal.antusias
            ),
            this.getElement("kejujuran", "select").val(
                penilaian.penilaian_informal.antusias
            ),
            this.getElement("kreativitas", "select").val(
                penilaian.penilaian_informal.kreativitas
            ),
            this.getElement("tanggung_jawab", "select").val(
                penilaian.penilaian_informal.tanggung_jawab
            ),
            this.getElement("komunikasi", "select").val(
                penilaian.penilaian_informal.komunikasi
            ),
            this.getElement("kedisiplinan", "select").val(
                penilaian.penilaian_informal.kedisiplinan
            ),
            this.getElement("etika_sopansantun", "select").val(
                penilaian.penilaian_informal.etika_sopansantun
            ),
            this.getElement("k3", "select").val(
                penilaian.penilaian_informal.k3
            ),
            containerPenilaian.show();

        //ubah jadi readonly
        this.container
            .find(".table-informal")
            .find("select")
            .each(function () {
                $(this).attr("disabled", "disabled");
            });
        this.container.find(".btn-edit").show();
        this.container.find(".modal-footer").show();

        this.modal.show();
    }

    reset() {
        this.getElement("id_projek").val("");
        this.getElement("id_siswa").val("");
        this.getElement("id_penilai").val("");
        this.getElement("n_nformal").val("");
        this.getElement("inisiatif", "select").val("");
        this.getElement("antusias", "select").val("");
        this.getElement("kejujuran", "select").val("");
        this.getElement("kreativitas", "select").val("");
        this.getElement("tanggung_jawab", "select").val("");
        this.getElement("komunikasi", "select").val("");
        this.getElement("etika_sopansantun", "select").val("");
        this.getElement("k3", "select").val("");
        this.getElement("tanggung_jawab", "select").val("");
        this.getElement("keterangan", "textarea").val("");
    }

    loadPenilaian(id_tugas) {
        const ctx = this;
        this.id_tugas = id_tugas;

        ctx.container.find(".container-tugas").hide();
        let tugas = pageSetup.getTugasCache(id_tugas);
        let containerIndikator = this.container
            .find(".container-indikator")
            .find("tbody");
        containerIndikator.closest(".container-penilaian").show();
        containerIndikator.empty();
        tugas.getIndikator(function (data) {
            data.forEach(function (e) {
                containerIndikator.append(
                    `<tr><th>${e.nama}</th><th>${e.nilai_max}</th><th><input name='indikator'  data-id='${e.id_tugas}' class='form-control'></th></tr>`
                );
            });
        });

        //mengaktifkan inputan
        //ubah jadi readonly
        this.container
            .find(".table-informal")
            .find("select")
            .each(function () {
                $(this).removeAttr("disabled");
            });
        this.container.find(".btn-edit").hide();
        this.container.find(".modal-footer").show();
    }

    parsing() {
        let penilaian = new PenilaianProjek();
        penilaian.id_siswa = this.id_siswa;
        penilaian.id_tugas = this.id_tugas;

        penilaian.penilaian_non_formal = [];

        if (this.getElement("id_penilaian").val().length > 0) {
            penilaian.id = this.getElement("id_penilaian").val();
        }
        this.getElement("indikator").each(function () {
            let data = {
                id_tugas: $(this).data("id"),
                nilai: $(this).val(),
            };
            if ($(this).data("id-pnf") != undefined) {
                data.id = $(this).data("id-pnf");
            }
            penilaian.penilaian_non_formal.push(data);
        });

        penilaian.penilaian_informal = {
            inisiatif: this.getElement("inisiatif", "select").val(),
            antusias: this.getElement("antusias", "select").val(),
            kejujuran: this.getElement("kejujuran", "select").val(),
            kreativitas: this.getElement("kreativitas", "select").val(),
            tanggung_jawab: this.getElement("tanggung_jawab", "select").val(),
            komunikasi: this.getElement("komunikasi", "select").val(),
            kedisiplinan: this.getElement("kedisiplinan", "select").val(),
            etika_sopansantun: this.getElement(
                "etika_sopansantun",
                "select"
            ).val(),
            k3: this.getElement("k3", "select").val(),
        };

        if (this.getElement("id_pif").val().length > 0) {
            penilaian.penilaian_informal.id = this.getElement("id_pif").val();
        }

        this.penilaianProjek = penilaian;
        console.log(penilaian);
    }

    globalEventListener() {
        const ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.parsing();
            let validasi = ctx.validasi();
            console.log(ctx.penilaianProjek);
            if (validasi) {
                switch (ctx.mode) {
                    case "edit":
                        console.log(ctx.penilaianProjek.toJson());
                        ctx.penilaianProjek.update(function () {
                            Swal.fire({
                                icon: "success",
                                title: "Penilaian berhasil diperbarui",
                                target: ctx.container[0],
                            });
                            ctx.modal.hide();
                        });
                        break;

                    case "simpan":
                        ctx.penilaianProjek.simpan(function () {
                            Swal.fire({
                                icon: "success",
                                title: "Penilaian berhasil dikirim",
                                target: ctx.container[0],
                            });
                            ctx.modal.hide();
                        });
                        break;
                    default:
                        break;
                }

                //     ctx.modal.hide();
                // });
            } else {
                let badgeError = ctx.container.find(".validate-note");
                badgeError.show();
                setTimeout(function () {
                    badgeError.hide();
                }, 2000);
            }
        });
        this.container.delegate(".tugas-siswa", "click", function (e) {
            if ($(this).data("id-penilaian") == undefined) {
                ctx.loadPenilaian($(this).data("id"));
            } else {
                let id_penilaian = $(this).data("id-penilaian");
                ctx.load(id_penilaian);
            }
        });

        this.container.find(".submit-penilaian").click(function () {
            ctx.container.find("form").submit();
        });

        this.container.find(".btn-edit").click(function () {
            if (ctx.editable == false) {
                ctx.getElement("indikator").each(function () {
                    $(this).removeAttr("readonly");
                });

                ctx.container
                    .find(".table-informal")
                    .find("select")
                    .each(function () {
                        $(this).removeAttr("disabled");
                    });
                ctx.editable = true;
                ctx.container.find(".submit-penilaian").show();
            } else {
                ctx.getElement("indikator").each(function () {
                    $(this).attr("readonly", "readonly");
                });

                ctx.container
                    .find(".table-informal")
                    .find("select")
                    .each(function () {
                        $(this).attr("disabled", "disabled");
                    });
                ctx.editable = false;
                ctx.container.find(".submit-penilaian").hide();
            }
        });

        this.container.delegate(".hapus-penugasan", "click", function () {
            let penilaianProjek = PenilaianProjek.find(
                $(this).data("id-penilaian")
            );
            penilaianProjek.hapus(function () {
                ctx.modal.hide();
            });
        });

        this.container.delegate(".download-penilaian", "click", function () {
            window.location =
                "/penilaianprojek/" +
                $(this).data("id-penilaian") +
                "?download=1";
        });

        this.container.delegate(".buka-laporan", "click", function () {
            let lLM = pageSetup.getComponent("LaporanListModal");
            lLM.load($(this).data("id-tugas"), $(this).data("id-siswa"));
        });
    }

    validasi() {
        let ctx = this;
        //mengecek apakah penilaian non formal sudah terisi semua
        let validasiPenilaianNonFormal = true;
        let validasiPenilaianInformal = true;

        ctx.getElement("indikator").each(function () {
            if ($(this).val().length < 1) {
                validasiPenilaianNonFormal = false;
            }

            if (
                parseInt($(this).closest("tr").find(".nilai-max").val()) <
                parseInt($(this).val())
            ) {
                validasiPenilaianNonFormal = false;
            }
        });

        this.container
            .find(".table-informal")
            .find("select")
            .each(function () {
                if ($(this).val() == null) {
                    validasiPenilaianInformal = false;
                }
            });

        if (validasiPenilaianInformal && validasiPenilaianNonFormal) {
            return true;
        } else {
            return false;
        }
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }

    parseFromElement() {
        this.penilaianProjek.id_projek = this.getElement("id_projek").val();
        this.penilaianProjek.id_siswa = this.getElement("id_siswa").val();
        this.penilaianProjek.id_penilai = this.getElement("id_penilai").val();
        this.penilaianProjek.n_nformal = this.getElement("n_nformal").val();
        this.penilaianProjek.antusias = this.getElement(
            "inisiatif",
            "select"
        ).val();
        this.penilaianProjek.antusias = this.getElement(
            "antusias",
            "select"
        ).val();
        this.penilaianProjek.kejujuran = this.getElement(
            "kejujuran",
            "select"
        ).val();
        this.penilaianProjek.kreatifitas = this.getElement(
            "kreativitas",
            "select"
        ).val();
        this.penilaianProjek.tanggung_jawab = this.getElement(
            "tanggung_jawab",
            "select"
        ).val();
        this.penilaianProjek.komunikasi = this.getElement(
            "komunikasi",
            "select"
        ).val();
        this.penilaianProjek.etika_sopansantun = this.getElement(
            "etika_sopansantun",
            "select"
        ).val();
        this.penilaianProjek.k3 = this.getElement("k3", "select").val();
        console.log(this.penilaianProjek);
        this.penilaianProjek.keterangan = this.getElement(
            "keterangan",
            "textarea"
        ).val();
        console.log("hasil parsing:");
        console.log(this);
    }
}
