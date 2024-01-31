import Siswa from "../Model/Siswa.js";
import pageSetup from "../Component/PageSetup.js";
import User from "../Model/User.js";

export default class Helper {
    static status(
        status,
        onlytext = false,
        params = { class: "status", type: "span" }
    ) {
        let statusStr = "";
        let typeOfElement = params.type == "span" ? "bg" : "btn";
        switch (status) {
            case "Belum dimulai":
                statusStr = typeOfElement + "-secondary";
                break;

            case "Belum Dimulai":
                statusStr = typeOfElement + "-secondary";
                break;

            case "Dalam Pengerjaan":
                statusStr = typeOfElement + "-warning";
                break;

            case "Revisi":
                statusStr = typeOfElement + "-danger";
                break;

            case "Siap Dikerjakan":
                statusStr = typeOfElement + "-ready";
                break;

            case "Ditinjau":
                statusStr = typeOfElement + "-review";
                break;
            case "Selesai":
                statusStr = typeOfElement + "-primary";
                break;
            default:
                break;
        }
        if (onlytext) {
            return statusStr;
        }
        if (params.type == "button") {
            return `<button class='btn btn-sm ${params.class} ${statusStr}'>${status}</button>`;
        }
        return `<span class='badge ${statusStr} ${params.class}'>${status}</span>`;
    }

    static getCurrentAuthUser() {
        let user = new User();
        $.ajax({
            url: "/getcurrentauthuser",
            type: "get",
            async: false,
            success: function (data) {
                
                user = User.parse(data);
            },
        });
        return user;
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
        <button class='btn btn-sm btn-danger ${hapus}' data-id='${id}'><i class='bi bi-trash'></i></button>
                <button class='btn btn-sm btn-warning ${edit}' data-id='${id}'><i class='bi bi-pencil'></i></button>
        
        `;
    }

    static formatShortDate(dates) {
        let date = new Date(dates);
        // Extract the components of the date
        var day = date.getDate();
        var month = date.getMonth() + 1; // Months are zero-based, so add 1
        var year = date.getFullYear() % 100; // Get the last two digits of the year

        // Add leading zeros if needed
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;
        year = year < 10 ? "0" + year : year;

        // Concatenate the components in the desired format
        var formattedDate = month + "/" + day + "/" + year;

        return formattedDate;
    }

    static UBJurusanChecker(id, cb) {
        $.ajax({
            url: "/checkubjurusan/" + id,
            type: "get",
            success: function (data) {
                cb(data);
            },
        });
    }

    static permissionProjek(id, cb) {
        $.ajax({
            url: "/permissionprojek/" + id,
            type: "get",
            success: function (data) {
                cb(data);
            },
        });
    }

    static validasiTanggal(ctx, params = { min: null, max: null }) {
        ctx.getElement("tanggal_akhir").change(function (e) {
            if ($(this).val() < ctx.getElement("tanggal_awal").val()) {
                $(this).val(ctx.getElement("tanggal_awal").val());
            }

            if (params.min != null && params.max != null) {
                if ($(this).val() > params.max) {
                    $(this).val(params.max);
                }
                if ($(this).val() < params.min) {
                    $(this).val(params.min);
                }
            }
        });

        ctx.getElement("tanggal_awal").change(function () {
            if ($(this).val() > ctx.getElement("tanggal_akhir").val()) {
                $(this).val(ctx.getElement("tanggal_akhir").val());
            }

            if (params.min != null && params.max != null) {
                if ($(this).val() > params.max) {
                    $(this).val(params.max);
                }
                if ($(this).val() < params.min) {
                    $(this).val(params.min);
                }
            }
        });
    }

    static isSuperAdmin(cb, cb2) {
        $.ajax({
            url: "/api/issuperadmin",
            type: "get",
            success: function (data) {
                if (data == true) {
                    cb();
                } else {
                    cb2();
                }
            },
        });
    }

    static checkGuard(cb = null, params = { async: true }) {
        let result;
        $.ajax({
            url: "/api/checkguard",
            type: "get",
            async: params.async,
            success: function (data) {
                if (cb != null) {
                    cb(data);
                }
                result = data;
            },
        });
        if (params.async == false) {
            return result;
        }
    }

    static shortText(text, length = 25) {
        let str = text;
        if (str.length >= length) {
            str = str.substring(0, length) + "...";
        }
        return str;
    }
}
