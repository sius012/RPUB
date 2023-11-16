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
                    `<div class='col-md-2'>${element.jurusan}
                    <input class='form-check inp-jurusan' type='checkbox' value='${element.id}'>
                    </div>`
                );
            });

            //checklist the UB jurusan
            ctx.pengguna.getUBJurusan().ub_jurusan.forEach(function (e) {
                $(".inp-jurusan").each(function () {
                    if ($(this).val() == e.id_jurusan) {
                        $(this).attr("checked", "checked");
                    }
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
                ubJurusan.push(ubj);
            }
        });

        this.pengguna.ub_jurusan = ubJurusan;
    }

    globalEventListener() {
        const ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.parseFromElement();
            ctx.pengguna.storeUBJurusan();
            ctx.modal.hide();
            pageSetup.getComponent("KonfigurasiPenggunaView").load();
        });
    }
}
