//PENCARIAN INI DINONAKTIFKAN SEMENTARA

import Projek from "../Model/Projek.js";
import Siswa from "../Model/Siswa.js";
import Tugas from "../Model/Tugas.js";
import Versi from "../Model/Versi.js";
import pageSetup from "./PageSetup.js";

export default class PencarianMenu {
    constructor(container) {
        this.container = container;
        this.nama_component = "PencarianMenu";
        this.isLayout = true;
    }

    globalEventListener() {
        const ctx = this;
        this.container.find(".cari-sesuatu").keyup(function () {
            let kw = $(this).val();
            console.log(kw);
            if (kw.length > 0) {
                $.ajax({
                    url: "/pencarian",
                    data: {
                        kw: kw,
                    },
                    type: "get",
                    success: function (data) {
                        let containerPencarian = ctx.container.find(
                            ".container-pencarian"
                        );

                        containerPencarian.empty();

                        //Isi Data Siswa;
                        if (data["siswa"].length > 0) {
                            let siswa =
                                "<li><b>Siswa</b><ul style='display: block; list-style-type: none'>";
                            data["siswa"].forEach((element) => {
                                element = Siswa.parse(element);
                                siswa += `<li data-type='siswa' data-id='${element.id}' class='list-item-search'>${element.nama}</li>`;
                            });
                            siswa += "</ul></li>";
                            console.log(siswa);

                            containerPencarian.append(siswa);
                        }

                        if (data["projek"].length > 0) {
                            let projek =
                                "<li><b>Projek</b><ul style='display: block;list-style-type: none'>";
                            data["projek"].forEach((element) => {
                                element = Projek.parse(element);
                                projek += `<li data-type='projek' data-id='${element.id}' class='list-item-search'>${element.nama}</li>`;
                            });
                            projek += "</ul></li>";
                            containerPencarian.append(projek);
                        }

                        if (data["tugas"].length > 0) {
                            let tugas =
                                "<li><b>Tugas/Kompetensi</b><ul style='display: block;list-style-type: none'>";
                            data["tugas"].forEach((element) => {
                                element = Tugas.parse(element);
                                tugas += `<li data-type='tugas' data-id='${element.id_tugas}' class='list-item-search'>${element.nama}</li>`;
                            });
                            tugas += "</ul></li>";
                            containerPencarian.append(tugas);
                        }

                        if (data["versi"].length > 0) {
                            let laporan =
                                "<li><b>Laporan</b><ul style='display: block;list-style-type: none'>";
                            data["versi"].forEach((element) => {
                                element = Versi.parse(element);
                                laporan += `<li data-type='laporan' data-id='${element.id}' class='list-item-search'>${element.nama}</li>`;
                            });
                            laporan += "</ul></li>";
                            containerPencarian.append(laporan);
                        }

                        containerPencarian.show();
                    },
                    error: function (e) {
                        alert(e.responseText);
                    },
                });
            }
        });
        this.container.delegate(".list-item-search", "click", function () {
            let type = $(this).data("type");
            let id = $(this).data("id");
            switch (type) {
                case "siswa":
                    let siswa = Siswa.find(id);
                    window.location = siswa.getUrl();
                    break;

                case "projek":
                    window.location = "/pages/projek/" + id;
                    break;

                case "tugas":
                    let tugas = Tugas.find(id);
                    window.location = "/pages/projek/tugas/" + id;
                    break;

                default:
                    break;
            }
        });
    }
}
