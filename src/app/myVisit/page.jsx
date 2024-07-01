import Image from "next/image";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import Navbar from "../_components/Navbar/Navbar";
import cotent from "../../images/Content.png";

const myVisit = () => {
    return (
        <div className="bg-[#F5F7FA]">
            <Header />

            <div className="flex gap-6 ml-44 mt-8">
            <Navbar />
            <div className="flex flex-col gap-6 mb-10">
            <div className="flex gap-[17.5rem]">
            <p className="text-lg font-bold mt-1">My Visit</p>
            <div className="flex">
            <div>
            <button className="text-xs font-semibold bg-[#E89766] p-[10px] shadow-md text-white w-[11rem] rounded-sm">
              List View
            </button>
            </div>
            <div className="-ml-2">
            <button className="text-xs font-semibold p-[10px] shadow-md text-black bg-white w-[11rem] rounded-sm">
              Calender View
            </button>
            </div>
            </div>
            </div> 

            <Image src={cotent} className="w-[90%]"/>
            </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default myVisit;