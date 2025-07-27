import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/rithanyacodecraft", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/rithanyacodecraft", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/rithanyacode", label: "Twitter" }
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@rithanyacodecraft.com", href: "mailto:hello@rithanyacodecraft.com" },
    { icon: Phone, text: "+91 8497895065", href: "tel:+918497895065" },
    { icon: MapPin, text: "Bangalore", href: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Rithanya CodeCraft
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building the digital future with innovative web solutions, 
              AI-powered applications, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Services
            </h4>
            <div className="space-y-2">
              {[
                "MERN Stack Development",
                "Python Automation & APIs",
                "Generative AI Applications",
                "Custom Website Design"
              ].map((service) => (
                <div key={service} className="text-sm text-muted-foreground">
                  {service}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rithanya CodeCraft. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;