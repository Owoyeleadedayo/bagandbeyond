import React from 'react'

const AboutSection = () => {
  return (
    <section>
      <div className="h-[60vh] text-black bg-black/20  bg-[url('/assets/Images/backpack8.avif')] bg-blend-soft-light bg-fill bg-center md:relative mt-4">
        <div className="md:absolute md:block hidden md:top-[35%] md:left-[75%] md:mr-10">
          <h1 className="text-2xl font-Rale font-bold">About Bag & Beyond</h1>
          <p className="max-w-[350px] text-wrap font-Rale font-medium  mt-2">
            Bag & Beyond is a Retail Store that specializes in Selling Bags Of
            Various Types, Sizes, Colors and Designs.
          </p>
          <button type="button" className=" font-Rale mt-6">
            Read More
          </button>
        </div>
      </div>
      <div className="md:hidden mt-4">
        <h1 className="text-xl font-Rale font-bold">About Bag & Beyond</h1>
        <p className="text-sm font-Rale font-semibold mt-2">
          Bag & Beyond is a Retail Store that specializes in Selling Bags Of
          Various Types, Sizes, Colors and Designs.
        </p>
        <button type="button" className=" font-Rale mt-6">
          Read More
        </button>
      </div>
    </section>
  )
}

export default AboutSection
