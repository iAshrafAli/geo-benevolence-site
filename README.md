# 🌍 Geo Benevolence Foundation Website

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fiashrafali.github.io%2Fgeo-benevolence-site%2F)](https://iashrafali.github.io/geo-benevolence-site/)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue)](https://iashrafali.github.io/geo-benevolence-site/)
[![Responsive Design](https://img.shields.io/badge/Design-Responsive-green)](https://github.com/iAshrafAli/geo-benevolence-site)
[![Razorpay Integration](https://img.shields.io/badge/Payments-Razorpay-orange)](https://razorpay.com)

A modern, responsive NGO website with integrated donation system, built with HTML5, CSS3, and JavaScript. Features professional blue+teal+grey design, mobile-first responsive approach, and secure Razorpay payment integration.

🔗 **Live Demo**: [https://iashrafali.github.io/geo-benevolence-site/](https://iashrafali.github.io/geo-benevolence-site/)

## ✨ Features

### 🎨 **Modern Design System**
- **Professional Color Palette**: Blue (#1e40af) + Teal (#0891b2) + Grey (#6b7280)
- **Gradient Text Effects**: Dynamic gradient typography
- **Glass Morphism**: Backdrop blur effects and translucent elements
- **Watermark Animation**: 600px rotating logo background effect
- **Smooth Animations**: CSS transitions and transforms

### 📱 **Fully Responsive Design**
- **Mobile-First Approach**: Optimized for all devices (320px to 1200px+)
- **6 Responsive Breakpoints**: From small phones to large desktops
- **Touch-Friendly Navigation**: Hamburger menu with smooth animations
- **Enhanced Mobile Menu**: Glass morphism with gradient styling
- **Optimized Touch Targets**: Minimum 44px for accessibility

### 💳 **Payment Integration**
- **Razorpay Integration**: Secure donation processing
- **Multiple Amount Options**: Pre-set and custom donation amounts
- **Payment Modal**: Professional checkout experience
- **Success/Error Handling**: Complete payment flow management

### ♿ **Accessibility & Performance**
- **WCAG 2.1 Compliant**: Proper color contrast and accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Semantic HTML and ARIA labels
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure & Semantics | Latest |
| **CSS3** | Styling & Animations | Latest |
| **JavaScript** | Interactivity | ES6+ |
| **Razorpay** | Payment Processing | Latest API |
| **Font Awesome** | Icons | 6.x |
| **GitHub Pages** | Static Hosting | Latest |

## 🚀 Quick Start

### 1. **Clone & Deploy**
```bash
git clone https://github.com/iAshrafAli/geo-benevolence-site.git
cd geo-benevolence-site

# Enable GitHub Pages (if forking)
# Go to Settings > Pages > Deploy from branch 'main'
```

### 2. **Razorpay Setup**
```javascript
// In assets/js/script.js, replace:
key: 'rzp_test_1234567890', // ← Replace with your Razorpay Key ID
```

**Get Razorpay Keys:**
1. Sign up at [razorpay.com](https://razorpay.com)
2. Dashboard → API Keys → Generate Key
3. Use `rzp_test_*` for testing, `rzp_live_*` for production

### 3. **Customization**
```html
<!-- Update in index.html -->
<title>Your NGO Name</title>
<h2>Your Organization Name</h2>
```

## 📁 Project Structure

```
geo-benevolence-site/
├── 📄 index.html                    # Main website file
├── 📁 assets/
│   ├── 🎨 css/
│   │   ├── style.css                # Main stylesheet (blue+teal+grey theme)
│   │   ├── style-modern-blue-backup.css  # Backup theme
│   │   └── style-vibrant-backup.css      # Alternative theme
│   ├── ⚡ js/
│   │   └── script.js                # JavaScript functionality
│   └── 🖼️ logo/
│       ├── logo-horizontal-light.svg    # Header logo
│       ├── logo-icon.svg               # Icon (favicon, hero)
│       ├── logo-typo-light.svg         # Typography only
│       └── logo-vertical-light.svg     # Vertical layout
├── 📋 CHANGES.md                    # Version history
└── 📖 README.md                     # This documentation
```

## 🎨 Design System

### **Color Palette**
```css
--primary-color: #1e40af;    /* Deep Blue */
--secondary-color: #0891b2;  /* Teal */
--accent-color: #6b7280;     /* Grey */
```

### **Key Components**
- **Watermark Logo**: 600px rotating background animation
- **Gradient Text**: Linear gradients from primary to secondary colors
- **Glass Morphism**: `backdrop-filter: blur(10px)` effects
- **Responsive Navbar**: Mobile hamburger with enhanced styling
- **Hero Section**: Clean layout with watermark integration

## 📱 Responsive Design

| Breakpoint | Width | Devices | Features |
|------------|-------|---------|----------|
| **XS** | ≤360px | Small phones | Compact layout |
| **SM** | ≤480px | Standard phones | Optimized typography |
| **MD** | ≤576px | Large phones | Enhanced spacing |
| **LG** | ≤768px | Tablets | Hamburger menu |
| **XL** | ≤991px | Small laptops | Grid adjustments |
| **XXL** | ≥992px | Desktops | Full layout |

### **Mobile Features**
- ✅ Glass morphism mobile menu
- ✅ Gradient hamburger icon
- ✅ Touch-optimized buttons
- ✅ Swipe-friendly navigation
- ✅ Responsive donation grid

## 💰 Donation Flow

1. **User clicks "Donate Now"** → Modal opens
2. **Select amount** → Pre-set or custom amounts
3. **Fill details** → Name, email, phone
4. **Razorpay checkout** → Secure payment processing
5. **Confirmation** → Success/failure handling

## 🔒 Security Best Practices

- ✅ **No secret keys in frontend**
- ✅ **HTTPS for all transactions**
- ✅ **Input validation and sanitization**
- ✅ **Razorpay security compliance**
- ✅ **Backend verification recommended**

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|---------|
| Chrome | 60+ | ✅ Fully Supported |
| Firefox | 55+ | ✅ Fully Supported |
| Safari | 12+ | ✅ Fully Supported |
| Edge | 79+ | ✅ Fully Supported |
| Mobile Safari | iOS 12+ | ✅ Optimized |
| Chrome Mobile | Android 7+ | ✅ Optimized |

## 🤝 Contributing

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** Pull Request

## 📄 License

This project is open source and available under the **MIT License**.

## 📞 Support & Contact

- 🌐 **Website**: [https://iashrafali.github.io/geo-benevolence-site/](https://iashrafali.github.io/geo-benevolence-site/)
- 📧 **Email**: info@geobenevolencefoundation.org
- 📱 **Phone**: +1 (555) 123-4567
- 💻 **GitHub Issues**: [Report bugs or request features](https://github.com/iAshrafAli/geo-benevolence-site/issues)

## 🙏 Acknowledgments

- **[Razorpay](https://razorpay.com)** - Payment processing
- **[Font Awesome](https://fontawesome.com)** - Icon library
- **[GitHub Pages](https://pages.github.com)** - Free hosting
- **Modern CSS** - Design inspiration

---

<div align="center">

**⭐ Star this repository if it helped you!**

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red)](https://github.com/iAshrafAli/geo-benevolence-site)
[![GitHub stars](https://img.shields.io/github/stars/iAshrafAli/geo-benevolence-site?style=social)](https://github.com/iAshrafAli/geo-benevolence-site/stargazers)

</div>

---

> **Note**: This is a template website. Replace all placeholder content, contact information, and branding with your organization's actual details before deploying to production.
