import { footerForm, links } from "@/constants";
import { SelectGroup } from "@radix-ui/react-select";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[400px] bg-gray-800 p-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl">
            We would <span className="text-yellow-400">love</span> to{" "}
            <span className="text-yellow-400">connect</span> with you!
          </h1>
          <div className="border-t-2 border-yellow-500 w-full mt-3"></div>
        </div>

        <div className="flex ml-10">
          <div className="mt-5">
            <div className="w-60">
              <Image
                src={"/Multi_Bee_final_logo_cut.png"}
                alt={"footerImage"}
                width={300}
                height={300}
              />
            </div>
            <h3 className="text-white text-sm">
              A thriving platform for brands to{" "}
              <span className="text-yellow-400">boost</span>
              <br /> their <span className="text-yellow-400">growth</span>.
            </h3>
            <div>
              <div className="flex space-x-1 text-white mt-5">
                <Phone className="text-yellow-400" />
                <p>+91 - 98xxxxxx25</p>
              </div>
              <div className="flex space-x-1 text-white mt-5">
                <Mail className="text-yellow-400" />
                <p>boost@multibee.in</p>
              </div>
            </div>
            <div className="flex space-x-5 text-white mt-5">
              <div className="flex items-center justify-center text-yellow-400 w-10 h-10 bg-black rounded-full border-2 border-yellow-400">
                <Facebook />
              </div>
              <div className="flex items-center justify-center text-yellow-400 w-10 h-10 bg-black rounded-full border-2 border-yellow-400">
                <Twitter />
              </div>
              <div className="flex items-center justify-center text-yellow-400 w-10 h-10 bg-black rounded-full border-2 border-yellow-400">
                <Instagram />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-10 mt-10 h-[280px] text-white ml-32">
            {links.map((item, index) => (
              <a key={index}>{item.name}</a>
            ))}
          </div>
          <div className="grid grid-cols-2 h-80 gap-x-5 ml-32 mt-10">
            {footerForm.map((item, index) => (
              <SelectGroup
                key={index}
                className="flex flex-col justify-start items-start"
              >
                {/* <SelectLabel className="text-yellow-400">{item.label}</SelectLabel> */}
                <Input type="text" placeholder={item.placeholder} />
              </SelectGroup>
            ))}
            <Button className="flex items-center bg-black justify-center text-sm h-10 text-yellow-400 rounded-xl">
              Submit Your Query
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-28 bg-black">
        <h3 className="text-white text-xl font-light">
          Copyright &copy; 2024. All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
