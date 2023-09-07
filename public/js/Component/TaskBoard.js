import TugasCard from "./Card/TugasCard";

export default class TaskBoard {
    constructor(container){
        this.container = container;
        this.listBoard = [];
        this.page_setup;
        this.nama_component = "TasKBoard";



    }

    load(id_siswa) {
       this.listBoard["belum Dikerjakan"] = Tugas.getTaskBoard(id_siswa, "Belum Dikerjakan");
       this.listBoard["Dalam Pengerjaan"] = Tugas.getTaskBoard(id_siswa, "Dalam Pengerjaan");
       this.listBoard["Revisi"] = Tugas.getTaskBoard(id_siswa, "Revisi");
       this.listBoard["Selesai"] = Tugas.getTaskBoard(id_siswa, "Selesai");
       
       var contBelumDikerjakan = this.container.find("#container-belum-dikerjakan");
       contBelumDikerjakan.html("");
       this.listBoard["Belum Dikerjakan"].array.forEach(element => {
        let tugasCard = new TugasCard(element);
        contBelumDikerjakan.append(tugasCard.load());
        
       });

        
       var contDalamPengerjaan = this.container.find("#container-dalam-pengerjaan");
       contBelumDikerjakan.html("");
       this.listBoard["Dalam Pengerjaan"].array.forEach(element => {
        let tugasCard = new TugasCard(element);
        contDalamPengerjaan.append(tugasCard.load());
        
       });

        
       var contRevisi = this.container.find("#container-revisi");
       contRevisi.html("");
       this.listBoard["Revisi"].array.forEach(element => {
        let tugasCard = new TugasCard(element);
        contRevisi.append(tugasCard.load());
        
       });

        
       var contSelesai = this.container.find("#container-selesai");
       contSelesai.html("");
       this.listBoard["Selesai"].array.forEach(element => {
        let tugasCard = new TugasCard(element);
        contSelesai.append(tugasCard.load());
        
       });
    }
}