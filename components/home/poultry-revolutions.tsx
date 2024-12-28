"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import man from "../../assets/images/man.svg";

const PoultryRevolutions = () => {
  return (
    <section id="poultry-revolutions" className="pt-20 pb-10 mt-4 bg-white">
      <div className="container mx-auto rounded-lg bg-[#F1F1D6] ">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className=" px-16 py-20">
            <h2 className="text-3xl font-semibold mb-3">
              The Poultry Revolution
            </h2>
            <p className="text-gray-600">
              We dream of a world where each of us becomes a custodian of <br />
              biodiversity
            </p>
            <Button className="py-2 px-6 bg-[#CB4A1B] mt-4">
              Sign Up for the webinar
            </Button>
          </div>
          <div className="relative h-full">
            <div className="absolute left-0 bottom-0">
              <Image
                src={man}
                alt="Poultry Revolutions"
                width={800}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoultryRevolutions;
