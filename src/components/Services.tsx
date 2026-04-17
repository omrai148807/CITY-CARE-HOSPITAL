import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ambulance, Stethoscope, Syringe, Microscope, Pill, HeartPulse, X, Calendar } from 'lucide-react';
import { services } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Ambulance: <Ambulance className="h-8 w-8" />,
  Stethoscope: <Stethoscope className="h-8 w-8" />,
  Syringe: <Syringe className="h-8 w-8" />,
  Microscope: <Microscope className="h-8 w-8" />,
  Pill: <Pill className="h-8 w-8" />,
  HeartPulse: <HeartPulse className="h-8 w-8" />,
};

const largeIconMap: Record<string, React.ReactNode> = {
  Ambulance: <Ambulance className="h-16 w-16" />,
  Stethoscope: <Stethoscope className="h-16 w-16" />,
  Syringe: <Syringe className="h-16 w-16" />,
  Microscope: <Microscope className="h-16 w-16" />,
  Pill: <Pill className="h-16 w-16" />,
  HeartPulse: <HeartPulse className="h-16 w-16" />,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const scrollToAppointment = () => {
    const element = document.querySelector('#appointment');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Our <span className="text-primary">Medical Services</span>
          </h2>
          <p className="text-text-muted text-lg">
            We offer a wide range of specialized medical services to cater to all your healthcare needs under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="bg-card p-6 rounded-2xl shadow-sm border border-border group cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="bg-accent w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-[16px] font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-text-muted text-[14px] leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-4 text-primary font-semibold text-[13px] inline-flex items-center gap-1">
                Learn more <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-gray-200 text-gray-600 p-1.5 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex flex-col md:flex-row h-full">
                {/* Visual Side */}
                <div className="w-full md:w-1/3 bg-background flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-border min-h-[200px]">
                  <div className="text-primary mb-4 p-6 bg-accent rounded-full inline-block">
                     {largeIconMap[selectedService.icon] || iconMap[selectedService.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-text-dark text-center leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
                
                {/* Content Side */}
                <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col">
                  
                  <div className="mb-8 flex-grow">
                     <p className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-3">Service Details</p>
                    <p className="text-[14.5px] text-text-muted leading-relaxed">
                      {selectedService.details || selectedService.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border">
                    <button 
                      onClick={scrollToAppointment}
                      className="w-full bg-primary hover:bg-[#1d4ed8] text-white py-3 rounded-lg font-semibold text-[15px] transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar className="h-5 w-5" />
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
