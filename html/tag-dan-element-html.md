# Mengenal Tag dan Element HTML

Dalam penulisan kode HTML, ada 3 hal utama yang harus kamu pahami agar tidak bingung saat mulai membuat halaman website. 

Apa saja itu? jawabannya adalah element, tag, dan atribut HTML.

Namun pada tutorial ini, saya akan bahas mengenai element dan tag HTML terlebih dahulu.

Untuk penjelasan tentang atribut HTML bisa kamu baca di tutorial selanjutnya.

## Apa itu Tag HTML

Tag HTML adalah kode sintaks pada HTML yang fungsinya untuk mengirimkan perintah atau informasi tertentu pada web browser sehingga bisa diterjemahkan menjadi halaman website.

Informasi yang diberikan ke web browser ini berbeda-beda sesuai dengan tag yang ditulis, misalnya tag `<img>` digunakan untuk menampilkan gambar pada halaman website.

Tag HTML ini diapit dengan kurung siku (angel brackets) yang umumnya selalu berpasangan, seperti `<p>` dengan `</p>`. Tag pertama disebut dengan **tag pembuka**, sedangkan tag kedua disebut dengan **tag penutup**.

Untuk membedakan tag pembuka dengan tag penutup, pada tag penutup diberi tanda forward slash (tanda garis miring) sebelum nama tag seperti ini `</namatag>`.

Meski kebanyakan tag HTML memiliki pasangan, namun ada beberapa tag yang tidak berpasangan.

Diantaranya yaitu tag `<meta>`, `<img>`, `<area>`, `<link>`, `<input>`, `<legend>`, `<embed>`, `<col>`, `<hr>`, dan `<br>`.

Pada HTML5, tag tunggal (tidak berpasangan) ini bisa dikenali tanpa harus ditutup dengan tanda garis miring (/) pada tag pembuka seperti `<br/>`.

Namun kalau dokumen yang kamu tulis ingin bisa dikenali oleh XML parser (XHTML), maka harus diberi penutup seperti `<br/>` ini.

Semua tag-tag HTML dan fungsinya bisa kamu lihat selengkapnya disini.

## Apa itu Element HTML

Element HTML adalah semua obyek atau konten yang ada diantara tag pembuka dan tag penutup HTML.

Begini penulisannya: 

```html
<namatag>semua obyek atau konten yang ada disini disebut elemen HTML...</namatag>
```

Contoh:

```html
<p>Ini paragraf pertama saya</p>
```

Semua teks yang ada diantara tag `<p>` dan `</p>` inilah yang disebut dengan _element HTML_.

| Tag Pembuka     | Konten Elemen               | Tag Penutup    |
| --------------- |:---------------------------:| --------------:|
| `<h1>`          | Ini Konten Judul Pertama    | `</h1>`        |
| `<p>`           | Ini konten paragraf pertama | `</p>`         |
| `<br>`          |                             |                |

Ada beberapa elemen HTML yang tidak memiliki konten seperti `<img>`, `<hr>`, `<br>`, dll. sehingga tidak perlu tag penutup.

Element kosong ini biasa disebut _void element_ atau _empty element_.

## Nested HTML Element (Elemen Bersarang)

Element HTML bisa terdiri dari beberapa element HTML lain atau disebut _nested HTML element_ (elemen bersarang atau bertingkat).

Semua dokumen HTML pasti tersusun dari nested HTML element.

Perhatikan contoh berikut:

```html
<!DOCTYPE html>
<html>
<body>

<h1>Judul Artikel Pertama</h1>
<p>Ini paragraf pertama dalam sebuah artikel.</p>

</body>
</html>
```

Contoh diatas terdiri dari 4 element HTML yang bertingkat (nested).

Didalam element `<html>` itu terdapat 3 element lain yaitu `<body>`, `<h1>`, dan `<p>`.

#### Penjelasannya begini:

- Element `<html>` berfungsi untuk mendefinisikan sebagai dokumen HTML itu sendiri. Element ini dimulai dengan tag pembuka `<html>` dan diakhiri dengan tag penutup `</html>`.
- Elemen `<body>` fungsinya untuk mendifinisikan dokumen body. Element ini dimulai dengan tag pembuka `<body>` dan diakhiri dengan tag penutup `</body>`. Element `<body>` ini memiliki 2 element lain didalamnya (nested), yaitu element `<h1>` dan `<p>`.
- Element `<h1>` fungsinya untuk mendefinisikan sebagai konten judul. Element ini dimulai dengan tag pembuka `<h1>` dan diakhiri dengan tag penutup `</h1>`.
- Element `<p>` fungsinya untuk mendefinisikan sebagai konten paragraf. Element ini dimulai dengan tag pembuka `<p>` dan diakhiri dengan tag penutup `</p>`



## Nama-nama Element HTML

Dalam nested HTML element atau HTML DOM, ada 5 istilah yang sering digunakan untuk menyebut tingkatan element HTML. Istilah ini akan digunakan kalau sudah berhubungan dengan bahasa pemrograman Javascript.

Apa saja istilah tersebut?

1. #### Parent Element

   Dalam bahasa Inggris. parent artinya orang tua. Jadi kalau parent element bisa diartikan sebagai orang tua dari element yang ada didalamnya.

   Parent element adalah sebuah element yang memiliki element lain didalamnya tepat satu tingkatan. Lebih jelasnya,  lihat kode HTML berikut:

   ```html
   <html>
       <head>
           <title>Tutorial Belajar HTML | Codingku.id</title>
       </head>
       <body>      
           <ul>
               <li>Element li pertama</li>
               <li>Element li kedua</li>
               <li>Element li ketiga</li>
           </ul>
       </body>
   </html>
   ```

   Pada contoh diatas, tag `<head>` merupakan orang tua atau parent dari tag `<title>`. Sedangkan tag `<body>` merupakan parent element dari tag `<ul>`.

   Tetapi tag `<body>` bukan merupakan parent element dari tag `<li>` meski juga ada didalamnya, melainkan sebagai grand parent atau kakeknya tag `<li>`.

   Karena yang menjadi parent dari tag `<li>` adalah tag `<ul>`.

2. #### Child Element

   Child Element merupakan kebalikan dari parent element. Jadi child element bisa diartikan sebagai anak langsung dari element yang ada diluarnya.

   Child element adalah element yang berada didalam element lain tepat satu tingkatan. Lebih jelasnya,  lihat kode HTML berikut:

   ```html
   <html>
       <head>
           <title>Tutorial Belajar HTML | Codingku.id</title>
       </head>
       <body>      
           <ul>
               <li>Element li pertama</li>
               <li>Element li kedua</li>
               <li>Element li ketiga</li>
           </ul>
       </body>
   </html>
   ```

   Pada contoh diatas, tag `<title>` merupakan child element dari tag `<head>`. Sedangkan tag `<ul>` merupakan child element dari tag `<body>`.

   Tetapi tag `<li>` bukan merupakan child element dari tag `<body>`, melainkan sebagai cucu dari tag `<body>` dan menjadi child element dari tag `<ul>`.

3. #### Sibling Element

   Kata sibling memiliki arti saudara kandung. Jadi yang dimaksud sibling element disini yaitu element yang memiliki saudara kandung dari satu ayah dan ibu.

   Sibling element adalah child element yang bersaudara atau beberapa element yang sejajar dan berada didalam parent element yang sama. Lebih jelasnya,  lihat kode HTML berikut:

   ```html
   <html>
       <head>
           <title>Tutorial Belajar HTML | Codingku.id</title>
       </head>
       <body>      
           <ul>
               <li>warna merah</li>
               <li>warna kuning</li>
               <li>warna hijau</li>
           </ul>
           <ol>
               <li>buah mangga</li>
               <li>buah jeruk</li>
               <li>buah melon</li>
           </ol>
       </body>
   </html>
   ```

   Perhatikan tag `<ul>` dan `<ol>` pada contoh diatas, kedua tag tersebut posisinya sejajar atau setingkat dan sama-sama berada langsung didalam tag `<body>`.

   Sehingga tag `<ul>` dan `<ol>` diatas merupakan sibling element karena memiliki parent element yang sama, yaitu tag `<body>`.

4. #### Ancestor Element

   Sudah tahu arti kata ancestor? ancestor artinya leluhur. Jadi kalau ancestor element berarti semua element yang didalamnya terdapat element yang lain. Yuk kita lihat kode berikut:

   ```html
   <html>
       <head>
           <title>Tutorial Belajar HTML | Codingku.id</title>
       </head>
       <body>      
           <ul>
               <li>warna merah</li>
               <li>warna kuning</li>
               <li>warna hijau</li>
           </ul>
           <ol>
               <li>buah mangga</li>
               <li>buah jeruk</li>
               <li>buah melon</li>
           </ol>
       </body>
   </html>
   ```

   Pada contoh tersebut, tag `<html>` merupakan ancestor dari tag `<head>`, `<title>`, `<body>`, `<ul>`, `<ol>`, `<li>` atau tag apapun yang ada didalam tag `<html>`.

   Begitu juga dengan tag `<head>` merupakan ancestor dari tag `<title>`.

5. #### Descendant Element

   Descendant artinya keturunan. Descendant element berarti sebuah element yang merupakan keturunan dari element yang lain. Lebih jelasnya bisa kamu amati sintaks berikut:

   ```html
   <html>
       <head>
           <title>Tutorial Belajar HTML | Codingku.id</title>
       </head>
       <body>      
           <header>
               <div>
                   <h1>Judul web</h1>
               </div>
               <nav>
                   <ul>
                       <li>home</li>
                       <li>artikel</li>
                       <li>kontak</li>
                   </ul>
               </nav>
           </header>
       </body>
   </html>
   ```

   Dalam contoh sintaks diatas, tag `<ul>` merupakan descendat element dari tag `<nav>`, `<header>`, `<body>`, dan `<html>`.

   Tetapi tag `<ul>` bukanlah descendant element dari tag `<div>` dan `<head>` karena tidak berada didalam tag tersebut.

