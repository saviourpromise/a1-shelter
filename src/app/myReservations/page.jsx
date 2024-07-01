'use client'
import Image from "next/image";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import Navbar from "../_components/Navbar/Navbar";
import cotent from "../../images/Content.png";
import elipse from "../../images/Ellipse 1.png";
import amen from "../../images/Amenities.png";
import image from "../../images/image.png";
import naira from "../../images/Naira.png";

const tabs = [
  'All', 'Pending', 'Successfull', 'Canceled'
]
const myVisit = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <Header />

      <div className="flex gap-6 ml-44 mt-8">
        <Navbar />
        <div className="flex flex-col gap-6 mb-10 w-full pr-48">
          <div className="flex justify-between gap-[1.5rem]">
            <p className="text-lg font-bold mt-1">My Reservation</p>
            <div className="flex">
              {tabs.map((tab, index) => (
                <div key={index}>
                <button className={`${(index == 0) ? 'bg-[#E89766] text-white':'bg-white text-black' } text-xs font-semibold p-[10px] shadow-md  w-[8rem] rounded-sm`}>
                  {tab}
                </button>
              </div>))}
            </div>
          </div>
{Array(3).fill(0).map(() =>
          <div className="flex gap-6 bg-white pl-7 pt-7 pb-7 rounded-md">
            <div>
            <Image src={image}/>
            </div>

            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-1">
                <p className="text-xl font-bold">Lorem Ipsum</p>
                <div className="flex gap-2">
                <p className="text-sm text-gray-300 font-normal">5km from University</p>
                <div className="mt-2">
                <Image src={elipse}/>
                </div>
                <p className="text-sm font-bold text-[#0C6390]">Show on Map</p>
                </div>
                </div>

                <div className="flex gap-[92px]">
                <div className="flex flex-col gap-1 bg-[#F0F0F0] mt-2 pl-2 pt-[3px] rounded-md pr-2">
                <div className="flex gap-2">
                <p className="text-sm font-bold">Room of 1</p>
                <div>
                <Image src={amen}/>
                </div>
                </div>
                <p className="text-sm font-normal text-[#32A431]">Breakfast & Dinner Included</p>
                </div>

                <div className="flex flex-col">
                <p className="text-sm font-normal text-gray-400"><span className="text-xl font-bold text-black"><Image src={naira} className="inline-block -mt-1"/>675,000</span> per semester</p>
                <button onClick={()=> router.push('/listing')} className="text-xs bg-[#E89766] text-white w-[9.5rem] h-[2rem] rounded-md shadow-md ml-9 mt-[14px]">Check Availability</button>
                </div>
                </div>
            </div>
        </div>)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default myVisit;
