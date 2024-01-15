class PageSetup {
    constructor() {
        this.componentList = [];
        this.cache = {
            tugas: [],
            projek: [],
            laporan: [],
            siswa: [],
        };
    }

    init() {
        this.componentList.forEach((element) => {
            element.page_setup = this;
            if (typeof element.globalEventListener == "function") {
                element.globalEventListener();
            }
        });
    }

    add(component) {
        this.componentList.push(component);
    }

    getComponent(namakomponent) {
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
        let laporan = this.cache.laporan.filter((element) => element.id == id);
        if (laporan.length > 0) {
            return laporan[0];
        } else {
            return null;
        }
    }
    getCacheSiswa(id) {
        let siswa = this.cache.siswa.filter((element) => element.id == id);
        if (siswa.length > 0) {
            return siswa[0];
        } else {
            return null;
        }
    }

    getCacheProjek(id) {
        let projek = this.cache.projek.filter((element) => element.id == id);
        if (projek.length > 0) {
            return projek[0];
        } else {
            return null;
        }
    }

    tambahCacheTugas(tugas) {
        let tugass = this.cache.tugas.filter(
            (element) => element.id_tugas != tugas.id_tugas
        );
        this.cache.tugas = tugass;
        this.cache.tugas.push(tugas);
    }

    tambahCacheLaporan(laporan) {
        let laporann = this.cache.laporan.filter(
            (element) => element.id != laporan.id
        );
        this.cache.laporan = laporann;
        this.cache.laporan.push(laporan);
    }

    tambahCacheProjek(projek) {
        let projeks = this.cache.projek.filter(
            (element) => element.id != projek.id
        );
        this.cache.projek = projeks;
        this.cache.projek.push(projek);
    }

    tambahSiswaLaporan(siswa) {
        let siswas = this.cache.siswa.filter(
            (element) => element.id != siswa.id
        );
        this.cache.siswa = siswas;
        this.cache.siswa.push(siswa);
    }

    hideAllComponent() {
        this.componentList.forEach((element) => {
            if (element.isLayout == undefined) {
                element.container.hide();
            }
        });
    }
}

const pageSetup = new PageSetup();
export default pageSetup;
