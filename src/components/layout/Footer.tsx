import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../Logo";
// import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-mountain-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12"
        >
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 flex flex-col items-center md:items-start"
          >
            <Logo size="xxxl" className="mb-6" showText />
            <p className="text-white/80 mb-6 font-medium text-center md:text-left max-w-sm">
              Building innovative digital solutions for businesses ready to
              reach new heights.
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
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Web Development", path: "/services#web" },
                { name: "Software Design", path: "/services#software" },
                { name: "Web3 Integration", path: "/services#web3" },
                { name: "SEO Optimization", path: "/services#seo" },
                { name: "UI/UX Design", path: "/services#mobile" },
              ].map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h4 className="text-white text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Work", path: "/projects" },
                // { name: "Blog", path: "/blog" },
                // { name: "Careers", path: "/careers" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition duration-200 font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <h4 className="text-white text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <motion.li variants={itemVariants} className="text-white/80">
                <span className="block font-medium mb-1">Email</span>
                <a
                  href="mailto:contact@summitsoftwareworks.com"
                  className="hover:text-white transition duration-200 break-words text-primary-400"
                >
                  contact@summitsoftwareworks.com
                </a>
              </motion.li>
              <motion.li variants={itemVariants} className="text-white/80">
                <span className="block font-medium mb-1">Phone</span>
                <a
                  href="tel:+13039182290"
                  className="hover:text-white transition duration-200 text-primary-400"
                >
                  +1 (303) 918-2290
                </a>
              </motion.li>
              <motion.li variants={itemVariants} className="text-white/80">
                <span className="block font-medium">Based Out Of Arvada, CO</span>
                <br/>
                <span className="block font-medium">Powering Applications <span className="font-bold text-slate-300">Worldwide</span></span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/10 text-center text-white/60"
        >
          <p>
            &copy; {currentYear} Summit Software Works. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
