# Chatpory – AI Destekli Randevu & Müşteri Hizmetleri Web Sitesi

> **Demo Web Sitesi** — Bu proje, yapay zeka destekli chatbot ve otomatik randevu sistemi sunan Chatpory platformunun tanıtım sitesidir.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=flat-square&logo=tailwind-css)

---

## 🚀 Özellikler

- **AI Chatbot Entegrasyonu** – 7/24 otomatik müşteri desteği
- **Randevu Sistemi** – Calendly entegrasyonu ile kolay randevu planlaması
- **Çoklu Platform Desteği** – Web, mobil ve sosyal medya kanallarında çalışır
- **Animasyonlu UI** – Framer Motion ile zengin kullanıcı deneyimi
- **Tam Responsive** – Tüm ekran boyutlarına uyumlu tasarım

---

## 🛠️ Teknoloji Yığını

| Katman | Teknoloji |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animasyon | Framer Motion |
| İkonlar | Lucide React |
| Routing | React Router DOM 6 |

---

## ⚙️ Kurulum

### 1. Repoyu klonlayın

```bash
git clone https://github.com/ErenEgeY/AI-randevu-destekli-Web-Sitesi-demo.git
cd AI-randevu-destekli-Web-Sitesi-demo
```

### 2. Bağımlılıkları yükleyin

```bash
npm install
```

### 3. Ortam değişkenlerini ayarlayın

`.env.example` dosyasını `.env` olarak kopyalayın ve kendi değerlerinizi girin:

```bash
cp .env.example .env
```

`.env` dosyasının içeriği:

```env
# Calendly randevu linkinizi buraya ekleyin
VITE_CALENDLY_LINK=https://calendly.com/KULLANICI_ADINIZ/GORUSME_ADI
```

> ⚠️ `.env` dosyası `.gitignore` ile korunur ve asla repoya yüklenmez.

### 4. Geliştirme sunucusunu başlatın

```bash
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

---

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── Navbar.tsx          # Üst navigasyon çubuğu
│   ├── Hero.tsx            # Ana landing bölümü
│   ├── VideoDemo.tsx       # Video demo bölümü
│   ├── BenefitsGrid.tsx    # Faydalar ızgarası
│   ├── ProcessTimeline.tsx # Süreç zaman çizelgesi
│   ├── ServicesGrid.tsx    # Hizmetler bölümü
│   ├── TestimonialCarousel.tsx # Müşteri yorumları
│   ├── FAQ.tsx             # Sıkça sorulan sorular
│   ├── CTA.tsx             # Çağrı-eylem bölümü
│   └── Footer.tsx          # Alt bilgi
├── pages/
│   ├── Home.tsx            # Ana sayfa
│   ├── About.tsx           # Hakkında
│   ├── Contact.tsx         # İletişim
│   ├── Pricing.tsx         # Fiyatlandırma
│   ├── Login.tsx           # Giriş
│   ├── Register.tsx        # Kayıt
│   └── ForgotPassword.tsx  # Şifre sıfırlama
└── App.tsx                 # Uygulama router yapısı
```

---

## 🔐 Ortam Değişkenleri

| Değişken | Açıklama | Zorunlu |
|---|---|---|
| `VITE_CALENDLY_LINK` | Calendly randevu URL'si | ✅ |

---

## 📜 Lisans

Bu proje **MIT** lisansı altında yayınlanmıştır. Dilediğiniz gibi kullanabilirsiniz.

---

<p align="center">Chatpory ile müşteri hizmetlerinizi yapay zeka ile dönüştürün 🤖</p>
