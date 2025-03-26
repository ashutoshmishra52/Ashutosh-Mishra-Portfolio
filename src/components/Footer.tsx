
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-secondary/80 dark:bg-black/30 border-t border-slate-200/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text">Ashutosh Mishra</a>
            <p className="text-sm text-muted-foreground mt-1">Full-Stack Developer & AI Enthusiast</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex gap-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </div>
            
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {currentYear} Made with <Heart className="inline-block h-3 w-3 text-red-500" /> by Ashutosh Mishra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
