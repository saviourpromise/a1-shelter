'use client';
import { Kalam } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";


// const poppins = Poppins({ weight:"300" ,subsets: ["latin"] });
const kalam = Kalam({ subsets: ["latin"], weight: "700" });

export default function LandingPage() {
  const router = useRouter()
  return (
    <div className="w-screen h-screen overflow-none bg-fixed bg-cover bg-[url('/landing.png')] bg-no-repeat">
      <header className="absolute w-full h-20 bg-transaprent text-white flex items-center justify-between px-8">
        <Image src={"/images/a1logo.png"} className="w-10 h-10" width={48} height={48}/>
        <Image src={"/images/profile.png"} onClick={() => router.push('/signup')} className="w-10 h-10 cursor-pointer" width={30} height={30}/>
      </header>
      <div className="w-full h-full bg-gradient-to-b from-[#000000CC]-100 to-[#0C6390CC]-100 text-center flex items-center justify-center">
          <div className="flex flex-col gap-8 text-[42px] text-white">
              <h1 className={kalam.className}>Settle Your Comfort, So You Go Know Book Well.</h1>
              <input type="text" placeholder="Search Accomodation" className="w-full h-[60px] bg-white rounded-lg text-[12px] text-start px-8 mx-auto"/>
          </div>
      </div>
    </div>
  );
}

// background: linear-gradient(141.44deg, rgba(12, 99, 144, 0.8) 22.18%, rgba(0, 0, 0, 0.8) 62.94%);
// #000000CC
//#0C6390CC

