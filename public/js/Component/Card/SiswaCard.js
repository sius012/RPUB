export default class SiswaCard {
    static autoList(arr, params = { redirect: false, penilaianProjek: false }) {
        let elm = "<div class='row'>";

        arr.forEach((element) => {
            let footer = "";
            if (params.penilaianProjek == true) {
                footer = `<div class="modal-footer">
            <button
              type="button"
              class="btn  pp-item ${
                  element.penilaianProjek != null
                      ? "btn-primary"
                      : "btn-secondary"
              }"
              data-bs-dismiss="modal"
          >
              <i class="fa fa-sticky-note"></i>
          </button>
         
      </div>`;
            }

            elm += `<div class='col-md-3 pb-3 profile-siswa'' ${
                element.penilaianProjek != null
                    ? "id-pp='" + element.penilaianProjek.id + "'"
                    : ""
            } data-id='${element.id}'>${
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

        <div class="card" style="width: 100%; height: 100% " ${
            element.getFotoProfil
        }>  
            <div class="card-body">
            <div class=" px-2" style='text-overflow: ellipsis;'><img style='width: 80%; aspect-ratio: 1 / 1; object-fit: cover' src="${element.getFotoProfil()}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                
            <div style='overflow: hidden;text-overflow: ellipsis;white-space: nowrap'><h5 class="card-title">${
                element.nama
            }</h5></div>
                <p>${element.kelasDanJurusan}</p>
            </div> </div>

                ${footer}
                     
            
            </div>
            ${params.redirect == false ? "" : "</a>"}
            </div>`;
        });
        elm += "</div>";
        return elm;
    }
}
