// var tanya = true;
// while( tanya ) {
//     // menangkap pilihan player
//     var p = prompt('pilih : gajah, semut, orang');

//     // menangkap pilihan computer
//     // membangkitkan bilangan random
//     var comp = Math.random();

//     if( comp < 0.34 ) {
//         comp = 'gajah';
//     } else if( comp >= 0.34 && comp < 0.67 ) {
//         comp = 'orang';
//     } else {
//         comp = 'semut';
//     }

//     // menentukan rules
//     var hasil = '';
//     if( p == comp ) {
//         hasil = 'SERI!';
//     } else if( p == 'gajah' ) {
//         hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
//     } else if( p == 'orang' ) {
//         hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
//     } else if( p == 'semut' ) {
//         hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
//     } else {
//         hasil = 'memasukkan pilihan yang salah!';
//     }

//     // tampilkan hasilnya
//     alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('lagi?');
// }

// alert('terimakasih sudah bermain.');


function getCompChoose() {
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getResult(comp, player) {
    if( player == comp ) return'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';

}

// hanya menjalankan 1 gambar saja dibawah, harus di copy ulang jika mau jalan semua
// ----------------------------
// const uGajah = document.querySelector('.gajah');
// uGajah.addEventListener('click', () => {
//     const compChoose = getCompChoose(); // mengambil pilihan komputer dari fungsi diatas
//     const playerChoose = uGajah.className; // mengambil pilihan user berdasarkan nama kelas
//     const result = getResult(compChoose, playerChoose); // mendapatkan hasil
//     const imgComp = document.querySelector('.img-komputer'); 
//     imgComp.setAttribute('src', 'img/' + compChoose + '.png') // menampilkan gambar yang dipilih komputer

//     const info = document.querySelector('.info');
//     info.innerHTML = result; // menampilkan hasil 
// });


function putar() {
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const wAwal = new Date().getTime();
    setInterval(() => {
        if ( new Date().getTime() - wAwal > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) {
            i = 0;
        }
    }, 100);
}

// menyeleksi ketiganya langsung
// ------------------------------
const choose = document.querySelectorAll('li img');
choose.forEach((pil) => {
    pil.addEventListener('click', () => {
        const compChoose = getCompChoose(); // mengambil pilihan komputer dari fungsi diatas
        const playerChoose = pil.className; // mengambil pilihan user berdasarkan nama kelas
        const result = getResult(compChoose, playerChoose); // mendapatkan hasil

        putar();
        
        setTimeout( () => {
            const imgComp = document.querySelector('.img-komputer'); 
            imgComp.setAttribute('src', 'img/' + compChoose + '.png') // menampilkan gambar yang dipilih komputer
    
            const info = document.querySelector('.info');
            info.innerHTML = result; // menampilkan hasil
        }, 1000);        
    });
});



