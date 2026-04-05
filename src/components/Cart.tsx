"use client";

import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2, Send } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { generateWhatsAppLink } from '@/utils/whatsapp';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');

  const handleOrder = () => {
    if (!customerName || !address) {
      alert("Mohon isi Nama dan Alamat pengiriman.");
      return;
    }
    const link = generateWhatsAppLink(cart, totalPrice, customerName, address);
    window.open(link, '_blank');
    clearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-accent/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 z-[70] flex w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-secondary/10 px-6 py-6 font-playfair">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-primary">
                <ShoppingCart className="text-secondary" /> Pesanan Anda
              </h2>
              <button 
                onClick={onClose}
                className="rounded-full p-2 text-accent hover:bg-secondary/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 rounded-full bg-secondary/10 p-6 text-secondary">
                    <Utensils size={48} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-accent font-playfair">Keranjang Kosong</h3>
                  <p className="text-accent/60">Sepertinya Anda belum memilih menu lezat kami.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 rounded-2xl bg-paper p-3 ring-1 ring-black/5">
                      <img src={item.image} alt={item.name} className="h-16 w-16 rounded-xl object-cover" />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between">
                          <h4 className="font-bold text-accent">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-accent/40 hover:text-primary transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="mb-2 text-sm text-primary font-semibold">Rp {item.price.toLocaleString('id-ID')}</p>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-black/5"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-5 text-center font-bold text-accent">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-black/5 text-primary"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Checkout Form */}
            {cart.length > 0 && (
              <div className="border-t border-secondary/10 bg-paper/50 p-6 space-y-4">
                <div className="space-y-4">
                   <h3 className="text-lg font-bold text-accent font-playfair">Informasi Pengiriman</h3>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-accent/60">Nama Lengkap</label>
                    <input 
                      type="text" 
                      placeholder="Contoh: Budi Santoso"
                      className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ring-1 ring-black/5 bg-white"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-accent/60">Alamat Lengkap</label>
                    <textarea 
                      placeholder="Alamat lengkap tujuan pengiriman"
                      rows={2}
                      className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ring-1 ring-black/5 bg-white resize-none"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-secondary/10">
                  <span className="text-accent/60 font-medium font-outfit">Total Pembayaran</span>
                  <span className="text-2xl font-bold text-primary font-playfair">Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>

                <button 
                  onClick={handleOrder}
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-primary py-4 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send size={20} />
                  Pesan via WhatsApp
                </button>
                <p className="text-center text-[10px] text-accent/40 font-outfit uppercase tracking-widest font-bold">
                   Pembayaran Transfer Bank BCA/Mandiri
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Internal Utensils icon re-declaration for cart placeholder
import { Utensils } from "lucide-react";

export default Cart;
