import pageSetup from "../Component/PageSetup.js";
import SiswaDetailView from "../Component/SiswaDetailView.js";
import SiswaJurusanView from "../Component/SiswaJurusanView.js";
import SiswaKelasView from "../Component/SiswaKelasView.js";
import SiswaListView from "../Component/SiswaListView.js";
import Helper from "../Helper/Helper.js";

$(document).ready(function () {
    var sJV = new SiswaJurusanView($(".siswa-jurusan-view"));
    var sKV = new SiswaKelasView($(".siswa-kelas-view"));
    var sLV = new SiswaListView($(".siswa-list-view"));
    var sDV = new SiswaDetailView($(".siswa-detail-view"));

    pageSetup.add(sJV);
    pageSetup.add(sKV);
    pageSetup.add(sLV);
    pageSetup.add(sDV);

    sJV.load();
    if (Helper.exurl().length == 5) {
        sDV.load(Helper.exurl()[4]);
    }
    pageSetup.init();
});
