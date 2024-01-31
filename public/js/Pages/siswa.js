import pageSetup from "../Component/PageSetup.js";
import SiswaDetailView from "../Component/SiswaDetailView.js";
import SiswaJurusanView from "../Component/SiswaJurusanView.js";
import SiswaKelasView from "../Component/SiswaKelasView.js";
import SiswaListView from "../Component/SiswaListView.js";
import Helper from "../Helper/Helper.js";
import RaportModal from "../Component/RaportModal.js";
import Breadcrumb from "../Component/Breadcrumb.js";

$(document).ready(function () {
    var sJV = new SiswaJurusanView($(".siswa-jurusan-view"));
    var sKV = new SiswaKelasView($(".siswa-kelas-view"));
    var sLV = new SiswaListView($(".siswa-list-view"));
    var sDV = new SiswaDetailView($(".siswa-detail-view"));
    var rM = new RaportModal($("#raport-modal"));
    let breadcrumb = new Breadcrumb($("#breadcrumb"));

    pageSetup.add(sJV);
    pageSetup.add(sKV);
    pageSetup.add(sLV);
    pageSetup.add(sDV);
    pageSetup.add(rM);

    pageSetup.add(breadcrumb);

  
    if (Helper.exurl().length == 5) {
        sDV.load(Helper.exurl()[4]);
    }else{
          sJV.load();
    }
    pageSetup.init();
});
