import React from "react";

const page = () => {
  return (
    <div className="w-full mt-34">

      {/* ===== Banner Section ===== */}
      <section className="relative ">
<img
  src="https://i.ibb.co/7JSb3YcX/citrus-fruits-with-kiwi-pineapple-leaves-wooden-kitchen-towel-top-view.jpg"
  alt="Fruit Basket"
  className="mt-8  shadow-lg w-full h-[600px] object-cover hover:scale-105 transition-transform duration-300"
 />


        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ===== Contact Content Section ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

          {/* ===== Left Side Content ===== */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Let’s Talk About Freshness 🍎
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Have questions about our organic fruits, delivery, or bulk orders?
              Feel free to reach out — we’d love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full">
                  📍
                </div>
                <p className="text-gray-700">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full">
                  📞
                </div>
                <p className="text-gray-700">
                  +880 1234 567 890
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full">
                  ✉️
                </div>
                <p className="text-gray-700">
                  support@freshfruits.com
                </p>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e"
              alt="Contact Illustration"
              className="mt-8 rounded-3xl shadow-lg"
            />
          </div>

          {/* ===== Right Side Form ===== */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default page;
