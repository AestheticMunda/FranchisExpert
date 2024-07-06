"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { franchiseDetails } from "@/Franchise";
import Navbar from "@/components/Navbar";
import { businessCategories, priceRange } from "@/constants";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/brandInfo")
  };

  return (
    <div>
      <Navbar />
      <div className="px-24">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl py-10">
            We provide hundreds of franchise
            <br /> opportunities to choose from:
          </h1>
          <div className="flex space-x-5">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Business Category" />
              </SelectTrigger>
              <SelectContent>
                {businessCategories.map((category) => (
                  <SelectItem value={category.name}>{category.name
                  }</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Investment Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRange.map((data) => (
                  <SelectItem value={data.range}>{data.range}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-4 justify-items-center gap-x-5 gap-y-5">
          {franchiseDetails.map((item, index) => (
            <Card key={index} className="w-fit h-fit space shadow-xl">
              <CardHeader className="flex flex-col items-center justify-center h-80">
                <div>
                  <Image
                    src={item.image}
                    alt={"card"}
                    width={300}
                    height={250}
                    className="pt-10 object-cover"
                  />
                </div>
                <CardTitle className="pt-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center mt-10 space-y-2">
                <p>
                  <span className="font-semibold text-gray-700">
                    Area Req:{" "}
                  </span>
                  <span>{item.area}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Investments:{" "}
                  </span>
                  <span>{item.investments}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Franchise:{" "}
                  </span>
                  <span>{item.outlets}</span>
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button onClick={handleButtonClick}>Know More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
