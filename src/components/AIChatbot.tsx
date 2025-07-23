import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Minimize2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm Ritha, your AI assistant for Rithanya CodeCraft. I can help you start your project, answer questions about our services, or connect you with our team. What would you like to know?", 
      isBot: true 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [projectForm, setProjectForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: ''
  });

  const quickResponses = [
    "Start Your Project",
    "Tell me about your services",
    "What technologies do you use?",
    "View pricing information",
    "How long does development take?",
    "Can you help with AI integration?"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage.toLowerCase();
    setInputMessage('');

    // Simulate bot response based on message content
    setTimeout(() => {
      let responseText = "";
      
      if (currentMessage.includes('start') || currentMessage.includes('project')) {
        responseText = "Great! I'd love to help you start your project. Let me gather some information to provide you with the best solution. Please fill out our project requirements form.";
        setShowProjectForm(true);
      } else if (currentMessage.includes('service') || currentMessage.includes('what')) {
        responseText = "We offer:\n• MERN Stack Development (React, Node.js, MongoDB)\n• Python Automation & APIs\n• Generative AI Web Applications\n• Custom Website Design\n• Mobile App Development\n\nWhich service interests you most?";
      } else if (currentMessage.includes('price') || currentMessage.includes('cost') || currentMessage.includes('budget')) {
        responseText = "Our pricing varies based on project complexity:\n• Basic Website: $2,000-$5,000\n• MERN Stack App: $5,000-$15,000\n• AI Integration: $3,000-$10,000\n• Python Automation: $1,500-$8,000\n\nWould you like a detailed quote for your specific needs?";
      } else if (currentMessage.includes('ai') || currentMessage.includes('artificial')) {
        responseText = "We specialize in AI integration including:\n• ChatGPT API integration\n• Custom AI chatbots\n• Image generation tools\n• Data analysis with AI\n• Automation workflows\n\nWhat AI features are you looking for?";
      } else if (currentMessage.includes('time') || currentMessage.includes('long')) {
        responseText = "Project timelines typically are:\n• Simple Website: 1-2 weeks\n• MERN Stack App: 4-8 weeks\n• AI Integration: 2-4 weeks\n• Complex Systems: 8-16 weeks\n\nWant to discuss your specific timeline?";
      } else {
        responseText = "Thanks for your message! Our team at Rithanya CodeCraft specializes in modern web development. We'd be happy to discuss your project in detail. Would you like to start with our project requirements form or schedule a consultation call?";
      }

      const botResponse = {
        id: messages.length + 2,
        text: responseText,
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickResponse = (response: string) => {
    if (response === "Start Your Project") {
      setShowProjectForm(true);
      const userMessage = {
        id: messages.length + 1,
        text: response,
        isBot: false
      };
      setMessages(prev => [...prev, userMessage]);
      
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Perfect! Let's get started with your project. Please fill out the form below with your requirements, and our team will get back to you within 24 hours with a detailed proposal.",
          isBot: true
        };
        setMessages(prev => [...prev, botResponse]);
      }, 500);
    } else {
      setInputMessage(response);
    }
  };

  const handleProjectSubmit = () => {
    if (!projectForm.name || !projectForm.email || !projectForm.projectType) {
      alert('Please fill in all required fields');
      return;
    }

    const projectSummary = `
📋 NEW PROJECT SUBMISSION

👤 Client Details:
• Name: ${projectForm.name}
• Email: ${projectForm.email}
• Phone: ${projectForm.phone || 'Not provided'}

🚀 Project Details:
• Type: ${projectForm.projectType}
• Timeline: ${projectForm.timeline || 'Not specified'}
• Budget: ${projectForm.budget || 'Not specified'}
• Description: ${projectForm.description || 'No additional details'}

📅 Submitted: ${new Date().toLocaleDateString()}
    `;

    console.log(projectSummary);
    
    const userMessage = {
      id: messages.length + 1,
      text: "Project requirements submitted!",
      isBot: false
    };
    
    setMessages(prev => [...prev, userMessage]);
    setShowProjectForm(false);
    
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "🎉 Thank you! Your project requirements have been submitted successfully. Our team will review your requirements and get back to you within 24 hours with a detailed proposal and next steps. You'll receive a confirmation email shortly!",
        isBot: true
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    // Reset form
    setProjectForm({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      timeline: '',
      budget: '',
      description: ''
    });
  };

  useEffect(() => {
    const handleOpenProjectForm = () => {
      setIsOpen(true);
      setShowProjectForm(true);
      setIsMinimized(false);
    };

    window.addEventListener('openProjectForm', handleOpenProjectForm);
    return () => window.removeEventListener('openProjectForm', handleOpenProjectForm);
  }, []);

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bot className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          height: isMinimized ? 60 : 400 
        }}
        exit={{ opacity: 0, y: 100, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-80 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <span className="font-semibold">Ritha AI Assistant</span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Project Form */}
            {showProjectForm && (
              <div className="p-4 border-b border-border bg-muted/50">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm">Project Requirements</h3>
                  <button
                    onClick={() => setShowProjectForm(false)}
                    className="ml-auto text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  <Input
                    placeholder="Your Name *"
                    value={projectForm.name}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, name: e.target.value }))}
                    className="text-sm"
                  />
                  <Input
                    placeholder="Email Address *"
                    type="email"
                    value={projectForm.email}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, email: e.target.value }))}
                    className="text-sm"
                  />
                  <Input
                    placeholder="Phone Number"
                    value={projectForm.phone}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="text-sm"
                  />
                  <Select value={projectForm.projectType} onValueChange={(value) => setProjectForm(prev => ({ ...prev, projectType: value }))}>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Project Type *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website Development</SelectItem>
                      <SelectItem value="webapp">Web Application (MERN)</SelectItem>
                      <SelectItem value="ai">AI Integration</SelectItem>
                      <SelectItem value="python">Python Automation</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={projectForm.timeline} onValueChange={(value) => setProjectForm(prev => ({ ...prev, timeline: value }))}>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1month">Within 1 Month</SelectItem>
                      <SelectItem value="3months">Within 3 Months</SelectItem>
                      <SelectItem value="6months">Within 6 Months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={projectForm.budget} onValueChange={(value) => setProjectForm(prev => ({ ...prev, budget: value }))}>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                      <SelectItem value="discuss">Let's Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Project Description..."
                    value={projectForm.description}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, description: e.target.value }))}
                    className="text-sm resize-none"
                    rows={3}
                  />
                  <Button 
                    onClick={handleProjectSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="sm"
                  >
                    Submit Project Requirements
                  </Button>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className={`${showProjectForm ? 'h-40' : 'h-64'} overflow-y-auto p-4 space-y-3`}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-muted text-foreground'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Responses */}
            {!showProjectForm && messages.length <= 2 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickResponses.map((response, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickResponse(response)}
                      className={`text-xs px-3 py-1 rounded-full transition-colors ${
                        response === 'Start Your Project' 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            {!showProjectForm && (
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 bg-muted border-0 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AIChatbot;