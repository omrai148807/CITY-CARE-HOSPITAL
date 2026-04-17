import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-text-muted text-lg">
            We are here to help you. Reach out to us for any queries, emergencies, or feedback.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="bg-card p-5 rounded-2xl shadow-sm border border-border flex items-start gap-4">
              <div className="bg-accent p-3 rounded-xl text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-text-dark text-[15px] mb-1">Our Location</h3>
                <p className="text-text-muted text-[13px]">123 Healthcare Avenue, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India</p>
              </div>
            </div>

            <div className="bg-card p-5 rounded-2xl shadow-sm border border-border flex items-start gap-4">
              <div className="bg-accent p-3 rounded-xl text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-text-dark text-[15px] mb-1">Phone Number</h3>
                <p className="text-text-muted text-[13px]">Emergency: +91 98765 43210</p>
                <p className="text-text-muted text-[13px]">Reception: +91 522 123 4567</p>
              </div>
            </div>

            <div className="bg-card p-5 rounded-2xl shadow-sm border border-border flex items-start gap-4">
              <div className="bg-accent p-3 rounded-xl text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-text-dark text-[15px] mb-1">Email Address</h3>
                <p className="text-text-muted text-[13px]">info@citycarelucknow.com</p>
                <p className="text-text-muted text-[13px]">support@citycarelucknow.com</p>
              </div>
            </div>

            <div className="bg-card p-5 rounded-2xl shadow-sm border border-border flex items-start gap-4">
              <div className="bg-accent p-3 rounded-xl text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-text-dark text-[15px] mb-1">Working Hours</h3>
                <p className="text-text-muted text-[13px]">Emergency: 24/7 Open</p>
                <p className="text-text-muted text-[13px]">OPD: Mon-Sat, 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card rounded-2xl shadow-sm border border-border overflow-hidden flex flex-col"
          >
            <div className="h-64 w-full bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.2687508492!2d80.87346896226162!3d26.84862299411993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="City Care Location"
              ></iframe>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-text-muted">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rahul Gupta" 
                      className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-text-muted">Your Email</label>
                    <input 
                      type="email" 
                      placeholder="rahul@example.com" 
                      className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-text-muted">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?" 
                    className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-text-muted">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Type your message here..." 
                    className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none text-[13px] text-text-dark"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-secondary hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
