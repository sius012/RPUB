@extends('layout.layout')
@section('main-content')
@include("pages.projek.components.jurusan_list_view")
@include("pages.projek.components.jurusan_modal")
{{--  @include("pages.projek.components.projek_list_view")
@include("pages.projek.components.detail_projek_view")
@include("pages.projek.components.jurusan_modal")  --}}

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="{{ asset('js/Model/Jurusan.js') }}"></script>
<script src="{{ asset('js/Component/JurusanListView.js') }}"></script>
<script src="{{ asset('js/Component/AddProjekModal.js') }}"></script>
<script src="{{ asset('js/Component/Card/JurusanCard.js') }}"></script>
<script src="{{ asset('js/Component/PageSetup.js') }}"></script>
<script>
    $(document).ready(function(){
        var jurusanListView = new JurusanListView($("#jurusan-list-view"));
        var jurusan = Jurusan.all();
        jurusanListView.jurusanList = jurusan;

        var projekModal = new ProjekModal($("#jurusan-modal"))


        console.log(projekModal);

        jurusanListView.load()
        // console.log(jurusan);
        var pageSetup = new PageSetup();
        pageSetup.add(jurusanListView);
        pageSetup.add(projekModal);
        pageSetup.init()
        console.log(pageSetup);
    })
</script>
@endsection
