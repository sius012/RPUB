@extends("layout.layout")
@section("main-content")
@include("pages.siswa.components.siswa_jurusan_view")
@endsection
@push("script")
<script src="{{asset('js/Pages/siswa.js')}}" type="module"></script>

@endpush