import React, { useState } from "react";
import { Menu, X, Brain, Home, Info, Mail } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", icon: <Home size={16} />, href: "/" },
    { label: "About", icon: <Info size={16} />, href: "#" },
    { label: "Contact", icon: <Mail size={16} />, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Brain className="text-primary w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-gray-800">KawaAI</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {icon} {label}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="cursor-pointer px-4 py-2 rounded-md bg-primary text-black transition-colors text-sm font-medium shadow-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-fadeIn">
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {icon} {label}
              </a>
            ))}
            <button className="w-full px-4 py-2 rounded-md bg-primary text-black hover:bg-indigo-700 transition-colors text-sm font-medium shadow">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
