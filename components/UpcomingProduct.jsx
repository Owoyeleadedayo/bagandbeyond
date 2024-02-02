import React from 'react'

const UpcomingProduct = () => {
  return (
    <section>
      <div className="mt-20 md:mt-6 flex flex-col-reverse md:flex-row justify-between">
        <div>
          <p className="md:text-sm md:font-semibold md:font-Rale md:block hidden">
            Reusable Handmade From the Surplus. Our Bags Are Made
            <br /> From 6 Recycles Totes. High Strength, Ultra Lightweight And
            <br /> Folds into A Small Pouch
          </p>
        </div>
        {/* mobile view */}
        <div>
          <p className="text-sm font-semibold font-Rale py-[16px] md:hidden">
            Reusable Handmade From the Surplus.Our Bags Are Made From 6 Recycles
            Totes. High Strength, Ultra Lightweight And Folds into A Small Pouch
          </p>
        </div>
        <div>
          <h1 className="text-4xl pb-4 font-extrabold font-Rale md:px-[120px]">
            Upcoming Product
            <br /> Reusable Bag
          </h1>
        </div>
      </div>
      <div className="mt-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <img
            src="/assets/Images/crotchetbag.avif"
            className="md:h-auto md:max-w-full"
            alt="backpack"
          />
        </div>
        <div>
          <img
            src="/assets/Images/crochetbag2.jpg"
            className="md:h-auto md:max-w-full md:block hidden"
            alt="backpack"
          />
        </div>
        <div>
          <img
            src="/assets/Images/crochetbag3.avif"
            className="md:h-auto md:max-w-full md:block hidden"
            alt="backpack"
          />
        </div>
      </div>
    </section>
  );
}

export default UpcomingProduct
