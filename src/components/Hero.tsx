"use client";

import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-paper py-20 lg:py-32">
      {/* Abstract Background Shapes */}
      <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform opacity-10">
        <div className="h-96 w-96 rounded-full bg-primary blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 transform opacity-10">
        <div className="h-96 w-96 rounded-full bg-secondary blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="mb-4 inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
              <span className="mr-2">Authentic Minang Taste</span>
              <ChevronRight size={14} />
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-primary md:text-6xl font-playfair">
              Cita Rasa <span className="text-secondary italic underline decoration-secondary/30">Minang</span> 
              <br /> Langsung di Meja Anda.
            </h1>
            <p className="mb-8 max-w-lg text-lg text-accent/80 font-outfit leading-relaxed">
              Nikmati kelezatan Rendang Daging, Ayam Pop, dan aneka masakan Padang autentik lainnya dengan resep warisan keluarga yang turun-temurun.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                Pesan Sekarang
                <ArrowRight size={20} />
              </a>
              <a
                href="#about"
                className="rounded-full border-2 border-secondary/20 px-8 py-4 text-lg font-semibold text-accent transition-all hover:bg-secondary/5"
              >
                Tentang Kami
              </a>
            </div>
          </motion.div>

          {/* Hero Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl shadow-accent/20">
              <img
                src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=1000"
                alt="Padang Food Platter"
                className="h-[500px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 z-20 hidden rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md sm:block border border-secondary/20 ring-1 ring-black/5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <Utensils size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent/60">Rating 5 Bintang</p>
                  <p className="text-lg font-bold text-accent">Rasa Autentik No. 1</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Internal Utensils icon re-declaration because it's used in floating card but not imported yet in this file
// (Actually it's better to import it)
import { Utensils } from "lucide-react";

export default Hero;
