//PAGE SETUP

//FUNGSI
//1. MENYIAPKAN SEMUA COMPONENT YANG DIBUTUHKAN DIDALAM SATU HALAMAN
//2. SEBAGAI PERANTARA COMPONENT DALAM MEMANGGIL COMPONENT LAIN YANG MASIH DALAM SATU HALAMAN YANG SAMA
//3. MENYIMPAN CACHE DATA

class PageSetup {
    constructor() {
        this.componentList = []; //LIST COMPONENT YANG ADA DALAM SATU HALAMAN
        this.cache = {
            //CACHE DATA
            tugas: [],
            projek: [],
            laporan: [],
            siswa: [],
        };
    }

    init() {
        //INISIALSI PAGE SETUP MENJALANKAN GLOBAL EVENT LISTENER DISETIAP COMPONENT
        this.componentList.forEach((element) => {
            element.page_setup = this;
            if (typeof element.globalEventListener == "function") {
                element.globalEventListener();
            }
        });
    }

    add(component) {
        // MENAMBAHKAN COMPONENT KEDALAM HALAMAN
        this.componentList.push(component);
    }

    getComponent(namakomponent) {
        // MENDAMPATKAN/MEMANGGIL COMPONENT BERDASARKAN NAMA COMPONENT
        var component = this.componentList.filter(
            (element) => element.nama_component == namakomponent
        );
        if (component.length > 0) {
            return component[0];
        } else {
            return null;
        }
    }

    getTugasCache(id) {
        //MENDAPATKAN CACHE TUGAS
        let tugas = this.cache.tugas.filter(
            (element) => element.id_tugas == id
        );
        if (tugas.length > 0) {
            return tugas[0];
        } else {
            return null;
        }
    }

    getLaporanCache(id) {
        // MENDAPATKAN CACHE LAPORAN
        let laporan = this.cache.laporan.filter((element) => element.id == id);
        if (laporan.length > 0) {
            return laporan[0];
        } else {
            return null;
        }
    }
    getCacheSiswa(id) {
        // MENDAPATKAN CACHE DATA SISWA
        let siswa = this.cache.siswa.filter((element) => element.id == id);
        if (siswa.length > 0) {
            return siswa[0];
        } else {
            return null;
        }
    }

    getCacheProjek(id) {
        //MENDAPATKAN CACHE PROJEK
        let projek = this.cache.projek.filter((element) => element.id == id);
        if (projek.length > 0) {
            return projek[0];
        } else {
            return null;
        }
    }

    tambahCacheTugas(tugas) {
        // MENAMBAHKAN CACHE TUGAS
        let tugass = this.cache.tugas.filter(
            (element) => element.id_tugas != tugas.id_tugas
        );
        this.cache.tugas = tugass;
        this.cache.tugas.push(tugas);
    }

    tambahCacheLaporan(laporan) {
        // MENAMBAHKAN CACHE LAPORAN
        let laporann = this.cache.laporan.filter(
            (element) => element.id != laporan.id
        );
        this.cache.laporan = laporann;
        this.cache.laporan.push(laporan);
    }

    tambahCacheProjek(projek) {
        //MENAMBAHKAN CACHE PROJEK
        let projeks = this.cache.projek.filter(
            (element) => element.id != projek.id
        );
        this.cache.projek = projeks;
        this.cache.projek.push(projek);
    }

    tambahSiswaLaporan(siswa) {
        //MENAMBAHKAN CACHE LAPORAN
        let siswas = this.cache.siswa.filter(
            (element) => element.id != siswa.id
        );
        this.cache.siswa = siswas;
        this.cache.siswa.push(siswa);
    }

    hideAllComponent() {
        // MENYEMBUNYIKAN SEMUA COMPONENT
        this.componentList.forEach((element) => {
            if (element.isLayout == undefined) {
                element.container.hide();
            }
        });
    }
}

const pageSetup = new PageSetup();
export default pageSetup;
