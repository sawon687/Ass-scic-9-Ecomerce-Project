import FoodCard from '@/Components/FoodCard/FoodCard';

const getFruits = async () => {
  const res = await fetch(
    'http://localhost:3000/api/fruitsColle',
    { cache: 'no-store' }
  );
  return await res.json();
};

const AllFruits = async () => {
  const fruits = await getFruits();

  return (
    <main className="bg-gray-50 min-h-screen mt-40">

    
{/* Hero Section */}
<section className="relative px-20 h-[450px]">
  <div className="grid grid-cols-2 gap-6 h-full">

    {/* Left Big Banner */}
    <div className="relative rounded-3xl overflow-hidden group">
      <img
        className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
        src="https://i.ibb.co.com/ynnDDHnx/healthy-vegetables-wooden-table.jpg"
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 text-white">
        <span className="inline-block bg-green-600 px-4 py-1 rounded-full text-xs font-semibold w-fit mb-3">
          🌿 100% Organic
        </span>

        <h1 className="text-4xl font-bold leading-tight">
          Fresh Fruits <br /> Healthy Life
        </h1>

        <p className="mt-3 text-sm text-gray-200 max-w-sm">
          Farm-fresh organic fruits delivered to your doorstep.
        </p>

        <div className="flex items-center gap-4 mt-5">
          <button className="bg-green-500 hover:bg-green-700 px-5 py-2.5 rounded-lg font-semibold transition text-sm">
            Shop Now
          </button>

          <span className="bg-red-500 px-3 py-1.5 rounded-lg font-bold text-sm">
            🔥 30% OFF
          </span>
        </div>

        {/* Features */}
        <div className="flex gap-5 mt-6 text-xs text-gray-200">
          <span>🚚 Free Delivery</span>
          <span>⭐ Premium Quality</span>
          <span>🌱 Chemical Free</span>
        </div>
      </div>
    </div>

    {/* Right Side Banners */}
    <div className="grid grid-rows-2 h-[450px]  gap-6">
      <div className="relative rounded-3xl overflow-hidden group">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src="https://i.ibb.co.com/zhjngt6r/top-view-peaches-basket-with-pineapple-apple-pomegranate-peach-plum-wooden-surface.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">Seasonal Fruits</h3>
          <p className="text-xs text-gray-200">Fresh & Juicy</p>
        </div>
      </div>

      <div className="relative rounded-3xl overflow-hidden group">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src="https://i.ibb.co.com/99yJTjhy/assorted-mixed-fruits.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">Mixed Fruit Box</h3>
          <p className="text-xs text-gray-200">Best for Family</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Products Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid gap-8 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4">

            {fruits?.map((fruit) => (
              <div
                key={fruit._id}
                className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <FoodCard fruit={fruit} />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Bottom Description Section */}
      <section className="bg-white border-t py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose Our Fruits?
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our fruits are carefully selected to ensure maximum freshness,
            nutritional value, and taste. We work directly with trusted farmers
            to bring you organic produce free from harmful chemicals.
            Whether you are looking for daily essentials or premium fruits,
            we guarantee quality you can trust.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 shadow-sm">
              <h3 className="text-xl font-semibold text-green-600">
                🌱 100% Organic
              </h3>
              <p className="mt-3 text-gray-600">
                No chemicals, no preservatives — just pure natural fruits.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 shadow-sm">
              <h3 className="text-xl font-semibold text-green-600">
                🚚 Farm to Door
              </h3>
              <p className="mt-3 text-gray-600">
                Delivered fresh directly from farms to your doorstep.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 shadow-sm">
              <h3 className="text-xl font-semibold text-green-600">
                ⭐ Premium Quality
              </h3>
              <p className="mt-3 text-gray-600">
                Handpicked fruits ensuring best taste and nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AllFruits;
