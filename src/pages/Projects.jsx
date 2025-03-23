import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import web3OnboardHero from '../assets/projects/web3-onboard-hero.svg';

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
        background: `linear-gradient(45deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})`,
      }}
    />
    <motion.div
      className="card group/card cursor-pointer relative bg-white/80 backdrop-blur-sm"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden h-72">
        <img
          src={project.image}
          alt={project.title}
          className={`${
            project.image.endsWith('.svg')
              ? 'object-contain w-full h-full'
              : 'object-cover w-full h-full'
          } transform group-hover/card:scale-110 transition-transform duration-500`}
          onError={(e) => {
            e.target.src = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?auto=format&fit=crop&w=800&q=80`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-900/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
      </div>
      
      <motion.h3
        className="text-xl font-semibold mb-3 text-mountain-800 bg-clip-text text-transparent bg-gradient-to-r"
        style={{
          backgroundImage: `linear-gradient(45deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})`,
        }}
      >
        {project.title}
      </motion.h3>
      
      <p className="text-mountain-600 mb-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
          <motion.span
            key={tagIndex}
            className="px-3 py-1.5 text-sm rounded-full relative overflow-hidden group/tag"
            style={{
              background: `linear-gradient(45deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})`,
              color: 'white',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                transform: "translateX(-100%)",
              }}
              animate={{
                transform: ["translateX(-100%)", "translateX(100%)"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
            {/* Icon based on tag type (optional) */}
            <span className="relative flex items-center gap-1">
              {tag.toLowerCase().includes('typescript') && '⚡'}
              {tag.toLowerCase().includes('web3') && '🌐'}
              {tag.toLowerCase().includes('security') && '🔒'}
              {tag}
            </span>
          </motion.span>
        ))}
      </div>

      {/* Stats or Metrics */}
      {(project.stats || project.metrics) && (
        <div className="mt-4 pt-4 border-t border-mountain-200">
          {project.stats && (
            <div className="flex justify-between text-sm text-mountain-600 pb-4">
              <span>⭐ {project.stats.stars}</span>
              <span>🔄 {project.stats.forks}</span>
              <span>👥 {project.stats.contributors}</span>
            </div>
          )}
          {project.metrics && (
            <div className="space-y-2 border-t border-mountain-200 pt-4">
              {project.metrics.map((metric, index) => (
                <div key={index} className="flex items-center text-sm text-mountain-600">
                  <span className="mr-2">✓</span>
                  {metric}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      <Link
        to={project.link}
        className="inline-flex items-center font-semibold transition-colors mt-4"
        style={{
          color: project.color.split(' ')[1],
        }}
      >
        <span>View {project.stats ? 'GitHub' : 'Details'}</span>
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.05;
    const moveY = (clientY - window.innerHeight / 2) * 0.05;
    setMousePosition({ x: moveX, y: moveY });
  }, []);

  const projects = [
    {
      title: "Web3-Onboard",
      description: "Led development and maintenance of a leading Web3 wallet connection library, serving thousands of developers worldwide. Implemented multi-wallet support, chain switching, and account management features.",
      image: web3OnboardHero,
      tags: ["TypeScript", "Web3", "Open Source", "Leadership"],
      link: "https://github.com/blocknative/web3-onboard",
      color: "from-blue-500 to-indigo-500",
      stats: {
        stars: "887",
        forks: "530",
        contributors: "185"
      },
      metrics: [
        "80+ Wallets supported - Browser, Hardware, Mobile & Embedded",
        "Millions in daily transactions",
        "Average 9k weekly NPM downloads",
      ]
    },
    {
      title: "Enterprise Payment Systems",
      description: "Architected and implemented high-performance payment processing systems handling millions in daily transactions. Optimized database queries and implemented caching strategies reducing response times by 40%.",
      image: "/images/projects/payment.jpg",
      tags: ["System Architecture", "Performance", "Security", "Scalability"],
      link: "#",
      color: "from-green-500 to-teal-500",
      metrics: [
        "40% faster processing",
        "99.99% uptime",
        "Millions in daily transactions"
      ]
    },
    {
      title: "Cloud-Native Applications",
      description: "Designed and deployed microservices architecture for enterprise applications, implementing CI/CD pipelines and container orchestration. Reduced deployment time by 60% and improved system reliability.",
      image: "/images/projects/cloud.jpg",
      tags: ["Microservices", "Kubernetes", "DevOps", "AWS"],
      link: "#",
      color: "from-purple-500 to-pink-500",
      metrics: [
        "60% faster deployments",
        "Zero downtime updates",
        "Auto-scaling enabled"
      ]
    }
  ];

  return (
    <div className="page-transition" onMouseMove={handleMouseMove}>
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
                  background: `linear-gradient(${45 + i * 30}deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
                  transform: `translate(${mousePosition.x * (i + 1)}px, ${mousePosition.y * (i + 1)}px) scale(${1 + i * 0.2})`,
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
              Our Projects
            </motion.h1>
            <motion.p
              className="text-xl text-blue-200"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Discover how we've helped businesses transform their digital presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-mountain-50 to-forest-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} onClick={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest-900 via-purple-900 to-mountain-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's create your next success story together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-white text-forest-900 rounded-lg font-semibold overflow-hidden group"
              >
                <span className="relative z-10">Start Your Project</span>
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

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-mountain-800 text-white rounded-lg"
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