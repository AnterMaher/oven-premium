import { Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20"
      dir="rtl"
    >
      {/* Background orbs - كما هي */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(24 95% 53% / 0.4), transparent)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(43 72% 55% / 0.3), transparent)",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            الخدمة الأولى في الرياض
          </span>
        </motion.div>

        {/* Headline - تم تصغير حجم الخط قليلاً في الموبايل لتجنب التداخل */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 px-2"
        >
          نُعيد لفرنك
          <br />
          <span className="text-gradient-gold">بريقه الأصلي</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-4"
        >
          خبراء صيانة وتنظيف الأفران في الرياض. نقدم خدمة احترافية بأعلى معايير
          الجودة مع ضمان شامل على جميع أعمالنا
        </motion.p>

        {/* --- 1. تحديث الزراير لتكون متساوية في الموبايل --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto px-4 sm:px-0"
        >
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto glow-orange text-base font-bold h-14 px-8 rounded-full"
          >
            <Phone className="w-5 h-5 ml-2" />
            احجز موعدك الآن
          </Button>

          <Button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            className="w-full sm:w-auto h-14 px-8 rounded-full border-accent text-accent hover:bg-accent/10 font-bold gap-2"
          >
            تعرّف على خدماتنا
            <ChevronDown className="h-5 w-5" />
          </Button>
        </motion.div>

        {/* --- 2. تحديث قسم الأرقام ليكون متناسقاً ولا يتداخل في الموبايل --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-2 sm:gap-16 mt-16 pt-8 border-t border-border/30 w-full max-w-3xl mx-auto px-2"
        >
          {[
            { num: "5000+", label: "عميل راضٍ" },
            { num: "10+", label: "سنوات خبرة" },
            { num: "100%", label: "رضا مضمون" },
          ].map((stat) => (
            <div
              key={stat.num}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-gradient-gold">
                {stat.num}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1 whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - كما هي */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
