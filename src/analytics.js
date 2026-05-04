import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-W2XRXD45SK";

let gaInitialized = false;

// Check if consent was previously granted (persisted by SecurePrivacy)
const checkStoredConsent = () => {
  try {
    // SecurePrivacy typically stores consent in localStorage or cookies
    // Check common storage keys used by SecurePrivacy
    const spConsent = localStorage.getItem("sp_consent");
    const cookieConsent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieconsent_status="));
    return (
      spConsent === "accepted" ||
      spConsent === "true" ||
      (cookieConsent && cookieConsent.split("=")[1] === "dismiss")
    );
  } catch (e) {
    return false;
  }
};

// Listen for SecurePrivacy consent events
const listenForConsent = () => {
  // SecurePrivacy dispatches custom events when consent changes
  const consentHandler = (event) => {
    const detail = event.detail || {};
    const type = event.type;

    // SecurePrivacy fires various consent events
    if (
      type === "sp_consent_updated" ||
      type === "cookieConsent" ||
      type === "securePrivacyConsentAnalytics"
    ) {
      // If analytics consent was granted (or any consent that includes analytics)
      const analyticsAllowed =
        detail.analytics === true ||
        detail.marketing === true ||
        detail.type === "accept" ||
        detail.type === "all";

      if (analyticsAllowed && !gaInitialized) {
        initGA();
      }
    }
  };

  // Listen for multiple possible event names from SecurePrivacy
  window.addEventListener("sp_consent_updated", consentHandler);
  window.addEventListener("cookieConsent", consentHandler);
  window.addEventListener("securePrivacyConsentAnalytics", consentHandler);

  // Also listen for the CMP (consent management platform) events
  window.addEventListener("consent.update", consentHandler);
  window.addEventListener("OneTrustLoaded", consentHandler);

  // Fallback: listen for SecurePrivacy callback if available
  if (window.securePrivacy && window.securePrivacy.onConsent) {
    window.securePrivacy.onConsent((consent) => {
      if (consent && consent.analytics && !gaInitialized) {
        initGA();
      }
    });
  }
};

export const initGA = () => {
  if (gaInitialized) return;

  ReactGA.initialize(GA_MEASUREMENT_ID);
  gaInitialized = true;
};

export const initGAWithConsent = () => {
  // Check if consent was already granted previously
  if (checkStoredConsent()) {
    initGA();
  }

  // Set up listeners for future consent changes
  listenForConsent();

  // Fallback: if no consent manager is detected after 3 seconds,
  // initialize GA anyway (handles cases where SecurePrivacy doesn't load
  // or is blocked by ad blockers)
  setTimeout(() => {
    if (!gaInitialized) {
      // Check if SecurePrivacy script loaded at all
      const spLoaded =
        document.querySelector('script[src*="secureprivacy"]') !== null;
      if (!spLoaded) {
        // No consent manager detected — safe to init GA
        initGA();
      }
      // If SP loaded but user hasn't interacted yet, wait longer
      // They'll get initialized via the event listener when they consent
    }
  }, 5000);
};

export const trackPageView = (path) => {
  if (!gaInitialized) return;
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
  if (!gaInitialized) return;
  ReactGA.event({ category, action, label });
};