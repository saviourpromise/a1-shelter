'use client'
import Image from "next/image";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import location from "../../images/location.png";
import dot from "../../images/dot.png";
import details from "../../images/Other Details.png";
import section from "../../images/Section 2.png";
import breakfast from "../../images/breakfast.png";
import bus from "../../images/bus.png";
import park from "../../images/park.png";
import fitness from "../../images/fitness.png";
import room_images from "../../images/Room Images.png";
import bed from "../../images/mdi_bed-outline.png";
import dimensions from "../../images/dimensions.png";
import shower from "../../images/shower-line.png";
import tv from "../../images/fa_tv.png";
import line_3 from "../../images/Line 3.png";
import naira from "../../images/Naira.png";
import { useRouter } from "next/navigation";

const listing = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F5F7FA]">
      <Header />
      <div className="flex ml-44 gap-[26rem] pt-4">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Lorem Ipsum</p>
          <div className="flex gap-2">
            <div>
              <Image src={location} />
            </div>
            <p className="text-sm text-gray-400 font-normal pt-[3px]">
              123 Unity Road, GRA, Ilorin, Kwara State, Nigeria.
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm text-gray-400 font-normal">
              5km from University
            </p>
            <div>
              <Image src={dot} className="mt-[6px]" />
            </div>
            <p className="text-sm font-medium text-[#0C6390]">Show on Map</p>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <div>
            <button onClick={() => router.push('/reservations')} className="text-xs font-semibold border-[#E89766] border p-3 shadow-md">
              Schedule Visit
            </button>
          </div>
          <div>
            <button onClick={() => router.push('/reservations')} className="text-xs font-semibold border-[#E89766] bg-[#E89766] border p-3 shadow-md text-white">
              Select Your Room
            </button>
          </div>
        </div>
      </div>

      <Image src={details} className="ml-44 mt-4" />
      <Image src={section} className="ml-44 mt-6" />

      <section className="flex ml-44 gap-3 bg-white mt-5 pl-3 pt-4 pb-8 rounded-md mr-[153px]">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Listing Description</p>
          <div className="flex flex-col gap-4 text-xs text-gray-500 font-normal">
            <p>
              Owned By:Wrace Accomodations Opened:2014 Renovated:2019 Total
              Number of Rooms:65
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Id nunc eu donec nunc eu.
              Sit mattis posuere elit morbi sit <br /> ullamcorper. Egestas
              auctor viverra morbi nibh senectus nunc. Ac aliquet sapien euismod
              etiam mollis nullam <br /> interdum aliquam.
            </p>

            <p>
              Nullam commodo pretium viverra erat ornare. Maecenas velit justo
              at est aenean sollicitudin et. Erat urna <br /> facilisi quis
              dignissim feugiat tellus odio est adipiscing. Aliquam tortor
              rhoncus risus in. Turpis viverra dignissim <br /> ac feugiat ut et
              facilisis aliquam egestas. Elementum ac volutpat ipsum quis mi.
              Natoque nunc sit enim <br /> bibendum fermentum non turpis enim
              tortor. Tempor lorem eget non massa enim. Pretium maecenas erat
              porta <br /> in donec. Dis feugiat pretium mauris mollis tincidunt
              vel malesuada eros turpis.
            </p>

            <p>
              Malesuada suspendisse nec sed ut vestibulum non. Laoreet arcu
              semper amet lacus ullamcorper maecenas <br /> metus mattis. Quis
              justo pulvinar sed ultrices sit purus ullamcorper. Ut velit lacus
              consequat malesuada <br /> phasellus risus lacus. Enim laoreet
              rutrum aliquam pretium dignissim aliquam amet neque. Laoreet
              tempor sed <br /> cras egestas vel vitae mauris aenean.
            </p>

            <p>
              Potenti risus ultrices turpis id eget quis elementum ultricies
              vulputate. A suspendisse sit eleifend quam amet. <br /> Nibh et
              elit ut ornare. Viverra cursus in turpis curabitur feugiat luctus.
              Consequat aliquam ipsum maecenas <br /> phasellus nunc augue donec
              vel id. Metus amet commodo mi faucibus malesuada. Vel venenatis in
              pharetra <br /> lorem in et venenatis sollicitudin auctor. Ipsum
              feugiat sollicitudin lorem dictumst amet enim nisi. Imperdiet{" "}
              <br /> nullam vestibulum maecenas ullamcorper eget viverra. Sit
              enim et dolor pharetra non sed pellentesque diam <br /> nunc. Id
              tristique sagittis faucibus id. Duis dictumst massa praesent
              nulla. Bibendum adipiscing elementum <br /> aliquam ut dignissim
              ultrices ullamcorper nunc cum.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-[#F0F8FF] pl-5 pt-4 pr-5 mt-[120px] rounded-md">
          <p className="text-xl font-bold">Highlights</p>
          <div className="flex gap-4">
            <Image src={breakfast} />
            <p className="text-sm font-normal text-[#A6A6A6] pt-1">
              Breakfast & Dinner Included
            </p>
          </div>

          <div className="flex gap-4">
            <Image src={bus} />
            <p className="text-sm font-normal text-[#A6A6A6] pt-[2px]">
              Shuttle to and fro School
            </p>
          </div>

          <div className="flex gap-4">
            <Image src={park} />
            <p className="text-sm font-normal text-[#A6A6A6] pt-1">
              Available Parking Space
            </p>
          </div>

          <div className="flex gap-4">
            <Image src={fitness} />
            <p className="text-sm font-normal text-[#A6A6A6] pt-1">
              Fitness Room available
            </p>
          </div>

          <div className="flex gap-2 mt-6">
            <div>
              <button onClick={() => router.push('/reservations')} className="text-xs font-semibold border-[#E89766] border p-3 shadow-md pl-5 pr-5">
                Schedule Visit
              </button>
            </div>
            <div>
              <button onClick={() => router.push('/reservations')} className="text-xs font-semibold border-[#E89766] pl-5 pr-5 bg-[#E89766] border p-3 shadow-md text-white">
                Select Your Room
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="ml-44 bg-white mt-4 pt-6 rounded-md pl-4 mr-[9.5rem] pb-6">
        <p className="text-xl font-bold">Where you’ll sleep</p>

        <div className="flex gap-12 bg-[#F0F8FF] pt-4 pb-4 rounded-md pl-8 mr-4 mt-4">
          <Image src={room_images} />

          <div className="flex gap-8">
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-28">
                <p className="text-base font-bold">Room for 1</p>
                <p className="text-xs text-[#0C6390] font-semibold border-b-[1px] border-b-[#0C6390]">
                  More Details
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={bed} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Single Beds
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={dimensions} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  40sqm
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={shower} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Private Bath
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={tv} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">TV</p>
              </div>
            </div>

            <Image src={line_3} />

            <div className="flex flex-col mt-28 ml-32">
              <p className="text-sm font-normal text-gray-400">
                <span className="text-xl font-bold text-black">
                  <Image src={naira} className="inline-block -mt-1" />
                  675,000
                </span>{" "}
                per semester
              </p>
              <button onClick={() => router.push('/reservations')} className="text-xs bg-[#E89766] text-white w-[9.5rem] h-[2rem] rounded-md shadow-md ml-9 mt-[14px]">
                Reserve
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-12 bg-[#F0F8FF] pt-4 pb-4 rounded-md pl-8 mr-4 mt-4">
          <Image src={room_images} />

          <div className="flex gap-8">
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-28">
                <p className="text-base font-bold">Room for 1</p>
                <p className="text-xs text-[#0C6390] font-semibold border-b-[1px] border-b-[#0C6390]">
                  More Details
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={bed} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Single Beds
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={dimensions} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  40sqm
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={shower} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Private Bath
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={tv} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">TV</p>
              </div>
            </div>

            <Image src={line_3} />

            <div className="flex flex-col mt-28 ml-32">
              <p className="text-sm font-normal text-gray-400">
                <span className="text-xl font-bold text-black">
                  <Image src={naira} className="inline-block -mt-1" />
                  675,000
                </span>{" "}
                per semester
              </p>
              <button onClick={() => router.push('/reservations')} className="text-xs bg-[#E89766] text-white w-[9.5rem] h-[2rem] rounded-md shadow-md ml-9 mt-[14px]">
                Reserve
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-12 bg-[#F0F8FF] pt-4 pb-4 rounded-md pl-8 mr-4 mt-4">
          <Image src={room_images} />

          <div className="flex gap-8">
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-28">
                <p className="text-base font-bold">Room for 1</p>
                <p className="text-xs text-[#0C6390] font-semibold border-b-[1px] border-b-[#0C6390]">
                  More Details
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={bed} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Single Beds
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={dimensions} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  40sqm
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={shower} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Private Bath
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={tv} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">TV</p>
              </div>
            </div>

            <Image src={line_3} />

            <div className="flex flex-col mt-28 ml-32">
              <p className="text-sm font-normal text-gray-400">
                <span className="text-xl font-bold text-black">
                  <Image src={naira} className="inline-block -mt-1" />
                  675,000
                </span>{" "}
                per semester
              </p>
              <button onClick={() => router.push('/reservations')} className="text-xs bg-[#E89766] text-white w-[9.5rem] h-[2rem] rounded-md shadow-md ml-9 mt-[14px]">
                Reserve
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-12 bg-[#F0F8FF] pt-4 pb-4 rounded-md pl-8 mr-4 mt-4">
          <Image src={room_images} />

          <div className="flex gap-8">
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-28">
                <p className="text-base font-bold">Room for 1</p>
                <p className="text-xs text-[#0C6390] font-semibold border-b-[1px] border-b-[#0C6390]">
                  More Details
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={bed} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Single Beds
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={dimensions} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  40sqm
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={shower} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">
                  Private Bath
                </p>
              </div>

              <div className="flex gap-3">
                <Image src={tv} />
                <p className="text-xs font-semibold text-[#A6A6A6] pt-1">TV</p>
              </div>
            </div>

            <Image src={line_3} />

            <div className="flex flex-col mt-28 ml-32">
              <p className="text-sm font-normal text-gray-400">
                <span className="text-xl font-bold text-black">
                  <Image src={naira} className="inline-block -mt-1" />
                  675,000
                </span>{" "}
                per semester
              </p>
              <button onClick={() => router.push('/reservations')} className="text-xs bg-[#E89766] text-white w-[9.5rem] h-[2rem] rounded-md shadow-md ml-9 mt-[14px]">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-10 ml-44 bg-white mt-4 pl-4 rounded-md pt-6 mr-[9.5rem] pb-6 mb-20">
      <div className="flex gap-[46.5rem]">
      <p className="text-xl font-bold">Area Info</p>
      <button className="text-xs bg-[#E89766] text-white w-[9.5rem] h-[2rem] rounded-md shadow-md">
               See on Map
      </button>
      </div>

      <div className="flex gap-[140px]">
      <p className="text-base font-bold">Dining</p>
      <div className="flex gap-10">
      <div className="flex gap-12 text-sm font-semibold text-[#A6A6A6]">
      <div className="flex flex-col gap-4">
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      </div>

      <div className="flex flex-col gap-4">
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      </div>
      </div>

      <div className="flex gap-12 text-sm font-semibold text-[#A6A6A6]">
      <div className="flex flex-col gap-4">
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      </div>

      <div className="flex flex-col gap-4">
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      </div>
      </div>

      <div className="flex gap-12 text-sm font-semibold text-[#A6A6A6]">
      <div className="flex flex-col gap-4">
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      </div>

      <div className="flex flex-col gap-4">
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      </div>
      </div>
      </div>
      </div>

      <div className="flex gap-[77px]">
      <p className="text-base font-bold">Event Centres</p>
      <div className="flex gap-10">
      <div className="flex gap-12 text-sm font-semibold text-[#A6A6A6]">
      <div className="flex flex-col gap-4">
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      </div>

      <div className="flex flex-col gap-4">
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      </div>
      </div>

      <div className="flex gap-12 text-sm font-semibold text-[#A6A6A6]">
      <div className="flex flex-col gap-4">
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      </div>

      <div className="flex flex-col gap-4">
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      </div>
      </div>

      <div className="flex gap-12 text-sm font-semibold text-[#A6A6A6]">
      <div className="flex flex-col gap-4">
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      <p>Lorem ipsum dolor sit</p>
      </div>

      <div className="flex flex-col gap-4">
      <p>10 Km</p>
      <p>10 Km</p>
      <p>10 Km</p>
      </div>
      </div>
      </div>
      </div>

      <p className="text-base font-bold text-center">See More</p>
      </section>
      <Footer />
    </div>
  );
};

export default listing;
