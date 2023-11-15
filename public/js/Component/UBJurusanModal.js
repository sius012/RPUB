import Jurusan from "../Model/Jurusan.js";
import UBJurusan from "../Model/UBJurusan.js";
import User from "../Model/User.js";

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
        this.pengguna = User.find(id);
        let contjurusan = this.container.find(".container-jurusan");
        Jurusan.all(null, function (e) {
            e.forEach((element) => {
                contjurusan.append(
                    `<div class='col-md-2'>${element.jurusan}
                    <input class='form-check inp-jurusan' type='checkbox' value='${element.id}'>
                    </div>`
                );
            });
        });
        this.modal.show();
    }

    parseFromElement() {
        let ubJurusan = [];
        $(".inp-jurusan").each(function (e) {
            if ($(this).is(":checked")) {
                let val = $(this).val();
                ubJurusan.push(
                    UBJurusan.parse({
                        id_pengguna: this.pengguna.id,
                        id_jurusan: val,
                    })
                );
            }
        });
        console.log(ubJurusan);
    }

    globalEventListener() {
        const ctx = this;
        this.container.find("form").submit(function (e) {
            e.preventDefault();
            ctx.parseFromElement();
        });
    }
}
