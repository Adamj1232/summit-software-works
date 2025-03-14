
// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Mountain silhouette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 320" className="absolute top-0 w-full opacity-10">
          <path fill="#3B82F6" d="M0,64L40,96C80,128,160,192,240,202.7C320,213,400,171,480,138.7C560,107,640,85,720,112C800,139,880,213,960,229.3C1040,245,1120,203,1200,160C1280,117,1360,75,1400,53.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-blue-500 text-3xl">⛰️</span>
              <span className="text-xl font-bold text-white">Summit Software</span>
            </div>
            <p className="text-gray-400 mb-6">
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
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition duration-300"
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
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition duration-300">
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
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📍</span>
                <span className="text-gray-400">123 Innovation Way, Tech City, TC 10101</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📧</span>
                <span className="text-gray-400">hello@summitsoftwareworks.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📱</span>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Summit Software Works. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;