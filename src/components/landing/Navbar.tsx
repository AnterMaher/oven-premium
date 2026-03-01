import { useState } from "react";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "خدماتنا", href: "#services" },
  { label: "لماذا نحن", href: "#trust" },
  { label: "كيف نعمل", href: "#process" },
  { label: "تواصل معنا", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" // قللنا شفافية البوردر لراحة العين
      style={{
        background: "rgba(11, 13, 15, 0.9)", // خلفية داكنة متناسقة مع التصميم
        backdropFilter: "blur(12px)",
      }}
    >
      <nav
       className="w-full flex items-center justify-between px-4 py-4" dir="rtl"
      >
        {/* Brand - اللوجو */}
        <a href="#" className="text-xl md:text-2xl font-black tracking-tighter">
          <span className="text-gradient-gold">فرن</span>
          <span className="text-white ml-1">بريميوم</span>
        </a>

        {/* Desktop Nav - الروابط */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-premium-gold transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA - زر الاتصال */}
        <div className="hidden md:block">
          <Button 
            onClick={() => (window.location.href = "tel:+96650000000")}
            className="glow-orange gap-2 rounded-full px-6 font-bold"
          >
            <Phone className="h-4 w-4" />
            اتصل الآن
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#0b0d0f] border-border/20 w-[280px] p-8"
            >
              <SheetTitle className="text-white text-right mb-8 border-b border-white/10 pb-4">
                القائمة
              </SheetTitle>
              <div className="flex flex-col gap-6" dir="rtl">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 text-lg font-bold hover:text-premium-gold transition-colors border-b border-white/5 pb-2"
                  >
                    {link.label}
                  </a>
                ))}
                
                <Button
                  onClick={() => (window.location.href = "tel:+96650000000")}
                  className="glow-orange rounded-full font-bold h-12 mt-4"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;