'use client'
import Image from "next/image";
import profile from "../../../images/profile-2.png";
import { useRouter } from "next/navigation";

const Navbar = ({title}) => {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-4 w-[300px]">
        <div className="flex gap-5 bg-white pt-2 pb-2 pl-4 pr-4 rounded-md">
        <Image src={profile}/>
        <p className="text-base font-semibold pt-1">Emmanuel Olorunfemi</p>
        </div>

        <div className="flex flex-col gap-6 bg-white pt-5 pb-5 rounded-md">
        <p onClick={() => router.push('/myProfile')} className={`${(title == 'myprofile') ? 'border-l-[#E89766] bg-[#F0F8FF]':  'border-l-white bg-transaprent'}  text-base font-semibold border-l-4 pt-1 pb-1 pl-4  hover:bg-[#F0F8FF] hover:border-l-[#E89766] cursor-pointer`}>My Profile</p>
        <p onClick={() => router.push('/myReservations')} className={`${(title == 'myreservations') ? 'border-l-[#E89766] bg-[#F0F8FF]':  'border-l-white bg-transaprent'}  text-base font-semibold border-l-4 pt-1 pb-1 pl-4  hover:bg-[#F0F8FF] hover:border-l-[#E89766] cursor-pointer`}>My Reservations</p>
        <p onClick={() => router.push('/myVisit')} className={`${(title == 'myvisit') ? 'border-l-[#E89766] bg-[#F0F8FF]':  'border-l-white bg-transaprent'}  text-base font-semibold border-l-4 pt-1 pb-1 pl-4  hover:bg-[#F0F8FF] hover:border-l-[#E89766] cursor-pointer`}>My Visits</p>
        <p className="text-sm font-semibold text-[#FF0000] mt-16 pl-5">Logout</p>
        </div>
        </div>
    );
}
 
export default Navbar;