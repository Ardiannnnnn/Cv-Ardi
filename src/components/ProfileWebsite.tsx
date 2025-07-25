"use client";

import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, 
  Code, Smartphone, Palette, Globe, Star, ExternalLink, 
  ChevronDown, Menu, X, ArrowRight, Calendar, Clock
} from 'lucide-react';

interface ProfileData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    website: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
      instagram: string;
      dribbble: string;
    };
  };
  stats: Array<{
    number: string;
    label: string;
  }>;
  services: Array<{
    icon: string;
    title: string;
    description: string;
    features: string[];
  }>;
  skills: Array<{
    name: string;
    level: number;
  }>;
  portfolio: Array<{
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    tech: string[];
    links: {
      github?: string;
      demo: string;
    };
  }>;
  testimonials: Array<{
    name: string;
    position: string;
    content: string;
    rating: number;
    avatar: string;
  }>;
  experience: Array<{
    year: string;
    title: string;
    company: string;
    description: string;
  }>;
  blog: Array<{
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
  }>;
}

interface ProfileWebsiteProps {
  data: ProfileData;
}

const ProfileWebsite: React.FC<ProfileWebsiteProps> = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('All');

  const portfolioCategories = ['All', ...new Set(data.portfolio.map(item => item.category))];
  const filteredPortfolio = activePortfolioFilter === 'All' 
    ? data.portfolio 
    : data.portfolio.filter(item => item.category === activePortfolioFilter);

  const getIcon = (iconName: string) => {
    const icons: any = {
      Code: Code,
      Smartphone: Smartphone,
      Palette: Palette,
      Globe: Globe,
    };
    const IconComponent = icons[iconName] || Code;
    return <IconComponent size={32} />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              {data.personalInfo.name}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
                <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {data.personalInfo.name}
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-700 font-light">
                  {data.personalInfo.title}
                </h2>
                <p className="text-xl text-gray-600">
                  {data.personalInfo.tagline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Get In Touch
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Download CV
                </button>
              </div>

              <div className="flex space-x-6">
                <a href={data.personalInfo.social.github} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href={data.personalInfo.social.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={data.personalInfo.social.twitter} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href={data.personalInfo.social.instagram} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      {data.personalInfo.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-gray-600">Profile Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {data.personalInfo.bio}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Skills & Expertise</h3>
                <div className="space-y-4">
                  {data.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900">Experience Timeline</h3>
              <div className="space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {exp.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-gray-600 mt-2">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I offer a comprehensive range of digital services to help bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-blue-600 mb-6">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A showcase of my recent work and projects
            </p>

            {/* Portfolio Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActivePortfolioFilter(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activePortfolioFilter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project) => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.links.github && (
                      <a href={project.links.github} className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    <a href={project.links.demo} className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it - here's what my clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.blog.map((post, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                    Read More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and see how I can help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">{data.personalInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">{data.personalInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">{data.personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <a href={data.personalInfo.social.github} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href={data.personalInfo.social.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={data.personalInfo.social.twitter} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href={data.personalInfo.social.instagram} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">{data.personalInfo.name}</div>
            <p className="text-gray-400 mb-6">{data.personalInfo.title}</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href={data.personalInfo.social.github} className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href={data.personalInfo.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={data.personalInfo.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href={data.personalInfo.social.instagram} className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-gray-400">
              © 2024 {data.personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfileWebsite;
