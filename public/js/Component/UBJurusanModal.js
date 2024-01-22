import Jurusan from "../Model/Jurusan.js";
import UBJurusan from "../Model/UBJurusan.js";
import User from "../Model/User.js";
import pageSetup from "./PageSetup.js";

export default class UBJurusanModal {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.pengguna;
        this.isLayout = true;
        this.ub_jurusan = {};
        this.nama_component = "UBJurusanModal";
    }

    load(id = null) {
        const ctx = this;
        this.pengguna = User.find(id);
        let contjurusan = this.container.find(".container-jurusan");
        contjurusan.empty();
        Jurusan.all(null, function (e) {
            e.forEach((element) => {
                contjurusan.append(
                    `<tr data-id='${element.id}'><td><input class='form-check inp-jurusan' type='checkbox' value='${element.id}'></td><td>${element.jurusan}</td><td><input type='checkbox' class='form-check inp-k3-row' ></td></tr>`
                );
            });

            //checklist the UB jurusan
            ctx.pengguna.getUBJurusan().ub_jurusan.forEach(function (e) {
                $(".inp-jurusan").each(function () {
                    if ($(this).val() == e.id_jurusan) {
                        $(this).attr("checked", "checked");
                        if (e.k3 == 1) {
                            $(this)
                                .closest("tr")
                                .find(".inp-k3-row")
                                .attr("checked", "checked");
                        }
                    }
                    //console.log(e);
                });
            });

            ctx.modal.show();
        });
    }

    parseFromElement() {
        const ctx = this;
        let ubJurusan = [];
        $(".inp-jurusan").each(function (e) {
            console.log(this.pengguna);
            if ($(this).is(":checked")) {
                let val = $(this).val();
                let ubj = new UBJurusan();
                ubj.id_pengguna = ctx.pengguna.id;
                ubj.id_jurusan = val;
                if ($(this).closest("tr").find(".inp-k3-row").is(":checked")) {
                    ubj.k3 = 1;
                } else {
                    ubj.k3 = 0;
                }
                ubJurusan.push(ubj);
            }
            //check k3
        });

        this.pengguna.ub_jurusan = ubJurusan;
    }

    globalEventListener() {
        const ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.parseFromElement();
            console.log(ctx.pengguna.ub_jurusan);
            ctx.pengguna.storeUBJurusan();
            ctx.modal.hide();
            pageSetup.getComponent("KonfigurasiPenggunaView").load();
        });
    }
}
