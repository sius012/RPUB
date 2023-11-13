import Siswa from "../Model/Siswa.js";
import pageSetup from "../Component/PageSetup.js";

export default class Helper {
    static status(status, onlytext = false) {
        var statusStr = "";
        switch (status) {
            case "Belum Dimulai":
                statusStr = "bg-secondary";
                break;

            case "Dalam Pengerjaan":
                statusStr = "bg-warning";
                break;

            case "Revisi":
                statusStr = "bg-danger";
                break;

            case "Siap Dikerjakan":
                statusStr = "bg-ready";
                break;

            case "Ditinjau":
                statusStr = "bg-review";
                break;
            case "Selesai":
                statusStr = "bg-primary";
                break;
            default:
                break;
        }
        if (onlytext) {
            return statusStr;
        }
        return `<span class='badge status ${statusStr}'>${status}</span>`;
    }

    static getCurrentAuthSiswa() {
        let siswa = new Siswa();
        $.ajax({
            url: "/getcurrentauthsiswa",
            type: "get",
            async: false,
            success: function (data) {
                siswa = Siswa.parse(data);
            },
        });
        return siswa;
    }

    static curl(url) {
        var newURL = window.location.href.replace(
            window.location.pathname,
            url
        );
        window.history.pushState({}, "", newURL);
    }

    static exurl() {
        let strUrl = window.location.href;
        let url = new URL(strUrl);
        let arr = url.pathname.substring(1).split("/");
        return arr;
    }

    static aksi(id, edit, hapus) {
        return `
        <button class='btn btn-sm btn-danger ${edit}' data-id='${id}'><i class='bi bi-trash'></i></button>
                <button class='btn btn-sm btn-warning ${hapus}' data-id='${id}'><i class='bi bi-pencil'></i></button>
        
        `;
    }
}
