// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Toggle hamburger animation
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');

        // Reset hamburger animation
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');

        // Reset hamburger animation
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');

        // Reset hamburger animation
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Donation Modal Functions
let selectedAmount = 0;

function openDonationModal() {
    const modal = document.getElementById('donationModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Focus management for accessibility
    const firstInput = modal.querySelector('input, button');
    if (firstInput) firstInput.focus();

    // Add modal animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeDonationModal() {
    const modal = document.getElementById('donationModal');

    // Add closing animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        resetDonationForm();
    }, 300);
}

function selectAmount(amount) {
    selectedAmount = amount;

    // Remove selected class from all buttons
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add selected class to clicked button
    event.target.classList.add('selected');

    // Clear custom amount input
    document.getElementById('customAmount').value = '';

    // Add haptic feedback on mobile
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Handle custom amount input with better mobile support
document.getElementById('customAmount').addEventListener('input', function() {
    selectedAmount = parseInt(this.value) || 0;

    // Remove selected class from preset amounts
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Format number input for better UX
    if (this.value && !isNaN(this.value)) {
        this.style.borderColor = '#27ae60';
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});

// Add touch support for amount buttons
document.querySelectorAll('.amount-btn').forEach(btn => {
    btn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
    });

    btn.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
    });
});

function resetDonationForm() {
    selectedAmount = 0;
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.getElementById('customAmount').value = '';
    document.getElementById('donorName').value = '';
    document.getElementById('donorEmail').value = '';
    document.getElementById('donorPhone').value = '';
}

// Razorpay Integration
function processDonation() {
    // Get form data
    const donorName = document.getElementById('donorName').value.trim();
    const donorEmail = document.getElementById('donorEmail').value.trim();
    const donorPhone = document.getElementById('donorPhone').value.trim();
    const customAmount = document.getElementById('customAmount').value;

    // Use custom amount if entered, otherwise use selected amount
    const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

    // Validation
    if (!donorName || !donorEmail || !donorPhone) {
        alert('Please fill in all required fields.');
        return;
    }

    if (!finalAmount || finalAmount < 1) {
        alert('Please select or enter a valid donation amount.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donorEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(donorPhone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Razorpay options
    const options = {
        key: 'rzp_test_1234567890', // Replace with your Razorpay Key ID
        amount: finalAmount * 100, // Amount in paise (multiply by 100)
        currency: 'INR',
        name: 'Geo Benevolence Foundation',
        description: 'Donation to Geo Benevolence Foundation',
        image: window.location.origin + '/assets/logo/logo-icon.svg', // Use icon logo for payment
        order_id: '', // You would get this from your backend
        handler: function (response) {
            // Payment successful
            handlePaymentSuccess(response, {
                amount: finalAmount,
                donorName: donorName,
                donorEmail: donorEmail,
                donorPhone: donorPhone
            });
        },
        prefill: {
            name: donorName,
            email: donorEmail,
            contact: donorPhone
        },
        notes: {
            purpose: 'NGO Donation',
            donor_name: donorName
        },
        theme: {
            color: '#2c5aa0'
        },
        modal: {
            ondismiss: function() {
                console.log('Payment modal dismissed');
            }
        }
    };

    // Open Razorpay checkout
    const rzp = new Razorpay(options);

    rzp.on('payment.failed', function (response) {
        handlePaymentFailure(response);
    });

    rzp.open();
}

function handlePaymentSuccess(response, donationData) {
    console.log('Payment successful:', response);

    // Close the donation modal
    closeDonationModal();

    // Show success message
    showNotification('Thank you for your donation! Your payment was successful.', 'success');

    // Here you would typically send the payment details to your backend
    // to verify the payment and store donation information
    sendDonationDataToBackend({
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
        ...donationData
    });
}

function handlePaymentFailure(response) {
    console.log('Payment failed:', response);
    showNotification('Payment failed. Please try again.', 'error');
}

function sendDonationDataToBackend(data) {
    // This is where you would send the data to your backend server
    // for payment verification and storing donation records
    console.log('Donation data to send to backend:', data);

    // Example implementation (replace with your actual backend endpoint)
    /*
    fetch('/api/verify-donation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Backend response:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    */
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 3000;
        max-width: 400px;
        word-wrap: break-word;
    `;

    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
    `;

    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        // Here you would typically send the form data to your backend
        console.log('Contact form submitted:', { name, email, message });
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        this.reset();
    } else {
        showNotification('Please fill in all fields.', 'error');
    }
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('donationModal');
    if (event.target === modal) {
        closeDonationModal();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Animation on scroll (basic implementation)
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const animationElements = document.querySelectorAll('.program-card, .impact-item, .stat');

    animationElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize responsive features on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add viewport meta tag if missing
    if (!document.querySelector('meta[name="viewport"]')) {
        const viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1.0';
        document.head.appendChild(viewport);
    }

    // Logo background removal and theme integration
    setupLogoTheming();

    // Initialize animation elements
    const animationElements = document.querySelectorAll('.program-card, .impact-item, .stat');

    animationElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Initial check for animations
    handleScrollAnimations();

    // Add keyboard navigation for mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu with Escape key
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.focus();

                // Reset hamburger animation
                const bars = hamburger.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }

            // Close donation modal with Escape key
            const modal = document.getElementById('donationModal');
            if (modal.style.display === 'block') {
                closeDonationModal();
            }
        }
    });

    // Add swipe gesture support for mobile menu
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    });

    function handleSwipeGesture() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        // Swipe right to open menu (only when closed)
        if (swipeDistance > swipeThreshold && !navMenu.classList.contains('active') && touchStartX < 50) {
            navMenu.classList.add('active');
            hamburger.classList.add('active');
        }

        // Swipe left to close menu (only when open)
        if (swipeDistance < -swipeThreshold && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');

            // Reset hamburger animation
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    }

    // Improve form validation with better mobile support
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            // Add real-time validation feedback
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#e74c3c';
                } else if (this.type === 'email' && this.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    this.style.borderColor = emailRegex.test(this.value) ? '#27ae60' : '#e74c3c';
                } else if (this.value) {
                    this.style.borderColor = '#27ae60';
                } else {
                    this.style.borderColor = '#e0e0e0';
                }
            });

            // Reset border color on focus
            input.addEventListener('focus', function() {
                this.style.borderColor = '#2c5aa0';
            });
        });
    });

    // Add loading states for better UX
    const buttons = document.querySelectorAll('button[type="submit"], .donate-now-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.disabled) {
                const originalText = this.textContent;
                this.textContent = 'Processing...';
                this.disabled = true;

                // Re-enable after a short delay (in real app, this would be when the request completes)
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
});

// Logo theming and background removal
function setupLogoTheming() {
    const logos = document.querySelectorAll('.logo-img, .hero-logo, .footer-logo-img');

    logos.forEach(logo => {
        // Ensure transparent backgrounds
        logo.style.background = 'transparent';

        // Add error handling for logo loading
        logo.addEventListener('error', function() {
            console.warn('Logo failed to load:', this.src);
            this.style.display = 'none';
        });

        // Add loading completion handler
        logo.addEventListener('load', function() {
            // Apply theme-based styling after load
            applyLogoTheme(this);
        });

        // If already loaded, apply theming
        if (logo.complete) {
            applyLogoTheme(logo);
        }
    });
}

function applyLogoTheme(logoElement) {
    // Get the parent container to determine context
    const isNavLogo = logoElement.classList.contains('logo-img');
    const isHeroLogo = logoElement.classList.contains('hero-logo');
    const isFooterLogo = logoElement.classList.contains('footer-logo-img');

    // Since these are light logos, they should work well on the current backgrounds
    // Navigation: light logo on white background - may need slight darkening
    // Hero: light logo on gradient background - should be visible
    // Footer: light logo on dark background - should be visible

    if (isNavLogo) {
        // Navigation logo - might need slight adjustment for contrast on white background
        logoElement.style.filter = 'brightness(0.8) contrast(1.2)';
    } else if (isHeroLogo) {
        // Hero logo - light logo should work well on gradient
        logoElement.style.filter = 'brightness(1) contrast(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.3))';
    } else if (isFooterLogo) {
        // Footer logo - light logo should work well on dark background
        logoElement.style.filter = 'brightness(1) contrast(1.1)';
    }

    // Remove any backgrounds and ensure transparency
    logoElement.style.background = 'transparent';
}

window.addEventListener('scroll', handleScrollAnimations);
