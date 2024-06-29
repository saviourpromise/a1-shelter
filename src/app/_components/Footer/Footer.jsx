import Image from "next/image";
import facebook from "@/images/facebook.png";
import instagram from "@/images/instagram.png";
import twitter from "@/images/twitter.png";
import linkdln from "@/images/linkedin.png";
import product_logo from "@/images/Product Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0C6390] pt-5 pb-4">
      <section className="flex gap-52 ml-24">
        <div className="flex gap-4 mt-5">
          <div>
            <Image src={facebook} />
          </div>
          <div>
            <Image src={instagram} />
          </div>
          <div>
            <Image src={twitter} />
          </div>
          <div>
            <Image src={linkdln} />
          </div>
        </div>

        <Image src={product_logo} />

        <p className="text-base font-medium text-gray-300 mt-5">
          © 2024 A1 Shelters. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
