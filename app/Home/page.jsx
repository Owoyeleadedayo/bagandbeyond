"use client";
import Image from "next/image";
import React from "react";
import DisplaySection from "@/components/DisplaySection";
import AboutSection from "@/components/AboutSection";
import ExploreSection from "@/components/ExploreSection";
import NewInSection from "@/components/NewInSection";
import UpcomingProduct from "@/components/UpcomingProduct";
import TrendingSection from "@/components/TrendingSection";
import BlogsSection from "@/components/BlogsSection";
import BagLoversSection from "@/components/BagLoversSection";
import NewsLetter from "@/components/NewsLetter";

const Home = () => {
  return (
    <div className="mt-6 mx-6">
      <DisplaySection />
      <AboutSection />
      <ExploreSection />
      <NewInSection />
      <UpcomingProduct />
      <TrendingSection />
      <BlogsSection />
      <BagLoversSection />
      <NewsLetter />
    </div>
  );
};

export default Home;
