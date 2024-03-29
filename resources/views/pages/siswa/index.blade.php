@extends("layout.layout")

@section("main-content")

@include("pages.siswa.components.siswa_jurusan_view")

@include("pages.siswa.components.siswa_kelas_view")

@include("pages.siswa.components.siswa_list_view")

@include("pages.siswa.components.siswa_detail_view")

@include("pages.siswa.components.raport_modal")


@include("pages.siswa.components.export_raport_modal")




@endsection

@push("script")

<script src="{{asset('js/Pages/siswa.js')}}" type="module"></script>



@endpush