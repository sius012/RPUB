@extends("layout.layout")
@section("main-content")
@include("pages.konfigurasi.components.konfigurasi_view")
@include("pages.konfigurasi.components.konfigurasi_angkatan_view")
@include("pages.konfigurasi.components.konfigurasi_jurusan_view")
@include("pages.konfigurasi.components.konfigurasi_pengguna_view")
@include("pages.konfigurasi.components.konfigurasi_kategori_jenis_view")
@include("pages.konfigurasi.components.angkatan_modal")
@endsection

@push("script")

<script src="{{asset('js/Pages/konfigurasi.js')}}" type="module"></script>
@endpush