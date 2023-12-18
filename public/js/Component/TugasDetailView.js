import pageSetup from "./PageSetup.js";
import Versi from "../Model/Versi.js";
import Helper from "../Helper/Helper.js";

export default class TugasDetailView {
    constructor(container) {
        this.container = container;
        this.modal = new bootstrap.Modal(container);
        this.tugas;
        this.page_setup;
        this.nama_component = "TugasDetailView";
        this.versiList;
        this.isLayout = true;
    }

    load(id) {
        this.tugas = pageSetup.getTugasCache(id);
        this.render();
    }

    loadversi() {
        var ctx = this;

        this.versiList = Versi.byTugas(this.tugas.id_tugas, function (data) {
            let versiList = ctx.container.find("#versi1").find("#versi-list");
            versiList.html("");
            console.log(data);
            data.forEach((element) => {
                versiList.append(ctx.versiCard(Versi.parse(element)));
            });
        });
    }

    render() {
        if (this.tugas != undefined) {
            //mengisi data projek
            this.getElement("nama").val(this.tugas.nama);
            this.getElement("keterangan", "textarea").val(
                this.tugas.keterangan
            );
            this.getElement("tanggal_awal").val(this.tugas.tanggal_awal);
            this.getElement("tanggal_akhir").val(this.tugas.tanggal_akhir);
            this.loadversi();
            this.modal.show();
        }
    }

    getElement(name, type = "input") {
        return this.container.find(`${type}[name=${name}]`);
    }

    globalEventListener() {
        var ctx = this;

        this.container.delegate(".tombol-tambah-versi", "click", function (e) {
            const versimodal = ctx.page_setup.getComponent("VersiModal");
            versimodal.load(ctx.tugas.id_tugas);
        });

        this.container.delegate(".versi-card", "click", function () {});
    }

    versiCard(versi) {
        console.log(versi);
        return `
        <div class='card mb-2 versi-card' data-id='${versi.id_versi}'>
        <div class='row  p-3' >
        <div class='col-2'>
            <img style="width: 100%; height: 100%; object-fit: cover;" src='/versi/${
                versi.lampiran
            }'>
        </div>
        <div class='col-10'><b>${versi.nama}</b><br><span>
        ${versi.keterangan}</span>
        <div class='row'>
        <div class='col-6'>
        ${Helper.status(versi.status)}
        </div>
        <div class='col-6'>
            ${versi.siswa.nama}
        </div>
        </div>
        </div>
        </div>
        </div>
        `;
    }
}
