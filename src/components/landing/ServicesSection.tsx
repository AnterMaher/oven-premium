import { Flame, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Flame ,
    title: "صيانة أفران الغاز",
    description:
      "فحص شامل وإصلاح لجميع أعطال أفران الغاز، وتسليك العيون، مع توفير قطع غيار أصلية لضمان عمل الفرن بكفاءة وأمان تام.",
    accent: "primary",
  },
  {
    icon: Zap ,
    title: "صيانة الأفران الكهربائية",
    description:
      "صيانة دقيقة للأنظمة الكهربائية، تغيير الهيترات التالفة، وإصلاح لوحات التحكم على يد فنيين محترفين بضمان معتمد.",
    accent: "accent",
  },
  {
    icon: Sparkles ,
    title: "تنظيف وتلميع الأفران",
    description:
      "إزالة الدهون المستعصية والرواسب المتراكمة باستخدام أفضل المواد الآمنة، لنعيد فرنك كالجديد تماماً في مكانك.",
    accent: "primary",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative" dir="rtl">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(24 95% 53% / 0.3), transparent)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            خدماتنا <span className="text-gradient-gold">المتميزة</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: i === 1 ? -16 : 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`glass rounded-2xl p-8 group hover:border-primary/50 transition-all duration-500 hover:glow-orange`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.accent === "primary" ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent"}`}
              >
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
