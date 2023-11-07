@extends("layout.layout")
@section("main-content")
@include("pages.siswa.components.siswa_jurusan_view")
@include("pages.siswa.components.siswa_kelas_view")
@include("pages.siswa.components.siswa_list_view")
@include("pages.siswa.components.siswa_detail_view")
@endsection
@push("script")
<script src="{{asset('js/Pages/siswa.js')}}" type="module"></script>

@endpush