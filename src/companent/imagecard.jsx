import React from "react";

function imagecard() {
  return (
    <div>
      <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
          <div>
            <h2 className="mt-4 text-2xl font-bold text-gray-700 :text-white md:text-4xl">
              Your AI-Powered Travel Guide..
            </h2>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-100 :divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 :border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-white :bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://images.pexels.com/photos/3763190/pexels-photo-3763190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="w-64 h-40 object-cover rounded-2xl cursor-pointer hover:scale-105 duration-500 transition-transform"
                  alt="dubai"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 :text-white transition group-hover:text-primary">
                    Dubai, UAE
                  </h5>
                  <p className="text-sm text-gray-600 :text-gray-300">
                    Iconic skyline, endless luxury, and desert adventures await.
                  </p>
                </div>
                <a
                  href="/"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Explore More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white :bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://images.pexels.com/photos/17646157/pexels-photo-17646157/free-photo-of-eiffel-tower-and-paris-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="w-64 h-40 object-cover rounded-2xl cursor-pointer hover:scale-105 duration-500 transition-transform"
                  alt="france"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 :text-white transition group-hover:text-primary">
                    Paris, France
                  </h5>
                  <p className="text-sm text-gray-600 :text-gray-300">
                    A symphony of culture, from the Eiffel Tower to the lavender
                    fields.
                  </p>
                </div>
                <a
                  href="/"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Explore More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white :bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://images.pexels.com/photos/16022173/pexels-photo-16022173/free-photo-of-aerial-view-of-bilbao-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="w-64 h-40 object-cover rounded-2xl cursor-pointer hover:scale-105 duration-500 transition-transform"
                  alt="spain"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 :text-white transition group-hover:text-primary">
                    Barcelona, Spain
                  </h5>
                  <p className="text-sm text-gray-600 :text-gray-300">
                    A lively fiesta of flamenco, rich history, and sun-kissed
                    landscapes.
                  </p>
                </div>
                <a
                  href="/"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Explore More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white :group-hover:bg-gray-800">
                <img
                  src="https://images.pexels.com/photos/3411135/pexels-photo-3411135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="w-64 h-40 object-cover rounded-2xl cursor-pointer hover:scale-105 duration-500 transition-transform"
                  alt="United States"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 :text-white transition group-hover:text-primary">
                    Orlando, United States
                  </h5>
                  <p className="text-sm text-gray-600 :text-gray-300">
                    Where every state tells a different tale.
                  </p>
                </div>
                <a
                  href="/"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Explore More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default imagecard;
