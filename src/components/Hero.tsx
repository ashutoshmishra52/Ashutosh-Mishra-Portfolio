import React from 'react';
import { Github, Linkedin, ExternalLink, File } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Elements (Particles etc.) */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section (Text Content) */}
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-primary font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
              Ashutosh Mishra
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              AI Developer & SEO Writer
            </p>
          </div>
          
          <p className="text-base md:text-lg max-w-md mx-auto md:mx-0 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Building intelligent solutions with AI & crafting SEO-optimized content.
          </p>
          
          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-full transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1">
              Hire Me
            </a>
            <a href="#projects" className="px-6 py-3 bg-secondary text-foreground rounded-full transition-all hover:shadow-lg hover:-translate-y-1">
              View My Work
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-5 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://www.linkedin.com/in/ashutosh-mishra-dev/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/ashutoshmishra52" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://medium.com/@codewithashutosh" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <File size={20} />
            </a>
            <a href="https://codewithashutosh.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        
        {/* Right Section (Profile Image) */}
        <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass animate-float border-4 border-primary/20">
            <Avatar className="w-full h-full">
              <AvatarImage src="/lovable-uploads/1000219208_11zon (2).png" alt="Ashutosh Mishra" className="object-cover" />
              <AvatarFallback className="text-6xl font-bold text-primary">AM</AvatarFallback>
            </Avatar>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
