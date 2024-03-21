@extends("layout.layout")


@section("main-content")
@include("pages.dunia_industri.components.dunia_industri_listview")
@include("pages.dunia_industri.components.menu_dudi_view")
@endsection

@push("script")
<script src="{{ asset('js/Pages/duniaindustri.js') }}" type="module"></script>
@endpush