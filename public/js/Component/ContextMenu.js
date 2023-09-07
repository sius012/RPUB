export default class ContextMenu {
    constructor() {
        this.container; //Berisikan element DOM contextMenu (diisi saat menjalankan function init)
        this.list; //Berikan list / opsi yang ada disetiap ContextMenu (nama aksi,fungsi)
        this.data_id = null; //Berisikan data id dari setiap data yang diselect

        this.page_setup;
        this.nama_component = "ContextMenu";
        this.afterClick;
    }

    init(list, afterClick = function (ctx) {}) {
        this.list = list;
        this.afterClick = afterClick;
        this.#renderElement();
    }

    #renderElement() {
        var ctx = this;
        var contextMenuStr = `
        <div class="dropdown-menu show " style="position:absolute" aria-labelledby="dropdownMenuButton">`;
        this.list.forEach(function (e, i) {
            //exception
            if (typeof e[2] != "function" || ctx.data_id == null) {
                contextMenuStr += `<a class="dropdown-item" data-index="${i}" data-id='' href="#">${e[0]}</a>`;
            } else {
                if (e[2](ctx.data_id) == false) {
                } else {
                    contextMenuStr += `<a class="dropdown-item" data-index="${i}" data-id='' href="#">${e[0]}</a>`;
                }
            }
        });
        contextMenuStr += `</div>`;
        this.container = $("<div>").html(contextMenuStr).addClass("dropdown");
    }
    trigger(ctr, id) {
        $(".dropdown").hide();
        this.data_id = id;
        this.#renderElement();
        this.container.appendTo(ctr);
        this.container.show();
        this.globalEventListener();
    }

    globalEventListener() {
        var ctx = this;
        this.container.find(".dropdown-item").click(function (e) {
            var index = $(this).data("index");
            console.log(ctx.list);
            ctx.list[index][1](ctx.data_id);
            ctx.afterClick(ctx);
        });

        $(document).click(function () {
            ctx.container.hide();
        });
    }
}
