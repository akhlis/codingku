# Belajar HTML Lengkap: Cara Membuat Paragraf pada HTML

Pada tutorial sebelumnya sudah dibahas cara membuat judul konten artikel pada halaman website.

Elemen selanjutnya yang tidak kalah penting yaitu elemen paragraf. 

Karena elemen ini biasanya akan digunakan untuk menjelaskan deskripsi sebuah judul atau untuk membuat paragraf pada artikel di website.

Lalu bagaimana cara membuat elemen paragraf pada HTML?

Agar lebih paham cara membuat paragraf dalam HTML, yuk tuliskan kode sintaks ini pada teks editormu.

```html
<!DOCTYPE html>
<html>
<head>
<title>Cara Membuat Paragraf pada HTML</title>
</head>
<body>

    Ini paragraf pertama saya.
    Ini paragraf kedua saya.
    Ini paragraf saya yang lain.

</body>
</html>
```

Lalu simpanlah kode tersebut dengan nama `index.html`. Setelah itu bukalah file HTML itu dengan web browser Chrome.

Lihat bagaimana tampilannya?

![membuat paragraf dalam HTML](.\images\demo-tag-paragraf-1.png)

Ketiga paragraf diatas akan ditampilkan menjadi satu baris.

Yuk tulis ulang kode sintaksnya dengan menggunakan tag `<br>` pada teks paragraf seperti ini:

```html
<!DOCTYPE html>
<html>
<head>
<title>Cara Membuat Paragraf pada HTML</title>
</head>
<body>

    Ini paragraf pertama saya.<br>
    Ini paragraf kedua saya.<br>
    Ini paragraf saya yang lain.<br>

</body>
</html>
```

Setelah ditambahkan tag `<br>` diakhir teks paragraf, tampilannya di web browser sudah menjadi tiga baris seperti berikut. Karena tag `<br>` berfungsi untuk memisahkan teks menjadi baris berikutnya.

![membuat paragraf dalam HTML](.\images\demo-tag-paragraf-2.png)

Tapi meskipun tampilan paragrafnya sudah benar, membuat paragraf dengan cara diatas kurang tepat. Karena teks paragraf tersebut tidak dianggap sebagai elemen paragraf oleh web browser.

## Gunakan tag `<p>` untuk Membuat Paragraf pada HTML

Untuk membuat elemen paragraf yang benar, gunakanlah tag `<p>` seperti yang sudah disediakan oleh HTML.

Begini contoh format penulisannya:

```html
<p>Ini paragraf pertama saya.</p>
<p>Ini paragraf kedua saya.</p>
<p>Ini paragraf saya yang lain.</p>
```

Yuk kita revisi kode sintaks pada contoh diatas dengan kode berikut :

```html
<!DOCTYPE html>
<html>
    <head>
    	<title>Cara Membuat Paragraf pada HTML</title>
    </head>
    <body>

        <p>Ini paragraf pertama saya.</p>
        <p>Ini paragraf kedua saya.</p>
	    <p>Ini paragraf saya yang lain.</p>

    </body>
</html>
```

[lihat demo](/demo-html/tag-paragraf-1)

Setelah kita tambah tag `<p>` pada teks paragrafnya, maka teks tersebut sudah dikenali oleh web browser sebagai elemen paragraf.

Semoga dengan penjelasan diatas, kamu sudah menjadi paham cara membuat paragraf pada HTML dengan benar.

Selanjutnya kita akan membahas mengenai penggunaan style atau menambahkan css pada elemen HTML di [tutorial ini](/style).

Tapi sebelumnya jangan lupa untuk membagikan link tutorial ini kepada teman-temanmu agar mereka juga bisa mendapatkan manfaat yang sama.