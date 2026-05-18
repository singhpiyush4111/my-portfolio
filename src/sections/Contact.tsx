import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Linkedin,
  MapPin,
  Send,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/animations/FadeIn";

// ── EmailJS config ──
const EMAILJS_SERVICE_ID = "service_3uqbjaj";
const EMAILJS_TEMPLATE_ID = "template_r927lye";
const EMAILJS_PUBLIC_KEY = "-HiPwgRigyp0RinHp";

// ── WhatsApp config ──
const WHATSAPP_NUMBER = "918700556837";
const WHATSAPP_MESSAGE =
  "Hi Piyush, I saw your portfolio and wanted to connect!";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "singhpiyush4111@gmail.com",
    href: "mailto:singhpiyush4111@gmail.com",
    description: "Best for project inquiries",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8700556837",
    href: "tel:+918700556837",
    description: "Available Mon–Fri, 10am–6pm",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "piyush-singh-b0a097224",
    href: "https://www.linkedin.com/in/piyush-singh-b0a097224/",
    description: "Connect professionally",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Faridabad, Haryana India",
    href: null,
    description: "Open to remote & hybrid",
  },
];

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_name_initial: formData.name.charAt(0).toUpperCase(),
          from_email: formData.email,
          message: formData.message,
          to_name: "Piyush",
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Floating WhatsApp Button ── */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl"
        style={{
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20" />
        <WhatsAppIcon size={26} />
      </motion.a>

      {/* ── Contact Section ── */}
      <section
        id="contact"
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        aria-label="Contact section"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ghost text */}
        <div className="absolute bottom-8 right-0 -z-10 select-none pointer-events-none overflow-hidden">
          <span
            className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px hsl(var(--accent) / 0.08)",
            }}
          >
            CONTACT
          </span>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <FadeIn className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[hsl(var(--accent))] mb-3 tracking-[0.2em] uppercase">
                  Get In Touch
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                  Let's Build
                  <br />
                  <span className="text-[hsl(var(--accent))]">Something.</span>
                </h2>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed md:text-right">
                Open to full-time roles, freelance projects, and interesting
                backend challenges.
              </p>
            </div>
            <div className="mt-8 h-px bg-gradient-to-r from-[hsl(var(--accent))]/60 via-border to-transparent" />
          </FadeIn>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* ── LEFT ── */}
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="space-y-3">
                {contactLinks.map((item, i) => {
                  const Tag = item.href ? motion.a : motion.div;
                  const extraProps = item.href
                    ? {
                        href: item.href,
                        target:
                          item.label !== "Email" && item.label !== "Phone"
                            ? "_blank"
                            : undefined,
                        rel: "noopener noreferrer",
                      }
                    : {};

                  return (
                    <Tag
                      key={item.label}
                      {...(extraProps as any)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      whileHover={item.href ? { x: 6 } : {}}
                      className={`flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-muted/30 transition-all duration-200 group ${
                        item.href
                          ? "hover:border-[hsl(var(--accent))]/40 hover:bg-[hsl(var(--accent))]/5 cursor-pointer"
                          : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center shrink-0 group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                        <item.icon
                          size={18}
                          className="text-[hsl(var(--accent))]"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground mb-0.5">
                          {item.description}
                        </p>
                        <p className="text-sm font-semibold text-foreground truncate">
                          {item.value}
                        </p>
                      </div>
                      {item.href && (
                        <ArrowUpRight
                          size={14}
                          className="text-muted-foreground/40 group-hover:text-[hsl(var(--accent))] transition-colors shrink-0"
                        />
                      )}
                    </Tag>
                  );
                })}

                {/* WhatsApp card */}
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.47 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#25d366]/25 bg-[#25d366]/5 hover:bg-[#25d366]/10 hover:border-[#25d366]/45 transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25d366]/15 flex items-center justify-center shrink-0 group-hover:bg-[#25d366]/25 transition-colors text-[#25d366]">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Message directly
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      WhatsApp Chat
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground/40 group-hover:text-[#25d366] transition-colors shrink-0"
                  />
                </motion.a>
              </div>

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-5 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-600">
                  Available for new opportunities
                </span>
              </motion.div>
            </FadeIn>

            {/* ── RIGHT: Form ── */}
            <FadeIn delay={0.2} className="lg:col-span-3">
              <div className="relative rounded-2xl border border-border/60 bg-muted/20 p-7 md:p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[hsl(var(--accent))]/5 rounded-bl-[80px] pointer-events-none" />
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[hsl(var(--accent))]/40" />

                <h3 className="text-lg font-bold text-foreground mb-6">
                  Send a Message
                </h3>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4">
                      <CheckCircle2 size={28} className="text-emerald-500" />
                    </div>
                    <h4 className="text-base font-bold text-foreground mb-1">
                      Message Sent!
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Email delivered to Piyush. I'll reply within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-red-500/8 border border-red-500/20 text-sm text-red-500"
                      >
                        <AlertCircle size={15} />
                        Failed to send. Please try{" "}
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-medium"
                        >
                          WhatsApp
                        </a>{" "}
                        instead.
                      </motion.div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Name
                        </label>
                        <Input
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background/80 border-border/60 focus:border-[hsl(var(--accent))] focus-visible:ring-[hsl(var(--accent))]/20 rounded-lg h-11 text-sm"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background/80 border-border/60 focus:border-[hsl(var(--accent))] focus-visible:ring-[hsl(var(--accent))]/20 rounded-lg h-11 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-background/80 border-border/60 focus:border-[hsl(var(--accent))] focus-visible:ring-[hsl(var(--accent))]/20 rounded-lg text-sm resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white h-12 text-sm font-semibold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-[hsl(var(--accent))]/20"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} />
                          Send Message
                        </span>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground/50 pt-1">
                      Or reach out instantly via{" "}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25d366] hover:underline font-medium"
                      >
                        WhatsApp
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
