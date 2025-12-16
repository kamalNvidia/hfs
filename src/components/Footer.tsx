import { Utensils, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Utensils className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold">Hemlata Food Services</span>
            </div>
            <p className="text-gray-400 mb-4" style={{ lineHeight: '1.5' }}>
              Creating memorable culinary experiences for over 15 years. Your satisfaction is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Credentials
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-500 transition-colors">
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Social Gatherings</li>
              <li>Home Parties</li>
              <li>Custom Catering</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+91 98765 43210</li>
              <li>info@hemlatafoodservices.com</li>
              <li style={{ lineHeight: '1.5' }}>
                123 Food Street<br />
                Mumbai, Maharashtra 400001
              </li>
              <li>Mon - Sun: 9 AM - 9 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Hemlata Food Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
