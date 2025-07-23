import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero3D from './Hero3D';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay * 0.2,
        ease: [0.4, 0, 0.2, 1] as const
      }
    })
  };

  const floatingIcons = [
    { icon: Code, position: "top-20 left-10", delay: 0 },
    { icon: Smartphone, position: "top-32 right-16", delay: 0.5 },
    { icon: Globe, position: "bottom-32 left-16", delay: 1 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Hero3D />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      {/* Floating icons */}
      {floatingIcons.map(({ icon: Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, delay: delay + 1 }}
        >
          <div className="glass-card p-4 rounded-2xl animate-pulse-glow">
            <Icon className="w-8 h-8 text-purple-400" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main heading */}
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Rithanya CodeCraft</span>
            <br />
            <span className="text-white text-2xl md:text-4xl lg:text-5xl font-light mt-4 block">
              We Build Your Digital Future
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming ideas into powerful digital solutions with MERN Stack, Python automation, and cutting-edge AI technology
          </motion.p>

          {/* Stats */}
          <motion.div
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-8 mb-10 text-white/60"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              variant="hero" 
              size="xl"
              className="group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="xl"
              className="border border-white/20"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;