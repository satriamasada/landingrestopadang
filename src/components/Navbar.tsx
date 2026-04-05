"use client";

import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Utensils } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Tentang', href: '#about' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-primary p-2 text-secondary">
            <Utensils size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary font-playfair">
            Resto <span className="text-secondary">Padang</span> Pro
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-accent hover:text-primary transition-colors font-outfit"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onCartClick}
            className="relative rounded-full p-2 text-accent hover:bg-secondary/10 transition-colors"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>
          
          <button 
            className="rounded-full p-2 text-accent md:hidden hover:bg-secondary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-secondary/10 bg-paper md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-accent hover:text-primary transition-colors font-playfair"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-6 border-t border-secondary/10">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onCartClick();
                  }}
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-primary py-4 text-lg font-bold text-white shadow-lg shadow-primary/20"
                >
                  <ShoppingCart size={20} />
                  Lihat Keranjang {totalItems > 0 && `(${totalItems})`}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
