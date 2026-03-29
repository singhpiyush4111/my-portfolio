import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FadeIn } from '@/components/animations/FadeIn';

/**
 * Contact Section Component
 * Contact form and social links
 */
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      aria-label="Contact section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-medium text-[hsl(var(--accent))] mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach out
                  through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:singhpiyush4111@gmail.com"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:border-[hsl(var(--accent))]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                    <Mail size={20} className="text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">
                      singhpiyush4111@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+918700556837"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:border-[hsl(var(--accent))]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                    <Phone size={20} className="text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">+91 8700556837</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/piyush-singh-b0a097224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:border-[hsl(var(--accent))]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                    <Linkedin size={20} className="text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground font-medium">
                      linkedin.com/in/piyush-singh-b0a097224
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center">
                    <MapPin size={20} className="text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">
                      Faridabad, Haryana, India
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <div className="p-6 md:p-8 rounded-xl bg-muted/50 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-white py-5 text-base font-medium rounded-lg transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={18} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Contact;
