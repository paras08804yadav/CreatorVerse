import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last updated: January 2024
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing or using CreatorVerse's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="text-gray-300 mb-4">
              CreatorVerse provides creator marketing and content production services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Influencer Generated Content</li>
              <li>User Generated Content</li>
              <li>Viral Content Production</li>
              <li>Content Strategy</li>
              <li>Reel Script Writing</li>
              <li>Product Shoot</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-gray-300 mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not misuse our services</li>
              <li>Not infringe on intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              All content, features, and functionality of our services are owned by CreatorVerse and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p className="text-gray-300 mb-4">
              For paid services:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Payment terms will be specified in separate agreements</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We reserve the right to modify our pricing</li>
              <li>Late payments may result in service suspension</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              CreatorVerse shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For questions about these Terms of Service, please contact us at:
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

export default TermsOfService;