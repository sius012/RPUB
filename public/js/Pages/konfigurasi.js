import KonfigurasiView from "../Component/KonfigurasiView.js";
import pageSetup from "../Component/PageSetup.js";

$(document).ready(function () {
    var konfigurasiPage = new KonfigurasiView($("#konfigurasi-page"));

    pageSetup.add(konfigurasiPage);

    pageSetup.init();
});
