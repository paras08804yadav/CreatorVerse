import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last updated: January 2024
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p className="text-gray-300 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-300 mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>To provide essential website functionality</li>
              <li>To remember your preferences</li>
              <li>To analyze and improve our website performance</li>
              <li>To personalize your experience</li>
              <li>To provide targeted advertising</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">3.1 Essential Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3.2 Performance Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3.3 Functionality Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3.4 Targeting Cookies</h3>
                <p className="text-gray-300 mb-4">
                  These cookies are used to deliver advertisements more relevant to you and your interests.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p className="text-gray-300 mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
            <p className="text-gray-300 mb-4">
              We may use third-party services that use cookies. These services include:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Google Analytics</li>
              <li>Social Media Platforms</li>
              <li>Advertising Partners</li>
              <li>Payment Processors</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <p className="text-gray-300">
              Email: support@creatorverse.com<br />
              Phone: +91 9219135156<br />
              Address: Swaroup Nagar, Kanpur Nagar, Uttar Pradesh
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;