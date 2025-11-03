import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2d4a36] text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Navigation */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              THE<br />RIVERSIDE
            </h3>
            <p className="text-sm italic mb-6">Bar + Restaurant + Café</p>
            <nav className="space-y-3">
              <Link to="/menu" className="block hover:text-primary transition-colors uppercase tracking-wide">
                MENU
              </Link>
              <Link to="/order-online" className="block hover:text-primary transition-colors uppercase tracking-wide">
                ORDER ONLINE
              </Link>
              <Link to="/reservations" className="block hover:text-primary transition-colors uppercase tracking-wide">
                RESERVATIONS
              </Link>
              <a href="#about" className="block hover:text-primary transition-colors uppercase tracking-wide">
                ABOUT
              </a>
              <a href="#contact" className="block text-primary uppercase tracking-wide">
                • CONTACT
              </a>
            </nav>
          </div>

          {/* Column 2 - Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">OPENING HOURS</h3>
            <div className="space-y-3 text-sm">
              <p className="font-medium">Tuesday to Friday</p>
              <p>9am - 7pm</p>
              <p className="font-medium mt-4">Saturday & Sunday</p>
              <p>10am - 7pm</p>
            </div>
          </div>

          {/* Column 3 - Where We Are */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">WHERE WE ARE</h3>
            <div className="space-y-3 text-sm">
              <p>500 Terry Francine St,</p>
              <p>San Francisco</p>
              <p className="mt-4">123-456-7890,</p>
              <p>info@mysite.com</p>
            </div>
          </div>

          {/* Column 4 - Legal */}
          <div className="text-right">
            <nav className="space-y-3 text-sm">
              <a href="#" className="block hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Refund Policy
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Accessibility Statement
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p>&copy; 2025 The Riverside. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
