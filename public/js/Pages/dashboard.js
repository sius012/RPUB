import CardJurusanDashboardVertical from "../Component/CardJurusanDashboardVertical.js";
import JurusanDashboard from "../Component/JurusanDashboard.js";
import ProjekJurusanChart from "../Component/ProjekJurusanChart.js";

$(document).ready(function () {
    const jurusanDashboard = new JurusanDashboard($("#jurusan-dashboard"));
    const projekJurusanCard = new ProjekJurusanChart(
        $("#projek-jurusan-chart")[0]
    );
    const cardJurusanDashboard = new CardJurusanDashboardVertical(
        $("#card-jurusan-dashboard-vertical")
    );
    cardJurusanDashboard.load();
    jurusanDashboard.load();
    projekJurusanCard.load();
});
