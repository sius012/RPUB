import DuniaIndustriListView from "../Component/DuniaIndustriListView.js";
import pageSetup from "../Component/PageSetup.js";
import MenuDudiView from "../Component/MenuDudiView.js";

$(document).ready(function () {
    const dILV = new DuniaIndustriListView($("#dunia-industri-listview"));
    const menuDudi = new MenuDudiView($("#menu-dudi-view"));
    pageSetup.add(dILV);
    pageSetup.add(menuDudi);
    console.log(dILV);
    dILV.load(12);
    pageSetup.init();
});
