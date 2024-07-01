import Image from "next/image";
import profile from "../../../images/profile-2.png";

const Navbar = () => {
    return (
        <div className="flex flex-col gap-4">
        <div className="flex gap-5 bg-white pt-2 pb-2 pl-4 pr-4 rounded-md">
        <Image src={profile}/>
        <p className="text-base font-semibold pt-1">Emmanuel Olorunfemi</p>
        </div>

        <div className="flex flex-col gap-6 bg-white pt-5 pb-5 rounded-md">
        <p className="text-base font-semibold bg-[#F0F8FF] border-l-4 pt-1 pb-1 pl-4 border-l-[#E89766]">My Profile</p>
        <p className="text-base font-semibold border-l-4 pt-1 pb-1 pl-4 border-l-white hover:bg-[#F0F8FF] hover:border-l-[#E89766]">My Reservations</p>
        <p className="text-base font-semibold border-l-4 pt-1 pb-1 pl-4 border-l-white hover:bg-[#F0F8FF] hover:border-l-[#E89766]">My Visits</p>
        <p className="text-sm font-semibold text-[#FF0000] mt-16 pl-5">Logout</p>
        </div>
        </div>
    );
}
 
export default Navbar;