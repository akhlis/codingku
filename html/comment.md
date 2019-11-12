# Membuat Comment pada Kode HTML

Semakin komplek sebuah website yang dibangun, maka semakin komplek pula kode HTML yang harus ditulis.

Apalagi si pembuat website tersebut harus bekerja sama dengan tim web developer yang lain, besar kemungkinannya terjadi miss komunikasi pada kode HTML yang ditulis jika tidak diberi catatan atau _comment_ khusus.

Perhatikan contoh berikut!

```html

<!-- Ini contoh comment untuk kotak profil pada website -->
<div class="profil-box">
    <figure>
        <img src="/avatar.png" alt="avatar">
    </figure>
    <div>
        <p>Johan Saputra</p>
        <p>Web Programer</p>
    </div>
</div>

```

Dengan memberi _comment_ atau catatan pada awalan kode HTML akan memudahkan teman developer yang lain memahami fungsi dari kode  HTML tersebut.

Selain itu penggunaan _comment_ HTML juga bisa dijadikan sebagai pengingat dari cara kerja kode HTML yang telah ditulis jika suatu saat nanti ingin memperbarui sebuah website.

## Cara Membuat _Comment_ (Komentar) pada Kode HTML

Komentar pada HTML bisa dibuat dengan cara menambahkan pembuka `<!--` dan penutup `-->`.

Begini sintaksnya:

```html
<!-- Isi dengan komentar/catatan disini -->
```

Tag komentar ini tidak akan ditampilkan pada web browser.

Jadi tujuan utama penggunaan tag komentar HTML ini hanya sebagai pengingat atau catatan dari fungsi kode HTML yang ditulis agar tidak lupa dikemudian hari jika ingin memperbaiki website.

Agar lebih mudah memahaminya, lihat contohnya ini:

```html
<!DOCTYPE html >
<html>
<head>
   <title>Belajar Tag Komentar (comment)</title>
</head>
<body>
   <!-- <p>Ini berada di dalam tag komentar, dan tidak akan tampil di browser</p> -->
   <p>Ini bukan komentar, dan akan tampil di browser</p>
</body>
</html>
```

Dari contoh diatas dapat dilihat bahwa tag pembuka komentar adalah  `<!--` dan tag penutup `-->`.