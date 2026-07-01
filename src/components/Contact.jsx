import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, description } = formData;

    if (!name || !email || !description) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    // Direct message opening mail client prefilled to: mwisemarierose@gmail.com
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Marie Rose,\n\nYou have received a message from your portfolio contact form:\n\nSender Name: ${name}\nSender Email: ${email}\n\nMessage Description:\n${description}\n\nBest regards,\n${name}`
    );
    
    const mailtoUrl = `mailto:mwisemarierose@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setSuccess(true);
    setFormData({ name: '', email: '', description: '' });
    
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-indigo-500" />,
      title: 'Call me',
      value: '+250780850683',
      link: 'tel:+250780850683'
    },
    {
      icon: <Mail className="w-5 h-5 text-purple-500" />,
      title: 'E-mail',
      value: 'mwisemarierose@gmail.com',
      link: 'mailto:mwisemarierose@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5 text-pink-500" />,
      title: 'Location',
      value: 'Kigali, Rwanda',
      link: 'https://maps.google.com/?q=Kigali,Rwanda'
    }
  ];

  return (
    <section id="contact" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/40 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Contact Me</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-zinc-300 mt-4">
            Get in touch for collaboration or professional opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Let's talk about your projects
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx}
                  href={info.link}
                  className="p-5 rounded-2xl border border-slate-200/50 dark:border-zinc-600/60 bg-white dark:bg-zinc-900/95 dark:shadow-md dark:shadow-black/20 flex items-center space-x-4 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 group-hover:scale-105 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-400 uppercase tracking-wider">
                      {info.title}
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-zinc-100 mt-0.5 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl border border-slate-200/50 dark:border-zinc-600/60 bg-white dark:bg-zinc-900/95 dark:shadow-lg dark:shadow-black/25 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {error && (
                  <div className="p-4 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-semibold border border-rose-500/20">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-semibold border border-emerald-500/20 flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    Redirecting to your email client...
                  </div>
                )}

                {/* Name field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-500 dark:text-zinc-300 uppercase tracking-wider">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-4 rounded-xl border border-slate-200 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 text-slate-800 dark:text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-500 dark:text-zinc-300 uppercase tracking-wider">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-4 rounded-xl border border-slate-200 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 text-slate-800 dark:text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {/* Description field */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="description" className="text-sm font-bold text-slate-500 dark:text-zinc-300 uppercase tracking-wider">
                    Description
                  </label>
                  <textarea 
                    id="description"
                    name="description"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                    className="p-4 rounded-xl border border-slate-200 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 text-slate-800 dark:text-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
                    placeholder="Describe your project details or inquiry"
                    required
                  />
                </div>

                {/* Submit button */}
                <div>
                  <button 
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/25 gap-2 cursor-pointer"
                  >
                    Send message
                    <Send size={16} />
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
