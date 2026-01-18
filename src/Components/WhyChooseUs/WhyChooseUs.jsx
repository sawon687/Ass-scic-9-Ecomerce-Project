const WhyChooseUs = () => {
  const features = [
    {
      title: 'Fresh Products',
      desc: 'We provide fresh and organic fruits directly from farms.',
      icon: '🍎',
    },
    {
      title: 'Fast Delivery',
      desc: 'Quick and safe delivery right to your doorstep.',
      icon: '🚚',
    },
    {
      title: 'Best Quality',
      desc: 'Premium quality products with strict quality control.',
      icon: '⭐',
    },
    {
      title: 'Secure Payment',
      desc: '100% secure payment with trusted gateways.',
      icon: '🔒',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">
            Why Choose Us
          </h2>
          <p className="text-gray-500 mt-2">
            We care about quality, speed and your satisfaction
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
