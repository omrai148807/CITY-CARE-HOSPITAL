import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogs } from '../data';
import { ArrowRight, Calendar, X } from 'lucide-react';

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Health <span className="text-primary">Tips & News</span>
            </h2>
            <p className="text-text-muted text-lg">
              Stay updated with the latest medical news, health tips, and wellness advice from our experts.
            </p>
          </div>
          <button className="text-primary font-semibold hover:text-[#1d4ed8] flex items-center gap-2 whitespace-nowrap text-[14px]">
            View All Articles <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border group flex flex-col"
            >
              <div 
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedBlog(blog)}
              >
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-sm bg-primary/80 px-4 py-2 rounded-full backdrop-blur-sm">Read Article</span>
                </div>
                <div className="absolute top-4 left-4 bg-accent px-3 py-1 rounded-md text-[11px] font-bold text-primary uppercase tracking-wider shadow-sm">
                  {blog.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-[12px] font-semibold text-text-muted mb-3">
                  <Calendar className="h-4 w-4" />
                  {blog.date}
                </div>
                <h3 
                  className="text-[18px] font-bold text-text-dark mb-3 group-hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setSelectedBlog(blog)}
                >
                  {blog.title}
</h3>
                <p className="text-text-muted text-[14px] mb-4 line-clamp-2 flex-grow">
                  {blog.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedBlog(blog)}
                  className="text-primary font-semibold text-[14px] flex items-center gap-2 hover:gap-3 transition-all mt-auto w-fit"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Details Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedBlog(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-card rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white p-1.5 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="w-full h-64 sm:h-80 relative shrink-0">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="inline-block bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3">
                    {selectedBlog.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedBlog.title}</h3>
                  <div className="flex items-center gap-2 text-[13px] font-medium text-white/80">
                    <Calendar className="h-4 w-4" />
                    {selectedBlog.date}
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="prose prose-sm sm:prose-base max-w-none text-text-muted">
                  {selectedBlog.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
