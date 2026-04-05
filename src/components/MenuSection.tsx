"use client";

import React, { useState } from 'react';
import { Plus, ShoppingCart, Heart } from 'lucide-react';
import { useCart, MenuItem } from '@/context/CartContext';
import { motion } from 'framer-motion';

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Rendang Daging',
    price: 25000,
    description: 'Daging sapi empuk dengan bumbu rendang Minang yang kaya rempah dan dimasak selama 8 jam.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=600',
    category: 'Lauk Utama',
  },
  {
    id: '2',
    name: 'Ayam Pop',
    price: 22000,
    description: 'Ayam kampung rebus santan dengan tekstur lembut, disajikan dengan sambal merah pedas manis.',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=600',
    category: 'Lauk Utama',
  },
  {
    id: '3',
    name: 'Dendeng Batokok',
    price: 24000,
    description: 'Daging sapi iris tipis yang dibakar dan dipukul (batokok) lalu disiram sambal ijo mantap.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600',
    category: 'Lauk Utama',
  },
  {
    id: '4',
    name: 'Gule Tunjang',
    price: 26000,
    description: 'Kikil/urat kaki sapi yang kenyal dimasak dengan bumbu gulai merah meresap.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=600',
    category: 'Lauk Utama',
  },
  {
    id: '5',
    name: 'Teh Talua',
    price: 15000,
    description: 'Minuman khas Minang dari teh, telur, dan jeruk nipis yang dikocok hingga berbusa.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600',
    category: 'Minuman',
  },
  {
    id: '6',
    name: 'Nasi Rames Padang',
    price: 18000,
    description: 'Seporsi nasi hangat lengkap dengan sayur nangka, daun singkong, sambal ijo, dan bumbu rendang.',
    image: 'https://images.unsplash.com/photo-1512058560366-cd242959b4fe?auto=format&fit=crop&q=80&w=600',
    category: 'Paket Hemat',
  }
];

const MenuSection = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Lauk Utama', 'Minuman', 'Paket Hemat'];

  const filteredItems = activeCategory === 'Semua' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary font-playfair">Menu Favorit Kami</h2>
          <p className="mx-auto max-w-2xl text-accent/60">
            Pilih dari berbagai pilihan menu autentik kami yang dibuat segar setiap hari dengan bahan-bahan berkualitas tinggi.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-secondary/10 text-accent hover:bg-secondary/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-2 shadow-xl shadow-accent/5 transition-all hover:-translate-y-1 hover:shadow-accent/10 sm:p-3 ring-1 ring-black/5"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-primary shadow-lg backdrop-blur-md transition-colors hover:bg-primary hover:text-white">
                  <Heart size={20} />
                </button>
                <div className="absolute bottom-4 left-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-accent shadow-md">
                  {item.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-bold text-accent font-playfair">{item.name}</h3>
                  <p className="text-lg font-bold text-primary">Rp {item.price.toLocaleString('id-ID')}</p>
                </div>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-accent/60">
                  {item.description}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-all hover:bg-primary active:scale-95"
                >
                  <Plus size={18} />
                  Tambah ke Keranjang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
