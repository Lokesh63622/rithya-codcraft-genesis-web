import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Globe, Smartphone, Palette, Code, Database, Zap, 
  CheckCircle, ArrowRight, Star, Clock, Users, Shield 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Content Management Systems"
      ],
      technologies: ["React", "Vue.js", "Next.js", "Node.js", "TypeScript"],
      price: "Starting at $2,999",
      timeline: "4-8 weeks"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "iOS & Android Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "In-app Purchases"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      price: "Starting at $4,999",
      timeline: "6-12 weeks"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that prioritize user experience and drive conversions for your business.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
        "Brand Identity"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
      price: "Starting at $1,999",
      timeline: "2-4 weeks"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end development solutions covering both frontend and backend with scalable architecture.",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Microservices Architecture",
        "DevOps & Deployment",
        "Third-party Integrations"
      ],
      technologies: ["MERN Stack", "Python", "PostgreSQL", "AWS", "Docker"],
      price: "Starting at $5,999",
      timeline: "8-16 weeks"
    },
    {
      icon: Database,
      title: "Website Revamping",
      description: "Transform your existing website with modern design, improved performance, and enhanced functionality.",
      features: [
        "Performance Audit",
        "Modern Design Overhaul",
        "SEO Improvements",
        "Mobile Optimization",
        "Content Migration",
        "Analytics Integration"
      ],
      technologies: ["React", "WordPress", "Shopify", "Webflow", "Gatsby"],
      price: "Starting at $3,499",
      timeline: "3-6 weeks"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Boost your website's speed, performance, and search engine rankings with our optimization services.",
      features: [
        "Speed Optimization",
        "Core Web Vitals",
        "Image Optimization",
        "Code Splitting",
        "Caching Strategies",
        "CDN Implementation"
      ],
      technologies: ["Lighthouse", "GTMetrix", "Cloudflare", "Redis", "Webpack"],
      price: "Starting at $1,499",
      timeline: "1-2 weeks"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We understand your goals, requirements, and target audience"
    },
    {
      step: "02",
      title: "Planning",
      description: "We create a detailed project roadmap and technical specifications"
    },
    {
      step: "03",
      title: "Design",
      description: "We craft beautiful designs and interactive prototypes"
    },
    {
      step: "04",
      title: "Development",
      description: "We build your solution with clean, scalable code"
    },
    {
      step: "05",
      title: "Testing",
      description: "We ensure quality through comprehensive testing"
    },
    {
      step: "06",
      title: "Launch",
      description: "We deploy your project and provide ongoing support"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStartup Inc.",
      text: "RithyaCodCraft transformed our vision into a stunning web application. Their attention to detail and technical expertise is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      text: "The mobile app they developed increased our sales by 300%. Exceptional work and great communication throughout the project.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "Our website revamp exceeded all expectations. The new design is modern, fast, and perfectly represents our brand.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive digital solutions tailored to your business needs. From concept to deployment, 
              we deliver exceptional results that drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-8 cursor-pointer transition-all duration-300 ${
                  activeService === index ? 'ring-2 ring-primary' : 'hover:scale-105'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.timeline}
                      </div>
                      <div className="text-lg font-semibold text-primary">
                        {service.price}
                      </div>
                    </div>
                    <Button size="sm">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center relative"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from businesses we've helped transform with our services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project requirements and create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Shield className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              Free consultation • No obligation • Quick response
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;