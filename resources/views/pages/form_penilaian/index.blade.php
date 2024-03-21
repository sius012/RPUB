<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
    @include('sweetalert::alert')

    @php
    $indikatorInFormal = ["inisiatif"=>"Inisiatif","antusias"=>"Antusias","kejujuran"=>"Kejujuran","kreativitas"=>"Kreatifitas","tanggung_jawab"=>"Tanggung Jawab","komunikasi"=>"Komunikasi","kedisiplinan"=>"Kedisiplinan","etika_sopansantun"=>"Etika & dan Sopan Santun","k3"=>"Kecepatan Ketepatan dan Kerapihan"];

@endphp
<input type="hidden" value="{{$form->id}}" name='main-id'>
    <div class="container main-container">
        <form action="{{url('/penilaianmagangpublik')}}" method="POST">
            @csrf
            
            <input type="hidden" required value='{{$id_template_magang}}' name="id_template_magang">
        <div class="row mb-3">
    <div class="card p-3">
                <h3>Form Penilaian Dunia Industri</h3>    
                </div>
        </div>
        <div class="row mb-3">
            <div class="card">
                <div class="container p-3">
                    <div class="form-group mb-3">
                        <label for="" class="form-label">Nama Anak</label>
                        <select name="id_siswa" id="" class="form-select" required>
                            @foreach($siswa as $sws)
                                <option value="{{$sws->id}}">{{$sws->nama}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group mb-3">
                        <label for="" class="form-label">Nama Penilai</label>
                        <input type="text" class="form-control" name='nama_penilai' required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="" class="form-label">Sebagai</label>
                        <input type="text" class="form-control" name="sebagai" required>
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Tanggal Penilaian</label>
                        <input type="date" class="form-control" name='tanggal_pengisian' required>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="card">
                <div class="container p-3">
                    <h4>Penilaian Non-formal</h4>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Aspek</th>
                                <th>Indikator</th>
                                <th>Nilai Max</th>
                                <th>Nilai</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($aspekNonFormal as $i=> $anf)
                                <tr>
                                    <td>{{$i+1}}</td>
                                    <td>{{$anf->aspek}}</td> 
                                    <td>{{$anf->nama}}</td> 
                                    <td>{{$anf->nilai_max}}</td> 
                                    <td><input type="number" name='aspek_nonformal[{{$anf->id}}]' max="{{$anf->nilai_max}}" required class="form-control inp-nilai-max"  ></td>
                                    <td><textarea class="form-control" name="keterangan[{{$anf->id}}]" id="" cols="30" rows="5"></textarea></td>
                                <tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="card">
                <div class="container p-3">
                    <h4>Penilaian Informal</h4>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Indikator</th>
                                <th>Nilai Minimal</th>
                                <th>Nilai</th>
                            </tr>
                        </thead>
                        <tbody>
                            @php $s = 0 @endphp
                            @foreach($indikatorInFormal  as $informal => $inf)
                                <tr>
                                    <td>{{$s+1}}</td>
                                    <td>{{$inf}}</td> 
                                    <td>2</td> 
                                    <td><input type="number" min="0" max="3" name="{{$informal}}" class="form-control" required></td> 
                                <tr>
                            @php $s++ @endphp
                            @endforeach
                        </tbody>
                    </table>
                    <div class="form-group">
                        <label for="" class="form-label">Keterangan</label>
                        <textarea name="keterangan_informal" id="" cols="30" rows="2" class="form-control"></textarea>
                    </div>
                
                </div>
            </div>
        </div>

        <div class="row mb-5">
            <div class="container">
                <button class="btn btn-primary">Kirim</button>
            </div>
        </div>
    </form>
    </div>
    <script src="/dashboard/assets/vendor/libs/jquery/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
<script>
    $(document).ready(function(){
        Swal.fire({
  title: "Masukan Token Yang",
  input: "text",
  inputAttributes: {
    autocapitalize: "off"
  },
  confirmButtonText: "Periksa Token",
  showLoaderOnConfirm: true,
  allowOutsideClick: false,
  preConfirm: async(login) => {
    // try {
    //   const githubUrl = `
    //     https://api.github.com/users/${login}
    //   `;
    //   const response = await fetch(githubUrl);
    //   if (!response.ok) {
    //     return Swal.showValidationMessage(`
    //       ${JSON.stringify(await response.json())}
    //     `);
    //   }
    //   return response.json();
    // } catch (error) {
    //   Swal.showValidationMessage(`
    //     Request failed: ${error}
    //   `);
    // }

    await $.ajax({
        url: "/formpenilaianmagang/"+$("input[name=main-id]").val(),
        data: {
            token: login,
            checkToken: 1
        },
        type: "get",
        success: function(data){
            if(data==true){
                Swal.close()
            }else{
                $(".main-container").empty();
                window.location = "/errorlink";
            }
        }
    })
  },
  allowEscapeKey: false,
})


        $(".inp-nilai-max").keyup(function(){
          
            if(parseInt($(this).val()) < parseInt($(this).attr("max"))/2){
               $(this).closest("tr").find("textarea[name=keterangan]").attr("required","required");
            }else{
                $(this).closest("tr").find("textarea[name=keterangan]").removeAttr("required");
            }
        });

        
    });
</script>
</html>