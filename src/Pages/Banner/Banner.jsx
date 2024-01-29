import React from "react";
import Button from "../../Components/Button";
import bannerImg from "../../assets/images/bannerimg.jpg"
import vectorImg from "../../assets/images/vector.png"
import frameImg from "../../assets/images/frame.png"

const Banner = () => {
  return (
    <div className="bg-[#FAF8F6]">
        
      <div className="flex justify-center items-center p-20">
        <div className="flex-1 sspace-y-4 ml-24 relative">
            <img className="-ml-12 absolute -top-[70px]" src={vectorImg} alt="" />
            <p className="text-base text-gray-400">Proven strategies backed by science for success.</p>
            <h1 className="text-[#333461] text-7xl font-extrabold mb-8">
                Live life at the <br /> full potential
            </h1>
            <p className="text-lg text-[#4A556C] md:w-[545px] mb-3">
            I help people to discover their true potential and live a fulfilling
            life... Discover the simple 3 steps that I discovered to hack
            productivity. It just works and it is begin using backed by science.
            Wanna transform your life?
            </p>
            <div>
                <Button content="Get your free guide now"></Button>
            </div>
        </div>
        <div className="flex-1 relative ml-52">
            <img className="-mb-32" src={bannerImg} alt="" />
            <img className="absolute -top-[120px] -left-[220px]" src={frameImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
