import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, Clock, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-primary to-[#1d4ed8] rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-6 border border-white/30">
                <Activity className="h-4 w-4" />
                <span>Top Healthcare in Lucknow</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Health, <br/>
                Our Priority
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-[400px]">
                Access world-class healthcare with experienced doctors and advanced diagnostic facilities right in the heart of Lucknow.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#appointment" 
                  className="bg-secondary hover:bg-teal-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center gap-2 shadow-sm"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a 
                  href="#services" 
                  className="bg-white hover:bg-accent text-primary px-8 py-3.5 rounded-lg font-semibold transition-all shadow-sm"
                >
                  Our Services
                </a>
              </div>

              <div className="mt-10 flex gap-8 pt-10 border-t border-white/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-1">50+</h3>
                  <p className="text-[10px] uppercase tracking-wider text-blue-200">Specialists</p>
                </div>
                <div className="w-px bg-white/30"></div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-1">24/7</h3>
                  <p className="text-[10px] uppercase tracking-wider text-blue-200">Service</p>
                </div>
                <div className="w-px bg-white/30"></div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-1">15+</h3>
                  <p className="text-[10px] uppercase tracking-wider text-blue-200">Years Exp.</p>
                </div>
              </div>
            </motion.div>

            {/* Image Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:h-[500px] flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg">
                {/* Main Image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&fit=crop&q=80&w=800&h=1000" 
                    alt="Doctors consulting patient" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border z-20 flex items-center gap-4"
                >
                  <div className="bg-accent p-3 rounded-lg text-secondary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-semibold uppercase tracking-wider">Certified</p>
                    <p className="font-bold text-text-dark text-sm">Professionals</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border z-20 flex items-center gap-4"
                >
                  <div className="bg-accent p-3 rounded-lg text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-semibold uppercase tracking-wider">Emergency</p>
                    <p className="font-bold text-text-dark text-sm">24/7 Care</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
