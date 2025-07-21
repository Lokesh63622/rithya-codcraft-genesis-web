import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to serverless architecture and beyond.",
      content: "The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      author: "Rithya Ramanathan",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "web-development",
      tags: ["React", "AI", "Trends", "JavaScript"]
    },
    {
      id: 2,
      title: "Mobile App Development: Native vs Cross-Platform in 2024",
      excerpt: "A comprehensive comparison of native and cross-platform mobile development approaches, helping you make the right choice.",
      content: "When it comes to mobile app development, choosing between native and cross-platform approaches...",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      author: "Sarah Chen",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "mobile-development",
      tags: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      id: 3,
      title: "UI/UX Design Principles That Drive Conversions",
      excerpt: "Learn the essential design principles that not only create beautiful interfaces but also drive user engagement and conversions.",
      content: "Great design is more than just aesthetics – it's about creating experiences that convert visitors...",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      author: "Alex Rodriguez",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "design",
      tags: ["UI/UX", "Design", "Conversion", "User Experience"]
    },
    {
      id: 4,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "A deep dive into creating robust, scalable APIs using Node.js, Express, and modern best practices for backend development.",
      content: "Building scalable APIs is crucial for modern web applications. In this comprehensive guide...",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      author: "Rithya Ramanathan",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "backend",
      tags: ["Node.js", "Express", "API", "Backend"]
    },
    {
      id: 5,
      title: "The Impact of AI on Modern Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing web development workflows and creating new possibilities.",
      content: "Artificial Intelligence is transforming every industry, and web development is no exception...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      author: "Sarah Chen",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "ai-tech",
      tags: ["AI", "Machine Learning", "Automation", "Future"]
    },
    {
      id: 6,
      title: "Website Performance Optimization: A Complete Guide",
      excerpt: "Learn proven strategies to optimize your website's performance, improve Core Web Vitals, and enhance user experience.",
      content: "Website performance directly impacts user experience, SEO rankings, and conversion rates...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      author: "Alex Rodriguez",
      date: "2023-12-15",
      readTime: "12 min read",
      category: "performance",
      tags: ["Performance", "SEO", "Optimization", "Core Web Vitals"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'mobile-development', label: 'Mobile Development' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai-tech', label: 'AI & Tech' },
    { id: 'performance', label: 'Performance' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

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
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Insights, tutorials, and industry updates from our team of developers and designers. 
              Stay ahead with the latest in web and mobile development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            
            <div className="glass-card overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button>
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.category === 'web-development' ? 'bg-blue-500/20 text-blue-400' :
                      post.category === 'mobile-development' ? 'bg-green-500/20 text-green-400' :
                      post.category === 'design' ? 'bg-purple-500/20 text-purple-400' :
                      post.category === 'backend' ? 'bg-orange-500/20 text-orange-400' :
                      post.category === 'ai-tech' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {categories.find(cat => cat.id === post.category)?.label}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    
                    <Button size="sm" variant="ghost">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or browse all categories.
              </p>
              <Button onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}>
                Show All Articles
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter and get the latest articles, tutorials, and industry insights 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                type="email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;