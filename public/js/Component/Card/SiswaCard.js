export default class SiswaCard {
    static autoList(arr, params = { redirect: false }) {
        let elm = "<div class='row'>";
        arr.forEach((element) => {
            elm += `<div class='col-md-3 pb-3 profile-siswa' data-id='${
                element.id
            }'>${
                params.redirect == false
                    ? ""
                    : "<a href='/pages/siswa/" +
                      element.id_jurusan +
                      "/" +
                      element.id_angkatan +
                      "/" +
                      element.id +
                      "' >"
            }

            <div class="card " data-id='${element.id}'>
            <div class="card-body">
            <div class="bg-white rounded shadow-sm py-2 px-2"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="card-title">${element.nama}</h5>
                <p>${element.kelasDanJurusan}</p>
            </div> </div>
            </div>
            ${params.redirect == false ? "" : "</a>"}
            </div>`;
        });
        elm += "</div>";
        return elm;
    }
}
