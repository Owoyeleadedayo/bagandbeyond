import React from 'react'

const NewsLetter = () => {
  return (
    <section className="flex mt-5 bg-black items-center justify-center">
      <div className="justify-center mx-20 my-20 items-center m-[600px] py-[70px] px-[130px] border-r-2 border-white-500">
        <h2 className="text-2xl font-medium text-white text-center mb-5">
          SIGN UP TO OUR NEWSLETTER!
        </h2>
        <p className="text-white text-center text-sm px-16 font-normal mt-3">
          $10 Off Your First Order
        </p>
        <button
          type="button"
          className="subscribe_btn mx-[75px] mt-10 item-center justify-center"
        >
          Subscribe
        </button>
      </div>
      <div className="justify-center mx-20 my-20 items-center m-[200px] p-[8px] md:block hidden">
        <h2 className="text-2xl font-medium text-white text-center mb-5">
          NEWS
        </h2>
        <p className="text-white text-center text-sm px-16 font-normal mt-3">
          Discover All Our News
        </p>
        <button
          type="button"
          className="subscribes_btn mx-[75px] mt-10 item-center justify-center"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default NewsLetter
