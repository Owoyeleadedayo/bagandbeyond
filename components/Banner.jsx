import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="relative h-[70vh] mt-[20px] mb-[50px] bg-[url('/assets/Images/crotchetbag.avif')] bg-cover bg-left bg-no-repeat md:block hidden">
        <div className="absolute top-10 right-8">
          <h1 className="font-bold text-6xl font-primary mb-7">
            Discover Our <br /> New Arrival
          </h1>
          <p className="max-w-[350px] text-wrap text-start font-Rale font-semibold">
            Bag & Beyond Is A Retail Store That Specializes
            <br /> In Selling Bags Of Various Types, Sizes, Colors and Designs
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner
