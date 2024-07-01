'use client'
import Image from "next/image";
import map from "../../images/Maps.png";
import slider from "../../images/Slider.png";
import block from "../../images/Price Filter.png";
import slide from "../../images/slide.png";
import line from "../../images/line.png";
import filter from "../../images/filter.png";
import image from "../../images/image.png";
import elipse from "../../images/Ellipse 1.png";
import amen from "../../images/Amenities.png";
import naira from "../../images/Naira.png";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import { useRouter } from "next/navigation";

const home = () => {
    const router = useRouter();
    return (
       <div className="bg-[#F5F7FA]">
        <Header />
        <section className="flex gap-5 ml-40 mt-8 mb-20">
        <div className="flex flex-col gap-4">
        <Image src={map}/>

        <div className="flex flex-col gap-4 bg-white pt-2 pl-4 pb-5 rounded-lg">
        <p className="text-base font-normal text-gray-500"><span className="text-xl font-bold text-black">Price</span> (NGN 0 - NGN 100,000 +)</p>
        <Image src={slider}/>
        <Image src={block}/>
        </div>

        <div className="flex flex-col gap-4 bg-white pt-2 pl-4 pr-5 pb-4 rounded-lg">
        <p className="text-xl font-bold">Distance from University</p>
        <p className="text-base font-normal text-gray-500">(0 km - 4 km)</p>
        <div className="relative">
        <Image src={slide}/>
        <Image src={line} className="absolute top-1 left-3"/>
        </div>
        </div>

        <div className="flex flex-col gap-5 bg-white pt-2 pl-4 pr-5 pb-3 rounded-lg">
        <p className="text-xl font-bold">Listing Type</p>
        <div className="flex flex-col gap-1">
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Hostel</p>
        </div>
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Apartment</p>
        </div>
        </div>
        </div>

        <div className="flex flex-col gap-5 bg-white pt-2 pl-4 pr-5 pb-3 rounded-lg">
        <p className="text-xl font-bold">Most Sought Facilities</p>
        <div className="flex flex-col gap-1">
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Lorem Ipsum</p>
        </div>
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Lorem Ipsum</p>
        </div>
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Lorem Ipsum</p>
        </div>
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Lorem Ipsum</p>
        </div>
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Lorem Ipsum</p>
        </div>
        </div>
        </div>

        <div className="flex flex-col gap-5 bg-white pt-2 pl-4 pr-5 pb-3 rounded-lg">
        <p className="text-xl font-bold">Bed Types</p>
        <div className="flex flex-col gap-1">
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Bunk Beds</p>
        </div>
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Single Beds</p>
        </div>
        </div>
        </div>

        <div className="flex flex-col gap-5 bg-white pt-2 pl-4 pr-5 pb-3 rounded-lg">
        <p className="text-xl font-bold">Room Types</p>
        <div className="flex flex-col gap-1">
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Room of 1</p>
        </div>
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Room of 2</p>
        </div>
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Room of 4</p>
        </div>
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">Room of 8</p>
        </div>
        <div className="flex gap-3">
        <input type="checkbox" name="" id="" />
        <p className="text-base font-normal text-gray-500">More than 8</p>
        </div>
        </div>
        </div>
        </div>


        <div className="flex flex-col gap-4">
        <div className="flex gap-60">
        <p className="text-xl font-bold pt-2">32 Listings Found</p>

        <div className="flex gap-1 bg-white pt-2 pl-3 pr-4 pb-2 rounded-md">
        <div className="mt-[7px]">
        <Image src={filter}/>
        </div>
        <div>
        <select name="" id="" className="bg-inherit">
            <option value="">Sort by: Distance from University</option>
            <option value="">Sort by: Distance from University</option>
            <option value="">Sort by: Distance from University</option>
        </select>
        </div>
        </div>
        </div>

        {Array(8).fill(0).map((_, index) =>
            <div className="flex gap-6 bg-white pl-7 pt-7 pb-7 rounded-md" key={index}>
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
        </section>

        <Footer />
       
       </div>
    );
};

export default home;