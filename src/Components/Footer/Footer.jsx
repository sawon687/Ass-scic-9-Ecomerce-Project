import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import SocialIcons from '../Sochialicon/SocialIcons';

const Footer = () => {
    return (
        <>
          <footer className="bg-gradient-to-b from-green-900 to-green-950  text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Fr<span className="text-green-400">utin</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            We provide specialized winterization services to safeguard your food
            during the off-season, and when spring arrives, we handle the opening process.
          </p>

          {/* Social Icons */}
         <SocialIcons></SocialIcons>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">🌼 Categories</h3>
          <ul className="space-y-3 text-sm">
            {[
              "Fresh Fruits",
              "Fruit Juice",
              "Vegetables",
              "Meat & Fish",
              "Organic Fish",
            ].map((item) => (
              <li key={item} className="hover:text-green-400 cursor-pointer">
                → {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">🌼 Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["About Us", "Portfolio", "Help & FAQs", "Blog", "Contact Us"].map(
              (link) => (
                <li key={link} className="hover:text-green-400 cursor-pointer">
                  → {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">🌼 Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              📍 8502 Preston Rd. Inglewood, Maine 98380
            </li>
            <li className="flex gap-3">
              📞 +(088)01776079464<br />+(088)01776079464
            </li>
            <li className="flex gap-3">
              ✉️ islamsawon367@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 bg-green-700 py-6 text-center text-sm text-white">
        © {new Date().getFullYear()} MD Al jihad sawon. All Rights Reserved.
      </div>
    </footer>  
        </>
    );
};

export default Footer;