"use client";

import React, { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        {/* Navbar with Cart Toggle */}
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        
        <main className="flex-1">
          <Hero />
          
          <div id="menu">
            <MenuSection />
          </div>

          {/* About Section (Simplified) */}
          <section id="about" className="bg-accent py-24 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div className="relative">
                   <img 
                    src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1000" 
                    alt="Authentic Spices" 
                    className="rounded-3xl shadow-2xl ring-1 ring-white/10"
                   />
                   <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full border-8 border-accent bg-primary p-4 shadow-2xl flex items-center justify-center text-center">
                      <p className="text-xs font-bold uppercase tracking-tighter">Sejak <br /><span className="text-2xl font-black">1995</span></p>
                   </div>
                </div>
                <div>
                  <h2 className="mb-6 text-4xl font-bold font-playfair">Rahasia Di Balik <span className="text-secondary italic">Cita Rasa</span> Kami</h2>
                  <p className="mb-8 text-lg font-light text-white/70 leading-relaxed font-outfit">
                    Kami percaya bahwa makanan bukan sekadar pengisi perut, melainkan warisan budaya yang harus dijaga keasliannya. Itulah mengapa setiap bumbu rendang kami ditumbuk secara manual, dan ayam pop kami direbus dengan santan murni kualitas terbaik.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Bumbu Rempah Pilihan Langsung dari Ranah Minang",
                      "Daging Sapi Segar & Berkualitas Setiap Hari",
                      "Resep Keluarga Turun-Temurun (Autentik)",
                      "Kebersihan Berstandar Internasional"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-secondary"></div>
                        <span className="text-sm font-medium text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Global Cart Drawer */}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}
