export default class SideBarView {
    constructor(container) {
        this.container = container
        this.menu = [
            {
                nama:"Dashboard",
                page:"dashboard",
                sub,menu: []
            },
            {
                nama:"Projek",
                page:"projek",
                sub_menu: Jurusan.all().map(function (e) {  //mengambil semua data jurusan
                    return {
                        nama:e.jurusan,
                        data_id:e.id,
                        type: "jurusan",
                    }
                })
            },
            //Teruskan jika ada menu lagi
        ]

        this.nama_component = "SidebarView";
        this.page_setup;
        this.isLayout =true;
    }

    render() {
        var ctx = this;
        var menuinner = this.container.find(".menu-inner");
        menuinner.html("")
        this.menu.forEach(function (e) {
            var submenu = e.sub_menu.map(function (g) {
                return ` <li class="menu-item">
                <a data-type="menu" href="#" data-page="${g.type}" class="menu-link" data-id="${g.data_id}">
                    <div data-i18n="without menu">${g.nama}</div>
                </a>
              </li>`
            }).join(submenu);
            menuinner.append(`<li class="menu-item">
            <a data-type="submenu" href="/pages/${e.page}" data-page="${e.page}" class="menu-link" ${e.sub_menu.length}
            <i class="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">${e.nama}</div>
            </a>
            ${e.sub_menu.length > 0 ? "<ul class='menu-sub'>" + submenu + "</ul>" : ""}
            </li>`);
        })
    }


    globalEventListener() {
        var ctx = this 
        this.container.find(".menu-link").click(function (e) {
            switch ($(this).data("page")) {
                case "projek":
                    var jurusanListView = ctx.page_setup.getComponent("JurusanListView");
                    jurusanListView.load()
                    break;

                case "jurusan":
                    var modal =ctx.page_setup.getComponent("ProjekModal");
                    var projekListView = ctx.page_setup.getComponent("ProjekListView");
                    projekListView.load($(this).attr("data-id"));
                    break;

                default:

                    break;
            }
        
    })

}


}                                