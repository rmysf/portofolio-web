const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '../public/certificates');
const OUT = path.join(__dirname, '../public/certificates-optimized');

console.log('Mencari folder sumber di:', SRC);
console.log('Folder sumber ada?', fs.existsSync(SRC));

if (!fs.existsSync(SRC)) {
  console.error('❌ Folder public/certificates tidak ditemukan. Cek lagi lokasinya.');
  process.exit(1);
}

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC).filter(f => /\.(png|jpe?g)$/i.test(f));
console.log('Jumlah file gambar ditemukan:', files.length);
console.log('Daftar file:', files);

(async () => {
  for (const file of files) {
    const name = file.replace(/\.(png|jpe?g)$/i, '');
    const input = path.join(SRC, file);

    await sharp(input)
      .resize({ width: 500 })
      .webp({ quality: 70 })
      .toFile(path.join(OUT, `${name}-thumb.webp`));

    await sharp(input)
      .resize({ width: 1400 })
      .webp({ quality: 80 })
      .toFile(path.join(OUT, `${name}-full.webp`));

    console.log(`✔ ${file}`);
  }
  console.log(`Selesai. ${files.length} gambar dioptimasi.`);
})().catch(err => {
  console.error('❌ Terjadi error saat memproses gambar:', err);
});