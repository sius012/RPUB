import Helper from "../Helper/Helper.js";
import Siswa from "../Model/Siswa.js";

export default class SideBarView {
    constructor(container) {
        this.container = container;
        this.isLayout = true;
    }

    load() {
        const ctx = this;
        const textName = ctx.container.find("#name-account");
        Helper.checkGuard(function (data) {
            switch (data) {
                case "student":
                    let student = Helper.getCurrentAuthSiswa();
                    textName.text(student.nama);
                    break;

                case "admin":
                    let user = Helper.getCurrentAuthUser();
                    textName.text(user.nama);
                    break;

                default:
                    break;
            }
        });
    }

    globalEventListener() {}
}
