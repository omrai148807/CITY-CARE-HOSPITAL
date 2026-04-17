import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { doctors } from '../data';
import { Calendar, X, GraduationCap, Clock } from 'lucide-react';

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);

  const scrollToAppointment = (doctorName: string) => {
    const element = document.querySelector('#appointment');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setSelectedDoctor(null); // Close modal if open
  };

  return (
    <section id="doctors" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Meet Our <span className="text-primary">Specialists</span>
          </h2>
          <p className="text-text-muted text-lg">
            Our team of highly qualified and experienced doctors are dedicated to providing the best possible care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-accent rounded-2xl overflow-hidden border border-border group flex flex-col"
            >
              <div 
                className="relative h-48 overflow-hidden bg-card cursor-pointer"
                onClick={() => setSelectedDoctor(doctor)}
              >
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-sm bg-primary/80 px-4 py-2 rounded-full backdrop-blur-sm">View Profile</span>
                </div>
                <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-primary uppercase tracking-wider shadow-sm">
                  {doctor.specialty}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-[16px] font-bold text-text-dark mb-1">{doctor.name}</h3>
                <p className="text-text-muted text-[13px] mb-4 flex-grow">{doctor.experience}</p>
                
                <button 
                  onClick={() => scrollToAppointment(doctor.name)}
                  className="w-full bg-secondary hover:bg-teal-600 text-white py-2.5 rounded-lg font-semibold text-[14px] transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Book
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Doctor Details Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedDoctor(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white p-1.5 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img 
                  src={selectedDoctor.image} 
                  alt={selectedDoctor.name} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="inline-block bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-1">
                    {selectedDoctor.specialty}
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-text-dark mb-2">{selectedDoctor.name}</h3>
                
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-accent p-2 rounded-lg text-primary shrink-0">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-0.5">Education</p>
                      <p className="text-[14px] font-medium text-text-dark">{selectedDoctor.education}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-accent p-2 rounded-lg text-primary shrink-0">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-0.5">Experience</p>
                      <p className="text-[14px] font-medium text-text-dark">{selectedDoctor.experience}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-[12px] font-semibold text-text-muted uppercase tracking-wider mb-2">About Doctor</p>
                  <p className="text-[14px] text-text-muted leading-relaxed">
                    {selectedDoctor.about}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-border">
                  <button 
                    onClick={() => scrollToAppointment(selectedDoctor.name)}
                    className="w-full bg-primary hover:bg-[#1d4ed8] text-white py-3 rounded-lg font-semibold text-[15px] transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Appointment Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
