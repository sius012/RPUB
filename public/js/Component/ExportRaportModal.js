import Helper from "../Helper/Helper.js";
import Siswa from "../Model/Siswa.js";
import UBJurusan from "../Model/UBJurusan.js";

export default class ExportRaportModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.nama_component = "ExportRaportModal";
        this.authdata = Helper.getCurrentAuthUser();
        this.authdata.getUBJurusan();
    }

    load(id_kelas, id_jurusan) {
        this.container.find("select[name=jurusan]").empty();
        let jurusan = this.authdata.ub_jurusan.map(function (e) {
            return e.jurusan;
        });

        this.container.find("button[type=submit]").attr("disabled", "disabled");
        let optionJurusan = jurusan
            .map(function (e) {
                return `<option ${
                    e.id == id_jurusan ? "selected" : ""
                } value='${e.id}'>${e.keterangan}</option>`;
            })
            .join("");
        console.log(optionJurusan);
        this.container.find("select[name=jurusan").html(optionJurusan);
        this.container
            .find("select[name=kelas]")
            .children("option")
            .each(function () {
                // alert($(this).attr("value"));
                if ($(this).attr("value") == id_kelas - 9) {
                    $(this).attr("selected", "selected");
                } else {
                    $(this).removeAttr("selected");
                }
            });
        this.showSiswa(id_kelas - 9, id_jurusan);
        this.modal.show();
    }

    globalEventListener() {
        const ctx = this;
        this.container.find("select[name=jurusan]").change(function (e) {
            let id_jurusan = $(this).val();
            let kelas = ctx.container.find("select[name=kelas]").val();

            console.log({ id_jurusan: id_jurusan, kelas: kelas });
        });

        this.container.find("select[name=jurusan]").change(function (e) {
            let id_jurusan = $(this).val();
            let kelas = ctx.container.find("select[name=kelas]").val();
            ctx.showSiswa(kelas, id_jurusan);
        });

        this.container.find("select[name=kelas]").change(function (e) {
            let id_jurusan = ctx.container.find("select[name=jurusan]").val();
            let kelas = $(this).val();
            ctx.showSiswa(kelas, id_jurusan);
        });
    }

    showSiswa(kelas, jurusan) {
        const ctx = this;
        ctx.container.find("select[name=siswa]").empty();
        let siswa = Siswa.filter(
            { kelas: kelas, id_jurusan: jurusan },
            function (sws) {
                let siswaOpt = sws
                    .map(function (so) {
                        return `<option value='${so.id}'>${so.nama}</option>`;
                    })
                    .join("");
                ctx.container.find("select[name=siswa]").html(siswaOpt);
                if (sws.length < 1) {
                    ctx.container
                        .find("button[type=submit]")
                        .attr("disabled", "disabled");
                } else {
                    ctx.container
                        .find("button[type=submit]")
                        .removeAttr("disabled", "disabled");
                }
            }
        );
    }
}
