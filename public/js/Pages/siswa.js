import pageSetup from "../Component/PageSetup.js";
import SiswaJurusanView from "../Component/SiswaJurusanView.js";

$(document).ready(function () {
    var sJV = new SiswaJurusanView($(".siswa-jurusan-view"));

    pageSetup.add(sJV);

    sJV.load();

    pageSetup.init();
});
