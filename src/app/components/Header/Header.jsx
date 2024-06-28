import Image from "next/image";
import logo from "@/images/logo.png";
import profile from "@/images/profile.png";

const Header = () => {
  return (
      <header className="bg-[#0C6390] pt-2 pb-2">
        <div className="flex gap-8 ml-96">
          <input
            type="search"
            placeholder="Search Accomadation"
            className="w-96 p-1 rounded-md pl-10 placeholder:text-[13px] placeholder:text-[#A6A6A6]"
          />

          <div className="flex gap-10 ml-56">
            <div className="flex mt-2 gap-2">
              <div>
                <Image src={logo} />
              </div>
              <p className="text-white text-[13px] pt-[13px]">
                University of Illorin
              </p>
            </div>

            <div className="mt-2">
              <Image src={profile} />
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
