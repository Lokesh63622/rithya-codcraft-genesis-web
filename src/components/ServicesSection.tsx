import { motion } from 'framer-motion';
import { Code, Bot, Brain, Palette } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "MERN Stack Development",
      description: "Full-stack web applications using MongoDB, Express.js, React, and Node.js for scalable solutions.",
      features: ["React Frontend", "Node.js Backend", "MongoDB Database", "Express.js API"]
    },
    {
      icon: Bot,
      title: "Python Automation & APIs",
      description: "Powerful Python applications for automation, data processing, and robust API development.",
      features: ["Django/FastAPI", "Data Analytics", "Process Automation", "Machine Learning"]
    },
    {
      icon: Brain,
      title: "Generative AI Web Apps",
      description: "Cutting-edge AI-powered applications leveraging the latest in generative artificial intelligence.",
      features: ["OpenAI Integration", "Custom AI Models", "Chatbots & Assistants", "AI-Powered Analytics"]
    },
    {
      icon: Palette,
      title: "Custom Website Design",
      description: "Beautiful, responsive websites designed to captivate your audience and drive conversions.",
      features: ["UI/UX Design", "Responsive Layout", "Brand Identity", "Performance Optimization"]
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
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
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
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to transform your business and elevate your online presence
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-white/60 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">Ready to start your project?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;