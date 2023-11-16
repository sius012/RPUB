export default class SiswaCard {
    static autoList(arr, params = { redirect: false }) {
        let elm = "<div class='row'>";
        arr.forEach((element) => {
            elm += `<div class='col-md-3 pb-3'>${
                params.redirect == false
                    ? ""
                    : "<a href='/pages/siswa/" +
                      element.id_jurusan +
                      "/" +
                      element.id_angkatan +
                      "/" +
                      element.id +
                      "'>"
            }
            <div class="card profile-siswa" data-id='${element.id}'>
            <div class="card-body">
                <h5 class="card-title">${element.nama}</h5>
                <p>${element.kelasDanJurusan}</p>
            </div>
            </div>
            ${params.redirect == false ? "" : "</a>"}
            </div>`;
        });
        elm += "</div>";
        return elm;
    }
}
