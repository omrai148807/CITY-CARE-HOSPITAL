import React, { useState } from 'react';
import { motion } from 'motion/react';
import { doctors } from '../data';
import { CheckCircle2, Download, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Appointment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    doctorName: '',
    appointmentDate: '',
    timeSlot: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // 4. Validation rules for required fields
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.doctorName || !formData.appointmentDate || !formData.timeSlot) {
      setSubmitError('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Find doctor details to attach to the payload
    const selectedDoc = doctors.find(doc => doc.name === formData.doctorName);
    const doctorDetails = selectedDoc ? `${selectedDoc.specialty} - ${selectedDoc.experience}` : '';

    try {
      // 2. Insert payload mapped to the new PostgeSQL schema
      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone_number: formData.phoneNumber || null,
        email: formData.email,
        doctor_name: formData.doctorName,
        doctor_details: doctorDetails,
        appointment_date: formData.appointmentDate,
        time_slot: formData.timeSlot,
        notes: formData.notes || null,
      };

      // 3. API Logic using Supabase Client
      const { error } = await supabase
        .from('appointments')
        .insert([payload]);

      // 5. Error handling if table does not exist (PostgreSQL error code 42P01)
      if (error) {
        if (error.code === '42P01') {
          throw new Error('Table "appointments" does not exist in your database. Please run the provided SQL query in the Supabase SQL Editor.');
        }
        throw error; // Standard error fallback
      }

      setSubmittedData(formData);
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', phoneNumber: '', email: '', doctorName: '', appointmentDate: '', timeSlot: '', notes: '' });
    } catch (err: any) {
      console.error('Error submitting appointment:', err);
      const detailedError = err.message 
        ? `${err.code ? err.code + ': ' : ''}${err.message}`
        : 'Unknown error occurred while connecting to Supabase.';
      setSubmitError(detailedError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadReceipt = () => {
    if (!submittedData) return;

    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header Background
    ctx.fillStyle = '#0055A5';
    ctx.fillRect(0, 0, canvas.width, 120);

    // Header Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CITY CARE HOSPITAL', canvas.width / 2, 60);
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText('Appointment Confirmation Receipt', canvas.width / 2, 100);

    // Content Settings
    ctx.fillStyle = '#1E293B';
    ctx.textAlign = 'left';

    const drawRow = (label: string, value: string, y: number) => {
      ctx.font = 'bold 22px Arial, sans-serif';
      ctx.fillText(label, 100, y);
      ctx.font = '22px Arial, sans-serif';
      ctx.fillText(value || 'N/A', 320, y);
    };

    // Patient Details
    const fullName = `${submittedData.firstName} ${submittedData.lastName}`;
    drawRow('Patient Name:', fullName, 200);
    drawRow('Phone Number:', submittedData.phoneNumber, 250);
    drawRow('Email Address:', submittedData.email, 300);
    
    // Separator line
    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 340);
    ctx.lineTo(700, 340);
    ctx.stroke();

    // Appointment Details
    drawRow('Consulting Doctor:', submittedData.doctorName, 400);
    drawRow('Appointment Date:', submittedData.appointmentDate, 450);
    drawRow('Scheduled Time:', submittedData.timeSlot, 500);

    // Footer Background
    ctx.fillStyle = '#F8FAFC';
    ctx.fillRect(0, 540, canvas.width, 60);

    // Footer Text
    ctx.fillStyle = '#64748B';
    ctx.font = '16px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Thank you for choosing City Care. Please arrive 15 minutes prior.', canvas.width / 2, 575);

    // Generate Download
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = `CityCare_Receipt_${fullName.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="appointment" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-text-dark"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Book an Appointment <br/> <span className="text-primary">Without the Wait</span>
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-md leading-relaxed">
              Skip the queue and schedule your visit online. Choose your preferred doctor, date, and time, and we'll confirm your appointment instantly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-accent p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-[15px]">Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-[15px]">24/7 Online Booking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent p-2 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-[15px]">Free Cancellation</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-2">Booking Confirmed!</h3>
                <p className="text-text-muted text-[14px] mb-8">
                  Thank you for choosing City Care. We have sent the appointment details to your email and phone.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button 
                    onClick={downloadReceipt}
                    className="w-full sm:w-auto bg-primary hover:bg-[#1d4ed8] text-white py-2.5 px-6 rounded-lg font-semibold text-[14px] transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Receipt
                  </button>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmittedData(null);
                    }}
                    className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-text-dark py-2.5 px-6 rounded-lg font-semibold text-[14px] transition-colors"
                  >
                    Book Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-primary mb-4">Patient Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-text-muted">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-text-muted">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-text-muted">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-text-muted">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-text-muted">Select Doctor *</label>
                  <select 
                    name="doctorName"
                    value={formData.doctorName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark"
                  >
                    <option value="">Choose a specialist</option>
                    {doctors.map(doc => (
                      <option key={doc.id} value={doc.name}>{doc.name} - {doc.specialty}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-text-muted">Date *</label>
                    <input 
                      type="date" 
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-text-muted">Time Slot *</label>
                    <select 
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark"
                    >
                      <option value="">Select time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:30 PM">04:30 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-text-muted">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-3 py-2 rounded-md border border-border bg-[#FAFAFA] focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-[13px] text-text-dark resize-none"
                    placeholder="Any previous medical history or symptoms..."
                  />
                </div>

                {submitError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-[13px]">
                    {submitError}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-teal-600 text-white py-3 rounded-lg font-semibold text-[15px] transition-colors mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Processing...
                    </>
                  ) : (
                    'Confirm Appointment'
                  )}
                </button>
                <p className="text-[11px] text-center text-text-muted mt-2">Confirmation sent via SMS & WhatsApp</p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
