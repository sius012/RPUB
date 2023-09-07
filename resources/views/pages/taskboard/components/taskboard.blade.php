@extends('layout.layout')
@section('main-content')

    <h3 class="p-3">Task Board</h3>

    <div class="board">
        <div class="column">
            <div class="d-flex">
                <h4>To Do</h4>

            </div>
            <div class="task">Task 1
                <p>Description of Task 1</p>
                <p class="due-date">Due Date: 2023-09-30</p>
                <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="task">Task 1
                <p>Description of Task 1</p>
                <p class="due-date">Due Date: 2023-09-30</p>
                <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%"
                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="column">
            <div class="d-flex">
                <h4>On Progress</h4>

            </div>
            <div class="task">Task 1
                <p>Description of Task 1</p>
                <p class="due-date">Due Date: 2023-09-30</p>
                <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%"
                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="column">
            <div class="d-flex">
                <h4>Done</h4>

            </div>
            <div class="task">Task 1
                <p>Description of Task 1</p>
                <p class="due-date">Due Date: 2023-09-30</p>
                <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%"
                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="column">
            <div class="d-flex">
                <h4>Revisi</h4>

            </div>
            <div class="task">Task 1
                <p>Description of Task 1</p>
                <p class="due-date">Due Date: 2023-09-30</p>
                <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%"
                    aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
@endsection
