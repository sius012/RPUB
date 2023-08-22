class ContextMenu {
    constructor(){
        this.Container; //Berisikan element DOM contextMenu (diisi saat menjalankan function init)
        this.list; //Berikan list / opsi yang ada disetiap ContextMenu (nama aksi,fungsi)
        this.data_id; //Berisikan data id dari setiap data yang diselect

        this.page_setup;
        this.nama_component = "ContextMenu";
    }

    init (list){
        this.list = list;
        var ctx = this;
        var contextMenustr = `
        <div class="dropdown-menu show" aria-labelledby="dropdownMenuButton">`;
        console.log(list)
        this.list.forEach(function(e,i){
            contextMenuStr +=`<a class="dropdown-item" data-index="${i} data-id='' href="#">${e[0]}</a>`
        })
        contextMenuStr +=`</div>`;
        this.container = $("<div>").html(contextMenustr).addClass("dropdown");
    }

    trigger(container,id){
        this.container.appendTo(container);
        this.data_id = id;
        this.container.find(".dropdown-menu").show();
    }

    globalEventListener(){
        var ctx = this;
        this.container.find("dorpdown-item").click(function(){
            var index = $(this).data("index");
            console.log( ctx.list);
            ctx.list[index][1](ctx.data-id);
        });      
    }
}