@extends('layout.layout')
@section('main-content')
  <div class="row mt-3">
    <h4>Dashboard</h4>
  </div>


    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">      
        <canvas id="projek-jurusan-chart" style="width: 10px"> 
        </canvas>
      </div>
        <div class="col-md-6" >
          <div id="card-jurusan-dashboard-vertical" style="height:200px;overflow-y: scroll"></div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="container-fluid"></div>
    <div class="container-fluid mt-2" >
      <div class="row" id="jurusan-dashboard">

      </div>
    </div>

   
                  

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.min.js" integrity="sha512-7U4rRB8aGAHGVad3u2jiC7GA5/1YhQcQjxKeaVms/bT66i3LVBMRcBI9KwABNWnxOSwulkuSXxZLGuyfvo7V1A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/js/splide.min.js"></script>
    <script src="{{asset('js/Pages/dashboard.js')}}" type="module"></script>
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
