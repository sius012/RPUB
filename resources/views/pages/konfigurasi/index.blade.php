@extends("layout.layout")
@section("main-content")
@include("pages.konfigurasi.components.konfigurasi_view")
@endsection

@push("script")

<script src="{{asset('js/Pages/konfigurasi.js')}}" type="module"></script>
@endpush