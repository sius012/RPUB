import Helper from "../Helper/Helper.js";
import User from "../Model/User.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiPenggunaView {
    constructor(container) {
        this.container = container;
        this.userList = User.all();
        this.nama_component = "KonfigurasiPenggunaView";
        this.isLayout = true;
    }

    load() {
        const ctx = this;

        let breadcrumb = pageSetup.getComponent("Breadcrumb");
        breadcrumb.add([this.nama_component, "active"]);

        let table = this.container.find(".pengguna-table").find("tbody");
        table.empty();
        this.userList.forEach((element, i) => {
            pageSetup.hideAllComponent();
            table.append(`
            <tr>
              <td>${i + 1}</td>
              <td>${element.nama}</td>
              <td>${element.email}</td>
              <td>${element.rolesStr}</td>
              <td><a href='#' class='btn-ubjurusan' data-id="${
                  element.id
              }">${element
                .getUBJurusan()
                .getUBJurusanStr()}<i class='bi bi-pencil'></i></a></td>
              <td>${Helper.aksi(element.id, "edit-user", "hapus-user")}</td>
            </tr>
            `);
        });
        this.container.show();
    }

    globalEventListener() {
        const ctx = this;
        const modal = pageSetup.getComponent("PenggunaModal");
        this.container.find("#btn-pengguna").click(function () {
            modal.load();
        });

        this.container.delegate(".edit-user", "click", function () {
            modal.load($(this).data("id"));
        });

        this.container.delegate(".btn-ubjurusan", "click", function (e) {
            e.preventDefault();
            let id = $(this).data("id");
            let modalUB = pageSetup.getComponent("UBJurusanModal").load(id);
        });
    }
}
