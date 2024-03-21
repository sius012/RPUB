import KloterDudi from "../Model/KloterDudi.js";
import Siswa from "../Model/Siswa.js";
import pageSetup from "./PageSetup.js";
import DuniaIndustri from "../Model/DuniaIndustri.js";
import SiswaMagangDudi from "../Model/SiswaMagangDudi.js";
import TemplateMagang from  "../Model/TemplateMagang.js";
import FormPenilaianMagang from "../Model/FormPenilaianMagang.js";
import PenilaianMagang from "../Model/PenilaianMagang.js";
import Helper from "../Helper/Helper.js";

export default class MenuDudiView {
    constructor(container) {
        this.container = container;
        this.nama_component = "MenuDudiView";
        this.modalKloter = new bootstrap.Modal(
            this.container.find("#modal-kloter")
        );
        this.currentKloter = null;
        this.dunia_industri;
    }

    load(id) {
        const ctx = this;
        pageSetup.componentList.forEach((element) => {
            //Menyembunyikan element yang lainnya

            if (element.isLayout == undefined && element.modal == undefined) {
                element.container.hide();
            }
        });
        
        this.container
            .find("#modal-kloter")
            .find("input[name=id_dunia_industri]")
            .val(id);
        this.dunia_industri = DuniaIndustri.find(id);
        console.log(this.dunia_industri);
        this.container.find(".logo-img").attr("src","/img/logodudi/"+this.dunia_industri.logo)
        this.container.find(".nama-dudi-info").text(this.dunia_industri.nama)
        KloterDudi.byDudi(id, function (data) {
            ctx.container.find(".container-kloter-dudi").find("tbody").empty();
            data.forEach(function (e) {
                ctx.container.find(
                    ".container-kloter-dudi"
                ).find("tbody").append(`<tr class='main-row' data-id='${e.id}'>
                <td>${e.nama}</td>
                <td>2 Anak</td>
                <td>2 Anak</td>
                <td><button class='btn btn-danger btn-sm delete-kloter-magang'><i class='fa fa-trash'></i></button><button class='btn btn-info mx-1 btn-sm siswa-list'><i class='fa fa-info'></i></button></td>
                </tr>`);
            });
        });

        this.container.find(".container-kloter-dudi-main").show();
        this.container.find(".container-siswa-main").hide();

        ctx.loadTemplateMagang()
        ctx.loadInfoDudi()
        ctx.initModalTambahForm()
        ctx.loadFormPenilaianList();

        this.container.show();
    }

    sendModalKloter() {
        const ctx = this;
        let modal = this.container.find("#modal-kloter");
        let kloterDudi = new KloterDudi();
        kloterDudi.nama = modal.find("input[name=nama]").val();
        kloterDudi.id_dunia_industri = modal
            .find("input[name=id_dunia_industri]")
            .val();
        kloterDudi.tanggal_mulai = modal
            .find("input[name=tanggal_mulai]")
            .val();
        kloterDudi.tanggal_selesai = modal
            .find("input[name=tanggal_selesai]")
            .val();
        kloterDudi.simpan(function (data) {
            ctx.modalKloter.hide();
            ctx.load(data.id_dunia_industri);
        });
    }

    loadSiswaKloter(id_kloter) {
        const ctx = this;
        ctx.currentKloter = KloterDudi.find(id_kloter);
        this.currentKloter.siswaKloter(function (data) {
            let siswacontainer = ctx.container
                .find(".container-siswa-main")
                .find(".container-siswa").find("tbody");
            siswacontainer.empty();
            data.forEach(function (e) {
                console.log(e.siswa)
                siswacontainer.append(`<tr class='main-row' data-id='${e.siswa.id}'><td>${e.siswa.nama}</td><td>${e.siswa.getKelasDanJurusan()}</td><td class='text-end'><button class='btn btn-info show-penilaian-siswa'><i class='fa fa-info'></i></button></td></tr>`);
            });

            let listContainer = ctx.container
                .find("#modal-siswa-kloter")
                .find(".container-siswa-search");
            listContainer.empty();
            let list = data
                .map(function (e) {
                    return `<li><a href='#' data-id='${e.siswa.id}' class='add-siswa-kloter'>${e.siswa.nama}</a></li>`;
                })
                .join("");
            listContainer.html(list);
            listContainer.show();
        });
    }

    globalEventListener() {
        const ctx = this;

        ctx.container.delegate(".btn-delete-form","click", function(){
            let id = $(this).closest(".main-row").data("id");
            Helper.SwalDelete(function(){
                let fpm = FormPenilaianMagang.find(id);
                fpm.hapus(function(){
                    Helper.BerhasilHapusSwal();
                    ctx.loadFormPenilaianList();
                })
            })
        })
        ctx.container.delegate(".btn-aktif-template","click", function(){
            let id = $(this).closest(".main-row").data("id");
            let template_magang = TemplateMagang.find(id);
                  template_magang.aktif(function(){
                    ctx.loadTemplateMagang()
                  });
        })
        ctx.container.delegate(".btn-nonaktif-template","click",function(){
            let id = $(this).closest(".main-row").data("id");
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: "Nonaktifkan Template",
                text: "Template akan dinonaktifkan sementara",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Ya, Nonaktifkan",
                cancelButtonText: "Batalkan",
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  let template_magang = TemplateMagang.find(id);
                  template_magang.nonaktif(function(){
                    ctx.loadTemplateMagang()
                  });
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                }
              });
        })

        ctx.container.find("#modal-buat-form").find(".btn-random").click(function(){
            ctx.container.find("#modal-buat-form").find("input[name=token]").val(Helper.generateString(Helper.randomNumber(5,10)));
        });
        ctx.container.delegate(".btn-publish","click", function(){
            let id = $(this).closest(".main-row").data("id");
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: "btn btn-success",
                  cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: "Publish Template",
                text: "Template tidak bisa dihapus jika ada penilaian  yang menggunakan form ini",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Ya, Rilis Sekarang",
                cancelButtonText: "Batalkan",
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  let template_magang = TemplateMagang.find(id);
                  template_magang.publish(function(){
                    ctx.loadTemplateMagang()
                  });
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                  });
                }
              });
        })
        ctx.container.delegate(".siswa-list", "click", function () {
            ctx.loadSiswaKloter($(this).closest(".main-row").data("id"));
            ctx.container.find(".container-siswa-main").show();
            ctx.container.find(".container-kloter-dudi-main").hide();
        });

        ctx.container.find("#form-kloter-dudi").submit(function (e) {
            e.preventDefault();

            ctx.sendModalKloter();
            
        });

        ctx.container.click(function () {
            $(this).find(".container-siswa-search").hide();
        });

        ctx.container.find(".search-siswa").keyup(function (e) {
            let kw = $(this).val();
            let listContainer = ctx.container
                .find("#modal-siswa-kloter")
                .find(".container-siswa-search");
            listContainer.empty();

            Siswa.byQuery(
                {
                    nama: kw,
                    id_jurusan: ctx.dunia_industri.jurusan.map((e) => e.id),
                },
                function (data) {
                    let list = data
                        .map(function (e) {
                            return `<li><a href='#' data-id='${e.id}' class='add-siswa-kloter'>${e.nama}</a></li>`;
                        })
                        .join("");
                    listContainer.html(list);
                    listContainer.show();
                }
            );
        });

        ctx.container
            .find("#modal-siswa-kloter")
            .delegate(".add-siswa-kloter", "click", function (e) {
                let id = $(this).data("id");
                let containerSiswaKloter = ctx.container.find(
                    ".container-siswa-kloter"
                );
                let siswa = pageSetup.getCacheSiswa(id);
                let siswaAvailable = false;

                containerSiswaKloter.children().each(function () {
                    if ($(this).data("id") == id) {
                        siswaAvailable = true;
                    }
                });

                if (!siswaAvailable) {
                    containerSiswaKloter.append(
                        `<div class='row mb-3' data-id='${siswa.id}'><div class='col-11'>${siswa.nama}</div><div class='col-1'><button class='btn-danger  btn-sm btn'><i class='fa fa-trash'></i></button></div></div>`
                    );
                }
            });

        ctx.container
            .find("#modal-siswa-kloter")
            .find(".update-siswa-button")
            .click(function () {
                let containerSiswaKloter = ctx.container.find(
                    ".container-siswa-kloter"
                );
                let idList = containerSiswaKloter
                    .children(".row")
                    .map(function (e) {
                        let sMD = new SiswaMagangDudi();
                        sMD.id_siswa = $(this).data("id");
                        sMD.id_kloter_dudi = ctx.currentKloter.id;
                        return sMD;
                    })
                    .toArray();
                SiswaMagangDudi.multipleSimpan(idList);
            });
        ctx.container.find(".btn-tambah-form").click(function(){
            ctx.clearModal({modal: ctx.container.find("#modal-buat-form"), exceptedInput : ["id_dunia_industri"], containerlist: [ctx.container.find("#modal-buat-form").find(".siswa-list-form")]})
        })
        
        ctx.container.find(".btn-tambah-nonformal").click(function(){
            let container = ctx.container.find(".container-nilai-nonformal");
            container.append(`<div class="row main-row mb-2">
            <div class="card p-2">
                <div class="row">
                    <div class="col-md-4"><input required type="text" class="form-control nama-detail"></div>
                    <div class="col-md-2"><input required type="number" class="form-control nilai-max-detail"></div>
                    <div class="col-md-4"><input required type="text" class="form-control aspek-detail"></div>
                    <div class="col-md-2"><btn class='btn btn-danger btn-delete'><i class='fa fa-trash'></i></btn></div>
                </div>
        </div>  
        </div>`);
        });

        ctx.container.delegate(".btn-info-form","click", function(){
            ctx.loadFormPenilaianModal($(this).closest(".main-row").data("id"));
        })

        ctx.container.find(".btn-modal-template").click(function(){
            ctx.initModalTemplatePenilaian()
        });

        ctx.container.delegate(".btn-delete", "click", function(){
            
            let rowlen = $(this).closest(".main-row").parent().children(".main-row").length
            if(rowlen > 1){
                $(this).closest(".main-row").remove();
            }
         
        })

        ctx.container.find("#modal-tambah-template").submit(function(e){
            e.preventDefault();

            ctx.parseTemplatePenilaianModal($(e.target));
            
        })

        ctx.container.delegate(".btn-info-template", "click", function(e){
            let id = $(this).closest(".main-row").data("id");
            ctx.loadTemplateMagangModal(id);
            
        });

        ctx.container.find("button[data-bs-dismiss=modal]").click(function(e){
            let modal = $(this).closest(".modal");
            modal.hide();
        })

        ctx.container.delegate(".btn-delete-template-magang","click",function(e){
            let id = $(this).closest(".main-row").data("id");
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  let templateMagang = TemplateMagang.find(id);
                  console.log(templateMagang);
                  templateMagang.delete(function(){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    ctx.loadTemplateMagang()
                  });
                 
                }
              });
        })

        ctx.container.find("#modal-buat-form").find(".search-siswa").keyup(function(){
            ctx.dunia_industri.getAnakMagang({nama: $(this).val()}, function(data){
                
                let containersearch = ctx.container.find("#modal-buat-form").find(".container-search-siswa-form");
                console.log(containersearch);
                containersearch.empty();
                data.forEach(function(e){
                    containersearch.append(`<li class='list-group-item add-siswa-form' data-id='${e.id}'>${e.nama}</li>`)
                })
            })
        });

        ctx.container.find("#modal-buat-form").delegate(".add-siswa-form", "click",function(e){
            let containerlistsiswa = ctx.container.find("#modal-buat-form").find(".siswa-list-form");
            let count = 0;
            let id = $(this).data("id");
            containerlistsiswa.children().each(function(){
           
                if($(this).data("id")==id){
            
                    count+=1;
                }
            })
            if(count<1){
                let siswa = Siswa.find(id);
                containerlistsiswa.append(`<span class='badge bg-primary mx-2 my-1' data-id='${siswa.id}'>${siswa.nama} <span class='mx-1 remove-list-siswa'>X</span></span>`);
            }
          
        })

        ctx.container.find("#modal-buat-form").delegate(".remove-list-siswa", "click", function(e){
            $(this).parent().remove();
        })

        ctx.container.find("#modal-buat-form").find("form").submit(function(e){
            
            e.preventDefault();
            let form = this;
            let id = $(this).find("select[name=id_template_form]").val();
            let listSiswa = [];
            $(this).find(".siswa-list-form").children().each(function(e){
                listSiswa.push($(this).data("id"));
            });
            let fpm = new FormPenilaianMagang();
            fpm.id_dunia_industri = ctx.dunia_industri.id;
            if($(this).find("input[name=id_form").val().length>0){
                fpm.id = $(this).find("input[name=id_form").val();
            }
            fpm.id = $(this).find("input[name=id_form").val();
            fpm.id_template_magang = id;
            fpm.list_siswa_raw = listSiswa;
            fpm.expired_form = $(this).find("input[name=expired_form]").val();
            fpm.token = $(this).find("input[name=token]").val();
            fpm.simpan(function(){
                let modal = $(form).closest(".modal")
                modal.hide();
                $(".modal-backdrop").hide();
                ctx.loadFormPenilaianList();
            });
        })

        ctx.container.delegate(".btn-open-link-modal", "click", function(){
            let modal = ctx.container.find("#modal-link-form-penilaian");
            let datamodal = new bootstrap.Modal(modal[0],{keyboard:false});
            let dataid = $(this).closest(".main-row").data('id');
            let form = FormPenilaianMagang.find(dataid);
            let url = modal.find("input[name=realurl]").val();
            modal.find(".link-field").val(url+form.url);
            let text = `Selamat Pagi bapak/Ibu Intruktur dari Dudi
                
Kami mau mengirimkan link form penilaian
            
berikut adalah linknya:
            
${url+form.url}

Token: ${form.token}
Batas Waktu : ${Helper.formatShortDate(form.expired_form)}

Terimakasih atas waktu dan perhatiannya
            `
            modal.find("textarea[name=text-copy]").val(text);
            datamodal.show()
        })

        ctx.container.delegate(".show-penilaian-siswa","click", function(data){
            ctx.loadPenilaianSiswaMagang($(this).closest(".main-row").data("id"))
        })

        ctx.container.find(".copy-text-form").click(function(){
            let modal = $(this).closest(".modal");
            let text = modal.find("textarea[name=text-copy]");
            text.select();

           
            document.execCommand("copy");
         
        })

        ctx.container.find("#modal-riwayat-penilaian-siswa").delegate(".delete-penilaian","click", function(){
            Swal.fire({
                title: "Apakah anda yakin?",
                text: "Rekaman yang dihapus tidak bisa dipulihkan kembali",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
                target: ctx.container.find("#modal-riwayat-penilaian-siswa")[0],
              }).then((result) => {
                $(".modal-backdrop").hide()
                if (result.isConfirmed) {
                    let id_penilaian = $(this).closest(".main-row").data('id');
                    let penilaian = PenilaianMagang.find(id_penilaian);
                    penilaian.hapus(function(){
                        
                        ctx.loadPenilaianSiswaMagang(ctx.container.find("#modal-riwayat-penilaian-siswa").find("input[name=id_siswa]").val())
                    
                    })
                }
              });   
        })

        ctx.container.find("#modal-riwayat-penilaian-siswa").delegate(".info-penilaian","click", function(){
            ctx.loadInfoPenilaian($(this).closest(".main-row").data("id"));
        })

        ctx.container.find(".btn-back").click(function(){
            ctx.load(ctx.dunia_industri.id)
        })
    }

    loadInfoDudi(){
        let container = this.container.find(".container-info");
        container.find(".nama-dudi").val(this.dunia_industri.nama);
        container.find(".deskripsi-dudi").val(this.dunia_industri.deskripsi);
        container.find(".alamat-dudi").val(this.dunia_industri.alamat);
    }

    loadFormPenilaianModal(id){
        const ctx = this;

        let modal = ctx.container.find("#modal-buat-form");

        let form = FormPenilaianMagang.find(id);
        console.log(form)
        modal.find("select[name=id_template_form]").val(form.id_template_magang);
        modal.find("input[name=id_form]").val(form.id);
        modal.find("input[name=token]").val(form.token);
        modal.find("input[name=expired_form]").val(form.expired_form);
        let containerlistsiswa = ctx.container.find("#modal-buat-form").find(".siswa-list-form");
        containerlistsiswa.empty();
        form.siswa.map(function(siswa){
            containerlistsiswa.append(`<span class='badge bg-primary mx-2 my-1' data-id='${siswa.id}'>${siswa.nama} <span class='mx-1 remove-list-siswa'>X</span></span>`);
        })
        modal.find("button[type=submit]").text("Perbarui");
        modal.show();
    }


    loadTemplateMagangModal(id){
        const ctx =this;
        let tm = TemplateMagang.find(id);
        let modal = this.container.find("#modal-tambah-template");
        modal.find("input[name=nama]").val(tm.nama)
        modal.find("input[name=deskripsi]").val(tm.deskripsi)
        let containerNonformal = modal.find(".container-nilai-nonformal");
        containerNonformal.empty();
        tm.template_magang_detail.forEach(function(e){
            containerNonformal.append(ctx.CardDetailTemplate(e))
        })
        modal.show();
    }


    parseTemplatePenilaianModal(form){
        const ctx = this;
        let nama = form.find("input[name=nama]").val();
        let deskripsi = form.find("input[name=deskripsi]").val();

        let listDetailPenilaian = [];

        form.find(".container-nilai-nonformal").children().each(function(){
            listDetailPenilaian.push({nama: $(this).find(".nama-detail").val(), nilai_max: $(this).find(".nilai-max-detail").val(),aspek: $(this).find(".aspek-detail").val()})
        })

        let templateMagang = new TemplateMagang();
        templateMagang.nama = nama;
        templateMagang.deskripsi = deskripsi;
        templateMagang.id_dunia_industri = this.dunia_industri.id;
        templateMagang.templateMagangDetailRaw = listDetailPenilaian;
       
        templateMagang.simpan(function(data){
           let modal = new bootstrap.Modal(form.closest("#modal-tambah-template")[0], {
            keyboard: false
          })
           ctx.loadTemplateMagang();
           console.log(modal);
           modal.dispose()
        });
    }


    loadTemplateMagang(){
        const ctx = this;
        let container = ctx.container.find(".container-template-magang").find("tbody");
        container.empty();
        ctx.dunia_industri.templateMagang(function(data){
            data.template_magang.forEach(function(e){
                let publish = "";
                switch (e.status) {
                    case "Belum Dipublish":
                        publish = "<button class='btn btn-success btn-sm btn-publish'><i class='fa fa-upload'></i></button>"
                        break;
                    case "Aktif":
                        publish = "<button class='btn btn-danger btn-sm btn-nonaktif-template'><i class='fa fa-ban'></i></button>"
                        break;
                    case "Nonaktif":
                        publish = "<button class='btn btn-success btn-sm btn-aktif-template'><i class='fa fa-check'></i></button>"
                        break;
                    default:
                        break;
                }
                container.append(`<tr class='main-row' data-id='${e.id}'><td>${e.nama}</td><td>${e.status}</td><td><button class='btn btn-danger btn-sm btn-delete-template-magang' ${e.checkFormDanPenilaian() == false ? "":"disabled"}><i class='fa fa-trash'></i></button><button class='btn btn-info btn-info-template btn-sm'><i class='fa fa-info'></i></button>${publish}</td></tr>`);
            })
        })
    }

    loadFormPenilaianList(){
        let container = this.container.find(".list-form-penilaian").find("tbody");
        container.empty();
        this.dunia_industri.getFormPenilaian(function(data){
            console.log(data);
            data.forEach(function(e,i){
                container.append(`<tr class='main-row' data-id='${e.id}'><td>${i+1}</td><td>${e.template_magang.nama}</td><td>${Helper.formatShortDate(e.expired_form)}</td><td>${e.url}</td><td><div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-danger btn-sm btn-delete-form"><i class='fa fa-trash'></i></button>
                <button type="button" class="btn btn-info btn-sm btn-info-form"><i class='fa fa-info'></i></button>
                <button type="button" class="btn btn-success btn-sm btn-open-link-modal""><i class='fa fa-link'></i></button>
              </div></td></tr>`)
            })
        })
    }


   loadPenilaianSiswaMagang(id_siswa){
    const ctx = this;
    let siswa = pageSetup.getCacheSiswa(id_siswa)
    
    ctx.container.find("#modal-riwayat-penilaian-siswa").find("input[name=id_siswa]").val(id_siswa);
    PenilaianMagang.getBySiswa(id_siswa, function(data){
        let modal = new bootstrap.Modal(ctx.container.find("#modal-riwayat-penilaian-siswa")[0]);
            modal.show();
        let table =  ctx.container.find("#modal-riwayat-penilaian-siswa").find("table").find("tbody");
        ctx.container.find("#modal-riwayat-penilaian-siswa").find("#nama-siswa").text(siswa.nama);
        table.empty()
        data.forEach(function(e,i){
            table.append(`<tr class='main-row' data-id='${e.id}'>
            <td>${i+1}</td>
            <td>${e.tanggal_pengisian}</td>
            <td>${e.nama_penilai}</td>
            <td>${e.template_magang.nama}
            <td><button class='btn btn-danger btn-sm delete-penilaian'><i class='fa fa-trash'></i></button>
            <button class='btn btn-info btn-sm info-penilaian'><i class='fa fa-info'></i></button></td>
            </tr>`)
        })
    })

   }


   clearModal(params = {containerlist : [], modal : null}){
        //clear input
        params.modal.find("form").find("input,select").each(function(){
            $(this).val("");
        })

        //clear containerList
        if(params.containerlist.length > 0){
            params.containerlist.forEach(function(e){
                e.empty();
            })
        }

        params.modal.find("*").each(function(){
            if($(this).attr("data-html")!= undefined){
                $(this).text($(this).data("html"))
            }
        })

        
   }
    
    

    initModalTemplatePenilaian(){
        const ctx = this;
        let container = ctx.container.find(".container-nilai-nonformal");
        container.empty();
        
            container.append(`<div class="row main-row mb-2">
            <div class="card p-2">
                <div class="row">
                    <div class="col-md-4"><input required type="text" class="form-control nama-detail"></div>
                    <div class="col-md-2"><input required type="number" class="form-control nilai-max-detail"></div>
                    <div class="col-md-4"><input required type="text" class="form-control aspek-detail"></div>
                    <div class="col-md-2"><btn class='btn btn-danger btn-delete'><i class='fa fa-trash'></i></btn></div>
                </div>
        </div>  
        </div>`);
    }

    parseTemplateModal(){
        
    }


    initModalTambahForm(){
       
        let modal = this.container.find("#modal-buat-form");
        let inputTemplate = modal.find("select[name=id_template_form]");
        inputTemplate.empty();
        
        TemplateMagang.findByDuniaIndustri(this.dunia_industri.id, function(data){
            
            data.forEach(function(e){
                
                inputTemplate.append(`<option value='${e.id}'>${e.nama}</option>`)
            })
        })
    }

    loadInfoPenilaian(id){
        console.log(this.container.find(""));
        let modal = new bootstrap.Modal(this.container.find("#modal-info-penilaian")[0]);
        let penilaian = PenilaianMagang.find(id);
        let tablenonformal = this.container.find("#modal-info-penilaian").find(".table-non-formal").find("tbody");
        let tableinformal = this.container.find("#modal-info-penilaian").find(".table-informal").find("tbody");

        //informasi dasar
        this.container.find("#modal-info-penilaian").find(".nama-info").text(penilaian.siswa.nama)
        this.container.find("#modal-info-penilaian").find(".penilai-info").text(penilaian.nama_penilai)
        this.container.find("#modal-info-penilaian").find(".tanggal-info").text(penilaian.tanggal_pengisian)
        this.container.find("#modal-info-penilaian").find(".keterangan-informal-info").text(penilaian.penilaian_magang_informal.keterangan);
        tableinformal.empty();
        tablenonformal.empty();
        penilaian.penilaian_magang_detail.forEach(function(e,i){
            tablenonformal.append(`<tr>
            <td>${i+1}</td>
            <td>${e.template_magang_detail.nama}</td>
            <td>${e.template_magang_detail.aspek}</td>
            <td>${e.template_magang_detail.nilai_max}</td>
            <td>${e.nilai}</td>
            <td>${e.keterangan}</td>
            </tr>`)
        })
        let informal = {"inisiatif":"Inisiatif","antusias":"Antusias","kejujuran":"Kejujuran","kreativitas":"Kreatifitas","tanggung_jawab":"Tanggung Jawab","komunikasi":"Komunikasi","kedisiplinan":"Kedisiplinan","etika_sopansantun":"Etika & dan Sopan Santun","k3":"Kecepatan Ketepatan dan Kerapihan"}
        modal.show()

        for(let inf in informal){
            tableinformal.append(`<tr><td></td><td>${informal[inf]}</td><td>${2}</td><td>${penilaian.penilaian_magang_informal[inf]}</td></tr>`)
        }
        
    }



    //Card And Other Element
    CardDetailTemplate(data){
        console.log("updated_data")
        console.log(data)
        return `<div class="row main-row mb-2"><div class="card p-2">
        <div class="row mb-3">
            <div class="col-md-4"><input required type="text" class="form-control nama-detail" value='${data.nama}'></div>
            <div class="col-md-2"><input required type="number" class="form-control nilai-max-detail" value='${data.nilai_max}'></div>
            <div class="col-md-4"><input required type="text" class="form-control aspek-detail" value='${data.aspek}'></div>
            <div class="col-md-2"><btn class='btn btn-danger btn-delete'><i class='fa fa-trash' value=''></i></btn></div>
        </div>
</div>  
</div></div>`;
    }


    



}
