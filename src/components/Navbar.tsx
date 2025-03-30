import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-slate-200/20 dark:border-slate-800/20' 
          : 'py-5 md:py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold gradient-text">AM.</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu (Fixed and Fullscreen) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-white/90 dark:bg-black/90 
        backdrop-blur-xl z-50 transition-all duration-300 ease-in-out 
        ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}

        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-primary"
          aria-label="Close menu"
        >
          <X className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;