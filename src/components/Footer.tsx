"use client";

import React from 'react';
import { Utensils, Share2, Globe, Phone, MapPin, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-secondary/10 bg-accent py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="rounded-lg bg-primary p-2 text-secondary">
                <Utensils size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight font-playfair uppercase">
                Resto <span className="text-secondary">Padang</span> Pro
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-outfit">
              Menyajikan kelezatan masakan Minang autentik dengan bahan-bahan pilihan terbaik sejak tahun 1995.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="rounded-full bg-white/5 p-2 transition-colors hover:bg-primary">
                <Globe size={20} />
              </a>
              <a href="#" className="rounded-full bg-white/5 p-2 transition-colors hover:bg-primary">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold font-playfair border-b border-secondary/20 pb-2 inline-block">Jam Operasional</h4>
            <ul className="space-y-4 text-sm text-white/60 font-outfit">
              <li>Senin - Jumat: 09:00 - 21:00</li>
              <li>Sabtu - Minggu: 10:00 - 22:00</li>
              <li className="text-secondary font-bold">Terima Pesanan Online 24/7</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold font-playfair border-b border-secondary/20 pb-2 inline-block">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-white/60 font-outfit">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0" size={18} />
                <span>Jl. Minangkabau No. 123, Padang, Sumatera Barat</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h4 className="mb-6 text-lg font-bold font-playfair border-b border-secondary/20 pb-2 inline-block">Pembayaran Transfer</h4>
            <div className="space-y-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 font-outfit">
              <div className="flex items-center gap-3">
                <CreditCard className="text-secondary" size={20} />
                <div>
                   <p className="text-xs text-secondary font-bold uppercase">Bank BCA</p>
                   <p className="text-sm font-bold text-white">1234-5678-90</p>
                   <p className="text-[10px] text-white/40">a/n Resto Padang Pro</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="text-secondary" size={20} />
                <div>
                   <p className="text-xs text-secondary font-bold uppercase">Bank Mandiri</p>
                   <p className="text-sm font-bold text-white">0987-6543-210</p>
                   <p className="text-[10px] text-white/40">a/n Resto Padang Pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-8 text-center text-xs text-white/40 font-outfit uppercase tracking-widest">
          &copy; 2026 Resto Padang Pro. Dibuat dengan Cinta & Cita Rasa.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
