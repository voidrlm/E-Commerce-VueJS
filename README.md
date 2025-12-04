# 🛍️ E-Commerce VueJS

A modern, responsive e-commerce web application built with Vue.js and Vuetify, featuring a beautiful UI, product browsing, shopping cart, and user authentication.

![Vue.js](https://img.shields.io/badge/Vue.js-2.6.14-brightgreen)
![Vuetify](https://img.shields.io/badge/Vuetify-2.6.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- 🎨 **Modern UI Design** - Clean, responsive interface with Vuetify Material Design components
- 🔐 **Dummy Authentication** - Demo login system (username: `demo`, password: `demopass`)
- 🛒 **Shopping Cart** - Add products, manage quantities, and view order summary
- 🔍 **Advanced Filtering** - Filter products by brand, price, rating, movement, and gender
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🌓 **Dark Mode Support** - Toggle between light and dark themes
- 🎨 **Customizable Themes** - Multiple color schemes to choose from
- ⚡ **Fast & Lightweight** - Optimized for performance

## 🚀 Live Demo

**[View Live Demo →](https://voidrlm.github.io/E-Commerce-VueJS/#/)**

**Demo Credentials:**

- Username: `demo`
- Password: `demopass`

## 📸 Screenshots

View screenshots: [https://imgur.com/O4c5gAs](https://imgur.com/O4c5gAs)

## 🛠️ Built With

- **[Vue.js 2.6](https://vuejs.org/)** - Progressive JavaScript framework
- **[Vuetify 2.6](https://vuetifyjs.com/)** - Material Design component framework
- **[Vue Router](https://router.vuejs.org/)** - Official router for Vue.js
- **[Vuex](https://vuex.vuejs.org/)** - State management library
- **[Vue Cookies](https://www.npmjs.com/package/vue-cookies)** - Cookie plugin

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v12 or higher)
- **npm** (Node Package Manager)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/voidrlm/E-Commerce-VueJS.git
   cd E-Commerce-VueJS
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run serve
   ```

4. **Open your browser**

   Navigate to [http://localhost:8080](http://localhost:8080)

## 📦 Building for Production

Build the project for production:

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🚢 Deployment to GitHub Pages

Deploy your application to GitHub Pages using the provided PowerShell script:

```powershell
./deploy-gh-pages.ps1
```

This script will:

1. Build the project
2. Initialize a new git repository in the `dist` folder
3. Push the build to the `gh-pages` branch
4. Your site will be available at `https://<your-username>.github.io/<your-repo>/`

## 📁 Project Structure

```
E-Commerce-VueJS/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and static files
│   ├── components/     # Reusable Vue components
│   │   ├── navigation/
│   │   ├── shoppingCart/
│   │   └── userManagement/
│   ├── plugins/        # Vuetify configuration
│   ├── resources/      # Product database
│   ├── router/         # Vue Router configuration
│   ├── services/       # Utility services
│   ├── store/          # Vuex store
│   ├── views/          # Page components
│   ├── App.vue         # Root component
│   └── main.js         # Application entry point
├── package.json
├── vue.config.js
└── README.md
```

## 🎨 Available Scripts

- `npm run serve` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Lint and fix files

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**voidrlm**

- GitHub: [@voidrlm](https://github.com/voidrlm)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ using Vue.js and Vuetify
