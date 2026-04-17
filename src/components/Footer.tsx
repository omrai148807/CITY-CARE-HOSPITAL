import React from 'react';
import { HeartPulse, Facebook, Twitter, Instagram, Linkedin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-text-dark">City<span className="text-primary">Care</span></span>
            </div>
            <p className="text-text-muted mb-6 leading-relaxed text-[14px]">
              Providing world-class healthcare services with compassion and excellence. Your health is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-accent text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-accent text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-accent text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-accent text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[16px] font-bold text-text-dark mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Home</a></li>
              <li><a href="#about" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">About Us</a></li>
              <li><a href="#services" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Services</a></li>
              <li><a href="#doctors" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Our Doctors</a></li>
              <li><a href="#blog" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Blog & News</a></li>
              <li><a href="#contact" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[16px] font-bold text-text-dark mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Emergency Care</a></li>
              <li><a href="#" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Cardiology</a></li>
              <li><a href="#" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Orthopedics</a></li>
              <li><a href="#" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Pediatrics</a></li>
              <li><a href="#" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Neurology</a></li>
              <li><a href="#" className="text-[14px] text-text-muted hover:text-primary transition-colors font-medium">Diagnostics</a></li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="text-[16px] font-bold text-text-dark mb-6">Emergency Contact</h4>
            <div className="bg-accent p-6 rounded-2xl border border-border">
              <Phone className="h-6 w-6 text-red-500 mb-3" />
              <p className="text-text-muted text-[12px] font-semibold uppercase tracking-wider mb-1">24/7 Helpline</p>
              <a href="tel:+919876543210" className="text-xl font-bold text-text-dark hover:text-primary transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-[13px]">
            &copy; {new Date().getFullYear()} City Care Hospital. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-text-muted font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
