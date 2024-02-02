import React from 'react'

const TrendingSection = () => {
  return (
    <section>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h1 className="font-Rale font-extrabold text-5xl md:block hidden">
            Trending <br />
            Now
          </h1>
          <div className="flex flex-row justify-between mt-14 md:block hidden">
            <div>
              <p className="font-semibold font-Rale md:block hidden">
                Medium Prada Brique Saffiano leather bag
              </p>
            </div>
            <div>
              <p className="font-semibold font-Rale md:block hidden">$290</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm font-Rale py-[16px] md:block hidden">
              Color: Papaya
            </p>
          </div>
          <div className="md:inline-block hidden">
            <button type="button" className="shopNow_btn font-Rale mt-6 ">
              Read More
            </button>
          </div>
        </div>
        <div>
          <img
            src="/assets/Images/back8.avif"
            className="md:h-auto md:max-w-full md:block hidden"
            alt="backpack"
          />
        </div>
        <div>
          <img
            src="/assets/Images/back9.avif"
            className="md:h-auto md:max-w-full md:block hidden"
            alt="backpack"
          />
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-900" />
    </section>
  )
}

export default TrendingSection
