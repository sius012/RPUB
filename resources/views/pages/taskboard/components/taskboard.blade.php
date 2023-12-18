<div class="board p-0 row" id="taskboard">
    <div class="container mb-3">
        <div class="row">
            <div class="col-6"> <select id="taskStatus" name="taskStatus" class='form-select'>
                    <option value="semua">Semua</option>
                    <option value="todo">To Do</option>
                    <option value="onprogress">On Progress</option>
                    <option value="done">Done</option>
                    <option value="revision">Revision</option>
                </select></div>
        </div>


    </div>
    <div class="container-task-main"></div>
    <div class="col-md container">
        <div class="d-flex">
            <h5>To Do</h5>
        </div>
        <div class="container-fluids" id="container-belum-dikerjakan">
            <div class="card p-2">
                <div class="row">
                    <div class="col text-sm"><span>Due date: 27/08/2024</span></div>
                    <div class="col text-sm"><span>Belum dikerjakan</span></div>
                </div>
                <div class="row my-2">
                    <div class="col-12">
                        <span style="font-size: 15pt;font-weight: bold">Fotografi</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-sm">Ditugaskan kepada: Anda, Rizky</div>

                </div>
            </div>
        </div>

    </div>
    {{-- ======================================onprogress  --}}
    <div class="col-md">
        <div class="d-flex">
            <h5>On Progress</h5>
        </div>
        <div class="container-fluids" id="container-dalam-pengerjaan">

        </div>
    </div>
    {{-- ========================================done  --}}
    <div class="col-md">
        <div class="d-flex">
            <h5>Done</h5>
        </div>
        <div class="task" id="container-selesai">

        </div>
    </div>
    {{-- ========================================revisi  --}}
    <div class="col-md ">
        <div class="d-flex">
            <h5>Revisi</h5>
        </div>
        <div class="task" id="container-revisi">

        </div>
    </div>
</div>