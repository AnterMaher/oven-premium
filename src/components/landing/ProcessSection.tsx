import { Phone, Home, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { num: "١", icon: Phone, title: "اتصل بنا", desc: "تواصل معنا عبر الهاتف أو الواتساب" },
  { num: "٢", icon: Home, title: "نزور منزلك", desc: "فريقنا يصل إليك في الوقت المحدد" },
  { num: "٣", icon: Sparkles, title: "فرنك كالجديد", desc: "نسلمك فرنك بأفضل حالة ممكنة" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">كيف <span className="text-gradient-gold">نعمل؟</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 right-[16.5%] left-[16.5%] h-0.5 bg-gradient-to-l from-primary via-accent to-primary opacity-30" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative text-center flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/50 flex items-center justify-center mb-6 relative z-10">
                  <span className="text-3xl font-black text-primary">{step.num}</span>
                </div>
                <step.icon className="h-6 w-6 text-accent mb-3" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
