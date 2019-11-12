# Belajar HTML Dasar: Mengenal Atribut HTML

Atribut HTML adalah informasi tambahan yang diberikan pada sebuah element HTML yang diletakkan pada tag pembuka.

Setiap atribut selalu memiliki pasangan nama dan nilai yang ditulis dengan format `name="value"`. 

Penulisan value biasanya diapit dengan tanda kutip satu (') atau tanda kutip dua (").

`Name` atribut menunjukkan properti yang ingin kamu berikan pada element HTML, sedangkan `value` merupakan nilai dari properti tersebut.

Perhatikan contoh berikut:

```html
<!DOCTYPE html> 
<html>
 
   <head> 
      <title>Contoh Penggunaan Atribut Align</title> 
   </head>
	
   <body> 
      <p align="left">Ini adalah paragraf dengan rata bagian kiri</p> 
      <p align="center">Ini adalah paragraf dengan rata bagian tengah</p> 
      <p align="right">Ini adalah paragraf dengan rata bagian kanan</p> 
   </body>
	
</html>
```

Pada contoh diatas, `align="left"` adalah atribut element HTML. `align` merupakan nama atribut tersebut, sedangkan `left` menunjukkan nilai dari properti `align`.

Semua element HTML bisa diberi atribut, namun ada beberapa atribut yang hanya cocok dipasangkan pada tag HTML tertentu. Misalnya atribut `href` hanya cocok dipasang pada tag `<a>` saja.

#### Atribut HTML yang Biasa Digunakan

Berikut ini atribut HTML yang sering digunakan untuk membuat halaman website:

- id
- class
- style
- title
- href
- src
- alt
- disabled

## Penggunaan Atribut href

Atribut `href` digunakan oleh tag `<a>` untuk meletakkan link atau alamat sebuah halaman website.

Contoh:

```html
<a href="https://www.codingku.id">Ini link website saya</a>
```

Untuk penjelasan lebih lengkap mengenai penggunaan tag `<a>` bisa kunjungi halaman [tag a](/tag-a)

## Penggunaan Atribut src

Atribut `src` digunakan oleh tag `<img>` untuk menentukan sumber lokasi gambar.

Contoh:

```html
<img src="img_jeruk.jpg">
```

## Penggunaan Atribut style

Atribut `style` digunakan untuk menentukan style dari sebuah element, misalnya menentukan warna, ukuran, dan font pada teks.

Contoh:

```html
<p style="color:red">Ini sebuah paragraf</p>
```

## Gunakan Huruf Kecil pada Atribut

Standar HTML5 tidak mengharuskan untuk memakai huruf kecil dalam penulisan atribut, misalnya atribut style bisa ditulis dengan `style` atau `STYLE`.

Namun W3C selalu menyarankan untuk menulisnya dengan hurus kecil. Dan di [codingku.id](/) juga selalu menggunakan huruf kecil untuk menulis nama atribut.