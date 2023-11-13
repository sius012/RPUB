import Helper from "../Helper/Helper.js";
import User from "../Model/User.js";
import pageSetup from "./PageSetup.js";

export default class KonfigurasiPenggunaView {
    constructor(container) {
        this.container = container;
        this.userList = User.all();
        this.nama_component = "KonfigurasiPenggunaView";
    }

    load() {
        let table = this.container.find(".pengguna-table").find("tbody");
        table.empty();
        this.userList.forEach((element, i) => {
            pageSetup.hideAllComponent();
            table.append(`
            <tr>
              <td>${i + 1}</td>
              <td>${element.nama}</td>
              <td>${element.email}</td>
              <td>Admin</td>
              <td>PPLG, MM</td>
              <td>${Helper.aksi(element.id, ".edit-user", ".hapus-user")}</td>
            </tr>
            `);
        });
        this.container.show();
    }
}
