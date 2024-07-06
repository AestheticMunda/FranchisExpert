import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { brandInfo } from "@/constants";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-evenly text-white w-full h-80 bg-black p-5">
        <div>
          <Image
            src={"/Multi Bee final.jpg"}
            alt={"Brand"}
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl mb-5 font-medium">Your Brand Name</h1>
          <div className="text-xs space-y-1">
            <p>
              <span>Category: </span>
              <span>Your brand category</span>
            </p>
            <p>
              <span>Company: </span>
              <span>Your brand name</span>
            </p>
            <p>
              <span>Origin City: </span>
              <span>Origin city of brand</span>
            </p>
          </div>
        </div>
        <div>
          <Card className="bg-black text-white w-80">
            <CardContent className="flex flex-col justify-center mt-5 space-y-2">
              <p>
                <span className="font-medium">Area Req: </span>
                <span>500 Sq.ft</span>
              </p>
              <p>
                <span className="font-medium">Investments: </span>
                <span>INR 6-10 Lakhs</span>
              </p>
              <p>
                <span className="font-medium">Franchise Outlets: </span>
                <span>10+</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="p-5 px-40 space-y-5">
        <Card className="p-3 bg-gray-700 text-white">
          <CardTitle className="bg-yellow-100 text-black font-bold py-3 pl-2 rounded-lg">
            About Us
          </CardTitle>
          <CardContent className="text-sm mt-6">
            To set and maintain the highest standard of quality and ethics in
            every thing we do
          </CardContent>
          <CardContent className="text-sm">
            To provide perfect delicious coffee products and excellent reliable
            services to our customers
          </CardContent>
          <CardContent className="text-sm">
            To earn the trust of customers, employes, partners and community and
            to contribute to good development and prosperity
          </CardContent>
          <CardContent className="text-sm">
            To inspire and to connect people
          </CardContent>
        </Card>

        <Card className="p-3 bg-gray-700 text-white">
          <CardTitle className="bg-yellow-100 text-black font-bold py-3 pl-2 rounded-lg">
            Brand Model
          </CardTitle>
          <CardContent className="text-sm mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Sl. No.</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Gold</TableHead>
                  <TableHead className="text-right">Silver</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Brand Fee</TableCell>
                  <TableCell>3 Lakhs + GST</TableCell>
                  <TableCell className="text-right">2.5 Lakhs + GST</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell>Investment</TableCell>
                  <TableCell>9-10 Lakhs</TableCell>
                  <TableCell className="text-right">6 Lakhs</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell>Area Required</TableCell>
                  <TableCell>300+ Sq.ft</TableCell>
                  <TableCell className="text-right">150 Sq.ft</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="p-3 bg-gray-700 text-white">
          <CardTitle className="bg-yellow-100 text-black font-bold py-3 pl-2 rounded-lg">
            Key Features
          </CardTitle>
          <CardContent className="text-sm mt-6">
            5+ Years of Experience in Food & Beverages Industry
          </CardContent>
          <CardContent className="text-sm">24/7 Brand Support</CardContent>
          <CardContent className="text-sm">
            Own Manufacturer Of Raw Materials
          </CardContent>
          <CardContent className="text-sm">Low Investment</CardContent>
          <CardContent className="text-sm">
            {" "}
            High Return On Investment
          </CardContent>
        </Card>

        <Card className="p-3 bg-gray-700 text-white">
          <CardTitle className="bg-yellow-100 text-black font-bold py-3 pl-2 rounded-lg">
            Brand Origin
          </CardTitle>
          <CardContent className="flex justify-evenly text-sm mt-6">
            <Card className="p-3 bg-gray-700 text-white w-60">
              <CardTitle className="bg-yellow-100 text-black text-sm font-bold py-3 pl-2 rounded-lg">Country</CardTitle>
              <CardContent className="mt-6">India</CardContent>
            </Card>
            <Card className="p-3 bg-gray-700 text-white w-60">
              <CardTitle className="bg-yellow-100 text-black text-sm font-bold py-3 pl-2 rounded-lg">State</CardTitle>
              <CardContent className="mt-6">Maharastra</CardContent>
            </Card>
            <Card className="p-3 bg-gray-700 text-white w-60">
              <CardTitle className="bg-yellow-100 text-black text-sm font-bold py-3 pl-2 rounded-lg">City</CardTitle>
              <CardContent className="mt-6">Pune</CardContent>
            </Card>
          </CardContent>
          <CardContent className="text-sm mt-6"></CardContent>
        </Card>

        <Card className="p-3 bg-gray-700 text-white">
          <CardTitle className="bg-yellow-100 text-black font-bold py-3 pl-2 rounded-lg">
            Other
          </CardTitle>
          <CardContent className="text-sm mt-6">
            Training For Product And Services
          </CardContent>
          <CardContent className="text-sm">
            Supply Chain And Distrubution Support
          </CardContent>
          <CardContent className="text-sm">Manpower Back Up</CardContent>
          <CardContent className="text-sm">
            Marketing & Launch Activity Support
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default page;
