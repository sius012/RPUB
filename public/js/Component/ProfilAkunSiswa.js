import Helper from "../Helper/Helper.js";
import Siswa from "../Model/Siswa.js";

export default class ProfilAkunSiswa {
    constructor(container) {
        this.container = container;
        this.profil;
        this.hasChanged = false;
    }

    load() {
        this.profil = Helper.getCurrentAuthSiswa();
        console.log(this.profil);
        this.container.find(".field-nama").text(this.profil.nama);
        this.container
            .find(".field-kelas-dan-jurusan")
            .text(this.profil.kelasDanJurusan);
        this.container.find(".field-jk").text(this.profil.jk);

        this.container.find(".field-jk").text(this.profil.jk);
        this.container
            .find(".field-angkatan")
            .text(
                this.profil.angkatan.id_angkatan +
                    " " +
                    "(" +
                    this.profil.angkatan.dari +
                    " - " +
                    this.profil.angkatan.sampai +
                    ")"
            );
        this.container.find(".field-jurusan").text(this.profil.jurusan.jurusan);
        this.container
            .find("#pp-previewer")
            .attr("src", this.profil.getFotoProfil());
        this.container.find("input[name=email]").val(this.profil.email);
    }

    globalEventListener() {
        let ctx = this;
        this.container.find("#btn-change-image").click(function () {
            ctx.container.find("#pp-img")[0].click();
            ctx.container.find("#pp-img").change(function (event) {
                var file = event.target.files[0];
                if (file) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        ctx.container
                            .find("#pp-previewer")
                            .attr("src", e.target.result);
                    };

                    reader.readAsDataURL(file);
                    ctx.hasChanged = true;
                    if (ctx.hasChanged) {
                        ctx.container.find("#perbarui-pp").show();
                    }
                } else {
                    ctx.container.find("#pp-previewer").attr("src", "");
                }
            });
        });

        ctx.container.find("#perbarui-pp").click(function () {
            ctx.container.find("#form-pp").submit();
        });

        ctx.container.find("#form-pp").submit(function (e) {
            e.preventDefault();
            var formdata = new FormData(e.target);
            formdata.append("id", Helper.getCurrentAuthSiswa().id);
            $.ajax({
                url: "/updatepp",
                headers: {
                    "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
                },
                type: "post",
                data: formdata,
                processData: false,
                contentType: false,
                success: function () {
                    Swal.fire("berhasil bang");
                    ctx.load();
                },
                error: function (err) {
                    alert(err.responseText);
                },
            });
        });

        ctx.container.find(".btn-edit-kredensial").click(function () {
            ctx.container
                .find("input[name=email]")
                .attr("readonly", function (index, attr) {
                    return attr == "readonly" ? null : "readonly";
                });
            ctx.container
                .find("input[name=password]")
                .attr("readonly", function (index, attr) {
                    return attr == "readonly" ? null : "readonly";
                });
            ctx.container
                .find("#form-kredensial")
                .find("button[type=submit]")
                .toggle();
        });

        ctx.container.find("#form-kredensial").submit(function (e) {
            e.preventDefault();
            let email = $(this).find("input[name=email]").val();
            let password = $(this).find("input[name=password]").val();
            $.ajax({
                url: "/updateemailandpasswordsiswa",
                headers: {
                    "X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
                },
                data: {
                    email: email,
                    password: password,
                },
                type: "put",
                success: function (data) {
                    if (data["response"] == "success") {
                        Swal.fire("berhasil bang");
                    } else {
                        Swal.fire({ icon: "error", title: "gagal bang" });
                    }
                },
                error: function (err) {
                    alert(err.responseText);
                },
            });
        });
    }
}
