import React from "react";

const BlogsSection = () => {
  return (
    <section className="mt-15 md:mt-5 hidden">
      <div>
        <h1 className="font-extrabold font-Rale text-4xl mx-2">BLOGS</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          <div className="relative bg-[url('/assets/Images/symbole.avif')] bg-cover bg-no-repeat bg-center bg-gray-700 bg-blend-multiply md:block hidden">
            <div className="absolute bottom-10 px-12">
              <h2 className="text-2xl md:text-3xl font-medium text-white">
                10 Sustainable Bag Brands
                <br /> To Shop From
              </h2>
              <p className="mt-5 text-white">
                With an increasing focus on sustainability, readers may be
                interested in learning about bag brands that prioritize
                eco-friendly materials and production practices
              </p>
              <button type="button" className="mt-5 text-xl text-white">
                READ NOW
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative bg-gray-700 bg-blend-multiply">
              <img
                src="/assets/Images/carrybag3.avif"
                className="md:h-auto md:max-w-full"
                alt="backpack"
              />
              <div className="absolute bottom-0 mx-4 my-4 z-[100]">
                <h2 className="font-bold text-xl text-white">
                  How To Organize Your Life With The Right bag
                </h2>
                <button type="button" className="mt-5 text-lg text-white">
                  READ NOW
                </button>
              </div>
              <div className="absolute top-0 right-0 left-0 border-red-500 bg-gray-700 bg-blend-screen opacity-40 z-1 h-full w-full"></div>
            </div>
            <div className="relative md:block hidden">
              <img
                src="/assets/Images/edi.avif"
                className="md:h-auto md:max-w-full"
                alt="backpack"
              />
              <div className="absolute bottom-0 mx-4 my-4 z-[100]">
                <h2 className="font-bold text-xl text-white">
                  How To Organize Your Life With The Right bag
                </h2>
                <button type="button" className="mt-5 text-lg text-white">
                  READ NOW
                </button>
              </div>
              <div className="absolute top-0 right-0 left-0 border-red-500 bg-gray-700 bg-blend-screen opacity-40 z-1 h-full w-full"></div>
            </div>
            <div className="relative md:block hidden">
              <img
                src="/assets/Images/hat.avif"
                className="md:h-auto md:max-w-full md:block hidden"
                alt="backpack"
              />
              <div className="absolute bottom-0 mx-4 my-4 z-[100]">
                <h2 className="font-bold text-xl text-white">
                  How To Organize Your Life With The Right bag
                </h2>
                <button type="button" className="mt-5 text-xl text-white">
                  READ NOW
                </button>
              </div>
              <div className="absolute top-0 right-0 left-0 border-red-500 bg-gray-700 bg-blend-screen opacity-40 z-1 h-full w-full"></div>
            </div>
            <div className="relative md:block hidden">
              <button
                type="button"
                className="absolute md:top-[85%] md:left-[68%] font-Rale mt-6 text-lg font-medium"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr class="h-px md:my-8 my-2 bg-gray-300 border-0 dark:bg-gray-900" />
    </section>
  );
};

export default BlogsSection;
