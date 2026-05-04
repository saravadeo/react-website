import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-W2XRXD45SK";

let gaInitialized = false;

// Initialize GA (only call after consent)
export const initGA = () => {
  if (gaInitialized) return;
  ReactGA.initialize(GA_MEASUREMENT_ID);
  gaInitialized = true;
};

// Check if SecurePrivacy reports analytics consent already given
const checkExistingConsent = () => {
  try {
    // Use SecurePrivacy's API if available
    if (window.sp && typeof window.sp.checkConsent === "function") {
      return window.sp.checkConsent("analytics") || window.sp.checkConsent("google-analytics");
    }
    // Fallback: check localStorage/cookies for previously saved consent
    const allConsents = window.sp?.allGivenConsents;
    if (allConsents) return true;
    return false;
  } catch (e) {
    return false;
  }
};

// Set up SecurePrivacy consent listeners
const listenForConsent = () => {
  // Listen for cookie banner accept/reject
  window.addEventListener("sp_cookie_banner_click", (evt) => {
    const choice = evt.detail; // "accept" or "reject"
    if (choice === "accept" && !gaInitialized) {
      initGA();
      // Send initial pageview after consent
      trackPageView(window.location.pathname);
    }
  });

  // Listen for consent save (fires after banner click is persisted)
  window.addEventListener("sp_cookie_banner_save", (evt) => {
    const choice = evt.detail; // "accept" or "reject"
    if (choice === "accept" && !gaInitialized) {
      initGA();
      trackPageView(window.location.pathname);
    }
  });

  // Listen for privacy banner accept/reject
  window.addEventListener("sp_privacy_banner_click", (evt) => {
    const choice = evt.detail;
    if (choice === "accept" && !gaInitialized) {
      initGA();
      trackPageView(window.location.pathname);
    }
  });
};

// Main entry point — call on app startup
export const initGAWithConsent = () => {
  // Wait for SecurePrivacy to initialize
  window.addEventListener("sp_init", () => {
    // Check if user already gave consent (returning visitor)
    if (checkExistingConsent()) {
      initGA();
      trackPageView(window.location.pathname);
    }
    // Set up listeners for new consent decisions
    listenForConsent();
  });

  // Fallback: if SecurePrivacy doesn't load within 10 seconds,
  // check if sp object exists anyway, otherwise init GA directly
  // (handles cases where SP is blocked by ad blockers)
  setTimeout(() => {
    if (!gaInitialized) {
      const spLoaded = typeof window.sp !== "undefined";
      if (!spLoaded) {
        // No consent manager detected — initialize GA directly
        initGA();
        trackPageView(window.location.pathname);
      }
      // If SP loaded but user hasn't consented yet, keep waiting
      // (they'll be initialized via the event listener when they consent)
    }
  }, 10000);
};

export const trackPageView = (path) => {
  if (!gaInitialized) return;
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
  if (!gaInitialized) return;
  ReactGA.event({ category, action, label });
};