import { MenuItem } from "@/context/CartContext";

export const generateWhatsAppLink = (
  items: (MenuItem & { quantity: number })[],
  totalPrice: number,
  customerName: string,
  address: string
) => {
  const phoneNumber = "6281234567890"; // Placeholder, can be replaced by user
  
  const orderList = items
    .map((item, index) => `${index + 1}. *${item.name}* (${item.quantity}x) - Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`)
    .join("\n");

  const message = `Halo *Resto Padang Pro*! 🥘\n\nSaya ingin memesan menu berikut:\n\n${orderList}\n\n*Total Pesanan:* Rp ${totalPrice.toLocaleString('id-ID')}\n\n*Data Pemesan:* \nNama: ${customerName}\nAlamat: ${address}\n\n*Metode Pembayaran:* Transfer Bank\nMohon instruksi selanjutnya untuk transfer. Terima kasih!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
