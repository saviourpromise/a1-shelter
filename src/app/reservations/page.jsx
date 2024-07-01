'use client'
import Image from "next/image";
import one from "../../images/Number.png";
import two from "../../images/Number 2.png";
import three from "../../images/Number 3.png";
import arrow from "../../images/arrow-right.png";
import logo from "../../images/logo.png";
import profile from "../../images/profile.png";
import reserve_image from "../../images/reserve-image.png";
import location from "../../images/location.png";
import shower from "../../images/shower-line.png";
import bed from "../../images/mdi_bed-outline.png";
import breakfast from "../../images/breakfast.png";
import wifi from "../../images/wifi.png";
import naira from "../../images/Naira.png";
import dash from "../../images/dashed.png";
import Footer from "../_components/Footer/Footer";
import { useRouter } from "next/navigation";

const reservation = () => {
    const router = useRouter();
  return (
    <div className="bg-[#F5F7FA]">
      <header className="bg-[#0C6390]">
        <section className="flex ml-36 pt-8 pb-40 gap-72">
          <div className="flex gap-4">
            <div className="flex gap-2">
              <div>
                <Image src={one} />
              </div>
              <p className="text-sm font-semibold text-white mt-[6px]">
                Your Selection
              </p>
            </div>

            <div className="mt-[6px]">
              <Image src={arrow} />
            </div>

            <div className="flex gap-2">
              <div>
                <Image src={two} />
              </div>
              <p className="text-sm font-semibold text-white mt-[6px]">
                Tenant’s Details
              </p>
            </div>

            <div className="mt-[6px]">
              <Image src={arrow} />
            </div>

            <div className="flex gap-2">
              <div>
                <Image src={three} />
              </div>
              <p className="text-sm font-semibold text-white mt-[6px]">
                Confirmation
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="flex gap-2">
              <div>
                <Image src={logo} />
              </div>
              <p className="text-white text-[13px] pt-[13px]">
                University of Illorin
              </p>
            </div>

            <div className="mt-[3px] cursor-pointer" onClick={() => router.push('/myProfile')}>
              <Image src={profile} />
            </div>
          </div>
        </section>
      </header>

      <section className="flex gap-4 mb-20">
      <div>
      <div className="flex gap-5 bg-white ml-32 pr-4 rounded-md pl-4 pt-5 pb-6 -mt-[7rem]">
        <div>
          <Image src={reserve_image} />
        </div>

        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">Lorem Ipsum</p>
            <div className="flex gap-2">
              <div>
                <Image src={location} />
              </div>
              <p className="text-sm text-gray-400 font-normal pt-[3px]">
                123 Unity Road, GRA, Ilorin, Kwara State, Nigeria.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-lg font-bold">Room of 1</p>

            <div className="flex gap-5 border-b-2 border-dashed -mt-2 pb-2 border-black">
              <div className="flex gap-2">
                <div>
                  <Image src={bed} />
                </div>
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Single Beds
                </p>
              </div>

              <div className="flex gap-2">
                <div>
                  <Image src={shower} />
                </div>
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Private Bath
                </p>
              </div>

              <div className="flex gap-2">
                <div>
                  <Image src={wifi} />
                </div>
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  WiFi
                </p>
              </div>

              <div className="flex gap-2">
                <div>
                  <Image src={breakfast} />
                </div>
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Feeling Included
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <p className="text-sm font-semibold bg-[#F5F7FA] p-[8px] rounded-md">
                01 April 2024
              </p>
              <p className="pt-1 text-lg">-</p>
              <p className="text-sm font-semibold bg-[#F5F7FA] p-[8px] rounded-md">
                31 July 2024
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col gap-4 bg-white ml-32 mt-4 pl-4 pr-4 pt-4 rounded-md pb-2">
      <p className="text-xl font-bold">Tenant’s Details</p>
      <p className="text-sm font-semibold text-[#A6A6A6]">
        Tenant’s names must match the valid Institution ID which will be used at
        check-in.
      </p>

      <div className="flex gap-8">
        <div className="flex gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            className="rounded-full accent-black"
          />
          <p className="text-xs font-bold">For Me</p>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            name=""
            id=""
            className="rounded-full accent-black"
          />
          <p className="text-xs font-bold">For Someoene Else</p>
        </div>
      </div>

      <div className="flex gap-[20px] mt-4">
        <input
          type="text"
          placeholder="Emmanuel"
          className="mb-4 bg-[#E3E7EE] p-3 w-[11rem] rounded-md shadow-md placeholder:text-[#0C6390] text-sm font-bold"
        />
        <input
          type="text"
          placeholder="Ayodeji"
          className="mb-4 bg-[#E3E7EE] p-3 rounded-md w-[11rem] shadow-md placeholder:text-[#0C6390] text-sm font-bold"
        />
        <input
          type="text"
          placeholder="Olorunfemi"
          className="mb-4 bg-[#E3E7EE] p-3 rounded-md w-[13rem] shadow-md placeholder:text-[#0C6390] text-sm font-bold"
        />
      </div>

      <div className="flex gap-[20px]">
        <input
          type="email"
          placeholder="deolorunfemi@gmail.com"
          className="mb-4 bg-[#E3E7EE] p-3 w-[17rem] rounded-md shadow-md placeholder:text-[#0C6390] text-sm font-bold"
        />
        <input
          type="text"
          placeholder="08092183332"
          className="mb-4 bg-[#E3E7EE] p-3 w-[11rem] rounded-md shadow-md placeholder:text-[#0C6390] text-sm font-bold"
        />
      </div>
    </div>

    <div className="flex flex-col gap-4 ml-32 bg-white pl-4 mt-4 pt-4 rounded-md pr-4 pb-4">
    <p className="text-xl font-bold">Special Request <span className="text-sm font-semibold">(Optional)</span></p>
    <p className="text-sm font-semibold text-[#A6A6A6]">The property will do its best, but cannot guarantee to fulfill it.</p>
    <div>
    <input type="text" placeholder="Enter your request here. It is optional." className="placeholder:text-xs font-normal p-1 pl-2 border border-[#F0F0F0] bg-inherit pb-28 pr-[21.5rem] rounded-md"/>
    </div>
    </div>

    <div className="flex flex-col gap-6 ml-32 bg-white mt-4 pr-4 pl-3 pt-4 pb-4 rounded-md">
    <p className="text-sm font-base text-[#A6A6A6] text-center">By submitting this booking, I acknowledge that I have read and agree to A1Shelter's <span className="text-[#CDCDCD]">Terms <br /> of Use</span> and <span className="text-[#CDCDCD]">Privacy Statement</span></p>
    <div className="justify-center flex items-center">
    <button onClick={() => router.push('/home')} className="text-xs font-semibold border-[#E89766] bg-[#E89766] border p-3 shadow-md text-white w-[25rem] rounded-md">
              Continue
    </button>
    </div>
    </div>
    </div>
    
    <div className="flex flex-col gap-4 -mt-[7rem]">
    <div className="flex flex-col gap-3 bg-[#F0F8FF] pl-4 pt-4 pb-4 rounded-md shadow-md">
    <div className="flex gap-[10.5rem]">
    <p className="text-lg font-extrabold">Price</p>
    <div className="flex gap-[3px]">
      <div>
    <Image src={naira} className="mt-[6px]"/>
    </div>
    <p className="text-lg font-extrabold">675,000</p>
    </div>
    </div>

    <div className="flex gap-3 ml-[10.5rem]">
      <div>
    <Image src={dash} className="mt-3"/>
    </div>
    <p className="text-sm font-semibold text-[#A6A6A6]">per person</p>
    </div>

    <div className="flex gap-3 ml-[9.5rem]">
    <div>
    <Image src={dash} className="mt-3"/>
    </div>
    <p className="text-sm font-semibold text-[#A6A6A6]">per semester</p>
    </div>
    </div>

    <div className="flex gap-4 flex-col bg-white pl-4 pr-4 pt-5 rounded-md pb-4">
    <p className="text-xl font-extrabold">Reservation Notice</p>
    <p className="text-xs text-[#A6A6A6] font-bold">Lorem ipsum dolor sit amet consectetur. Risus <br /> diam in sed gravida facilisi. Volutpat parturient et <br /> leo sed interdum sapien tellus sit quam.</p>
    <p className="text-xs text-[#A6A6A6] font-bold">Lorem ipsum dolor sit amet consectetur. Risus <br /> diam in sed gravida facilisi. Volutpat parturient et <br /> leo sed interdum sapien tellus sit quam.</p>
    <p className="text-xs text-[#A6A6A6] font-bold">Lorem ipsum dolor sit amet consectetur. Risus <br /> diam in sed gravida facilisi. Volutpat parturient et <br /> leo sed interdum sapien tellus sit quam.</p>
    </div>
    </div>
    </section>
    <Footer />
    </div>
  );
};

export default reservation;
