import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
const phoneNumber = "201229574898"; 

const message = "السلام عليكم، محتاج خدمة صيانة لفرني من موقعكم.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center animate-pulse-glow transition-transform hover:scale-110"
      style={{ background: "hsl(142 70% 45%)" }}
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="h-7 w-7 text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
