# Restaurant Website - Fine Dining Experience

A modern, responsive restaurant website built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases a complete restaurant landing page with all essential features including reservations, menu display, gallery, and contact information.

## 🚀 Live Demo

**Deployed Link:** [Live on Vercel](https://your-restaurant-domain.vercel.app)

**GitHub Repository:** [Repository Link](https://github.com/HarishKolupula168/Restaurant)

## ✨ Features

### Core Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Smooth Navigation**: Seamless scrolling between sections with sticky header
- **Interactive Hero Section**: Auto-rotating slideshow with call-to-action buttons
- **Dynamic Menu**: Categorized menu items with filtering capabilities
- **Image Gallery**: Lightbox functionality with category filters
- **Reservation Form**: Functional lead capture with validation
- **Contact Information**: Complete restaurant details and operating hours

### Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **API Routes** for form submissions
- **React Icons** for consistent iconography
- **Framer Motion** for smooth animations
- **SEO Optimized** with proper meta tags

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/restaurant-website.git
   cd restaurant-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
restaurant-website/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── reservation/
│   │   │       └── route.ts          # API endpoint for reservations
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                 # Root layout
│   │   └── page.tsx                  # Home page
│   └── components/
│       ├── About.tsx                  # About section
│       ├── Contact.tsx                # Contact & reservation form
│       ├── Footer.tsx                 # Footer component
│       ├── Gallery.tsx                # Image gallery
│       ├── Header.tsx                 # Navigation header
│       ├── Hero.tsx                   # Hero section
│       └── Menu.tsx                   # Menu display
├── public/                            # Static assets
├── tailwind.config.js                 # Tailwind configuration
├── next.config.js                     # Next.js configuration
├── tsconfig.json                      # TypeScript configuration
├── vercel.json                        # Vercel deployment config
└── README.md                          # This file
```

## 🎨 Design & Styling

### Color Scheme
- **Primary**: Red tones (#ef4444, #dc2626)
- **Secondary**: Dark slate (#1e293b, #334155)
- **Neutral**: Light grays and whites

### Typography
- **Serif**: Playfair Display (headings)
- **Sans-serif**: Inter (body text)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤖 AI Usage Documentation

### Where AI Helped
This project was developed with significant assistance from AI tools:

1. **Code Generation**: AI helped generate the initial component structure and boilerplate code
2. **Styling**: AI assisted in creating responsive Tailwind CSS classes and design patterns
3. **Content Generation**: AI provided placeholder content for menu items, descriptions, and sections
4. **API Structure**: AI helped design the reservation API endpoint with proper validation
5. **Component Architecture**: AI suggested the component breakdown and data flow patterns

### Manual Improvements Made
Despite AI assistance, several aspects were manually improved:

1. **Component Refinement**: Manually optimized component reusability and prop interfaces
2. **Animation Timing**: Adjusted animation durations and easing functions for better UX
3. **Form Validation**: Enhanced form validation logic and error handling
4. **Image Optimization**: Manually selected and optimized placeholder images
5. **Mobile Experience**: Fine-tuned mobile layouts and touch interactions
6. **Performance**: Implemented lazy loading and optimized bundle size

### AI Tools Used
- **ChatGPT**: Code generation and problem-solving
- **Claude**: Component architecture and TypeScript typing
- **GitHub Copilot**: Real-time code suggestions and completions

## 🚀 Deployment

### Automatic Deployment (Vercel)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### Environment Variables
Set these in your Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL`: Your deployed site URL

## 📈 Potential Improvements

### With More Time, I Would Add:

1. **Backend Integration**
   - Real database connection (PostgreSQL/MongoDB)
   - User authentication system
   - Admin panel for menu management

2. **Enhanced Features**
   - Online ordering system
   - Table reservation calendar
   - Customer reviews and ratings
   - Loyalty program integration

3. **Performance Optimizations**
   - Image optimization with CDN
   - Service worker for offline support
   - Advanced caching strategies

4. **Accessibility**
   - ARIA labels and screen reader support
   - Keyboard navigation improvements
   - High contrast mode support

5. **Analytics & Marketing**
   - Google Analytics integration
   - Social media sharing
   - Email marketing integration

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Ensure all dependencies are installed
   - Check TypeScript configuration
   - Verify Tailwind CSS setup

2. **Styling Issues**
   - Clear browser cache
   - Check Tailwind class names
   - Verify responsive breakpoints

3. **API Issues**
   - Check environment variables
   - Verify API route configuration
   - Test with proper request format

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For questions or support, please reach out:

Last updated: April 2026
- Email: info@restaurant.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ using Next.js and modern web technologies**
