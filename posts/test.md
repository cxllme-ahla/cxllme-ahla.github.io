title: "Material Design: Filosofi Desain Modern",
                date: "2026-06-15",
                tags: ["Design", "UI/UX"],
                content: `# Material Design: Filosofi Desain Modern

Material Design adalah sistem desain yang dikembangkan oleh Google pada tahun 2014. Sistem ini terinspirasi dari dunia fisik dan material nyata.

## Prinsip Utama

### 1. Material adalah Metafora
Material Design menggunakan metafora kertas dan tinta untuk menciptakan antarmuka yang familiar.

### 2. Bold, Graphic, Intentional
Penggunaan warna yang berani, tipografi yang jelas, dan ruang putih yang disengaja.

### 3. Motion Provides Meaning
Animasi bukan sekadar dekorasi, tetapi memberikan makna dan konteks.

## Palet Warna Laut

Dalam proyek ini, saya menggunakan palet warna laut:

- **Deep Ocean Blue** - #0277BD
- **Teal** - #00BCD4
- **Aqua** - #26C6DA

Warna-warna ini menciptakan suasana tenang dan profesional.

\`\`\`css
:root {
  --primary: #0277BD;
  --secondary: #00BCD4;
}
\`\`\`

Material Design terus berkembang dan menjadi standar industri untuk desain antarmuka modern.`
            },
            {
                title: "Dark Mode: Tren yang Tak Terelakkan",
                date: "2026-06-10",
                tags: ["Development", "CSS"],
                content: `# Dark Mode: Tren yang Tak Terelakkan

Dark mode bukan lagi sekadar tren, tetapi telah menjadi fitur yang diharapkan pengguna modern.

## Manfaat Dark Mode

1. **Mengurangi kelelahan mata** - Terutama di lingkungan gelap
2. **Menghemat baterai** - Pada layar OLED/AMOLED
3. **Aksesibilitas** - Membantu pengguna dengan sensitivitas cahaya
4. **Estetika** - Terlihat modern dan elegan

## Implementasi dengan CSS Variables

\`\`\`css
:root {
  --background: #FFFFFF;
  --text: #212121;
}

[data-theme="dark"] {
  --background: #121220;
  --text: #E0E0E0;
}
\`\`\`

## Tips Implementasi

- Gunakan CSS custom properties untuk kemudahan switching
- Simpan preferensi pengguna di localStorage
- Pertimbangkan kontras yang cukup untuk aksesibilitas
- Uji di berbagai kondisi pencahayaan

Dark mode adalah investasi yang worthwhile untuk pengalaman pengguna yang lebih baik. 🌙`
            },
            {
                title: "Markdown: Bahasa Penulisan yang Sederhana",
                date: "2026-06-05",
                tags: ["Writing", "Markdown"],
                content: `# Markdown: Bahasa Penulisan yang Sederhana

Markdown adalah bahasa markup ringan yang mudah dibaca dan ditulis. Diciptakan oleh John Gruber pada tahun 2004.

## Syntax Dasar

### Heading
\`\`\`
# Heading 1
## Heading 2
### Heading 3
\`\`\`

### Formatting
- **Bold** dengan \`**text**\`
- *Italic* dengan \`*text*\`
- ~~Strikethrough~~ dengan \`~~text~~\`

### Lists
- Item 1
- Item 2
  - Sub-item

### Code Blocks
\`\`\`javascript
function hello() {
  console.log("Hello, Markdown!");
}
\`\`\`

## Mengapa Markdown?

Markdown populer karena:
- **Sederhana** - Mudah dipelajari
- **Portable** - Bisa dibaca di mana saja
- **Versatile** - Digunakan di GitHub, Reddit, Discord, dll
- **Fokus pada konten** - Bukan formatting

Markdown adalah pilihan sempurna untuk blogging dan dokumentasi.`
            },
            {
                title: "Optimasi Performa Website",
                date: "2026-06-01",
                tags: ["Performance", "Web"],
                content: `# Optimasi Performa Website

Performa website adalah faktor kritis untuk pengalaman pengguna dan SEO.

## Metrik Penting

### Core Web Vitals
- **LCP** (Largest Contentful Paint) - < 2.5s
- **FID** (First Input Delay) - < 100ms
- **CLS** (Cumulative Layout Shift) - < 0.1

## Tips Optimasi

### 1. Optimasi Gambar
- Gunakan format modern (WebP, AVIF)
- Compress gambar sebelum upload
- Implement lazy loading

### 2. Minimize Resources
\`\`\`bash
# Minify CSS dan JS
npm run build
\`\`\`

### 3. Caching
- Gunakan service workers
- Set cache headers yang tepat
- Implement CDN

### 4. Code Splitting
- Load hanya kode yang diperlukan
- Dynamic imports untuk fitur opsional

## Tools untuk Testing

- Google PageSpeed Insights
- Lighthouse
- WebPageTest

Performa yang baik = pengguna yang bahagia! ⚡`
            },
            {
                title: "CSS Grid vs Flexbox: Kapan Menggunakan yang Mana?",
                date: "2026-05-28",
                tags: ["CSS", "Layout"],
                content: `# CSS Grid vs Flexbox

Dua sistem layout modern yang sering membingungkan developer. Mari kita bahas perbedaan dan kasus penggunaannya.

## Flexbox: One-Dimensional Layout

Flexbox ideal untuk layout satu dimensi (baris ATAU kolom).

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

**Kapan menggunakan Flexbox:**
- Navigation bars
- Card layouts sederhana
- Centering elements
- Distributing space evenly

## CSS Grid: Two-Dimensional Layout

Grid ideal untuk layout dua dimensi (baris DAN kolom).

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

**Kapan menggunakan Grid:**
- Page layouts
- Complex card grids
- Image galleries
- Dashboard layouts

## Kombinasi Keduanya

Seringkali, kombinasi Grid dan Flexbox memberikan hasil terbaik:

- **Grid** untuk layout halaman utama
- **Flexbox** untuk komponen dalam grid

Keduanya bukan kompetitor, melainkan pelengkap! 🎯`
            },
            {
                title: "JavaScript ES2024: Fitur Terbaru",
                date: "2026-05-25",
                tags: ["JavaScript", "ES2024"],
                content: `# JavaScript ES2024: Fitur Terbaru

ECMAScript 2024 membawa beberapa fitur menarik yang membuat JavaScript lebih powerful.

## Fitur Baru

### 1. Array Grouping
\`\`\`javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

const grouped = Object.groupBy(people, person => person.age);
// { 25: [{name: 'Alice', age: 25}, {name: 'Charlie', age: 25}], 30: [{name: 'Bob', age: 30}] }
\`\`\`

### 2. Promise.withResolvers()
\`\`\`javascript
const { promise, resolve, reject } = Promise.withResolvers();

// Sekarang bisa resolve/reject dari luar
setTimeout(() => resolve('Done!'), 1000);
\`\`\`

### 3. Temporal API (Coming Soon)
API baru untuk manipulasi tanggal dan waktu yang lebih baik.

## Mengapa Update Penting?

- **Performa** lebih baik
- **Developer experience** meningkat
- **Kode lebih bersih** dan mudah dibaca
- **Fitur modern** untuk masalah kompleks

Selalu update knowledge Anda dengan fitur JavaScript terbaru! 🚀`
            },
            {
                title: "Belajar Git: Version Control untuk Pemula",
                date: "2026-05-20",
                tags: ["Git", "Tutorial"],
                content: `# Belajar Git: Version Control untuk Pemula

Git adalah sistem version control yang wajib dikuasai setiap developer.

## Konsep Dasar

### Repository
Tempat menyimpan kode dan history perubahan.

### Commit
Snapshot dari perubahan kode pada waktu tertentu.

### Branch
Versi paralel dari kode untuk pengembangan fitur.

## Perintah Penting

\`\`\`bash
# Inisialisasi repository
git init

# Cek status
git status

# Tambah file ke staging
git add .

# Commit perubahan
git commit -m "Pesan commit"

# Push ke remote
git push origin main

# Buat branch baru
git checkout -b feature-branch

# Merge branch
git merge feature-branch
\`\`\`

## Best Practices

1. **Commit sering** dengan pesan yang jelas
2. **Gunakan branch** untuk fitur baru
3. **Review code** sebelum merge
4. **Jangan commit** file sensitif

Git adalah investasi waktu yang sangat worthwhile untuk career developer! `
            },
            {
                title: "Responsive Design: Website untuk Semua Perangkat",
                date: "2026-05-15",
                tags: ["Responsive", "Mobile"],
                content: `# Responsive Design: Website untuk Semua Perangkat

Di era mobile-first, responsive design bukan lagi pilihan, tetapi keharusan.

## Prinsip Responsive Design

### 1. Mobile First
Desain untuk mobile terlebih dahulu, kemudian scale up.

### 2. Fluid Layouts
Gunakan persentase dan unit relatif, bukan pixel tetap.

### 3. Media Queries
\`\`\`css
/* Mobile */
.container {
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
\`\`\`

## Tips Implementasi

- **Viewport meta tag** wajib ada
- **Flexible images** dengan max-width: 100%
- **Touch-friendly** buttons (min 44x44px)
- **Test** di berbagai perangkat

Responsive design memastikan website Anda terlihat bagus di semua perangkat! 📱`
