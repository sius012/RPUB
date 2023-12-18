import Projek from "../Model/Projek.js";
import Siswa from "../Model/Siswa.js";

export default class ProfilSiswaView {
    constructor(container) {
        this.container = container;
        this.profilData;
        this.nama_component = "ProfilSiswaView";
    }

    load(profilsiswa) {
        this.profilData = profilsiswa;
        this.container.find("#nama-siswa").text(profilsiswa.nama);
        this.container.find("#email-siswa").text(profilsiswa.email);
        this.container
            .find(".img-profile")
            .attr("src", profilsiswa.getFotoProfil());

        this.loadProjek();
        this.container.show();
    }

    loadProjek() {
        let projekContainer = this.container.find(".projek-container");
        projekContainer.empty("");
        Projek.bySiswa(this.profilData.id, function (data) {
            data.forEach((projek) => {
                projekContainer.append(`
                <div class='row'>
                <div class='col'>${projek.nama}</div>
                </div>
                `);
            });
        });
    }
    loadRaport() {}
}
