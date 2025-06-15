
import { motion } from 'framer-motion';

const TermsOfUse = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-foreground"
    >
      <h1 className="text-4xl font-extrabold mb-8 text-primary">Terms of Use</h1>
      <p className="mb-6 text-muted-foreground"><strong>Last Updated:</strong> {currentDate}</p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">1. Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By accessing our website, purchasing digital products, or using our training services, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with these terms, you should not use our website or services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">2. User Responsibilities</h2>
          <p className="text-muted-foreground mb-3">As a user of this website and our services, you agree to:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Provide accurate information when filling out forms or making purchases.</li>
            <li>Use the information and services provided for personal, non-commercial use only.</li>
            <li>Acknowledge that you are responsible for your own health and safety. You should consult with a physician before starting any new fitness program.</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">3. Intellectual Property Rights</h2>
          <p className="text-muted-foreground">
            All content on this website, including text, graphics, logos, and digital products (workout plans, diet guides), is the property of the website owner and protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without explicit permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">4. Digital Products</h2>
          <p className="text-muted-foreground">
            All sales of digital products (e.g., PDFs) are final. Due to the nature of digital goods, refunds are not provided. Upon purchase, you are granted a single, non-transferable license to use the product for personal purposes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">5. Disclaimer of Liability</h2>
          <p className="text-muted-foreground">
            The fitness and nutrition information provided on this site and in our products is for educational purposes only. We are not medical professionals. We make no guarantees concerning the level of success you may experience, and you accept the risk that results will differ for each individual. We are not liable for any injuries or health problems you may experience as a result of using our services or products.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">6. Third-Party Services</h2>
          <p className="text-muted-foreground">
            Our website may contain links to third-party websites or services, such as payment processors or scheduling tools, that are not owned or controlled by us. We are not responsible for the content or practices of any third-party websites.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">7. Changes to Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new terms on this page. Your continued use of the site after such changes constitutes your acceptance of the new terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">8. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms of Use, please contact us through the information provided on our contact page.
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default TermsOfUse;
