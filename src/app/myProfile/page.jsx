import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";
import Navbar from "../_components/Navbar/Navbar";
import Image from "next/image";
import passport from "../../images/reserve-image.png";
import id_card from "../../images/Student's ID Card.png";

const myProfile = () => {
    return (
        <div className="bg-[#F5F7FA]">
            <Header />

            <div className="flex gap-6 ml-44 mt-8">
            <Navbar title={'myprofile'}/>

            <div className="flex flex-col gap-4 mb-20">
            <p className="text-xl font-bold">My Profile</p>
            <div className="flex flex-col gap-4 bg-white pl-4 pr-4 pt-6 rounded-md pb-6">
            <div className="flex gap-[29rem] border-b-2 pb-5">
            <p className="text-sm font-bold mt-2">1. Student’s Details</p>
            <div>
            <button className="text-xs font-semibold bg-[#E89766] p-[10px] shadow-md text-white w-[8rem] rounded-md">
              Edit
            </button>
            </div>
            </div>

            <div className="flex gap-3">
            <div>
            <Image src={passport}/>
            </div>

            <div className="flex gap-6">
            <div className="flex flex-col gap-0">
            <p className="text-base font-bold">Emmanuel Ayodeji Olorunfem</p>
            <p className="text-base font-medium">deolorunfemi@gmail.com <span className="text-4xl font-bold text-[#888888]">.</span> 08032754753</p>
            </div>

            <div className="flex flex-col gap-4">
            <p className="text-base font-medium"><span className="text-[#888888]">Date of Birth:</span> 08 January 2003</p>
            <div className="flex flex-col">
            <p className="text-base font-medium"><span className="text-[#888888]">Address:</span> 123 Ademisi Crescent,</p>
            <p className="text-base font-medium pl-[5.5rem]">Somewhere, Nigeria</p>
            </div>
            </div>
            </div>
            </div>
            </div>




            <div className="flex flex-col gap-4 bg-white pl-4 pr-4 pt-6 rounded-md pb-6">
            <div className="flex gap-[29rem] border-b-2 pb-5">
            <p className="text-sm font-bold mt-2">2. School’s Details</p>
            <div>
            <button className="text-xs font-semibold bg-[#E89766] p-[10px] shadow-md text-white w-[8rem] rounded-md">
              Edit
            </button>
            </div>
            </div>

            <div className="flex gap-4">
            <div>
            <Image src={id_card}/>
            </div>

            <div className="flex flex-col gap-2">
            <p className="text-base font-medium"><span className="text-[#888888]">Institution:</span> University of Ilorin, Ilorin</p>
            <p className="text-base font-medium"><span className="text-[#888888]">Matric. Number:</span> 1890/234/11</p>
            <p className="text-base font-medium"><span className="text-[#888888]">Faculty/College:</span> Computing</p>
            <p className="text-base font-medium"><span className="text-[#888888]">Course:</span> Computer Science</p>
            <p className="text-base font-medium"><span className="text-[#888888]">Level:</span> 200lvl</p>
            <p className="text-base font-medium"><span className="text-[#888888]">Expected Date of Graduation:</span> 9 September 2027</p>
            </div>
            </div>
            </div>

            <div className="flex flex-col gap-4 bg-white pl-5 pr-4 pt-6 rounded-md pb-6">
            <div className="flex gap-[27.5rem] border-b-2 pb-5">
            <p className="text-sm font-bold mt-2">3. Guardian(s) Details</p>
            <div>
            <button className="text-xs font-semibold bg-[#E89766] p-[10px] shadow-md text-white w-[8rem] rounded-md">
              Edit
            </button>
            </div>
            </div>

            <div className="flex gap-3">
            <div>
            <Image src={passport}/>
            </div>

            <div className="flex gap-[9.5rem]">
            <div className="flex flex-col gap-1 mt-2">
            <p className="text-base font-bold">Mr. Somebody Somebody</p>
            <p className="text-sm font-medium text-[#0C6390]">Father</p>
            </div>

            <div className="flex flex-col gap-2">
            <p className="text-base font-medium"><span className="text-[#888888]">Phone Number:</span> 09031287644</p>
            <p className="text-base font-medium"><span className="text-[#888888]">Email:</span> somebody @gmail.com</p>
            <div className="flex flex-col">
            <p className="text-base font-medium"><span className="text-[#888888] -ml-3">Address:</span> 123 Ademisi Crescent,</p>
            <p className="text-base font-medium pl-[4.5rem]">Somewhere, Nigeria</p>
            </div>
            </div>
            </div>
            </div>

            <div className="flex gap-3">
            <div>
            <Image src={passport}/>
            </div>

            <div className="flex gap-36">
            <div className="flex flex-col gap-1 mt-2">
            <p className="text-base font-bold">Mrs. Somebody Somebody</p>
            <p className="text-sm font-medium text-[#0C6390]">Mother</p>
            </div>

            <div className="flex flex-col gap-2">
            <p className="text-base font-medium"><span className="text-[#888888]">Phone Number:</span> 09031287644</p>
            <p className="text-base font-medium"><span className="text-[#888888]">Email:</span> somebody @gmail.com</p>
            <div className="flex flex-col">
            <p className="text-base font-medium"><span className="text-[#888888] -ml-3">Address:</span> 123 Ademisi Crescent,</p>
            <p className="text-base font-medium pl-[4.5rem]">Somewhere, Nigeria</p>
            </div>
            </div>
            </div>
            </div>

            </div>
            </div>
            </div>

            <Footer />

        </div>
    );
};
 
export default myProfile;