"use client"
import React from 'react'
import Link from "next/link";


const ExploreSection = () => {
  return (
    <section>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-4xl font-Rale font-bold md:items-start md:justify-start items-center">
            Explore Now With Our Best Collection
          </p>
          <div className="mt-2">
            <ul className="flex flex-row md:flex-col gap-2 md:items-start md:justify-start ">
              <li className="text-lg md:text-xl font-Rale font-semibold">
                <Link href="/Home">Home</Link>
              </li>
              <li className="text-lg md:text-xl font-Rale font-semibold">
                <Link href="/BackPack">BackPack</Link>
              </li>
              <li className="text-lg md:text-xl font-Rale font-semibold">
                <Link href="/MessengerBag">Messenger-Bags</Link>
              </li>
              <li className="text-lg md:text-xl font-Rale font-semibold">
                <Link href="/Totes">Totes</Link>
              </li>
              <li className="text-lg md:text-xl font-Rale font-semibold">
                <Link href="/BriefCase">BriefCase</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="/assets/Images/back1.avif"
            className="md:h-auto md:max-w-full md:block"
            alt="backpack"
          />
        </div>
        <div>
          <img
            src="/assets/Images/back2.avif"
            className="h-auto max-w-full md:block hidden"
            alt="backpack"
          />
        </div>
        <div>
          <img
            src="/assets/Images/backpack8.avif"
            className="h-auto max-w-full md:block hidden"
            alt="backpack"
          />
        </div>
        <div>
          <img
            src="/assets/Images/back3.avif"
            className="h-auto max-w-full md:block"
            alt="backpack"
          />
        </div>
        <div className="relative">
          <button
            type="button"
            className=" absolute md:top-[85%] md:left-[70%] font-Rale mt-6"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection
