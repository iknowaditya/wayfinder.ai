import React from "react";

function getapi() {
  return (
    <div className="py-16">
      <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
        <div>
          {/* <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 :text-white md:text-4xl ">
            AI-Enhanced Travel Plans for Unforgettable
            <br className="lg:block" hidden />
            Experiences
          </h2> */}
          <img
            src="https://images.pexels.com/photos/3105066/pexels-photo-3105066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-96 object-cover rounded-2xl cursor-pointer hover:scale-105 duration-500 transition-transform"
            alt="dubai"
          />
        </div>
        <div className="flex justify-center items-center py-8">
          <h1 className="mt-4 text-center text-2xl font-bold text-gray-800 :text-white md:text-4xl ">
            Paris Calling
            <br />
            Your Ultimate Itinerary
          </h1>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3">
          <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 :shadow-none :border-gray-700 :bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-16">
              <div className="flex items-center justify-between px-">
                <h1 className="font-bold text-5xl mb-2 text-neutral-800">
                  Day
                </h1>
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 :bg-gray-700"
                >
                  <span className="font-bold text-5xl text-indigo-600 :text-pink-300">
                    1
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition :text-white">
                  Explore Iconic Landmarks -
                </h3>
                <p className="text-pink-600 ">
                  Morning: Visit the Eiffel Tower for breathtaking panoramic
                  views of Paris.{" "}
                </p>
                <p className="text-green-600 :text-gray-300">
                  Afternoon: Stroll along the Seine River and explore Trocadéro
                  Gardens.{" "}
                </p>
                <p className="text-amber-600 :text-gray-300">
                  Evening: Enjoy a romantic dinner at a traditional French
                  bistro.
                </p>
              </div>
              {/* <img
                src="https://cdn-icons-png.flaticon.com/512/7983/7983132.png"
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
              /> */}
            </div>
          </div>
          <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 :shadow-none :border-gray-700 :bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-16">
              <div className="flex items-center justify-between px-">
                <h1 className="font-bold text-5xl mb-2 text-neutral-800">
                  Day
                </h1>
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 :bg-gray-700"
                >
                  <span className="font-bold text-5xl text-indigo-600 :text-pink-300">
                    2
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition :text-white">
                  Art and Culture -
                </h3>
                <p className="text-pink-600 ">
                  Morning: Explore the Louvre Museum and see the Mona Lisa.{" "}
                </p>
                <p className="text-green-600 :text-gray-300">
                  Afternoon: Visit Musée d'Orsay for an impressive collection of
                  Impressionist masterpieces.{" "}
                </p>
                <p className="text-amber-600 :text-gray-300">
                  Evening: Take a leisurely walk in the Latin Quarter.
                </p>
              </div>
              {/* <img
                src="https://cdn-icons-png.flaticon.com/512/7983/7983132.png"
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
              /> */}
            </div>
          </div>
          <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 :shadow-none :border-gray-700 :bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-16">
              <div className="flex items-center justify-between px-">
                <h1 className="font-bold text-5xl mb-2 text-neutral-800">
                  Day
                </h1>
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 :bg-gray-700"
                >
                  <span className="font-bold text-5xl text-indigo-600 :text-pink-300">
                    3
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition :text-white">
                  Historical Paris -
                </h3>
                <p className="text-pink-600 ">
                  Morning: Discover Notre-Dame Cathedral and Île de la Cité.{" "}
                </p>
                <p className="text-green-600 :text-gray-300">
                  Afternoon: Explore Sainte-Chapelle and the Conciergerie.{" "}
                </p>
                <p className="text-amber-600 :text-gray-300">
                  Evening: Enjoy dinner in the charming Marais district.
                </p>
              </div>
              {/* <img
                src="https://cdn-icons-png.flaticon.com/512/7983/7983132.png"
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
              /> */}
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3">
          <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 :shadow-none :border-gray-700 :bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-16">
              <div className="flex items-center justify-between px-">
                <h1 className="font-bold text-5xl mb-2 text-neutral-800">
                  Day
                </h1>
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 :bg-gray-700"
                >
                  <span className="font-bold text-5xl text-indigo-600 :text-pink-300">
                    4
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition :text-white">
                  Explore Iconic Landmarks -
                </h3>
                <p className="text-pink-600 ">
                  Morning: Visit the Eiffel Tower for breathtaking panoramic
                  views of Paris.{" "}
                </p>
                <p className="text-green-600 :text-gray-300">
                  Afternoon: Stroll along the Seine River and explore Trocadéro
                  Gardens.{" "}
                </p>
                <p className="text-amber-600 :text-gray-300">
                  Evening: Enjoy a romantic dinner at a traditional French
                  bistro.
                </p>
              </div>
              {/* <img
                src="https://cdn-icons-png.flaticon.com/512/7983/7983132.png"
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
              /> */}
            </div>
          </div>
          <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 :shadow-none :border-gray-700 :bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-16">
              <div className="flex items-center justify-between px-">
                <h1 className="font-bold text-5xl mb-2 text-neutral-800">
                  Day
                </h1>
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 :bg-gray-700"
                >
                  <span className="font-bold text-5xl text-indigo-600 :text-pink-300">
                    5
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition :text-white">
                  Explore Iconic Landmarks -
                </h3>
                <p className="text-pink-600 ">
                  Morning: Visit the Eiffel Tower for breathtaking panoramic
                  views of Paris.{" "}
                </p>
                <p className="text-green-600 :text-gray-300">
                  Afternoon: Stroll along the Seine River and explore Trocadéro
                  Gardens.{" "}
                </p>
                <p className="text-amber-600 :text-gray-300">
                  Evening: Enjoy a romantic dinner at a traditional French
                  bistro.
                </p>
              </div>
              {/* <img
                src="https://cdn-icons-png.flaticon.com/512/7983/7983132.png"
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
              /> */}
            </div>
          </div>
          <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 :shadow-none :border-gray-700 :bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-16">
              <div className="flex items-center justify-between px-">
                <h1 className="font-bold text-5xl mb-2 text-neutral-800">
                  Day
                </h1>
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 :bg-gray-700"
                >
                  <span className="font-bold text-5xl text-indigo-600 :text-pink-300">
                    6
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition :text-white">
                  Explore Iconic Landmarks -
                </h3>
                <p className="text-pink-600 ">
                  Morning: Visit the Eiffel Tower for breathtaking panoramic
                  views of Paris.{" "}
                </p>
                <p className="text-green-600 :text-gray-300">
                  Afternoon: Stroll along the Seine River and explore Trocadéro
                  Gardens.{" "}
                </p>
                <p className="text-amber-600 :text-gray-300">
                  Evening: Enjoy a romantic dinner at a traditional French
                  bistro.
                </p>
              </div>
              {/* <img
                src="https://cdn-icons-png.flaticon.com/512/7983/7983132.png"
                className="w-16"
                width="512"
                height="512"
                alt="burger illustration"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default getapi;
