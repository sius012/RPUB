import pageSetup from "./PageSetup.js";

export default class Breadcrumb {
    constructor(container) {
        this.container = container;
        this.route = [];

        this.page_setup;
        this.nama_component = "Breadcrumb";

        this.isLayout = true;
        this.load();
    }

    globalEventListener() {
        var ctx = this;
        this.container.delegate("li", "click", function () {
            let index = $(this).data("index");

            if (ctx.route[index + 1] != undefined) {
                ctx.route.splice(index + 1);
            }

            ctx.load();
            console.log(ctx.route);
            var element = pageSetup.getComponent(
                ctx.route[$(this).data("index")][0]
            );
            if (ctx.route[$(this).data("index")][2] != undefined) {
                ctx.route[$(this).data("index")][2](element);
            } else {
                element.load();
            }
        });
    }

    load() {
        var ctx = this;
        this.container.find("ol").html("");
        this.route.forEach(function (e, i) {
            ctx.container
                .find("ol")
                .append(
                    `<li class='breadcrumb-item ${e[1]} ${
                        e[1] == "active" ? "aria-current='page'" : ""
                    } data-index='${i}'><a href='#'>${e[0]}</a></li>`
                );
        });
    }

    add(component) {
        let count = this.route.filter((element) => element[0] == component[0]);
        if (count.length < 1) {
            //alert(count.length);
            // alert(count.length);
            this.route.push(component);
        }
        this.load();
    }
}
