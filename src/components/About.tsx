import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Hospital Building" 
                className="rounded-2xl object-cover w-full h-64 md:h-80 shadow-sm border border-border"
              />
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Operation Theater" 
                className="rounded-2xl object-cover w-full h-64 md:h-80 shadow-sm border border-border mt-8"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-6 rounded-full shadow-lg border-4 border-card flex flex-col items-center justify-center h-32 w-32">
              <span className="text-3xl font-bold">15+</span>
              <span className="text-xs text-center font-medium uppercase tracking-wider mt-1">Years</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              About <span className="text-primary">City Care</span>
            </h2>
            <p className="text-text-muted mb-6 leading-relaxed text-[15px]">
              Located in the heart of Lucknow, City Care is a premier multi-specialty hospital dedicated to providing world-class healthcare services. With a legacy of over 15 years, we combine state-of-the-art medical technology with compassionate care to heal and bring hope to our patients.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                <h3 className="text-[14px] font-bold text-text-dark mb-2 uppercase tracking-wider">Our Mission</h3>
                <p className="text-[13px] text-text-muted leading-relaxed">To deliver accessible, high-quality, and patient-centric healthcare services to the community.</p>
              </div>
              <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
                <h3 className="text-[14px] font-bold text-text-dark mb-2 uppercase tracking-wider">Our Vision</h3>
                <p className="text-[13px] text-text-muted leading-relaxed">To be the most trusted healthcare partner in Uttar Pradesh, known for clinical excellence.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-text-dark mb-4">Meet Our Co-Founders</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-accent border border-border rounded-xl">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-text-dark">Ayushman Tiwari</h4>
                  <p className="text-text-muted text-[12px] font-semibold uppercase tracking-wider mt-1">Co-Founder & Managing Director</p>
                  <p className="text-text-muted text-[13px] mt-2">Visionary leader driving the hospital's strategic growth and operational excellence.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-accent border border-border rounded-xl">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-text-dark">Nitesh Singh</h4>
                  <p className="text-text-muted text-[12px] font-semibold uppercase tracking-wider mt-1">Co-Founder & Medical Director</p>
                  <p className="text-text-muted text-[13px] mt-2">Renowned medical professional ensuring the highest standards of clinical care.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
