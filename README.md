# Medical Centre Website

A modern, responsive medical services website built with React, TypeScript, and Tailwind CSS. Features a clean, professional design with smooth animations and mobile-first responsive layout.

## ✨ Features

- 🎨 Modern, responsive UI design
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🎯 Type-safe with TypeScript
- 🧩 Component-based architecture with shadcn-ui
- 🚀 SEO optimized
- 🌙 Theme support ready

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sister-ceby-main.git
cd sister-ceby-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080` (or the port shown in your terminal).

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## 🛠️ Technologies Used

- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[shadcn-ui](https://ui.shadcn.com/)** - UI component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Lucide React](https://lucide.dev/)** - Icon library

## 📁 Project Structure

```
├── public/              # Static assets
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # React components
│   │   ├── ui/         # shadcn-ui components
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind configuration
└── package.json        # Dependencies
```

## 🚢 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

The project includes a `vercel.json` configuration file for optimal routing.

### Netlify

1. Connect your GitHub repository to [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

1. Build the project: `npm run build`
2. Follow [GitHub Pages deployment guide](https://pages.github.com/)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please open an issue in the repository.
