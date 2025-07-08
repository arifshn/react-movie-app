# 🎬 React Movie App

Bu proje, React kullanılarak geliştirilmiş interaktif bir film uygulamasıdır. Kullanıcılar filmleri keşfedebilir, favori listelerine film ekleyebilir, arama yapabilir ve **Firebase Authentication** ile kullanıcı hesabı oluşturup giriş yapabilir.

## 🚀 Özellikler

- 🎥 Popüler filmleri listeleme (TMDb API)
- 🔍 Film arama özelliği
- ❤️ Favori listesi oluşturma ve yönetme (giriş yaptıktan sonra)
- 📝 Giriş (Login) ve Kayıt (Register) sayfaları (Firebase Authentication ile)
- ✅ Form girişlerinde özel `useInput` hook'u ile kontrol
- ⚠️ `utils` klasörü altında form doğrulama (validation) sistemi
- 🔁 React Router DOM ile dinamik sayfa yönlendirme

## 🔐 Kimlik Doğrulama (Authentication)

Kullanıcılar Firebase Authentication kullanarak e-posta ve şifre ile kayıt olabilir ve giriş yapabilir. Oturum yönetimi Firebase üzerinden sağlanmaktadır.

## 🛠️ Kullanılan Teknolojiler

- React.js
- HTML5 & CSS3
- JavaScript (ES6+)
- React Router DOM
- Firebase Authentication
- TMDb API

## 💻 Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için:

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/arifshn/react-movie-app.git

   ```

2. Proje dizinine gidin:

   ```bash
   cd react-movie-app
   ```

3. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   # veya
   yarn install
   ```

4. Uygulamayı başlatın:
   ```bash
   npm start
   # veya
   yarn start
   ```
   Uygulama genellikle `http://localhost:3000` adresinde açılacaktır.
