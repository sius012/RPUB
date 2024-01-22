//CONTEXT MENU

//FUNGSI
//1. MEMUDAHKAN MELAKUKAN AKSI KETIKA MENEKAN ELEMENT

//MUNCUL KETIKA DIKLIK KANAN ATAU KIRI

//RELASI FILE
//TERSIMPAN DIHALAMAN = maincomponent

export default class ContextMenu {
    constructor() {
        this.container; //Berisikan element DOM contextMenu (diisi saat menjalankan function init)
        this.list; //Berikan list / opsi yang ada disetiap ContextMenu (nama aksi,fungsi)
        this.data_id = null; //Berisikan data id dari setiap data yang diselect
        this.nama_component = "ContextMenu"; //NAMA COMPONENT (WAJIB ADA DISETIAP KOMPONENT)
        this.afterClick;
    }

    init(list, afterClick = function (ctx) {}) {//INISIALISI CONTEXT MENU
        this.list = list;
        this.afterClick = afterClick;
        this.#renderElement();
    }

    #renderElement() { //MERENDER KONTEKS MENU
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
        this.container = $("<div>")
            .html(contextMenuStr)
            .addClass("dropdown dropdown-cm");
    }
    trigger(ctr, id) { //MEMACU KONTEX MENU (DIISI ID YANG DITENTUKAN DAN TEMPAT UNTUK MELETAKAN CONTEXT MENUNYA)
        $(".dropdown-cm").hide();
        this.data_id = id;
        this.#renderElement();
        this.container.appendTo(ctr);
        this.container.show();
        this.globalEventListener();
    }

    globalEventListener() { //MENDETEKSI EVENT YANG SEDANG BERLAKU DI DALAM CONTEXT MENU (SEPERTI TOMBOL DIKLIK DLL)
        var ctx = this;
        this.container.find(".dropdown-item").click(function (e) {
            e.stopPropagation();
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
