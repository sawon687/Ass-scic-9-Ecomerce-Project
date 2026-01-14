import React from "react";

const services = [
  {
    id: 1,
    title: "Fresh Vegetable",
    description: "Inspections to ensure compliance with organic standards.",
    image: "https://i.ibb.co.com/xtrLh4qt/Screenshot-2026-01-14-071453.png",
    icon: "🥕",
  },
  {
    id: 2,
    title: "Organic Fertilizer",
    description: "Inspections to ensure compliance with organic standards.",
    image: "https://i.ibb.co.com/dJwVRTkq/Screenshot-2026-01-14-070637.png",
    icon: "🌱",
  },
  {
    id: 3,
    title: "Natural Fruits",
    description: "Inspections to ensure compliance with organic standards.",
    image: "https://i.ibb.co.com/GfgTqYM4/Screenshot-2026-01-14-071512.png",
    icon: "🍎",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-[#f5f7ec]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-800">Our Services</h2>
          <p className="text-gray-600 mt-2">
            Our Organic Farming Service For You!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((item) => (
            <div key={item.id} className="relative">
              {/* Image */}
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                />
              </div>

              {/* White Curved Content */}
              <div className="relative -mt-20 bg-white service-apple   rounded-[60px] px-8 pt-20 pb-14 text-center shadow-xl">

                {/* Icon Circle */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-green-600">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                </div>

                {/* Leaf Decoration */}
                <div className="flex justify-center  mb-4 text-green-600 text-xl">
                  🌿 🌿 🌿 
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>

                {/* Arrow Button */}
                <button className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-orange-500 hover:bg-green-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg transition">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
