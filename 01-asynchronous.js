//soal 01
// 1. Apa itu synchronous?
///  Synchronous merupakan mode default dalam proses eksekusi perintah kode.
///  Misalnya seperti contoh eksekusi berikut.
        /**function tanyaKabar(name) {
            console.log('Apa kabar,', name);
        }

        function katakanHallo(name) {
            console.log('Hallo,', name);
        }

        katakanHallo('Taehyung');
        tanyaKabar('V');

        ///jika kita mengeksekusi kode tesrsebut, maka console yang akan muncul adalah
        /**
         * Hallo, Taehyung
         * Apa kabar, V
         */


// 2. Apa itu asynchronous?
///   Asynchronous merupakan hasil eksekusi yang tidak selalu berdasarkan urutan kode tetapi berdasarkan waktu proses.
///   misalnya seperti eksekusi berikut.
           /** console.log('Hallo');
            setTimeout(() => {console.log('Javascript')}, 100) //ditunda selama 100 miliseconds
            console.log('Taehyung');

            /** maka output yang keluar adalah
             * Hallo
             * Taehyung
             * Javascript
             */
/// Pada baris ke 2 SetTimeOut digunakan untuk menunda eksekusi dalam satuan milisecond, dan urutan output 
/// tidak berurutan sesuai kode yang diinput. karena asynchronous bekerja berdasarkan waktu proses. 


// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
///   Pada Javascript asynchronous merupakan salah satu konsep yang menerapkan metode asynchronous dalam 
///   menjalankan pekerjaannya. Biasanya digunakan untuk melakukan permintaan data (request) dan menangani
///   sebuah tanggapan (handling response), baik response dalam bentuk XML, Javascript ataupun JSON dari sebuah rest API.

// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
/**  hasil yang tercetak atau yang keluar pada baris dibawah tersebut menjadi :
 * first log: 1
 * first log: 2
 * first log: 3
 * first log: 4
 * first log: 5
 * second log: 6
 * 
 * first log berulang 5 kali sedangkan second log hanya sekali.
 */

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
///   metode console.log berfungsi untuk menampilkan pesan atau informasi ke tab console yang ada di web browser,
///   yang menampilkan output ke console Javascript.
///   jika terdapat ketidak samaan antara console.log pertama dan kedua dikarenakan object yang di console
///   tidak hanya menunjukan kondisi saat ini. sebenarnya menunda membaca objek properti tersebut sampai
///   diperluas. kemudian jika sudah diperluas yang pertama kita bisa melakukan console.log kedua sebelum kembali. 

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }