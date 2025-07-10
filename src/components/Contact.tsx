import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Hexagon shapes */}
        {Array.from({
        length: 5
      }).map((_, i) => <div key={i} className="absolute border border-[#F4A622]/10" style={{
        width: `${Math.random() * 100 + 50}px`,
        height: `${Math.random() * 100 + 50}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: 'rotate(45deg)'
      }}></div>)}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-[#F4A622]">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your digital presence? Contact us to start your
            immersive journey
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#F4A622]/10 p-3 rounded-sm">
                  <MailIcon size={20} className="text-[#F4A622]" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg">contact@immersivealchemy.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#F4A622]/10 p-3 rounded-sm">
                  <PhoneIcon size={20} className="text-[#F4A622]" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#F4A622]/10 p-3 rounded-sm">
                  <MapPinIcon size={20} className="text-[#F4A622]" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg">
                    123 Innovation Street, Tech City, TC 98765
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#F4A622]/10 p-3 rounded-sm hover:bg-[#F4A622]/20 transition-all duration-300">
                  <svg className="h-5 w-5 text-[#F4A622]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="bg-[#F4A622]/10 p-3 rounded-sm hover:bg-[#F4A622]/20 transition-all duration-300">
                  <svg className="h-5 w-5 text-[#F4A622]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="bg-[#F4A622]/10 p-3 rounded-sm hover:bg-[#F4A622]/20 transition-all duration-300">
                  <svg className="h-5 w-5 text-[#F4A622]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-black border border-[#F4A622]/20 p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]" placeholder="Your email" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]" placeholder="Subject" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full bg-black border border-gray-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#F4A622]" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="bg-[#F4A622] hover:bg-[#F4A622]/80 text-black px-6 py-3 rounded-sm text-lg font-medium transition-all duration-300 flex items-center">
                Send Message
                <SendIcon size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;