
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-foreground"
    >
      <h1 className="text-4xl font-extrabold mb-8 text-primary">Privacy Policy</h1>
      <p className="mb-6 text-muted-foreground"><strong>Last Updated:</strong> {currentDate}</p>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">1. Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to our website. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or purchase our products. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">2. Information We Collect</h2>
          <p className="text-muted-foreground mb-3">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, and demographic information, such as your age, gender, and fitness goals, that you voluntarily give to us when you use our contact or booking forms.
            </li>
            <li>
              <strong>Payment Data:</strong> We use third-party payment processors (e.g., Stripe, Gumroad) to handle transactions. We do not store your credit card details. All payment data is securely handled by our processors. Please review their privacy policies for more information.
            </li>
            <li>
              <strong>Scheduling Data:</strong> When you book a session through third-party tools like Calendly, we collect information necessary to schedule your appointment, such as your name, email, and selected time slot.
            </li>
            <li>
              <strong>Usage Data:</strong> We may use cookies and similar tracking technologies to collect information about your device and how you interact with our website. This helps us improve our site and your experience.
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">3. How We Use Your Information</h2>
          <p className="text-muted-foreground">We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Provide, operate, and maintain our services.</li>
            <li>Process your transactions and manage your orders.</li>
            <li>Communicate with you, including responding to your inquiries and sending you service-related information.</li>
            <li>Improve and personalize your experience on our website.</li>
            <li>Understand and analyze how you use our website to enhance functionality.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">4. Data Storage and Security</h2>
          <p className="text-muted-foreground">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">5. Third-Party Services</h2>
          <p className="text-muted-foreground">
            Our website uses third-party services for payments (Stripe, Gumroad) and scheduling (Calendly). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">6. Cookies</h2>
          <p className="text-muted-foreground">
            We use cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of the site.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">7. Your Rights</h2>
          <p className="text-muted-foreground">
            Depending on your location, you may have rights regarding your personal data, such as the right to access, correct, or delete your information. Please contact us to exercise these rights.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">8. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">9. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions or concerns about this Privacy Policy, please contact us through the information provided on our contact page.
          </p>
        </div>

      </div>
    </motion.div>
  );
};
export default PrivacyPolicy;
