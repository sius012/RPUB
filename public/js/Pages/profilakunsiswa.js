import pageSetup from "../Component/PageSetup.js";
import ProfilAkunSiswa from "../Component/ProfilAkunSiswa.js";

$(document).ready(function () {
    let pAS = new ProfilAkunSiswa($("#profil-akun-siswa"));
    pAS.load();
    pageSetup.add(pAS);

    pageSetup.init();
});
