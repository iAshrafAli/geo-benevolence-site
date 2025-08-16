# Geo Benevolence Foundation NGO Website

A modern, responsive website for a non-governmental organization (NGO) with integrated Razorpay donation functionality, designed for GitHub Pages hosting.

## Features

- **Fully Responsive Design**: Optimized for all device sizes with comprehensive breakpoints
  - Mobile-first approach with 6 responsive breakpoints (320px to 1200px+)
  - Touch-friendly navigation with hamburger menu
  - Swipe gestures for mobile menu interaction
  - Optimized touch targets (minimum 44px)
- **Donation Integration**: Secure payment processing through Razorpay
- **Accessibility Features**:
  - Keyboard navigation support
  - Screen reader friendly
  - Focus management and skip links
  - WCAG 2.1 compliant color contrast
- **Interactive Elements**:
  - Smooth scrolling and CSS animations
  - Modal dialogs with backdrop blur
  - Form validation with visual feedback
  - Loading states for better UX
- **Performance Optimized**:
  - CSS optimizations for mobile devices
  - Efficient animations with `will-change`
  - Compressed and optimized code
- **GitHub Pages Ready**: Static website optimized for GitHub Pages hosting

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Payment Gateway**: Razorpay
- **Icons**: Font Awesome
- **Hosting**: GitHub Pages

## Setup Instructions

### 1. Razorpay Configuration

Before deploying, you need to configure Razorpay:

1. Sign up for a Razorpay account at [https://razorpay.com](https://razorpay.com)
2. Get your API keys from the Razorpay dashboard
3. Replace the test key in `assets/js/script.js`:

```javascript
key: 'rzp_test_1234567890', // Replace with your actual Razorpay Key ID
```

**Important**:

- For testing, use Razorpay test keys (they start with `rzp_test_`)
- For production, use live keys (they start with `rzp_live_`)
- Never commit live keys to public repositories

### 2. Customization

#### Organization Details

Update the following in `index.html`:

- Organization name (currently "Geo Benevolence Foundation")
- Logo files (now with vibrant color theme integration):
  - Navigation: `logo-horizontal-light.svg` (vibrant indigo #6366f1)
  - Hero section: `logo-icon.svg` (vibrant colors with animated gradient shadows)
  - Footer: `logo-horizontal-light.svg` (lighter vibrant variant for contrast)
  - Favicon: `logo-icon.svg`
  - Payment gateway: `logo-icon.svg`
- Contact information (address, phone, email)
- Social media links
- Mission statement and descriptions

#### Styling

Modify `assets/css/style.css` to match your brand:

- Color scheme (primary colors: `#2c5aa0`, `#e74c3c`)
- Fonts and typography
- Logo sizing and positioning
- Branding elements

#### Content

Update sections with your organization's information:

- Programs and services
- Impact statistics
- Team information
- Success stories

### 3. GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select source: "Deploy from a branch"
5. Choose branch: "main" (or "master")
6. Select folder: "/ (root)"
7. Save and wait for deployment

Your website will be available at: `https://yourusername.github.io/repository-name`

## File Structure

```
NGO Website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── logo/
│       ├── logo-horizontal-light.svg  # Horizontal logo (navigation, footer)
│       ├── logo-vertical-light.svg    # Vertical logo (available for layouts)
│       ├── logo-icon.svg              # Icon only (hero, favicon, payments)
│       └── logo-typo-light.svg        # Typography only
├── .github/
│   └── copilot-instructions.md
├── CHANGES.md              # Change log
└── README.md               # This file
```

## Donation Flow

1. User clicks "Donate Now" button
2. Modal opens with donation amount options
3. User fills in personal information
4. Razorpay checkout opens for secure payment
5. Payment success/failure is handled appropriately
6. User receives confirmation message

## Security Considerations

- Never expose secret keys in frontend code
- Use HTTPS for all payment transactions
- Implement proper backend verification for payments
- Validate all user inputs
- Follow Razorpay's security guidelines

## Responsive Breakpoints

The website is optimized for the following device sizes:

- **Extra Small (≤360px)**: Very small mobile phones
- **Small Mobile (≤480px)**: Small mobile phones
- **Mobile Medium (≤576px)**: Standard mobile phones
- **Mobile Large (≤768px)**: Large phones and small tablets
- **Tablet (769px-991px)**: Tablets and small laptops
- **Desktop (992px-1199px)**: Standard desktop screens
- **Large Desktop (≥1200px)**: Large desktop screens and monitors

### Mobile Features:

- Hamburger navigation with smooth animations
- Touch-optimized buttons and form elements
- Swipe gestures for menu navigation
- Optimized typography and spacing
- Full-screen modal experience
- Responsive donation amounts grid

## Browser Support

- Chrome 60+ ✅
- Firefox 55+ ✅
- Safari 12+ ✅
- Edge 79+ ✅
- Mobile Safari (iOS 12+) ✅
- Chrome Mobile (Android 7+) ✅

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions:

- Email: info@geobenevolencefoundation.org
- Phone: +1 (555) 123-4567

## Acknowledgments

- Font Awesome for icons
- Razorpay for payment processing
- GitHub Pages for hosting

---

**Note**: This is a template website. Replace all placeholder content, contact information, and branding with your organization's actual details before deploying to production.
