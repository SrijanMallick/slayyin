// Newsletter Subscription Handler
// Add this to your website to handle newsletter subscriptions

// Configuration - Replace with your actual Google Apps Script URL
  const NEWSLETTER_CONFIG = {
    // Replace this URL with your deployed Google Apps Script web app URL
    scriptUrl: 'https://script.google.com/macros/s/AKfycbzp5G56yXAaecM1-db5i-OXtfzh3JSU4sZp5EqhCKfuIH4snYWD1o69D0TPsRxHRV1E/exec',
  
  // Success and error messages
  messages: {
    success: 'Thank you for subscribing to our newsletter!',
    alreadySubscribed: 'This email is already subscribed to our newsletter.',
    invalidEmail: 'Please enter a valid email address.',
    networkError: 'Network error. Please try again later.',
    genericError: 'Something went wrong. Please try again.'
  }
};

// Main subscription function
async function subscribeToNewsletter(email, sourceElement = null) {
  // Validate email
  if (!email || !isValidEmail(email)) {
    showNotification(NEWSLETTER_CONFIG.messages.invalidEmail, 'error');
    return false;
  }

  // Show loading state
  if (sourceElement) {
    setLoadingState(sourceElement, true);
  }

  try {
    const response = await fetch(NEWSLETTER_CONFIG.scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        timestamp: new Date().toISOString(),
        source: window.location.pathname
      })
    });

    const result = await response.json();

    if (result.result === 'success') {
      showNotification(NEWSLETTER_CONFIG.messages.success, 'success');
      
      // Clear the input field
      if (sourceElement) {
        const form = sourceElement.closest('form');
        if (form) {
          const emailInput = form.querySelector('input[type="email"]');
          if (emailInput) {
            emailInput.value = '';
          }
        }
      }
      
      // Track successful subscription (if you have analytics)
      trackSubscription(email);
      
      return true;
    } else {
      // Handle specific error messages
      let errorMessage = NEWSLETTER_CONFIG.messages.genericError;
      
      if (result.message && result.message.includes('already subscribed')) {
        errorMessage = NEWSLETTER_CONFIG.messages.alreadySubscribed;
      } else if (result.message && result.message.includes('Invalid email')) {
        errorMessage = NEWSLETTER_CONFIG.messages.invalidEmail;
      } else if (result.message) {
        errorMessage = result.message;
      }
      
      showNotification(errorMessage, 'error');
      return false;
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    showNotification(NEWSLETTER_CONFIG.messages.networkError, 'error');
    return false;
  } finally {
    // Remove loading state
    if (sourceElement) {
      setLoadingState(sourceElement, false);
    }
  }
}

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

// Set loading state for buttons
function setLoadingState(element, isLoading) {
  if (isLoading) {
    element.disabled = true;
    element.dataset.originalText = element.textContent;
    element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
    element.classList.add('loading');
  } else {
    element.disabled = false;
    element.textContent = element.dataset.originalText || 'Subscribe';
    element.classList.remove('loading');
  }
}

// Show notification to user
function showNotification(message, type = 'info') {
  // Remove any existing notifications
  const existingNotifications = document.querySelectorAll('.newsletter-notification');
  existingNotifications.forEach(notification => notification.remove());

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `newsletter-notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;

  // Add styles if not already present
  if (!document.querySelector('#newsletter-notification-styles')) {
    const styles = document.createElement('style');
    styles.id = 'newsletter-notification-styles';
    styles.textContent = `
      .newsletter-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .newsletter-notification.success {
        background: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
      }
      
      .newsletter-notification.error {
        background: #f8d7da;
        border: 1px solid #f5c6cb;
        color: #721c24;
      }
      
      .newsletter-notification.info {
        background: #d1ecf1;
        border: 1px solid #bee5eb;
        color: #0c5460;
      }
      
      .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .notification-content i:first-child {
        font-size: 18px;
        flex-shrink: 0;
      }
      
      .notification-content span {
        flex: 1;
        font-size: 14px;
        line-height: 1.4;
      }
      
      .notification-close {
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
        border-radius: 4px;
        opacity: 0.7;
        transition: opacity 0.2s;
      }
      
      .notification-close:hover {
        opacity: 1;
      }
      
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @media (max-width: 480px) {
        .newsletter-notification {
          top: 10px;
          right: 10px;
          left: 10px;
          max-width: none;
        }
      }
    `;
    document.head.appendChild(styles);
  }

  // Add to page
  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideInRight 0.3s ease-out reverse';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Track subscription for analytics (optional)
function trackSubscription(email) {
  // Add your analytics tracking here
  // Example for Google Analytics:
  if (typeof gtag !== 'undefined') {
    gtag('event', 'newsletter_subscription', {
      'event_category': 'engagement',
      'event_label': 'blog_newsletter'
    });
  }
  
  // Example for Facebook Pixel:
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Subscribe');
  }
  
  console.log('Newsletter subscription tracked for:', email);
}

// Form submission handler
function handleNewsletterForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const emailInput = form.querySelector('input[type="email"]');
  const submitButton = form.querySelector('button[type="submit"]');
  
  if (!emailInput) {
    console.error('Email input not found in form');
    return;
  }
  
  const email = emailInput.value.trim();
  subscribeToNewsletter(email, submitButton);
}

// Initialize newsletter functionality
function initializeNewsletter() {
  // Find all newsletter forms and add event listeners
  const newsletterForms = document.querySelectorAll('.newsletter-form, form[data-newsletter="true"]');
  
  newsletterForms.forEach(form => {
    form.addEventListener('submit', handleNewsletterForm);
  });
  
  // Handle direct button clicks (for buttons not in forms)
  const subscribeButtons = document.querySelectorAll('[data-newsletter-button="true"]');
  
  subscribeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      
      // Look for email input near the button
      const emailInput = button.parentElement.querySelector('input[type="email"]') ||
                        document.querySelector('input[type="email"]');
      
      if (emailInput) {
        const email = emailInput.value.trim();
        subscribeToNewsletter(email, button);
      } else {
        // Prompt for email if no input found
        const email = prompt('Enter your email address:');
        if (email) {
          subscribeToNewsletter(email, button);
        }
      }
    });
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeNewsletter);
} else {
  initializeNewsletter();
}

// Export functions for global use
window.subscribeToNewsletter = subscribeToNewsletter;
window.handleNewsletterForm = handleNewsletterForm; 