@extends('layout.layout')
@section('main-content')
    <h3 class="p-3">Task Board</h3>

    <div class="board">
        <div class="column" id="container-belum-dikerjakan">
            <div class="d-flex" >
                <h4>To Do</h4>
            </div>
            <div class="task">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="/dashboard/assets/img/avatars/6.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col p-2">
                        <h6 class="nama-tugas">Card title</h6>
                        <p>Description of Task 1</p>
                        <p class="due-date">Tenggat: 2023-09-30</p>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                </div>
            </div>
            <div class="task">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="/dashboard/assets/img/avatars/6.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col p-2">
                        <h6 class="nama-tugas">Card title</h6>
                        <p>Description of Task 1</p>
                        <p class="due-date">Tenggat: 2023-09-30</p>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 100%"></div>
                      </div>
                </div>
            </div>
        </div>
        {{--  ======================================onprogress  --}}
        <div class="column" id="container-dalam-pengerjaan">
            <div class="d-flex">
                <h4>On Progress</h4>
            </div>
            <div class="task">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="/dashboard/assets/img/avatars/6.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col p-2">
                        <h6 class="nama-tugas">Card title</h6>
                        <p>Description of Task 1</p>
                        <p class="due-date">Tenggat: 2023-09-30</p>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 100%"></div>
                      </div>
                </div>
            </div>
        </div>
        {{--  ========================================done  --}}
        <div class="column" id="container-selesai">
            <div class="d-flex">
                <h4>Done</h4>
            </div>
            <div class="task">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="/dashboard/assets/img/avatars/6.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col p-2">
                        <h6 class="nama-tugas">Card title</h6>
                        <p>Description of Task 1</p>
                        <p class="due-date">Tenggat: 2023-09-30</p>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </div>
        {{--  ========================================revisi  --}}
        <div class="column" id="container-revisi">
            <div class="d-flex">
                <h4>Revisi</h4>
            </div>
            <div class="task">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="/dashboard/assets/img/avatars/6.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col p-2">
                        <h6 class="nama-tugas">Card title</h6>
                        <p>Description of Task 1</p>
                        <p class="due-date">Tenggat: 2023-09-30</p>
                    </div>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
