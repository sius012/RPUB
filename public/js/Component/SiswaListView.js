import SiswaCard from "./Card/SiswaCard.js";

export default class SiswaListView{
    constructor(container = $("siswa-list-view")){
        this.container = container;
        this.siswaList = Siswa.all()

        this.page_setup;
        this.nama_component = "SiswaListView";
    }
    load(){
        this.container.find("#container-siswa").html("");
        this.siswaList.foreach(element => {
            let siswaCard = new SiswaCard(element);
            this.container.append(siswaCard.load())
        });
    }
}