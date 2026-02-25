interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

function cetakBuku(book: Buku): void {
    console.log(`Judul Buku : ${book.judul}\nNama Pengarang : ${book.pengarang}\nTahun Terbit : ${book.tahunTerbit}\nTersedia : ${book.tersedia}`);
}

const data: Buku = {
    judul: 'LixzyAja VS All',
    pengarang: 'Zulfi',
    tahunTerbit: 2026,
    tersedia: true
};

cetakBuku(data);
