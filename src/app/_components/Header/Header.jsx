'use client'
import Image from "next/image";
import logo from "../../../images/logo.png";
import profile from "../../../images/profile.png";
import house from "../../../images/house-a1.png";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
      <header className="bg-[#0C6390] pt-2 pb-2">
        <div className="flex gap-20 ml-[8.5rem] items-center">
          <div>
          <Image src={house} className="w-10 h-10" width={48} height={48}/>
          </div>
          <input
            type="search"
            placeholder="Search Accomadation"
            className="w-96 p-1 rounded-md pl-10 placeholder:text-[13px] ml-28 placeholder:text-[#A6A6A6]"
          />

          <div className="flex gap-10 ml-36">
            <div className="flex mt-2 gap-2">
              <div>
                <Image src={logo} />
              </div>
              <p className="text-white text-[13px] pt-[13px]">
                University of Illorin
              </p>
            </div>

            <div onClipck={() => router.push('/myProfile')} className="mt-3 cursor-pointer">
              <Image src={profile} width={30} height={30}/>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
