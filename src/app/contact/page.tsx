"use client";

import { MapPin, Phone, MessageSquare, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-24 bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 mt-12">
          <h1 className="heading-luxury text-4xl md:text-5xl mb-4 uppercase">GET IN TOUCH</h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase">We're here to help</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="heading-luxury text-2xl mb-8 uppercase border-b border-zinc-800 pb-4">Contact Information</h2>
              <div className="space-y-8">
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Phone</h3>
                    <p className="text-gray-400 font-light">+91 9353812197</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Sat 10am to 7pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-400 font-light">+91 9353812197</p>
                    <button className="mt-2 text-sm underline underline-offset-4 hover:text-gray-300 transition-luxury">
                      Chat with us
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Location</h3>
                    <p className="text-gray-400 font-light">Bangalore, India</p>
                    <p className="text-gray-500 text-sm mt-1">Pan India Delivery Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Email</h3>
                    <p className="text-gray-400 font-light">support@outlawstyling.com</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12">
            <h2 className="heading-luxury text-2xl mb-8 uppercase">Send an Inquiry</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-white transition-luxury"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-white transition-luxury"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-white transition-luxury resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black py-4 uppercase tracking-widest font-semibold hover:bg-gray-200 transition-luxury"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
