const Mission = () => {
  return (
    <div className="py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Our Core Beliefs</h2>
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto mt-8 md:grid-cols-3">
        <div className="px-8 py-6 font-medium bg-teal-500 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-800">Mission</h3>
          <p className="mt-4">
            To provide financial and advisory support, promote job creation,
            financial empowerment, and business growth. To unearth godly
            insights and practical wisdom through learning, support structures,
            and outreaches.
          </p>
        </div>
        <div className="p-6 font-medium bg-gray-200 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
          <p className="mt-4">
            To be an Enterprise Development Centre, raising and supporting godly
            entrepreneurs and career professionals.
          </p>
        </div>
        <div className="p-6 font-medium bg-orange-600 rounded-2xl">
          <h3 className="text-2xl font-bold">Core Values</h3>
          <ul className="mt-4 space-y-2">
            {coreValue.map((value, index) => (
              <li key={index} className="list-disc text-white">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mission;

let coreValue = [
  "Christ-centered principles",
  "Entrepreneurial empowerment",
  "Community development",
  "Holistic growth",
  "Sustainable impact",
  "Community-focused",
  "Wealth-building",
  "Solution-driven",
];
