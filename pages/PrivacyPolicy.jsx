import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="justify-center max-w-7xl mx-auto text-white px-4 pt-30 pb-10">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-lg text-center text-white mb-8">Effective Date: [Date]</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 mb-2">
          We collect the following types of information when you use our website and services:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, Email Address, Phone Number, Company Name, Billing Information, and any other personal data you provide us voluntarily.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with our website (IP address, browser type, pages visited, etc.).
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance user experience. For more information, refer to our Cookie Policy.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-2">
          We may use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and maintain our website and services.</li>
          <li>To communicate with you (updates, promotions, support).</li>
          <li>To process transactions and payments.</li>
          <li>To improve our website based on user feedback and analytics.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">3. How We Protect Your Information</h2>
        <p className="text-gray-700 mb-2">
          We take the security of your personal information seriously and have implemented appropriate security measures to protect your information from unauthorized access.
        </p>
        <p className="text-gray-700">
          However, no method of data transmission over the internet is 100% secure, and we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">4. Sharing Your Information</h2>
        <p className="text-gray-700 mb-2">
          We do not sell, trade, or share your personal information except in the following cases:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Service Providers:</strong> We may share your information with third-party providers who help us with services like hosting, payment processing, or analytics.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your personal information to comply with legal requirements, such as court orders or government regulations.
          </li>
          <li>
            <strong>Business Transfers:</strong> In case of a merger or acquisition, your personal information may be transferred as part of the deal.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights and Choices</h2>
        <p className="text-gray-700 mb-2">
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Access:</strong> Request access to the personal data we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> Correct any inaccurate or incomplete personal information.
          </li>
          <li>
            <strong>Deletion:</strong> Request the deletion of your personal information (subject to certain exceptions).
          </li>
          <li>
            <strong>Opt-out:</strong> Unsubscribe from marketing communications.
          </li>
          <li>
            <strong>Cookie Preferences:</strong> You can manage your cookie settings through your browser.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">6. Third-Party Links</h2>
        <p className="text-gray-700">
          Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. Please review their privacy policies before providing any personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">7. Children's Privacy</h2>
        <p className="text-gray-700">
          Our website is not directed at children under 13, and we do not knowingly collect personal data from children. If we become aware of such data collection, we will delete it immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the updated policy on this page and revising the "Effective Date."
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy or our practices, please contact us:
        </p>
        <p className="text-gray-700">Email: [Your Email Address]</p>
        <p className="text-gray-700">Phone: [Your Phone Number]</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">10. GDPR Compliance (if applicable)</h2>
        <p className="text-gray-700">
          If you are a resident of the European Economic Area (EEA), you have certain rights under the General Data Protection Regulation (GDPR). Please contact us if you would like to exercise your GDPR rights.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
