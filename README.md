# Resto Padang Pro 🍱

Landing page restoran Padang modern dan *premium* dengan sistem pemesanan online via WhatsApp dan pembayaran transfer bank. Aplikasi ini dirancang untuk memberikan pengalaman pengguna yang elegan dan fungsional di perangkat desktop maupun mobile.

## ✨ Fitur Utama

- **🎨 Desain Premium (Minang Modern)**: Palet warna Ruby Red, Gold, dan Charcoal yang mewah dengan tipografi *Outfit* & *Playfair Display*.
- **🛒 Keranjang Belanja Interaktif**: Sistem *cart* global yang memungkinkan pelanggan memilih menu, mengatur kuantitas, dan melihat total harga.
- **📱 WhatsApp Order Bridge**: Otomatis menyusun ringkasan pesanan (Nama, Alamat, Menu, Total) dan mengirimkannya langsung ke nomor WhatsApp pemilik restoran.
- **🏦 Instruksi Pembayaran Transfer**: Detail rekening bank (BCA/Mandiri) yang jelas untuk memudahkan transaksi nontunai.
- **⚡ Performa Tinggi**: Dibangun dengan Next.js 16 dan React 19 untuk kecepatan loading yang maksimal.
- **🎬 Animasi Halus**: Transisi antar bagian dan menu menggunakan *Framer Motion*.

## 🚀 Teknologi yang Digunakan

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://reactjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Font**: [Google Fonts (Outfit & Playfair Display)](https://fonts.google.com/)

## 🛠️ Cara Instalasi & Menjalankan

1. **Clone repository** (atau unduh source code).
2. **Instal dependensi**:
   ```bash
   npm install
   ```
3. **Jalankan server pengembangan**:
   ```bash
   npm run dev
   ```
4. **Buka di browser**: Navigasi ke `http://localhost:3000`.

## ⚙️ Panduan Kustomisasi

### 1. Mengubah Nomor WhatsApp Tujuan
Buka file `src/utils/whatsapp.ts` dan ubah nilai `phoneNumber`:
```typescript
const phoneNumber = "6281234567890"; // Gunakan format internasional tanpa '+'
```

### 2. Mengubah Detail Rekening Bank
Buka file `src/components/Footer.tsx` dan sesuaikan bagian **Pembayaran Transfer**:
```tsx
<p className="text-sm font-bold text-white">1234-5678-90</p>
<p className="text-[10px] text-white/40">a/n Nama Anda / Resto Anda</p>
```

### 3. Menambah/Mengubah Menu Makanan
Buka file `src/components/MenuSection.tsx` dan edit array `menuItems`:
```typescript
{
  id: '7',
  name: 'Menu Baru',
  price: 50000,
  description: 'Deskripsi menu lezat Anda...',
  image: 'https://link-gambar-anda.com',
  category: 'Lauk Utama',
}
```

### 4. Mengubah Tema Warna
Buka file `src/app/globals.css` dan sesuaikan variabel di dalam `@theme`:
```css
@theme {
  --color-primary: #9B1B1B; /* Warna Merah Utama */
  --color-secondary: #D4AF37; /* Warna Emas */
  --color-accent: #1A1A1A; /* Warna Charcoal */
}
```

## 📂 Struktur Proyek

- `src/app/`: File utama Next.js (Page, Layout, Globals CSS).
- `src/components/`: Komponen UI yang dapat digunakan kembali (Navbar, Hero, Menu, Cart, Footer).
- `src/context/`: State management global untuk keranjang belanja (`CartContext`).
- `src/utils/`: Fungsi utilitas (Logika pembuatan link WhatsApp).
- `public/`: Aset statis seperti logo dan favicon.

## 📄 Lisensi

Proyek ini dibuat untuk keperluan landing page Resto Padang dengan hak penggunaan bebas untuk kepentingan bisnis personal.

---
*Dibuat oleh Antigravity UI Team*
