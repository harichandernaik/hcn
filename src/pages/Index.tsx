
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Github, Youtube, Instagram, ExternalLink, Moon, Sun, Menu, X, Code, Smartphone, Cpu, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent('Portfolio Contact Form Submission');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `);
    const mailtoLink = `mailto:harichandernaik@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!"
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Updated projects from resume
  const projects = [{
    title: "E-Commerce Website - ShopHub",
    description: "Designed and developed a responsive and user-friendly e-commerce platform. Implemented product filtering, cart management, and a mock checkout flow. Integrated state management with Redux for efficient cart and product handling.",
    tech: ["React.js", "Tailwind CSS", "Redux Toolkit", "Vercel"],
    github: "https://github.com/harichandernaik",
    demo: "https://shophub-coral.vercel.app/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "AI Fake Image & Video Detection System",
    description: "Built an AI-powered tool for detecting manipulated images and videos. Integrated a Flask backend with ML models for media analysis. Enabled real-time upload and detection with results displayed in a clean UI.",
    tech: ["React.js", "Flask", "Machine Learning", "Python", "Tailwind CSS"],
    github: "https://github.com/harichandernaik",
    demo: "https://fakedetection.vercel.app/",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Smart Patient Management System",
    description: "Developed a web app for managing patient data, appointments, and health records. Included role-based login for doctors and patients with secure authentication. Implemented CRUD operations for efficient health record management.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/harichandernaik",
    demo: "https://smartdiagnosis.vercel.app/",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }];

  // Updated skills from resume
  const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Flask (Python)", "Node.js", "MySQL", "MongoDB", "Vercel", "Netlify", "UI/UX Design Tools", "Figma", "Canva", "YouTube video editing", "Problem-solving", "Team management", "Communication", "C", "Java", "Python", "Web Development", "Content Creation"];
  const services = [{
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications using modern technologies like React, Flask, and cloud services."
  }, {
    icon: Cpu,
    title: "AI Integration",
    description: "Implementing AI and machine learning solutions to enhance user experience and automate processes."
  }, {
    icon: Smartphone,
    title: "Freelance Tech Professional",
    description: "Custom software solutions and technical consulting for businesses and startups."
  }, {
    icon: Video,
    title: "Content Creator",
    description: "Educational content creation about programming, AI, and technology trends on YouTube."
  }];
  return <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HCN
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
                <a href="#services" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Services</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
              </div>
            </motion.div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hari Chander Naik
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Web Developer | Content Creator | Coder | Freelance Tech Professional
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                Computer Science student skilled in Web Development, Coding, Content Creation, and Freelance Tech Professional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Download className="mr-2 h-4 w-4" />
                      Check Resume
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                    <DialogHeader>
                      <DialogTitle>Resume - Hari Chander Naik</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <img src="public/assets/resume1.png" alt="Hari Chander Naik Resume - Page 1" className="w-full h-auto rounded-lg shadow-lg" />
                      <img src="public/assets/resume2.png" alt="Hari Chander Naik Resume - Page 2" className="w-full h-auto rounded-lg shadow-lg" />
                      <img src="public/assets/resume3.png" alt="Hari Chander Naik Resume - Page 3" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 scale-110"></div>
                <img src="public/assets/profile.jpg" alt="Hari Chander Naik" className="relative w-80 h-80 rounded-full object-cover shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Computer Science student skilled in Web Development, Coding, Content Creation, and Freelance Tech Professional. 
              Skilled in React, Flask, and Python. Certified in C, Java, Python, and Web Dev. Passionate about building real-world web solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Overview</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Currently pursuing B.Tech in Computer Science and Engineering from Geethanjali College of Engineering & Technology (GCET). 
                I have developed expertise in full-stack development, AI integration, and problem-solving through various projects and internships.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Work History</h4>
                  <p className="text-gray-600 dark:text-gray-300">Intern, Vault of Codes - Hyderabad, India (April 2025 - June 2025)</p>
                  <p className="text-gray-600 dark:text-gray-300">Tutor, Online - Hyderabad, India (December 2024 - February 2025)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">B.Tech Computer Science, GCET (2023-2027) </p>
                  <p className="text-gray-600 dark:text-gray-300">Intermediate - Ideal Junior College MPC (2021-2023) - 95.40%</p>
                  <p className="text-gray-600 dark:text-gray-300">School - GAUTAMI TALENT SCHOOL (2021) - 100.00%</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => <motion.span key={skill} initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {skill}
                  </motion.span>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in web development, AI, and problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => <motion.div key={project.title} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => <span key={tech} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded text-xs">
                          {tech}
                        </span>)}
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm" onClick={() => window.open(project.github, '_blank')}>
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                      <Button size="sm" onClick={() => window.open(project.demo, '_blank')}>
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I offer a range of services to help bring your ideas to life with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }}>
                <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <service.icon className="h-12 w-12 mx-auto text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Resume</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Download my full resume or view it online to learn more about my experience and qualifications.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Download className="mr-2 h-4 w-4" />
                  Check Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle>Resume - Hari Chander Naik</DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-4">
                  <img src="public/assets/resume1.png" alt="Hari Chander Naik Resume - Page 1" className="w-full h-auto rounded-lg shadow-lg" />
                  <img src="public/assets/resume2.png" alt="Hari Chander Naik Resume - Page 2" className="w-full h-auto rounded-lg shadow-lg" />
                  <img src="public/assets/resume3.png" alt="Hari Chander Naik Resume - Page 3" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to start a project together? Let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">harichandernaik@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">+91 9666277742</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">Hyderabad 500059, India</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" onClick={() => window.open('https://github.com/harichandernaik', '_blank')}>
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.open('https://youtube.com/@vlogsbyhcn?si=LyXEXbf08g0oesWy', '_blank')}>
                    <Youtube className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.open('https://www.instagram.com/hcn_369?igsh=emNjeDkwdTg0dDd5&utm_source=qr', '_blank')}>
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} required />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} required />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Hari Chander Naik
            </div>
            <p className="text-gray-400 mb-6">
              Web Developer | Content Creator | Coder | Freelance Tech Professional
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button variant="ghost" size="sm" onClick={() => window.open('https://github.com/harichandernaik', '_blank')}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.open('https://youtube.com/@vlogsbyhcn?si=LyXEXbf08g0oesWy', '_blank')}>
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.open('https://www.instagram.com/hcn_369?igsh=emNjeDkwdTg0dDd5&utm_source=qr', '_blank')}>
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Hari Chander Naik. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
