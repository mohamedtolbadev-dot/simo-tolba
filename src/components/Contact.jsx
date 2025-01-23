import React, { useContext, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { LongContext } from './ContextProvider';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

const {language} = useContext(LongContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const translations = {
    en: {
      getInTouch: 'Get In Touch',
      letsWorkTogether: "Let's Work Together",
      feelFree: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
      email: 'Email',
      message: 'Message',
      sendMessage: 'Send Message',
      yourLocation: 'Your Location',
      connectWithMe: 'Connect With Me'
    },
    ar: {
      getInTouch: 'ابق على تواصل',
      letsWorkTogether: 'دعنا نعمل معًا',
      feelFree: 'لا تتردد في التواصل إذا كنت تبحث عن مطور أو لديك سؤال أو ترغب فقط في الاتصال.',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      sendMessage: 'إرسال الرسالة',
      yourLocation: 'موقعك',
      connectWithMe: 'تواصل معي'
    }
  };

  const t = translations[language];

  return (
    <section className="min-h-screen  py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-blue-400 font-mono text-lg mb-3">{t.getInTouch}</h4>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.letsWorkTogether}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.feelFree}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl p-8 border border-gray-700">
              <div className="space-y-6">
                <a href="mailto:your.email@example.com" 
                   className="flex items-center space-x-4 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-blue-400/10">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <span>your.email@example.com</span>
                </a>

                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <span>{t.yourLocation}</span>
                </div>

                <div className="pt-6 border-t border-gray-700">
                  <h4 className="text-gray-400 font-semibold mb-4">{t.connectWithMe}</h4>
                  <div className="flex space-x-4">
                    {[
                      { Icon: Github, href: "https://github.com/yourusername" },
                      { Icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
                      { Icon: Twitter, href: "https://twitter.com/yourusername" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-colors"
                      >
                        <social.Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-gray-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-gray-300 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
              >
                {t.sendMessage}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
