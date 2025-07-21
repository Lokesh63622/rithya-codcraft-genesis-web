import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "contact@rithyacodcraft.com",
      action: () => window.open("mailto:contact@rithyacodcraft.com"),
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "+1 (555) 123-4567",
      action: () => window.open("https://wa.me/15551234567"),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      action: () => window.open("tel:+15551234567"),
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Build Something</span>
            <br />
            <span className="text-white">Amazing Together</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm resize-none"
                    required
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit"
                    variant="premium" 
                    size="xl"
                    className="w-full group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact info and quick contact */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick contact buttons */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.button
                    key={index}
                    onClick={contact.action}
                    className={`w-full p-6 glass-card rounded-2xl flex items-center gap-4 group hover:scale-105 transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold">{contact.title}</div>
                      <div className="text-white/60 text-sm">{contact.detail}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Business hours */}
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-purple-400" />
                <h4 className="text-xl font-semibold text-white">Business Hours</h4>
              </div>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <h4 className="text-xl font-semibold text-white">Location</h4>
              </div>
              <p className="text-white/70">
                123 Innovation Street<br />
                Tech District, Digital City<br />
                DC 12345, United States
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;