import { useEffect, useRef } from 'react';
import { Github, Linkedin, ExternalLink, File } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Hero = () => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesContainerRef.current) return;
    
    // Create particles
    const container = particlesContainerRef.current;
    const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive count
    
    // Generate particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Randomize size
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Randomize position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Animation properties
      particle.style.opacity = (Math.random() * 0.5 + 0.3).toString();
      
      // Add to container
      container.appendChild(particle);
      
      // Random floating animation
      animate(particle);
    }
    
    function animate(particle: HTMLDivElement) {
      const duration = Math.random() * 30000 + 20000; // 20-50s
      const xDirection = Math.random() > 0.5 ? 1 : -1;
      const yDirection = Math.random() > 0.5 ? 1 : -1;
      const xDistance = Math.random() * 20 + 10;
      const yDistance = Math.random() * 20 + 10;
      
      const keyframes = [
        { transform: `translate(0, 0)`, opacity: (Math.random() * 0.5 + 0.3) },
        { transform: `translate(${xDirection * xDistance}px, ${yDirection * yDistance}px)`, opacity: (Math.random() * 0.5 + 0.5) },
        { transform: `translate(0, 0)`, opacity: (Math.random() * 0.5 + 0.3) }
      ];
      
      const animation = particle.animate(keyframes, {
        duration,
        iterations: Infinity
      });
      
      return animation;
    }
    
    return () => {
      // Cleanup particles on unmount
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
      {/* Particles Background */}
      <div ref={particlesContainerRef} className="particles-background"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6 text-center md:text-left order-2 md:order-1">
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
          
          <div className="flex gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-full transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1">
              Hire Me
            </a>
            <a href="#projects" className="px-6 py-3 bg-secondary text-foreground rounded-full transition-all hover:shadow-lg hover:-translate-y-1">
              View My Work
            </a>
          </div>
          
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
        
        <div className="flex justify-center md:justify-end order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass animate-float border-4 border-primary/20">
            <Avatar className="w-full h-full">
              <AvatarImage src="/lovable-uploads/5b3793f0-c0db-4c69-8d26-b4826b06e7d3.png" alt="Ashutosh Mishra" className="object-cover" />
              <AvatarFallback className="text-6xl font-bold text-primary">AM</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
