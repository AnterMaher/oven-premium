import { Headset, Award, Users } from 'lucide-react';
import { motion } from "framer-motion";

// const stats = [
  //   { icon: Headset, value: "+5,000", label: "عميل راضٍ", color: "text-primary" },
  //   { icon: Award, value: "100%", label: "ضمان ذهبي", color: "text-accent" },
  //   { icon: Users, value: "24/7", label: "دعم فني", color: "text-primary" },
// ];
const stats = [
  {
    icon: Users ,
    value: "5,000+",
    label:"عميل راضٍ", // رقم تسويقي قوي بيدي ثقة
    color: "text-primary",
  },
  {
    icon: Award ,
    value: "100%",
    label: "ضمان معتمد", // بناءً على طلب العميل "بضمان"
    color: "text-accent" 
  },
  {
    icon: Headset ,
    value: "24/7",
    label: "خدمة فورية بالرياض", // بناءً على طلب العميل "خدمة فورية"
    color: "text-primary",
  },
];
const TrustSection = () => {
  return (
    <section id="trust" className="py-24 md:py-32 relative" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, hsl(43 72% 55% / 0.5), transparent)",
            }}
          />

          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
            لماذا يثق بنا{" "}
            <span className="text-gradient-gold">آلاف العملاء؟</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            نفخر بتقديم أعلى مستويات الخدمة والجودة في صيانة وتنظيف الأفران
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${stat.color === "text-primary" ? "bg-primary/15" : "bg-accent/15"}`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div
                  className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border-2 border-accent/50 px-6 py-3 glow-gold">
              <Award className="h-5 w-5 text-accent" />
              <span className="font-bold text-accent">
                ضمان ذهبي شامل على جميع خدماتنا
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
