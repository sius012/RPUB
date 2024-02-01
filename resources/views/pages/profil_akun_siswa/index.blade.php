@extends("layout.layout")
@section("main-content")
@include("pages.profil_akun_siswa.components.profil_akun_siswa")
@endsection

@push("script")
<script type='module' src="{{asset('js/Pages/profilakunsiswa.js')}}"></script>
@endpush