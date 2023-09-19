import Siswa from "../Model/Siswa.js";

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
}
