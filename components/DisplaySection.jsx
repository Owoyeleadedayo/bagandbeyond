import React from 'react'

const DisplaySection = () => {
  return (
    <section>
      <div className="flex justify-center flex-col md:flex-row gap-[10px] items-center">
        <div className="md:w-[60%] md:block hidden  h-[70vh]">
          <img
            src="/assets/Images/backpack1.avif"
            className="w-[100%] h-[100%] object-cover"
            alt="backpack"
          />
        </div>
        <div className="md:w-[40%] w-[100%] h-[70vh]">
          <img
            src="/assets/Images/backpack4.avif"
            className="w-[100%] h-[100%]  object-cover"
            alt="backpack"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[10px] mt-6 justify-between">
        <div className="">
          <p className="text-5xl font-Rale font-bold">
            Elevate your look
            <br /> with Our Bags.
          </p>
        </div>
        <div className="md:ml-[200px]">
          <p className="md:text-lg  font-Rale font-bold md:block hidden">
            Welcome to Bag & Beyond. The Ultimate Destination
            <br /> For Bag Lovers. We Offer A Vast Collection Of Bags To
            <br /> cater To All Your Needs.
          </p>
          <p className="text-lg  font-Rale font-bold md:hidden">
            Welcome to Bag & Beyond. The Ultimate Destination For Bag Lovers.
          </p>
          <button type="button" className=" font-Rale mt-6">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default DisplaySection
