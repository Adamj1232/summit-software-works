import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import web3OnboardHero from "../assets/projects/web3-onboard-hero.svg";
import MetaTags from "../components/seo/MetaTags";
// Import images for new projects directly using relative paths
import gasExt1 from "../assets/projects/gas-extension/ext_screenshot.png";
import gasExt2 from "../assets/projects/gas-extension/ext_screenshot_heat.png";
import dt4Image from "../assets/projects/dt4.png"; // Assuming dt4.png exists here

// --- Simple Carousel Component ---
const ImageCarousel = ({ images, alt, projectColor }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      } else if (newIndex >= images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full object-cover transform group-hover/card:scale-125 transition-transform duration-700 ease-in-out"
          onError={(e) => {
            e.target.src = `https://images.unsplash.com/photo-${Math.floor(
              Math.random() * 1000
            )}?auto=format&fit=crop&w=800&q=80`;
          }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 text-white p-1 rounded-full z-10 hover:bg-black/50 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              paginate(-1);
            }}
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 text-white p-1 rounded-full z-10 hover:bg-black/50 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              paginate(1);
            }}
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                } hover:bg-white transition-colors`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// --- Updated ProjectCard Component ---
const ProjectCard = ({ project, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="relative group"
    onClick={() => onClick(project)}
  >
    <motion.div
      className="absolute -inset-2 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
      style={{
        background: `linear-gradient(45deg, ${project.color.split(" ")[1]}, ${
          project.color.split(" ")[3]
        })`,
      }}
    />
    <motion.div
      className="card group/card cursor-pointer relative bg-mountain-100 backdrop-blur-sm"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden h-72">
        {/* Conditional Rendering: Carousel or Single Image */}
        {Array.isArray(project.image) ? (
          <ImageCarousel
            images={project.image}
            alt={project.title}
            projectColor={project.color}
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className={`${
              typeof project.image === "string" &&
              project.image.endsWith(".svg")
                ? "object-contain h-full" // Keep contain for SVG
                : "object-cover w-full h-full" // Use cover for others
            } transform group-hover/card:scale-125 transition-all duration-700 ease-in-out`}
            onError={(e) => {
              e.target.src = `https://images.unsplash.com/photo-${Math.floor(
                Math.random() * 1000
              )}?auto=format&fit=crop&w=800&q=80`;
            }}
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-mountain-900/80 via-mountain-900/20 to-transparent
                     opacity-0 group-hover/card:opacity-100 transition-all duration-700 ease-in-out"
        />
      </div>

      <motion.h3
        className="text-xl font-semibold mb-3 text-mountain-800 bg-clip-text bg-gradient-to-r"
        style={{
          backgroundImage: `linear-gradient(45deg, ${
            project.color.split(" ")[1]
          }, ${project.color.split(" ")[3]})`,
        }}
      >
        {project.title}
      </motion.h3>

      <p className="text-mountain-500 dark:text-mountain-200 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag, tagIndex) => {
          // Get icon based on tag
          const getTagIcon = (tag) => {
            const iconMap = {
              typescript: "⚡",
              web3: "🌐",
              security: "🔒",
              performance: "⚡",
              architecture: "🏗️",
              leadership: "👥",
              "open source": "📖",
              kubernetes: "🎯",
              aws: "☁️",
              devops: "🔄",
              scalability: "📈",
              microservices: "🔗",
              chrome: "🧩", // Added Chrome icon
              ai: "🧠", // Added AI icon
              "user experience": "🎨", // Added UX icon
              music: "🎵", // Added Music icon
              animation: "✨", // Added Animation icon
            };

            // Find the best match, prioritize longer keys if multiple contain substrings
            let bestMatch = null;
            let bestMatchLength = 0;
            for (const [key, icon] of Object.entries(iconMap)) {
              if (
                tag.toLowerCase().includes(key) &&
                key.length > bestMatchLength
              ) {
                bestMatch = icon;
                bestMatchLength = key.length;
              }
            }
            return bestMatch;
          };

          const icon = getTagIcon(tag);

          return (
            <motion.div
              key={tagIndex}
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                            bg-white/95 shadow-sm border border-gray-100
                            hover:border-gray-200 transition-colors"
              >
                {/* Icon (if available) */}
                {icon && <span className="text-base leading-none">{icon}</span>}

                {/* Tag text */}
                <span
                  className="text-sm font-medium text-mountain-700 dark:bg-mountain-200 dark:text-mountain-600"
                >
                  {tag}
                </span>
              </div>

              {/* Subtle background glow on hover */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-full opacity-0 blur-sm transition-opacity"
                style={{
                  background: `linear-gradient(45deg, ${
                    project.color.split(" ")[1]
                  }, ${project.color.split(" ")[3]})`,
                }}
                initial={false}
                whileHover={{
                  opacity: 0.15,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Stats or Metrics */}
      {(project.stats || project.metrics) && (
        <div className="mt-4 pt-4 border-t border-mountain-200">
          {project.stats && (
            <div className="flex justify-between text-sm dark:text-mountain-200 text-mountain-600 pb-4">
              {project.stats.stars && <span>⭐ {project.stats.stars}</span>}
              {project.stats.forks && <span>🔄 {project.stats.forks}</span>}
              {project.stats.contributors && (
                <span>👥 {project.stats.contributors}</span>
              )}
              {project.stats.users && <span>👤 {project.stats.users}</span>}{" "}
              {/* Added users stat */}
            </div>
          )}
          {project.metrics && (
            <div className="space-y-2 border-t border-mountain-200 pt-4">
              {project.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm dark:text-mountain-200 text-mountain-600"
                >
                  <span className="mr-2">✓</span>
                  {metric}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Link
        to={project.link || "#"} // Use link or default to '#' if none
        target={project.link ? "_blank" : "_self"} // Open external links in new tab
        rel={project.link ? "noopener noreferrer" : ""}
        className="inline-flex items-center font-semibold transition-colors mt-4"
        style={{
          color: project.color.split(" ")[1],
        }}
        onClick={(e) => {
          if (!project.link) e.preventDefault();
          onClick(project);
        }} // Open modal if no external link
      >
        <span>
          {project.demoUrl
            ? "View Demo"
            : project.link
            ? "View Repository"
            : "View Details"}
        </span>
        <motion.span
          className="ml-2"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  </motion.div>
);

// --- Updated Projects Component ---
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Images are now imported above, no need for const declarations here
  // const gasExt1 = "/src/assets/projects/gas-extension/ext_screenshot.png";
  // const gasExt2 = "/src/assets/projects/gas-extension/ext_screenshot_heat.png";

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.05;
      const moveY = (clientY - window.innerHeight / 2) * 0.05;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []); // Corrected dependency array for handleMouseMove

  const projects = [
    {
      title: "Web3-Onboard: Simplified Web3 Wallet Connection",
      description:
        "Problem: Connecting dApps to various wallets was complex. Solution: Led development of Web3-Onboard, an open-source library simplifying wallet integration. Result: Became the industry standard, empowering thousands of developers and securing millions in daily transactions.",
      image: web3OnboardHero, // Keep single SVG for this one
      tags: [
        "Web3",
        "Open Source",
        "TypeScript",
        "Developer Tooling",
        "Leadership",
      ],
      link: "https://github.com/blocknative/web3-onboard",
      color: "from-blue-500 to-indigo-500",
      stats: {
        stars: "887",
        forks: "530",
        contributors: "185",
      },
      metrics: [
        "80+ Wallets Supported (Browser, Hardware, Mobile)",
        "Industry standard for wallet connection",
        "~9k weekly NPM downloads",
        "Seamless chain switching & account management",
      ],
    },
    {
      title: "Gas Extension: AI-Powered Gas Price Prediction",
      description:
        "Problem: Users struggled with timing Ethereum transactions for optimal gas fees. Solution: Developed a Chrome extension visualizing AI-predicted gas prices. Result: Empowered over 50,000 users to save significantly on transaction costs.",
      image: [gasExt1, gasExt2], // Use imported variables
      tags: [
        "Chrome Extension",
        "Web3",
        "AI",
        "Data Visualization",
        "User Experience",
        "TypeScript",
      ],
      link: "https://chromewebstore.google.com/detail/blocknative-ethereum-gas-e/gmkgackfphisfflkfclekigcfifackjp", // Example link, replace if needed
      color: "from-orange-500 to-red-500",
      stats: {
        users: "50k+",
      },
      metrics: [
        "Real-time gas price predictions",
        "Intuitive heatmap visualization",
        "Helped users save on transaction fees",
        "High user adoption and retention",
      ],
    },
    {
      title: "Dealer Takes Four: High-Traffic Band Website",
      description:
        "Problem: Popular Colorado band needed a performant, engaging website to handle fan traffic and showcase their music/events. Solution: Built a dynamic site with rich animations, audio/video integration, and robust performance optimization. Result: Handles high traffic loads smoothly, enhancing fan engagement.",
      demoUrl: "https://www.dealertakesfour.com", // Added demoUrl
      image: dt4Image, // Use imported variable
      tags: [
        "Web Development",
        "Performance Optimization",
        "Animation",
        "Music",
        "User Experience",
        "High Traffic",
      ],
      link: null, // No separate code repo link maybe
      color: "from-emerald-500 to-green-600",
      metrics: [
        "Scalable architecture for peak traffic",
        "Engaging animations and media plugins",
        "Optimized for fast load times",
        "Mobile-responsive design",
      ],
    },
    // Keep commented projects for potential future use
    // {
    //   title: "Enterprise Payment Processing Platform",
    // ...
    // },
    // {
    //   title: "Cloud-Native E-commerce Migration",
    // ...
    // },
    // {
    //   title: "AI-Powered Customer Support Chatbot",
    // ...
    // }
  ];

  return (
    // Need to pass handleMouseMove to the div if we want the effect
    <div
      className="page-transition" /* onMouseMove={handleMouseMove} - Removed here, handled by useEffect */
    >
      <MetaTags
        title="Software Development Portfolio | Summit Software Works - Denver"
        description="Explore Summit Software Works' portfolio of successful projects in web development, Web3, AI integration, and enterprise software solutions delivered for clients in Denver and worldwide."
        keywords="software development portfolio Denver, web development case studies, web3 projects, AI project examples, custom software examples Colorado, React projects, Chrome extension development, high-traffic websites" // Added keywords
        url="/projects"
        pageType="projects"
      />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-mountain-900 to-mountain-800 text-white overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-full"
                style={{
                  // Use template literals for dynamic styles
                  background: `linear-gradient(${
                    45 + i * 30
                  }deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
                  // Apply mouse position transform
                  transform: `translate(${mousePosition.x * (i + 1)}px, ${
                    mousePosition.y * (i + 1)
                  }px) scale(${1 + i * 0.2})`,
                  clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                }}
              />
            ))}
          </div>

          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Proven Results, Innovative Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-blue-200"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              See how our expert Denver software development team solves complex
              challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-mountain-50 to-forest-50">
        <div className="container mx-auto px-6">
          {/* Increased gap for more spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest-900 via-purple-900 to-mountain-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
            // Apply mouse position transform
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px)`,
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can turn your vision into a high-impact
              software solution.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-white text-forest-900 rounded-lg font-semibold overflow-hidden group"
              >
                <span className="relative z-10">Discuss Your Project</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Animated shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </section>

      {/* --- Updated Project Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" // Darker backdrop
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-white rounded-xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl dark:bg-mountain-800" // Larger modal, scrollable
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-mountain-800 dark:text-mountain-100">
                  {selectedProject.title}
                </h3>
                <button
                  className="text-mountain-400 hover:text-mountain-600 transition-colors"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content Area: Iframe or Image/Carousel */}
              <div className="mb-6 aspect-video bg-gray-100 rounded-lg overflow-hidden">
                {" "}
                {/* Fixed aspect ratio container */}
                {selectedProject.demoUrl ? (
                  <iframe
                    src={selectedProject.demoUrl}
                    title={`${selectedProject.title} Demo`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms" // Security sandbox
                  ></iframe>
                ) : Array.isArray(selectedProject.image) ? (
                  <ImageCarousel
                    images={selectedProject.image}
                    alt={selectedProject.title}
                    projectColor={selectedProject.color}
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className={`${
                      typeof selectedProject.image === "string" &&
                      selectedProject.image.endsWith(".svg")
                        ? "object-contain w-full h-full p-4" // Contain SVG with padding
                        : "object-cover w-full h-full" // Cover other images
                    }`}
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1?auto=format&fit=crop&w=800&q=80"; // Fallback
                    }}
                  />
                )}
              </div>

              {/* Description */}
              <p className="text-mountain-600 mb-6 dark:text-mountain-300">
                {selectedProject.description}
              </p>

              {/* Tags (optional in modal, uncomment if desired) */}
              {/* <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, tagIndex) => (
                   <span key={tagIndex} className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">{tag}</span>
                ))}
              </div> */}

              {/* Metrics/Stats (optional in modal, uncomment if desired) */}
              {/* ... add metrics/stats display similar to card if needed ... */}

              {/* Modal Footer Actions */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-mountain-200">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-mountain-300 text-mountain-700 rounded-lg hover:bg-mountain-50 transition-colors font-medium dark:border-mountain-600 dark:text-mountain-200 dark:hover:bg-mountain-700"
                  >
                    View Repository <span className="ml-1.5">↗</span>
                  </a>
                )}
                {selectedProject.demoUrl && ( // Add link to open demo in new tab as well
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-mountain-300 text-mountain-700 rounded-lg hover:bg-mountain-50 transition-colors font-medium dark:border-mountain-600 dark:text-mountain-200 dark:hover:bg-mountain-700"
                  >
                    Open Demo in New Tab <span className="ml-1.5">↗</span>
                  </a>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2.5 bg-mountain-800 text-white rounded-lg font-medium hover:bg-mountain-700 transition-colors dark:bg-mountain-700 dark:hover:bg-mountain-600"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
