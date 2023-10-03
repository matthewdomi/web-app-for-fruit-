import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100">


      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center text-gray-900 font-bold mb-4">
          Welcome to Fruit Orange!
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          We offer a wide variety of fresh and delicious fruits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-xl text-gray-900 font-bold mb-2">Fruit Selection</h2>
            <p className="text-gray-700">
              Explore our extensive selection of fresh and juicy fruits. From apples to oranges, we've got you covered.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-xl text-gray-900 font-bold mb-2">Nutritional Benefits</h2>
            <p className="text-gray-700">
              Learn about the nutritional benefits of different fruits and how they can contribute to your well-being.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-xl text-gray-900 font-bold mb-2">Recipes and Tips</h2>
            <p className="text-gray-700">
              Discover delicious fruit recipes and useful tips for incorporating fruits into your daily meals and snacks.
            </p>
          </div>
        </div>
      </main>


    </div>
  );
};

export default LandingPage;
