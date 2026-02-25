class Lingkaran {
    public hitungLuas(jariJari: number): string{
        let r = jariJari;
        const phi = 3.14; 
        let hasil = phi * r**2;
        return `Hasil Luas Lingkaran dari ${phi} x 2² adalah ${hasil}`
    }
}

const lingkaran = new Lingkaran();
console.log(lingkaran.hitungLuas(2));