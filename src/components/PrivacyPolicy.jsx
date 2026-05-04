import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { trackPageView } from '../analytics';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    trackPageView('/privacy-policy');
  }, []);

  return (
    <div className="pp-page">
      <Helmet>
        <title>Privacy Policy — Onkar Sarvade</title>
        <meta
          name="description"
          content="Privacy Policy for Onkar Sarvade's portfolio website. Learn how your personal data is collected, processed, and protected under GDPR."
        />
        <meta property="og:title" content="Privacy Policy — Onkar Sarvade" />
        <meta
          property="og:description"
          content="Privacy Policy for Onkar Sarvade's portfolio website. Learn how your personal data is collected, processed, and protected under GDPR."
        />
        <link rel="canonical" href="https://saravadeo.github.io/react-website/privacy-policy" />
      </Helmet>

      <div className="pp-page__bg">
        <div className="pp-page__grid" />
        <div className="pp-page__glow" />
      </div>

      <div className="pp-container">
        <nav className="pp-breadcrumb">
          <Link to="/" className="pp-breadcrumb__link">← Portfolio</Link>
        </nav>

        <article className="pp-article">
          <header className="pp-header">
            <h1 className="pp-header__title">Privacy Policy</h1>
            <p className="pp-header__date">Effective date: May 4, 2026</p>
          </header>

          <div className="pp-content">
            <section className="pp-section">
              <h2 className="pp-section__title">1. Introduction</h2>
              <p className="pp-section__text">
                This Privacy Policy describes how Onkar Sarvade ("I", "me", "we", or "the Data Controller")
                collects, uses, and protects your personal data when you visit this portfolio website
                ("the Site"). This policy applies to all visitors and users of the Site.
              </p>
              <p className="pp-section__text">
                I am committed to ensuring that your privacy is protected in accordance with the
                General Data Protection Regulation (GDPR) (EU Regulation 2016/679) and the UK GDPR.
              </p>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">2. Data Controller</h2>
              <p className="pp-section__text">
                The Data Controller responsible for your personal data is:
              </p>
              <div className="pp-info-block">
                <p className="pp-info-block__line"><strong>Onkar Sarvade</strong></p>
                <p className="pp-info-block__line">Staff Software Engineer</p>
                <p className="pp-info-block__line">
                  Email: <a href="mailto:onkar@saravadeo.com" className="pp-link">onkar@saravadeo.com</a>
                </p>
              </div>
              <p className="pp-section__text">
                If you have any questions about this Privacy Policy or how your data is handled,
                please contact me at the email address above.
              </p>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">3. What Personal Data We Collect</h2>
              <p className="pp-section__text">
                I collect the following categories of personal data:
              </p>
              <ul className="pp-list">
                <li className="pp-list__item">
                  <strong>Analytics data</strong> — Collected via Google Analytics (GA4). This may include
                  IP address (anonymised), browser type and version, operating system, referrer URL,
                  pages visited, time spent on pages, and device information. This data is aggregated
                  and does not identify you personally.
                </li>
                <li className="pp-list__item">
                  <strong>Contact form submissions</strong> — If you contact me through the Site, I may
                  collect your name, email address, and the content of your message. This data is
                  provided voluntarily by you.
                </li>
                <li className="pp-list__item">
                  <strong>Cookie consent preferences</strong> — I store a record of your consent choice
                  (accept or reject cookies) to comply with GDPR requirements and honour your preferences
                  on subsequent visits.
                </li>
              </ul>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">4. Purpose and Legal Basis for Processing</h2>
              <p className="pp-section__text">
                I process your personal data for the following purposes, each with its legal basis under GDPR:
              </p>
              <div className="pp-table-wrap">
                <table className="pp-table">
                  <thead>
                    <tr>
                      <th className="pp-table__th">Purpose</th>
                      <th className="pp-table__th">Data Collected</th>
                      <th className="pp-table__th">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pp-table__td">Website analytics and improvement</td>
                      <td className="pp-table__td">Anonymised usage data via GA4</td>
                      <td className="pp-table__td">Consent (Art. 6(1)(a) GDPR) and Legitimate Interest (Art. 6(1)(f) GDPR)</td>
                    </tr>
                    <tr>
                      <td className="pp-table__td">Responding to contact enquiries</td>
                      <td className="pp-table__td">Name, email, message content</td>
                      <td className="pp-table__td">Consent (Art. 6(1)(a) GDPR) and Legitimate Interest (Art. 6(1)(f) GDPR)</td>
                    </tr>
                    <tr>
                      <td className="pp-table__td">Honouring cookie consent</td>
                      <td className="pp-table__td">Consent preference record</td>
                      <td className="pp-table__td">Legitimate Interest (Art. 6(1)(f) GDPR) — compliance with legal obligations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">5. Third-Party Services</h2>
              <p className="pp-section__text">
                I use the following third-party services that may process your personal data:
              </p>
              <ul className="pp-list">
                <li className="pp-list__item">
                  <strong>Google Analytics (GA4)</strong> — Web analytics service provided by Google LLC.
                  Google collects and processes data using cookies to analyse site usage. Google may use
                  this data for its own purposes. Google is a data processor under GDPR. Google's privacy
                  policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="pp-link">https://policies.google.com/privacy</a>.
                  IP addresses are anonymised before being sent to Google servers.
                </li>
                <li className="pp-list__item">
                  <strong>SecurePrivacy</strong> — Consent management platform that provides the cookie
                  banner and manages your consent preferences. SecurePrivacy stores your consent choice
                  and ensures that analytics scripts are only loaded after you give consent. SecurePrivacy's
                  privacy policy: <a href="https://secureprivacy.ai/privacy-policy" target="_blank" rel="noopener noreferrer" className="pp-link">https://secureprivacy.ai/privacy-policy</a>.
                </li>
              </ul>
              <p className="pp-section__text">
                I do not sell, rent, or share your personal data with any other third parties.
              </p>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">6. Data Retention</h2>
              <p className="pp-section__text">
                Personal data is retained only for as long as necessary:
              </p>
              <ul className="pp-list">
                <li className="pp-list__item">
                  <strong>Google Analytics data</strong> — Retained for 26 months by default, after which
                  it is automatically deleted by Google. You can read more about Google's data retention
                  in their documentation.
                </li>
                <li className="pp-list__item">
                  <strong>Contact form submissions</strong> — Retained for up to 12 months after the last
                  communication, then permanently deleted. You may request earlier deletion at any time.
                </li>
                <li className="pp-list__item">
                  <strong>Cookie consent records</strong> — Retained for the duration of the consent period
                  (typically 12 months) or until you withdraw consent, whichever comes first.
                </li>
              </ul>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">7. Your Rights Under GDPR</h2>
              <p className="pp-section__text">
                Under the General Data Protection Regulation, you have the following rights regarding
                your personal data:
              </p>
              <ul className="pp-list">
                <li className="pp-list__item">
                  <strong>Right of Access (Art. 15)</strong> — You have the right to request a copy of the
                  personal data I hold about you and to obtain information about how it is processed.
                </li>
                <li className="pp-list__item">
                  <strong>Right to Rectification (Art. 16)</strong> — You have the right to request the
                  correction of any inaccurate or incomplete personal data I hold about you.
                </li>
                <li className="pp-list__item">
                  <strong>Right to Erasure (Art. 17)</strong> — Also known as the "right to be forgotten."
                  You have the right to request the deletion of your personal data, subject to certain
                  legal exceptions.
                </li>
                <li className="pp-list__item">
                  <strong>Right to Restriction of Processing (Art. 18)</strong> — You have the right to
                  request that I restrict the processing of your personal data under certain circumstances,
                  such as when you contest the accuracy of the data.
                </li>
                <li className="pp-list__item">
                  <strong>Right to Data Portability (Art. 20)</strong> — You have the right to request
                  your personal data in a structured, commonly used, and machine-readable format, and
                  to have that data transmitted to another controller.
                </li>
                <li className="pp-list__item">
                  <strong>Right to Object (Art. 21)</strong> — You have the right to object to the
                  processing of your personal data based on legitimate interest. If you object, I will
                  cease processing unless I can demonstrate compelling legitimate grounds.
                </li>
              </ul>
              <p className="pp-section__text">
                To exercise any of these rights, please contact me at{' '}
                <a href="mailto:onkar@saravadeo.com" className="pp-link">onkar@saravadeo.com</a>.
                I will respond to your request within 30 days, as required by GDPR.
              </p>
              <p className="pp-section__text">
                If you are not satisfied with how I handle your request, you have the right to lodge a
                complaint with a supervisory authority in your jurisdiction.
              </p>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">8. Cookie Policy</h2>
              <p className="pp-section__text">
                This Site uses cookies. Below is a summary of the cookies used:
              </p>
              <div className="pp-table-wrap">
                <table className="pp-table">
                  <thead>
                    <tr>
                      <th className="pp-table__th">Cookie Category</th>
                      <th className="pp-table__th">Purpose</th>
                      <th className="pp-table__th">Requires Consent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pp-table__td">Strictly Necessary</td>
                      <td className="pp-table__td">Store your cookie consent preference; essential for Site functionality</td>
                      <td className="pp-table__td">No</td>
                    </tr>
                    <tr>
                      <td className="pp-table__td">Analytics (Google Analytics _ga, _ga_*)</td>
                      <td className="pp-table__td">Measure site usage, visitor numbers, and page performance</td>
                      <td className="pp-table__td">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="pp-section__text">
                When you first visit the Site, a cookie consent banner is displayed by SecurePrivacy. You
                may accept all cookies, reject non-essential cookies, or customise your preferences. Your
                choice is stored and honoured on subsequent visits.
              </p>
              <p className="pp-section__text">
                You can change your cookie preferences at any time by clearing your browser cookies, which
                will cause the consent banner to reappear on your next visit. Most browsers also allow you
                to manage or delete cookies through their settings.
              </p>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">9. Data Security</h2>
              <p className="pp-section__text">
                I take appropriate technical and organisational measures to protect your personal data
                against unauthorised access, alteration, disclosure, or destruction. The Site is served
                over HTTPS to encrypt data in transit. Google Analytics data is transmitted over secure
                connections, and IP addresses are anonymised before processing.
              </p>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">10. International Data Transfers</h2>
              <p className="pp-section__text">
                Google Analytics processes data on servers located outside the European Economic Area
                (EEA). Google relies on Standard Contractual Clauses (SCCs) approved by the European
                Commission to ensure adequate protection for data transferred outside the EEA. For more
                information, see Google's data processing terms.
              </p>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">11. Changes to This Policy</h2>
              <p className="pp-section__text">
                I may update this Privacy Policy from time to time to reflect changes in my practices,
                technology, or legal requirements. Any changes will be posted on this page with an updated
                effective date. I encourage you to review this policy periodically to stay informed about
                how your data is handled.
              </p>
              <p className="pp-section__text">
                If I make material changes to this policy, I will provide a more prominent notice on the
                Site.
              </p>
            </section>

            <section className="pp-section">
              <h2 className="pp-section__title">12. Contact</h2>
              <p className="pp-section__text">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your
                personal data, please contact me:
              </p>
              <div className="pp-info-block">
                <p className="pp-info-block__line"><strong>Onkar Sarvade</strong></p>
                <p className="pp-info-block__line">
                  Email: <a href="mailto:onkar@saravadeo.com" className="pp-link">onkar@saravadeo.com</a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;