// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mountain-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mountain-pattern opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Logo size="small" className="mb-6" showText={false} />
            <p className="text-white/80 mb-6 font-medium">
              Building innovative digital solutions for businesses ready to reach new heights.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              {[
                { icon: "linkedin", href: "#" },
                { icon: "twitter", href: "#" },
                { icon: "github", href: "#" },
                { icon: "instagram", href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white 
                    hover:bg-accent-glow hover:text-white transition duration-200"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Web Development", path: "/services#web" },
                { name: "Software Design", path: "/services#software" },
                { name: "Web3 Integration", path: "/services#web3" },
                { name: "SEO Optimization", path: "/services#seo" },
                { name: "UI/UX Design", path: "/services#design" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-white transition duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Work", path: "/portfolio" },
                { name: "Blog", path: "/blog" },
                { name: "Careers", path: "/careers" },
                { name: "Contact Us", path: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-white transition duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-accent-glow mt-1">📍</span>
                <span className="text-white/80 font-medium">123 Innovation Way, Tech City, TC 10101</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent-glow mt-1">📧</span>
                <a 
                  href="mailto:hello@summitsoftwareworks.com" 
                  className="text-white/80 hover:text-white font-medium transition duration-200"
                >
                  hello@summitsoftwareworks.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent-glow mt-1">📱</span>
                <a 
                  href="tel:+15551234567" 
                  className="text-white/80 hover:text-white font-medium transition duration-200"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm font-medium">
            © {currentYear} Summit Software Works. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-white/60 hover:text-white text-sm font-medium transition duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white text-sm font-medium transition duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;