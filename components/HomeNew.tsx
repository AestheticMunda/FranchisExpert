"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import BasicPopover from "./Popover";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { motion } from "framer-motion";
import React from "react";
import { cities } from "@/constants";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const HomeNew = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/franchisecard");
  };
  return (
    <div>
      <Navbar />
      <BasicPopover />
      <div className="relative h-max">
        <div>
          <Image
            src="/Franchising-Business.jpg"
            alt="FranchiseImage"
            width={1550}
            height={1000}
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      </div>

      <div className="absolute top-60 left-0 right-0 flex flex-col justify-center items-center z-20">
        <span className="text-white mb-6 font-serif text-5xl">
          Our franchise expertise is available in more cities
        </span>
        <span className="text-white font-serif text-xl">
          From 1 to 5 to 100 and then to 1000. Let's find and make all your
          franchise successful!
        </span>
      </div>

      <div className="absolute -bottom-72 left-0 right-0 space-x-28 flex justify-evenly items-cente">
        <div className="grid grid-cols-4 gap-x-24 gap-y-24 justify-items-center place-items-center">
          {cities.map((city, index) => (
            <Button
              key={index}
              className="w-60 h-60 font-bold text-lg flex flex-col items-center justify-center bg-white text-black rounded-full border-2 border-yellow-500"
            >
              <Image src={city.image} alt={"cityIcon"} width={200} height={200}/>
              {city.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="h-screen">
          <Image
            src="/Franchising-Business-2.jpg"
            alt="secondHomeImage"
            width={1550}
            height={1000}
            // objectFit="cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
        <div className="absolute top-48 left-0 right-0 flex flex-col justify-center items-center z-20">
          <span className="text-white mb-6 font-serif text-5xl">
            We love franchising and its development tools
          </span>
        </div>

        <div className="absolute bottom-32 left-0 right-0 space-x-20 flex justify-center items-center">
          <div className="flex flex-col text-white justify-center items-center h-72 w-80 bg-black border-2 border-yellow-500 opacity-60 rounded-lg">
            <h3 className="text-2xl m-5">What We Do</h3>
            <p className="text-center px-5 pb-10">
              We are an international franchise consulting company. We lay
              strong franchise foundations for our clients after which we work
              very closely with every aspect of their franchise business. Our
              ultimate aim is to help them achieve their goals.
            </p>
          </div>
          <div className="flex flex-col text-white justify-center items-center h-72 w-80 bg-black border-2 border-yellow-500 opacity-60 rounded-lg">
            <h3 className="text-2xl m-5 pt-5">How We Work</h3>
            <p className="text-center px-5 pb-10">
              We work with modern methods that catalyse franchising making
              franchise expansion and operations extremely efficient. Our
              experience and expertise is always aimed at saving time and costs,
              while ensuring that clients have a long term sustainable solution.
            </p>
          </div>
          <div className="flex flex-col text-white justify-center items-center h-72 w-80 bg-black border-2 border-yellow-500 opacity-60 rounded-lg">
            <h3 className="text-2xl m-5 pt-5">Why We Work</h3>
            <p className="text-center px-5 pb-10">
              Multi-Bee consists of individuals with a burning passion for
              creating value for our clients. We love franchising and would like
              to harness its power to ignite and maximize the potential of our
              clients' businesses. We eat, drink, walk, sleep and dream
              franchising.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-black h-40 object-cover">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/FlyerUpdated.png")',
            backgroundPosition: "0% 0%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        ></motion.div>
      </div>

      <div className="flex flex-row bg-white h-screen mt-10 p-10 relative">
        <div className="flex ml-20 flex-col">
          <h3 className="text-yellow-400 font-semibold text-lg">
            FEATURED DEALS
          </h3>
          <p className="mt-10 text-4xl font-bold">
            Discover the Franchise &<br />
            Immense Business
            <br />
            Opportunities Available:
          </p>
          <Button
            onClick={handleButtonClick}
            variant="default"
            className="mt-8 bg-gradient-to-r from-yellow-500 to-black text-white w-40 z-10"
          >
            Discover More
          </Button>
          <div className="flex items-center justify-center top-48 bottom-0 left-0 absolute">
            <Image
              src="/DesignNew.png"
              alt="Logo 1"
              width={600}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 ml-20">
          <div className="w-60 h-60 bg-white flex items-center justify-center shadow-lg">
            <Image
              src="/Multi Bee final.jpg"
              alt="Logo 1"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <div className="w-60 h-60 bg-white flex items-center justify-center shadow-lg">
            <Image
              src="/Multi Bee final.jpg"
              alt="Logo 2"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <div className="w-60 h-60 bg-white flex items-center justify-center shadow-lg">
            <Image
              src="/Multi Bee final.jpg"
              alt="Logo 3"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <div className="w-60 h-60 bg-white flex items-center justify-center shadow-lg">
            <Image
              src="/Multi Bee final.jpg"
              alt="Logo 4"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <div className="w-60 h-60 bg-white flex items-center justify-center shadow-lg">
            <Image
              src="/Multi Bee final.jpg"
              alt="Logo 4"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <div className="w-60 h-60 bg-white flex items-center justify-center shadow-lg">
            <Image
              src="/Multi Bee final.jpg"
              alt="Logo 4"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeNew;
