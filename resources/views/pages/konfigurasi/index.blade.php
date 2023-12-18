@extends('layout.layout')
@section('main-content')

@include('pages.konfigurasi.components.siswa_modal')
@include('pages.konfigurasi.components.konfigurasi_view')
@include('pages.konfigurasi.components.konfigurasi_angkatan_view')
@include('pages.konfigurasi.components.konfigurasi_jurusan_view')
@include('pages.konfigurasi.components.konfigurasi_pengguna_view')
@include('pages.konfigurasi.components.konfigurasi_kategori_jenis_view')
@include('pages.konfigurasi.components.konfigurasi_siswa_view')
@include('pages.konfigurasi.components.angkatan_modal')
@include('pages.konfigurasi.components.jurusan_modal')
@include('pages.konfigurasi.components.pengguna_modal')
@include('pages.konfigurasi.components.ub_jurusan_modal')
@include('pages.konfigurasi.components.jenis_modal')

@endsection

@push('script')
<script src="{{ asset('js/Pages/konfigurasi.js') }}" type="module"></script>
@endpush
+