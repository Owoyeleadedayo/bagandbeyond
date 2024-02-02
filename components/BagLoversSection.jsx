import React from 'react'

const BagLoversSection = () => {
  return (
    <section className='hidden'>
      <h1 className="items-center text-center text-5xl font-bold">
        Our Bag Lovers Have Chosen
      </h1>
      <div className="mt-6 grid grid-cols-4 gap-4">
        <div>
          <img
            src="/assets/Images/back4.avif"
            className="md:h-auto md:max-w-full md:block hidden"
            alt="backpack"
          />
          <div className="flex flex-row justify-between mt-2">
            <div>
              <p className="font-semibold font-Rale md:block hidden">
                Topstitched Re-Nylon shoulder bag
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/Images/back5.avif"
            className="md:h-auto md:max-w-full md:block"
            alt="backpack"
          />
          <div className="flex flex-row justify-between mt-2">
            <div>
              <p className="font-semibold font-Rale ">
                Prada Cross leather bag
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/Images/back6.avif"
            className="md:h-auto md:max-w-full md:block hidden"
            alt="backpack"
          />
          <div className="flex flex-row justify-between mt-2">
            <div>
              <p className="font-semibold font-Rale md:block hidden">
                Re-Nylon and leather shoulder bag
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/Images/back7.avif"
            className="md:h-auto md:max-w-full md:block hidden"
            alt="backpack"
          />
          <div className="flex flex-row justify-between mt-2">
            <div>
              <p className="font-semibold font-Rale md:block hidden">
                Prada Symbole bag in embroidered fabric
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BagLoversSection
