"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-4 mx-6 flex flex-col">
      <div className="md:flex md:flex-row md:gap-8 md:justify-between md:w-full md:px-2 hidden">
        <div className="md:mt-4">
          <ul className="md:flex md:flex-row md:gap-6 md:justify-start">
            <li className="text-lg md:text-xl font-Rale font-semibold">
              <Link href="/Home">Home</Link>
            </li>
            <li className="text-lg md:text-xl font-Rale font-semibold md:block hidden">
              <Link href="/Home">Shop</Link>
            </li>
            <li className="text-[14px] md:text-xl font-Rale font-semibold">
              <Link href="/Home">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="md:text-[38px] text-[24px] font-primary">
            Bag & Beyond
          </p>
        </div>
        <div className="mt-4">
          <ul className="flex flex-row gap-6 justify-start">
            <li className="text-[16px] md:text-xl font-Rale font-semibold">
              <Link href="/Home">Blog</Link>
            </li>
            <li className="text-[16px] md:text-xl font-Rale font-semibold">
              <Link href="/Home">Terms</Link>
            </li>
            <li className="text-[16px] md:text-xl font-Rale font-semibold">
              <Link href="/Home">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center items-center">
        <div className="">
          <p className="text-[35px] font-primary text-center m-4">
            Bag & Beyond
          </p>
        </div>
        <ul className="flex flex-row gap-10 justify-center items-center">
          <li className="text-[22px] font-Rale font-bold">
            <Link href="/Home">Home</Link>
          </li>
          <li className="text-[22px] font-Rale font-bold">
            <Link href="/Home">Shop</Link>
          </li>
          <li className="text-[22px] font-Rale font-bold">
            <Link href="/Home">Contact</Link>
          </li>
        </ul>
      </div>
      <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700" />
      <p className="text-[16px] text-center font-normal text-gray-400 mb-2">
        All Right Reserved@XGamBino
      </p>
    </footer>
  );
};

export default Footer;
