import pageSetup from "../Component/PageSetup.js";
import PencarianMenu from "../Component/PencarianMenu.js";
import SideBarView from "../Component/SidebarView.js";

$(document).ready(function () {
    let pencarianMenu = new PencarianMenu($("#pencarian-menu"));
    let sideBarView = new SideBarView($(".menu-vertical"));
    pageSetup.add(pencarianMenu);
    pageSetup.add(sideBarView);

    sideBarView.load();

    pencarianMenu.globalEventListener();
    sideBarView.globalEventListener();
});
