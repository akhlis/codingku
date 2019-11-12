# Cara Memberi Style pada Elemen HTML

Apa jadinya kalau membuat halaman website hanya menggunakan HTML saja?

Ya kamu benar sekali, tampilannya akan berantakan dan tidak menarik sama sekali.

Karena urusan mempercantik halaman website itu sudah menjadi tugasnya CSS.

Lalu bagaimana caranya memberi style pada elemen HTML dengan CSS?

## Gunakan Atribut Style pada Element HTML

Untuk memberi style pada elemen HTML kamu bisa menggunakan atribut `style` yang diletakkan pada tag pembuka elemen HTML.

Begini sintaks penulisannya:

```html
<tagname style="property:value;">
```

**Property** menunjukkan properti CSS, sedangkan **value** menunjukkan nilai CSS dari properti tersebut.

## Cara Memberi Warna Teks pada HTML

Setelah tahu cara penggunaan atribut style, sekarang saatnya menerapkan properti dan value css untuk mengatur style elemen HTML.

Yuk kita mulai dengan memberi warna teks judul dan paragraf pada dokumen HTML.

Caranya dengan memakai properti `color` pada atribut style. Perhatikan contoh berikut:

```html
<h1 style="color:blue;">Ini Judul dengan Warna Biru</h1>
<p style="color:red;">Ini paragraf pertama dengan warna merah.</p>
<p style="color:green;">Ini paragraf kedua dengan warna hijau.</p>
```

Begini tampilannya di web browser!

<h1 style="color:blue;">Ini Judul dengan Warna Biru</h1>
<p style="color:red;">Ini paragraf pertama dengan warna merah.</p>
<p style="color:green;">Ini paragraf kedua dengan warna hijau.</p>



## Cara Memberi Background pada HTML

Untuk memberi warna background pada elemen HTML, gunakanlah properti css `background-color` pada atribut style.

Pada contoh berikut saya memberi background berwarna biru langit pada elemen `div`:

```html
<div style="background-color:powderblue;">

<h1>Ini Judul Pertama Saya</h1>
<p>Ini paragraf pertama saya.</p>

</div>
```

[Coba Praktek](/text-editor)

## Cara Mengatur Ukuran Teks pada HTML

Untuk mengatur ukuran teks pada elemen HTML, maka gunakanlah properti css `font-size` pada atribut style.

Lihat contoh ini:

```html
<h1 style="font-size:42px;">Ini Judul Pertama Saya</h1>
<p style="font-size:20px;">Ini paragraf pertama saya.</p>
```

Begini tampilannya di web browser!

<h1 style="font-size:42px;">Ini Judul Pertama Saya</h1>
<p style="font-size:20px;">Ini paragraf pertama saya.</p>

## Cara Mengatur Rata Teks pada HTML

Untuk mengatur rata teks pada elemen HTML, maka gunakanlah properti css `text-align` pada atribut style.

Contoh:

```html
<p style="text-align:left">Ini paragraf dengan rata kiri.</p>
<p style="text-align:center">Ini paragraf dengan rata tengah.</p>
<p style="text-align:right">Ini paragraf dengan rata kanan.</p>
```

Begini tampilannya di web browser!

<p style="text-align:left">Ini paragraf dengan rata kiri.</p>
<p style="text-align:center">Ini paragraf dengan rata tengah.</p>
<p style="text-align:right">Ini paragraf dengan rata kanan.</p>

