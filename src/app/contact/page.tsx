export const metadata = {
  title: "Contact Us | Luxe Estates",
  description: "Get in touch with Luxe Estates for your luxury real estate needs.",
};

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading text-primary mb-6">Get in Touch</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Whether you are looking to buy, sell, or invest, our team of experts is here to provide you with an exceptional and discrete service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-heading text-primary mb-8 border-b border-primary/10 pb-4">Contact Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/5 p-3 rounded-full text-accent mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-primary text-lg">Office Address</h3>
                    <p className="text-foreground/70">123 Luxury Avenue, DHA Phase 8<br/>Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/5 p-3 rounded-full text-accent mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-primary text-lg">Phone Numbers</h3>
                    <p className="text-foreground/70">+92 21 34567890 (Office)<br/>+92 300 1234567 (Direct)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/5 p-3 rounded-full text-accent mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-primary text-lg">Email Address</h3>
                    <p className="text-foreground/70">info@luxeestates.com<br/>sales@luxeestates.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/5 p-3 rounded-full text-accent mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-primary text-lg">Business Hours</h3>
                    <p className="text-foreground/70">Monday - Saturday: 10:00 AM - 7:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-sm shadow-xl">
              <h3 className="text-2xl font-heading mb-4">Direct WhatsApp</h3>
              <p className="text-white/70 mb-6">
                Prefer a quick chat? Our agents are available on WhatsApp for immediate assistance.
              </p>
              <a 
                href="https://wa.me/923001234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-colors font-medium w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Map and Form */}
          <div className="space-y-8">
            <div className="h-[400px] w-full rounded-sm overflow-hidden border border-primary/10 shadow-lg">
              {/* Google Maps Embed (DHA Phase 8 Karachi) */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.751280389278!2d67.04639999999999!3d24.788941999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d1b7c125637%3A0x1d1e4eb41c0957fa!2sD.H.A.%20Phase%208%20Zone%20A%20Phase%208%20Defence%20Housing%20Authority%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <form className="bg-white p-8 rounded-sm shadow-xl border border-primary/5">
              <h3 className="text-2xl font-heading text-primary mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-foreground/70 mb-1">Name</label>
                    <input type="text" id="name" className="w-full bg-background border border-primary/10 rounded-sm px-4 py-2 focus:outline-none focus:border-accent" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-foreground/70 mb-1">Phone</label>
                    <input type="tel" id="phone" className="w-full bg-background border border-primary/10 rounded-sm px-4 py-2 focus:outline-none focus:border-accent" placeholder="Your Phone" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-foreground/70 mb-1">Email</label>
                  <input type="email" id="email" className="w-full bg-background border border-primary/10 rounded-sm px-4 py-2 focus:outline-none focus:border-accent" placeholder="Your Email" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-foreground/70 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-background border border-primary/10 rounded-sm px-4 py-2 focus:outline-none focus:border-accent" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-primary text-white py-3 rounded-sm hover:bg-primary/90 transition-colors font-medium tracking-wide">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
