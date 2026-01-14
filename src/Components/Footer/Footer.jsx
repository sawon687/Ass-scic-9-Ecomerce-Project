import React from 'react';

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
          <div className="flex gap-4 mt-6">
            {["facebook", "twitter", "linkedin", "instagram", "youtube"].map((i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-800 hover:bg-green-600 transition cursor-pointer"
              >
                <i className={`fab fa-${i} text-white`} />
              </div>
            ))}
          </div>
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
              📞 +(163)-2654-3564<br />+(163)-2654-5432
            </li>
            <li className="flex gap-3">
              ✉️ help24/7@frutin.com
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