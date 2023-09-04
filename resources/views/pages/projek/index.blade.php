@extends('layout.layout')
@section('main-content')
<div class="row p-3">
<nav aria-label="breadcrumb p-3" id="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
</div>

@include("pages.projek.components.projek_modal")
@include("pages.projek.components.projek_list_view")
@include("pages.projek.components.jurusan_list_view")
@include("pages.projek.components.detail_projek_view")
@include("pages.projek.components.tugas_modal")
 @include("pages.projek.components.projek_list_view")
@include("pages.projek.components.detail_projek_view")  

@push("script")
<script src="{{ asset('js/Model/Jurusan.js') }}"></script>
<script src="{{ asset('js/Model/Projek.js') }}"></script>
<script src="{{ asset('js/Model/Jenis.js') }}"></script>
<script src="{{ asset('js/Model/Tugas.js') }}"></script>
<script src="{{ asset('js/Component/JurusanListView.js') }}"></script>
<script src="{{ asset('js/Component/ProjekListView.js') }}"></script>
<script src="{{ asset('js/Component/DetailProjekView.js') }}"></script>
<script src="{{ asset('js/Component/ProjekModal.js') }}"></script>
<script src="{{ asset('js/Component/Tugasmodal.js') }}"></script>
<script src="{{ asset('js/Component/Card/JurusanCard.js') }}"></script>
<script src="{{ asset('js/Component/Card/ProjekCard.js') }}"></script>
<script src="{{ asset('js/Component/ContextMenu.js') }}"></script>
<script>
    $(document).ready(function(){
        console.log($("#projek-modal"))
        var jurusanListView = new JurusanListView($("#jurusan-list-view"));
        var projekListView = new ProjekListView($("#projek-list-view"));
        var detailProjekView = new DetailProjekView($("#detail-projek-view"))
        var projekModal= new ProjekModal($("#projek-modal"))
        var tugasModal = new Tugasmodal($("#tugas-modal"))
        var breadcrumb = new Breadcrumb($("#breadcrumb"));
        var contextMenu = new ContextMenu();

        contextMenu.nama_component = "ContextMenuTugas";
        var contextMenuStatus = new ContextMenu();
        contextMenuStatus.nama_component = "ContextMenuStatus";


        contextMenu.init([
            ["Tambah Sub Tugas", function(id){
                tugasModal.attach(id);
            }, function(id){
                
                let tugas = window.pageSetup.getTugasCache(id);
                if(tugas.data_jenis.tipe == "tugas"){
                    return false;
                }
            }],
            [
             "Hapus", function(id){
                Tugas.find(id).hapus();
                tugasModal.modal.hide();
                detailProjekView.loadTugas();
             }
            ]
        ])

        contextMenuStatus.init([
            ["Selesai", function(id){
                Tugas.find(id).changeStatus("Selesai")
            }],
            ["Belum Dimulai", function(id){
                Tugas.find(id).changeStatus("Belum Dimulai")
            }],
            ["Siap Dikerjakan", function(id){
                Tugas.find(id).changeStatus("Siap Dikerjakan")
            }],
            ["Revisi", function(id){
                Tugas.find(id).changeStatus("Revisi")
            }],
            ["Ditinjai", function(id){
                Tugas.find(id).changeStatus("Ditinjau")
            }]
        ], function(ctx){
            ctx.page_setup.getComponent("DetailProjekView").loadTugas();
            $(window).scrollTop(100);
        })



        var jurusan = Jurusan.all();
        jurusanListView.jurusanList = jurusan;


        // console.log(jurusan);
        pageSetup.add(jurusanListView);
        pageSetup.add(projekListView);
        pageSetup.add(projekModal);
        pageSetup.add(detailProjekView)
        pageSetup.add(tugasModal)
        pageSetup.add(contextMenu);
        pageSetup.add(contextMenuStatus);
        pageSetup.add(breadcrumb);
        jurusanListView.load()
    })
</script>
@endpush
@endsection
