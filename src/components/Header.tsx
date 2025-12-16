import { Menu, X, Utensils } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <Utensils className="w-8 h-8 text-orange-600" />
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              Hemlata Food Services
            </span>
          </div>

          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
              Services
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
              Menu
            </button>
            <button onClick={() => scrollToSection('certificates')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
              Credentials
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm">
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-orange-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('menu')} className="block text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Menu
            </button>
            <button onClick={() => scrollToSection('certificates')} className="block text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Credentials
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
