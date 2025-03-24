import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
// import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mountain-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mountain-pattern opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Company Info */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <Logo size="xxxl" className="mb-6" />
            <p className="text-white/80 mb-6 font-medium text-center md:text-left max-w-sm">
              Building innovative digital solutions for businesses ready to reach new heights.
            </p>
            {/* <div className="flex space-x-4">
              Social Media Links
              {[
                { icon: <FaLinkedin className="text-lg" />, href: "https://www.linkedin.com/in/adam-joseph-carpenter/" },
                { icon: <FaTwitter className="text-lg" />, href: "https://twitter.com/summitsoftware" },
                { icon: <FaGithub className="text-lg" />, href: "https://github.com/Adamj1232" },
                { icon: <FaInstagram className="text-lg" />, href: "https://instagram.com/summitsoftwareworks" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white 
                    hover:bg-accent-glow hover:text-white transition duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Web Development", path: "/services#web" },
                { name: "Software Design", path: "/services#software" },
                { name: "Web3 Integration", path: "/services#web3" },
                { name: "SEO Optimization", path: "/services#seo" },
                { name: "UI/UX Design", path: "/services#mobile" }
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
          <div className="md:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Work", path: "/projects" },
                // { name: "Blog", path: "/blog" },
                // { name: "Careers", path: "/careers" },
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
          <div className="md:col-span-4">
            <h4 className="text-white text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-white/70">
                <span className="block font-medium mb-1">Email</span>
                <a 
                  href="mailto:contact@summitsoftwareworks.com" 
                  className="hover:text-white transition duration-200 break-words"
                >
                  contact@summitsoftwareworks.com
                </a>
              </li>
              <li className="text-white/70">
                <span className="block font-medium mb-1">Phone</span>
                <a 
                  href="tel:+13039182290" 
                  className="hover:text-white transition duration-200"
                >
                  +1 (303) 918-2290
                </a>
              </li>
              <li className="text-white/70">
                <span className="block font-medium">Location</span>
                <span>Arvada, CO</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {currentYear} Summit Software Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 