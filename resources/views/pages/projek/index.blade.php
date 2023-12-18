@extends('layout.layout')
@section('main-content')

@include("pages.projek.components.detail_projek_view")
@include("pages.projek.components.penilaian_projek_modal")
@include("pages.projek.components.projek_modal")
@include("pages.projek.components.projek_list_view")

@include("pages.projek.components.tugas_modal")
@include("pages.projek.components.tugas_detail_view")
@include("pages.projek.components.assignment_siswa_modal")




@push("script")
<script src="{{ asset('js/Pages/projek.js') }}" type="module"></script>
@endpush
@endsection