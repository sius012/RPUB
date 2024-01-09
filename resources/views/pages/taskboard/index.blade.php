@extends("layout.layout")
@section("main-content")


@include("pages.taskboard.components.taskboard")
@include("pages.projek.components.tugas_detail_view")
@include("pages.projek.components.laporan_detail_modal")
@include("pages.projek.components.versi_modal")



@endsection

@push("script")
<script src="{{asset('js/Pages/taskboard.js')}}" type="module"></script>
@endpush