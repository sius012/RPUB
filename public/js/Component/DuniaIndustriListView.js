import DuniaIndustri from "../Model/DuniaIndustri.js";
import Jurusan from "../Model/Jurusan.js";
import MenuDudiView from "./MenuDudiView.js";
import pageSetup from "./PageSetup.js";

export default class DuniaIndustriListView {
    constructor(container) {
        this.container = container;
        this.extendedModal = new bootstrap.Modal(container.find("#modal-tambah-dudi"))
    }

    load() {
        // pageSetup.hideAllComponent();

        let duniaindustri = DuniaIndustri.all();

        let dudiContainer = this.container.find(".container-dudi");

        dudiContainer.empty();

        duniaindustri.forEach(function (e) {
            dudiContainer.append(`<div class="col-md-3 mb-3">
            <div class="card p-3 text-center btn-dudi" data-id='${e.id}'>
                <div class="row text-center mb-3">
                    <div class="col"> <img src="/img/logodudi/${e.logo}" style="width: 50%;aspect-ratio: 1/1;object-fit:cover" class="rounded-circle" alt=""></div>
                </div>

                <h3>${e.nama}</h3>
            </div>

    </div>`);
        });
        this.initModal()
        this.container.show();
    }

    globalEventListener() {
        const ctx = this;

        ctx.container.delegate(".btn-dudi", "click", function () {
            let id = $(this).data("id");
            let menuDudi = pageSetup.getComponent("MenuDudiView");
            menuDudi.load(id);
        });

        this.container.find("#modal-tambah-dudi").submit(function(e){
            e.preventDefault();
            ctx.getModalValue()
        })
    }



    getModalValue(){
        let nama = this.getModalElement("nama").val();
        let jurusan = [];
        let alamat = this.getModalElement("alamat").val();
        let deskripsi = this.getModalElement("deskripsi","textarea").val();
        let logo = this.getModalElement("logo")[0].files[0];

        this.getModalElement("jurusan").each(function(){
            if($(this).is(":checked")){
                jurusan.push($(this).val());
            }
        })


        let dudi = DuniaIndustri.fromArray({nama: nama, jurusanRaw: jurusan, alamat: alamat,deskripsi:deskripsi,logo:logo});

        dudi.simpan();

    
    }

    getElement(name, type = "input") {

        // MENDAPATKAN INPUTAN YANG ADA DIDALAM KOMPONENT BERDASARKAN NAME

        return this.container.find(`${type}[name=${name}]`);

    }


    initModal(){
        let ctx = this;
        let jurusan = Jurusan.all();
        this.container.find("#modal-tambah-dudi").find(".container-jurusan").html("");
        let html = "<div class='col'>";
        jurusan.forEach(function(e,i){
            html += `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="${e.id}" id="flexCheckDefault" name='jurusan'>
            <label class="form-check-label" for="flexCheckDefault">
              ${e.jurusan}
            </label>
            </div>`;
            if(i%5==0 && i > 4){
                html+="</div><div class='col'>";
            }
        })

        html+="</div>";

        this.container.find("#modal-tambah-dudi").find(".container-jurusan").html(html)
    }

    getModalElement(name, type = "input") {

        // MENDAPATKAN INPUTAN YANG ADA DIDALAM KOMPONENT BERDASARKAN NAME

        return this.container.find("#modal-tambah-dudi").find(`${type}[name=${name}]`);

    }

}
