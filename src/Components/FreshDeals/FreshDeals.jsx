import React from "react";

const FreshDeals = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-green-800">
            🔥 Fresh Deals
          </h2>
          <p className="text-gray-600">
            Limited time discounts on fresh fruits & vegetables
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="relative h-85 bg-gray-100   rounded-2xl shadow-lg overflow-hidden flex
                          transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            
            {/* Right Image */}
            <div className="w-full relative">
              <img
                src="https://i.postimg.cc/QMSTRgKw/vahgitabes.png"
                alt="Fresh Vegetables"
                className="w-full h-full object-cover"
              />
              
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-center p-4
                              opacity-0 transition-opacity duration-500 opacity-100">
                <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-4">
                  55% OFF
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Grab Your 55% Off
                </h3>
                <p className="text-white mb-4">
                  Organic And Fresh <br /> Vegetables
                </p>
                <button className="bg-green-500 hover:bg-green-800 text-white px-6 py-2 rounded-full font-medium transition">
                  Shop Now
                </button>
              </div>
            </div>

          </div>

          {/* Card 2 */}
          <div className="relative bg-gray-100 h-85 rounded-2xl shadow-lg overflow-hidden flex
                          transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            
            {/* Right Image */}
            <div className="w-full h-85 relative">
              <img
                src="https://i.ibb.co/1tNrkG05/vecteezy-fresh-fruits-and-vegetables-arranged-on-a-bright-white-60363711.png"
                alt="Fresh Fruits"
                className="w-full h-full object-cover"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-center p-4
                              opacity-0 transition-opacity duration-500 opacity-100">
                <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-4">
                  45% OFF
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Grab Your 45% Off
                </h3>
                <p className="text-white mb-4">
                  Fresh & Seasonal <br /> Fruits
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition">
                  Shop Now
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FreshDeals;
