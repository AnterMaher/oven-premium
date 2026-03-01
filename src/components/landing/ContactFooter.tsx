
"use client"; // مهم جداً عشان بنستخدم useState و Form Submit
import { useState } from "react";
import { Phone, MapPin, Clock, Instagram, Twitter, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const ContactFooter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // حط الـ Access Key بتاعك هنا مكان الكلمة دي
    formData.append("access_key", "f409f334-3263-489a-a80e-bc3a296b5f8c"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        e.currentTarget.reset(); // تفريغ الفورم بعد النجاح
        setTimeout(() => setIsSuccess(false), 5000); // إخفاء رسالة النجاح بعد 5 ثواني
      } else {
        alert("حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
      }
    } catch (error) {
      alert("تأكد من اتصالك بالإنترنت.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer
      id="contact"
      className="py-24 md:py-32 border-t border-border/30"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            تواصل <span className="text-gradient-gold">معنا</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      اتصل بنا
                    </div>
                    <div className="font-bold" dir="ltr">
                      +966 50 000 0000
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">الموقع</div>
                    <div className="font-bold">
                      الرياض، المملكة العربية السعودية
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      ساعات العمل
                    </div>
                    <div className="font-bold">السبت - الخميس: ٨ص - ١٠م</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">أرسل رسالة</h3>
            
            {/* استخدمنا Form بدل Div وضفنا onSubmit */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* ضروري جداً إضافة name لكل input عشان Web3Forms يعرف يقرأ الداتا */}
              <Input
                name="name"
                required
                placeholder="الاسم الكامل"
                className="bg-background/50 border-border/50 rounded-xl h-12"
              />
              <Input
                name="phone"
                required
                placeholder="رقم الجوال"
                className="bg-background/50 border-border/50 rounded-xl h-12"
              />

              {/* حقل نوع الفرن */}
              <div className="mb-4">
                <select
                  name="oven_type"
                  required
                  className="w-full bg-background/50 border-border/50 rounded-xl h-12 px-3 text-base focus:outline-none focus:border-premium-orange focus:ring-1 focus:ring-premium-orange transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-premium-dark text-gray-400">اختر نوع الفرن</option>
                  <option value="غاز" className="bg-premium-dark text-white">فرن غاز</option>
                  <option value="كهرباء" className="bg-premium-dark text-white">فرن كهرباء</option>
                </select>
              </div>

              {/* حقل نوع الخدمة */}
              <div className="mb-4">
                <select
                  name="service_type"
                  required
                  className="w-full bg-background/50 border-border/50 rounded-xl h-12 px-3 text-base focus:outline-none focus:border-premium-orange focus:ring-1 focus:ring-premium-orange transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-premium-dark text-gray-400">الخدمة المطلوبة</option>
                  <option value="صيانة" className="bg-premium-dark text-white">صيانة وإصلاح</option>
                  <option value="تنظيف" className="bg-premium-dark text-white">تنظيف وتلميع</option>
                </select>
              </div>

              <textarea
                name="message"
                required
                placeholder="تفاصيل العطل أو رسالتك..."
                rows={4}
                className="flex w-full rounded-xl border border-border/50 bg-background/50 px-3 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-premium-orange focus-visible:ring-offset-2 resize-none"
              />

              {/* زرار الإرسال يتغير حسب الحالة */}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full rounded-xl h-12 font-bold text-base transition-all duration-300 ${
                  isSuccess ? "bg-green-600 hover:bg-green-700" : "glow-orange"
                }`}
              >
                {isSubmitting ? "جاري الإرسال..." : isSuccess ? (
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5"/> تم الإرسال بنجاح</span>
                ) : "إرسال الرسالة"}
              </Button>

            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="text-center mt-16 pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-sm">
            © ٢٠٢٦ فرن بريميوم. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
