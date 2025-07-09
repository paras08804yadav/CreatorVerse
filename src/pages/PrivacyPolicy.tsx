import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last updated: January 2024
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              CreatorVerse ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
            <p className="text-gray-300 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Fill out forms on our website</li>
              <li>Create an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us</li>
              <li>Participate in our services</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-300 mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Access times</li>
              <li>Pages viewed</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Provide and maintain our services</li>
              <li>Improve our website and services</li>
              <li>Communicate with you</li>
              <li>Send newsletters and marketing materials</li>
              <li>Respond to your inquiries</li>
              <li>Analyze usage patterns</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;