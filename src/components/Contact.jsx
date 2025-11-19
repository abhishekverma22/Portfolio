import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const contactDetails = [
    {
      icon: <Mail className="w-5 sm:w-6 h-5 sm:h-6" />,
      label: "Email",
      value: "vermaabhishekabhi22@gmail.com",
      link: "mailto:vermaabhishekabhi22@gmail.com",
    },
    {
      icon: <Phone className="w-5 sm:w-6 h-5 sm:h-6" />,
      label: "Phone",
      value: "+91 9507615016",
      link: "tel:+919507615016",
    },
    {
      icon: <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />,
      label: "LinkedIn",
      value: "abhishek-verma-mern",
      link: "https://www.linkedin.com/in/abhishek-verma-mern/",
    },
    {
      icon: <Github className="w-5 sm:w-6 h-5 sm:h-6" />,
      label: "GitHub",
      value: "abhishekverma22",
      link: "https://github.com/abhishekverma22",
    },
  ];

  const handleSubscribe = () => {
    if (!subscribeEmail.trim()) {
      alert("Please enter your email!");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(subscribeEmail)) {
      alert("Please enter a valid email!");
      return;
    }

    const subject = encodeURIComponent("New Portfolio Subscriber");
    const body = encodeURIComponent(
      `Hi Abhishek,\n\nI'd like to subscribe to your updates!\n\nEmail: ${subscribeEmail}`
    );

    window.location.href = `mailto:vermaabhishekabhi22@gmail.com?subject=${subject}&body=${body}`;
    setSubscribeEmail("");
  };

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-[#010011]"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Feel free to reach out — I'm always open to new opportunities!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {contactDetails.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-6 bg-white/5 backdrop-blur-xl border border-gray-800 rounded-2xl hover:border-gray-600 transition-all duration-300"
            >
              <div className="p-2 sm:p-3 bg-gray-800/50 rounded-xl group-hover:bg-gray-700/70 transition">
                <div className="text-gray-300 group-hover:text-white transition">
                  {contact.icon}
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">{contact.label}</p>
                <p className="text-white font-medium truncate text-sm sm:text-base md:text-lg">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Subscribe Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 text-center">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-8">
            Subscribe to get updates about my latest projects!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="your-email@example.com"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubscribe()}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-white/10 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:bg-white/15 transition-all duration-300 text-sm sm:text-base md:text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubscribe}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-gray-700 to-gray-800 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg"
            >
              Subscribe
            </motion.button>
          </div>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base text-center mt-4">
            Clicking "Subscribe" will open your email client with a ready-to-send message.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
