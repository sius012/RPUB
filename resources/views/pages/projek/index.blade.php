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
@include("pages.projek.components.jurusan_modal")
@include("pages.projek.components.jurusan_list_view")
@include("pages.projek.components.detail_projek_view")
@include("pages.projek.components.tugas_modal")
 @include("pages.projek.components.projek_list_view")
@include("pages.projek.components.tugas_detail_view")
@include("pages.projek.components.assignment_siswa_modal")
@push("script")
<script src="{{ asset('js/Pages/projek.js') }}" type="module"></script>
@endpush
@endsection
