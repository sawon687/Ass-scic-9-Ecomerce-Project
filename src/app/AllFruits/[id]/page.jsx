import React from 'react';

const Fruitsdisplay = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/fruitsColle/${id}`, {
      cache: 'no-cache',
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
};

const page = async ({ params }) => {
  const { id } = await params;
  const fruit = await Fruitsdisplay(id);

  if (!fruit)
    return (
      <p className="text-center mt-32 text-red-500 text-lg">
        Fruit not found!
      </p>
    );

  return (
    <main className="bg-gray-50 min-h-screen mt-30 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

          {/* Images */}
          <div>
            <img
              src={fruit?.images?.[0]}
              alt={fruit?.name}
              className="w-full h-[420px] object-cover rounded-xl shadow-md"
            />

            <div className="flex gap-3 mt-4">
              {fruit?.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={index}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer 
                  border hover:border-green-600 transition"
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {fruit?.name}
              </h1>

              <p className="text-green-700 font-medium mt-2">
                {fruit?.category}
              </p>

              <p className="text-2xl font-semibold text-gray-900 mt-4">
                {fruit?.price} BDT
              </p>

              <div className="mt-6 space-y-2 text-gray-700">
                <p>
                  ⭐ Rating: <span className="font-medium">{fruit?.rating}</span>
                </p>
                <p>
                  📦 Stock: <span className="font-medium">{fruit?.stock}</span>
                </p>
                <p>
                  🌍 Origin: <span className="font-medium">{fruit?.origin}</span>
                </p>
                <p>
                  🌱 Organic:{' '}
                  <span className="font-medium">
                    {fruit?.isOrganic ? 'Yes' : 'No'}
                  </span>
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 bg-green-500 hover:bg-green-700 
              text-white py-3 rounded-xl font-semibold transition">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Description Section */}
        <section className="mt-16 bg-white rounded-2xl shadow-md p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Product Description
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            {fruit?.description}
          </p>
        </section>

      </div>
    </main>
  );
};

export default page;
