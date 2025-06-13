import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { PixelCard } from "@/components/ui/pixel-card";
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Moon,
  Sun,
  Menu,
  ExternalLink
} from "lucide-react";

export default function Portfolio() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { threshold: 0.3 });
  const aboutInView = useInView(aboutRef, { threshold: 0.3 });
  const skillsInView = useInView(skillsRef, { threshold: 0.3 });
  const projectsInView = useInView(projectsRef, { threshold: 0.3 });
  const contactInView = useInView(contactRef, { threshold: 0.3 });

  useEffect(() => {
    if (heroInView) setActiveSection("hero");
    else if (aboutInView) setActiveSection("about");
    else if (skillsInView) setActiveSection("skills");
    else if (projectsInView) setActiveSection("projects");
    else if (contactInView) setActiveSection("contact");
  }, [heroInView, aboutInView, skillsInView, projectsInView, contactInView]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: "PYTHON", emoji: "🐍", color: "text-neon-green" },
    { name: "JAVASCRIPT", emoji: "🟨", color: "text-neon-yellow" },
    { name: "FLASK", emoji: "🔥", color: "text-neon-pink" },
    { name: "REACT", emoji: "⚛️", color: "text-neon-cyan" },
    { name: "TAILWIND", emoji: "🌬️", color: "text-neon-green" },
    { name: "OPENCV", emoji: "👁️", color: "text-retro-purple" },
    { name: "TESSERACT", emoji: "📝", color: "text-neon-yellow" },
    { name: "LIBLOUIS", emoji: "⠃", color: "text-neon-pink" },
  ];

  const certifications = [
    { name: "REST API", emoji: "🏆", org: "HackerRank", color: "text-neon-yellow" },
    { name: "PYTHON", emoji: "🐍", org: "HackerRank", color: "text-neon-green" },
    { name: "PROBLEM SOLVING", emoji: "🔍", org: "HackerRank", color: "text-neon-pink" },
    { name: "NETWORKING", emoji: "🌐", org: "Cisco", color: "text-neon-cyan" },
  ];

  return (
    <div className="min-h-screen">
      {/* Theme Toggle */}
      <motion.div 
        className="fixed top-20 right-4 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        <button
          onClick={toggleTheme}
          className="w-12 h-12 rounded-full bg-dark-gray/80 backdrop-blur-sm border-2 border-neon-green/50 hover:border-neon-pink flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-neon-green/20"
        >
          {theme === "light" ? 
            <Moon className="w-5 h-5 text-neon-cyan" /> : 
            <Sun className="w-5 h-5 text-neon-yellow" />
          }
        </button>
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-dark-gray/90 backdrop-blur-sm border-b-4 border-neon-green">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="font-pixel text-neon-green text-sm">VIKAS.DEV</div>
            
            <div className="hidden md:flex space-x-6 font-pixel text-xs">
              {[
                { id: "hero", label: "HOME", color: "text-neon-green" },
                { id: "about", label: "ABOUT", color: "text-neon-cyan" },
                { id: "skills", label: "SKILLS", color: "text-neon-yellow" },
                { id: "projects", label: "PROJECTS", color: "text-neon-green" },
                { id: "contact", label: "CONTACT", color: "text-neon-cyan" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${item.color} hover:text-neon-pink transition-colors ${
                    activeSection === item.id ? "text-neon-pink" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neon-green"
              >
                <Menu />
              </button>
            </div>
          </div>
          
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 space-y-2 font-pixel text-xs"
            >
              {[
                { id: "hero", label: "HOME" },
                { id: "about", label: "ABOUT" },
                { id: "skills", label: "SKILLS" },
                { id: "projects", label: "PROJECTS" },
                { id: "contact", label: "CONTACT" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-neon-green hover:text-neon-pink transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-10 left-10 w-8 h-8 bg-neon-pink"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-20 right-20 w-6 h-6 bg-neon-cyan"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-10 h-10 bg-neon-yellow"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-4 h-4 bg-neon-green"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Pixel Avatar */}
            <motion.div
              className="w-32 h-32 mx-auto mb-6 relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-full h-full bg-neon-green pixel-border relative">
                <div className="absolute inset-2 bg-dark-gray"></div>
                <div className="absolute inset-4 bg-neon-cyan"></div>
                {/* Simple pixel face */}
                <div className="absolute top-6 left-8 w-3 h-3 bg-pixel-black"></div>
                <div className="absolute top-6 right-8 w-3 h-3 bg-pixel-black"></div>
                <div className="absolute bottom-8 left-6 w-5 h-2 bg-pixel-black rounded-sm"></div>
              </div>
              {/* Waving hand animation */}
              <motion.div
                className="absolute -right-4 top-4 w-8 h-8 bg-neon-yellow pixel-border"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="absolute inset-1 bg-neon-pink"></div>
              </motion.div>
            </motion.div>
            
            <motion.h1
              className="font-pixel text-4xl md:text-6xl mb-4 pixel-text-shadow"
              animate={{
                textShadow: [
                  "2px 2px 0px var(--neon-pink), 4px 4px 0px var(--neon-cyan)",
                  "2px 2px 0px var(--neon-cyan), 4px 4px 0px var(--neon-yellow)",
                  "2px 2px 0px var(--neon-pink), 4px 4px 0px var(--neon-cyan)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              VIKAS SINGH RAJPUT
            </motion.h1>
            
            <PixelCard variant="doodle" className="p-6 max-w-2xl mx-auto">
              <p className="font-pixel text-lg md:text-xl text-neon-green">
                AI-POWERED FULL STACK DEV
              </p>
              <p className="font-inter text-sm md:text-base mt-2 text-medium-gray dark:text-off-white">
                Building Inclusive Technology
              </p>
            </PixelCard>
          </motion.div>
          
          {/* Floating doodle elements */}
          <motion.div
            className="absolute top-1/4 left-4"
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M10 30 Q30 10 50 30 Q30 50 10 30" stroke="var(--neon-pink)" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
              <circle cx="30" cy="30" r="5" fill="var(--neon-cyan)"/>
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute top-1/3 right-8"
            animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M5 20 L20 5 L35 20 L20 35 Z" stroke="var(--neon-yellow)" strokeWidth="2" fill="none"/>
              <path d="M15 20 L25 20 M20 15 L20 25" stroke="var(--neon-yellow)" strokeWidth="2"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl mb-4 text-neon-pink">ABOUT_ME.exe</h2>
            <div className="w-24 h-1 bg-neon-green mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <PixelCard variant="doodle" className="p-8 relative">
                {/* Hand-drawn arrow pointing to the card */}
                <div className="absolute -top-8 -left-8">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M10 30 Q20 10 40 25 L35 30 L45 35 L30 40 Q15 35 10 30" stroke="var(--neon-pink)" strokeWidth="3" fill="none"/>
                    <path d="M35 30 L45 35 L40 40" stroke="var(--neon-pink)" strokeWidth="3" fill="none"/>
                  </svg>
                </div>
                
                <div className="font-inter text-medium-gray dark:text-off-white leading-relaxed">
                  <p className="mb-4">
                    I'm <span className="font-pixel text-neon-green">Vikas Singh Rajput</span>, an AI enthusiast & full-stack developer from Jabalpur. I use AI, computer vision & accessible tech to create solutions that matter.
                  </p>
                  <p className="text-sm">
                    Currently pursuing BTech in CSE at Parul University.
                  </p>
                </div>
              </PixelCard>
            </motion.div>
            
            {/* Education RPG Quest Log */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PixelCard variant="gameboy" className="p-6">
                <div className="bg-black/80 p-4 rounded">
                  <h3 className="font-pixel text-neon-green text-sm mb-4">QUEST LOG: EDUCATION</h3>
                  
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-4 h-4 bg-neon-yellow mt-1 flex-shrink-0"></div>
                      <div>
                        <div className="font-pixel text-xs text-neon-cyan">PARUL UNIVERSITY</div>
                        <div className="text-xs text-white">2022-2026 • BTech CSE</div>
                        <div className="text-xs text-neon-yellow">CGPA: 7.21</div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="flex items-start space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-4 h-4 bg-neon-green mt-1 flex-shrink-0"></div>
                      <div>
                        <div className="font-pixel text-xs text-neon-cyan">ST. XAVIER'S HIGH SCHOOL</div>
                        <div className="text-xs text-white">ISC PCM</div>
                        <div className="text-xs text-neon-yellow">Score: 61.4%</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </PixelCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 bg-medium-gray/10 dark:bg-pixel-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl mb-4 text-neon-cyan">SKILL_TREE.json</h2>
            <div className="w-24 h-1 bg-neon-pink mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <PixelCard className="p-4 text-center hover:bg-opacity-20 transition-colors cursor-pointer">
                  <div className="text-3xl mb-2">{skill.emoji}</div>
                  <div className={`font-pixel text-xs ${skill.color}`}>{skill.name}</div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl mb-4 text-neon-yellow">PROJECTS.gameboy</h2>
            <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sign Language Translator */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <PixelCard variant="gameboy" className="p-6">
                <div className="bg-black/90 p-6 rounded">
                  <div className="mb-4">
                    <div className="font-pixel text-neon-green text-sm mb-2">LEVEL 1</div>
                    <h3 className="font-pixel text-neon-cyan text-lg">SIGN LANGUAGE TRANSLATOR</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm text-white">
                    <p>Real-time ASL detection with TTS conversion</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-neon-green text-black px-2 py-1 font-pixel text-xs">PYTHON</span>
                      <span className="bg-neon-pink text-black px-2 py-1 font-pixel text-xs">OPENCV</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-4">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-border bg-neon-green text-black px-4 py-2 font-pixel text-xs hover:bg-neon-pink transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-3 h-3" />
                      GITHUB
                    </motion.a>
                  </div>
                </div>
              </PixelCard>
            </motion.div>
            
            {/* BrailleBridge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <PixelCard variant="gameboy" className="p-6">
                <div className="bg-black/90 p-6 rounded">
                  <div className="mb-4">
                    <div className="font-pixel text-neon-green text-sm mb-2">LEVEL 2</div>
                    <h3 className="font-pixel text-neon-cyan text-lg">BRAILLEBRIDGE</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm text-white">
                    <p>OCR + Braille converter for visually impaired</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-neon-yellow text-black px-2 py-1 font-pixel text-xs">FLASK</span>
                      <span className="bg-neon-cyan text-black px-2 py-1 font-pixel text-xs">REACT</span>
                      <span className="bg-retro-purple text-white px-2 py-1 font-pixel text-xs">OCR</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-4">
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-border bg-neon-green text-black px-4 py-2 font-pixel text-xs hover:bg-neon-pink transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-3 h-3" />
                      GITHUB
                    </motion.a>
                  </div>
                </div>
              </PixelCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-medium-gray/10 dark:bg-pixel-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl mb-4 text-retro-purple">TROPHY_ROOM.hall</h2>
            <div className="w-24 h-1 bg-neon-green mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <PixelCard className="p-6 text-center hover:bg-opacity-20 transition-colors cursor-pointer">
                  <div className="text-4xl mb-3">{cert.emoji}</div>
                  <div className={`font-pixel text-xs ${cert.color} mb-2`}>{cert.name}</div>
                  <div className="text-xs text-medium-gray dark:text-off-white">{cert.org}</div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl mb-4 text-neon-green">CONTACT_DIALOG.box</h2>
            <div className="w-24 h-1 bg-neon-pink mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PixelCard className="p-8 relative">
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 bg-neon-pink"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-2 bg-white dark:bg-dark-gray flex items-center justify-center">
                  <Mail className="text-neon-pink w-4 h-4" />
                </div>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="font-pixel text-lg text-neon-cyan mb-4">READY TO CONNECT?</div>
                  <p className="font-inter text-medium-gray dark:text-off-white">
                    Let's build something amazing together! I'm always open to discussing new opportunities and exciting projects.
                  </p>
                  
                  <div className="space-y-4">
                    <motion.a
                      href="mailto:vikasrajput3270@gmail.com"
                      className="flex items-center space-x-3 text-medium-gray dark:text-off-white hover:text-neon-green transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Mail className="text-neon-pink w-5 h-5" />
                      <span>vikasrajput3270@gmail.com</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-medium-gray dark:text-off-white hover:text-neon-cyan transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Linkedin className="text-neon-cyan w-5 h-5" />
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                    
                    <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-medium-gray dark:text-off-white hover:text-neon-yellow transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="text-neon-yellow w-5 h-5" />
                      <span>GitHub Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                    
                    <motion.a
                      href="https://hackerrank.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-medium-gray dark:text-off-white hover:text-neon-green transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Code2 className="text-neon-green w-5 h-5" />
                      <span>HackerRank Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
                
                <PixelCard variant="gameboy" className="p-6">
                  <div className="bg-black/90 p-6 rounded">
                    <div className="font-pixel text-neon-green text-sm mb-4">QUICK STATS</div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neon-cyan">Location:</span>
                        <span className="text-white">Jabalpur, India</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neon-cyan">Status:</span>
                        <span className="text-neon-green">Available</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neon-cyan">Focus:</span>
                        <span className="text-white">AI & Accessibility</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neon-cyan">Languages:</span>
                        <span className="text-white">Hindi, English</span>
                      </div>
                    </div>
                  </div>
                </PixelCard>
              </div>
            </PixelCard>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-gray py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="font-pixel text-neon-green text-sm mb-4">
            © 2024 VIKAS SINGH RAJPUT - BUILT WITH ❤️ & PIXELS
          </div>
          <div className="text-xs text-medium-gray">
            Designed with React + TailwindCSS + Framer Motion
          </div>
        </div>
      </footer>
    </div>
  );
}
