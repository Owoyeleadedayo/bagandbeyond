"use client"
import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NewInSection = () => {
  return (
    <section>
      <div className="mt-20 md:mt-6 flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-5xl font-bold font-Rale">New In</h1>
        </div>
        <div className="mt-4">
          <p className="font-semibold font-Rale">
            Welcome to Bag & Beyond. The Ultimate Destination For Bag Lovers.{" "}
            <br />
            We Offer A Vast Collection Of Bags To cater To All Your Needs.
          </p>
        </div>
        <div className="mt-4 md:flex md:flex-row md:justify-center md:block hidden">
          <IoIosArrowBack className="mt-1" />
          <p className="font-semibold font-Rale"> 3/12</p>
          <IoIosArrowForward className="mt-1" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <div>
              <p className="font-semibold font-Rale md:block hidden">$170</p>
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
            <div>
              <p className="font-semibold font-Rale">$250</p>
            </div>
          </div>
        </div>
        <div className="mt-1 flex flex-row md:justify-center md:hidden">
          <IoIosArrowBack className="mt-1" />
          <p className="font-semibold font-Rale"> 3/12</p>
          <IoIosArrowForward className="mt-1" />
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
            <div>
              <p className="font-semibold font-Rale md:block hidden">$270</p>
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
            <div>
              <p className="font-semibold font-Rale md:block hidden">$300</p>
            </div>
          </div>
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
    </section>
  );
}

export default NewInSection
