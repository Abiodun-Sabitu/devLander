// Google Analytics 4 Setup
export const initializeGA = () => {
  const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || 'G-W2XD4F064R';
  
  // Create and load the gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  
  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  
  gtag('js', new Date());
  gtag('config', GA_ID, {
    page_title: document.title,
    page_location: window.location.href
  });
  
  // Make gtag available globally
  window.gtag = gtag;
  
 // console.log('Google Analytics initialized with ID:', GA_ID);
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
};

// Track page views (for SPA navigation)
export const trackPageView = (page_path) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID || 'G-W2XD4F064R', {
      page_path,
    });
  }
};
