@extends('layout.layout')
@push("css")
<style>
    @keyframes anim {
        0% {
            left: 0px;
        }

        100% {
            left: 100px;
        }
    }
</style>
@endpush
@section('main-content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-8 position-relative" style="overflow: clip;
      ">
            <div class=" containers position-absolute slider-project">
                <div class=" container-card d-inline-flex ">
                    <div class="card p-1 mx-2" style="width: 500px;">
                        <div class="container-img position-relative">
                            <div class="row">
                                <div class="col"><img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" alt="" style="width: 100%;"></div>
                            </div>
                            <div class="row text-white p-2" style="position:absolute; bottom: 0px; width: 100%">
                                <div class="col-7">
                                    <h3 class='m-0' style="color: white">Projek PPLG</h3>
                                </div>
                                <div class="col-5">
                                    <h5 style="color: white">Projek internal</h5>
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid p-2">
                            <div class="container-jurusans d-inline">
                                <span class="badge bg-primary">PPLG</span> <span class="badge bg-primary ">MM</span>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-warning'>Kelas 10</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-success'>Kelas 11</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-danger'>Kelas 12</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                </div>
                                <div class="col-md-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card p-1" style="width: 500px; ">
                        <div class=" container-img position-relative">
                            <div class="row">
                                <div class="col"><img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" alt="" style="width: 100%;"></div>
                            </div>
                            <div class="row text-white p-2" style="position:absolute; bottom: 0px; width: 100%">
                                <div class="col-7">
                                    <h3 class='m-0' style="color: white">Projek 2</h3>
                                </div>
                                <div class="col-5">
                                    <h5 style="color: white">Projek internal</h5>
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid p-2">
                            <div class="container-jurusans d-inline">
                                <span class="badge bg-primary">PPLG</span> <span class="badge bg-primary ">MM</span>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-warning'>Kelas 10</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-success'>Kelas 11</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-danger'>Kelas 12</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                </div>
                                <div class="col-md-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card p-1" style="width: 500px; ">
                        <div class=" container-img position-relative">
                            <div class="row">
                                <div class="col"><img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" alt="" style="width: 100%;"></div>
                            </div>
                            <div class="row text-white p-2" style="position:absolute; bottom: 0px; width: 100%">
                                <div class="col-7">
                                    <h3 class='m-0' style="color: white">Projek 3</h3>
                                </div>
                                <div class="col-5">
                                    <h5 style="color: white">Projek internal</h5>
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid p-2">
                            <div class="container-jurusans d-inline">
                                <span class="badge bg-primary">Projek 4</span> <span class="badge bg-primary ">MM</span>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-warning'>Kelas 10</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-success'>Kelas 11</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-danger'>Kelas 12</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                </div>
                                <div class="col-md-6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card p-1" style="width: 500px; ">
                        <div class=" container-img position-relative">
                            <div class="row">
                                <div class="col"><img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" alt="" style="width: 100%;"></div>
                            </div>
                            <div class="row text-white p-2" style="position:absolute; bottom: 0px; width: 100%">
                                <div class="col-7">
                                    <h3 class='m-0' style="color: white">Projek PPLG</h3>
                                </div>
                                <div class="col-5">
                                    <h5 style="color: white">Projek internal</h5>
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid p-2">
                            <div class="container-jurusans d-inline">
                                <span class="badge bg-primary">PPLG</span> <span class="badge bg-primary ">MM</span>
                            </div>
                            <div class="row pt-2">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-warning'>Kelas 10</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-success'>Kelas 11</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4"><label for="" class='form-label badge bg-danger'>Kelas 12</label></div>
                                        <div class="col"><span><b>80</b> Anak</span><span class="badge bg-info text-center mx-3"><i class='fa fa-info'></i></span></div>
                                    </div>
                                </div>
                                <div class="col-md-6">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="col-md-4">
            <div id="card-jurusan-dashboard-vertical" style="height:400px;overflow-y: scroll"></div>
        </div>
    </div>
</div>




<div class="container-fluid mt-2">
    <div class="row" id="jurusan-dashboard">

    </div>
</div>





<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.min.js" integrity="sha512-7U4rRB8aGAHGVad3u2jiC7GA5/1YhQcQjxKeaVms/bT66i3LVBMRcBI9KwABNWnxOSwulkuSXxZLGuyfvo7V1A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/js/splide.min.js"></script>
<script src="{{ asset('js/Pages/dashboard.js') }}" type="module"></script>
<script type="module">
    // Mendapatkan referensi ke elemen canvas
    var ctx = document.getElementById('barChart').getContext("2d");
    console.log(ctx);

    // Data yang akan ditampilkan dalam diagram batang
</script>
<!-- <script>
        var splide = new Splide('.row', {
            type: 'loop',
            perPage: 3,
            rewind: true,
        });

        row.mount();
    </script> -->
@endsection

@push("script")
<script>
    $(document).ready(function() {
        //requestAnimationFrame(loop)

        let containerWidth = $(".container-card").width();
        let posX = 0;
        let last3 = $(".container-card").children(':nth-last-child(-n+2)')
        last3.prependTo(".container-card");

        $(".slider-project").css({
            transform: `translateX(-${last3.width()*2}px)`
        })

        //  alert($(".container-card").children().length)




        anime({
            targets: '.slider-project',
            translateX: last3.first().width(),
            duration: 1000, // Duration of the animation in milliseconds
            easing: 'easeInOutQuad', // Easing function
            complete: () => {
                console.log('Animation complete');
            }
        });

    })
</script>
@endpush