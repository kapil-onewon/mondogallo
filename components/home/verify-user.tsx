import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const FIRST_DATA = [
  {
    id: 1,
    desc: "",
    img: require("../../assets/images/1.svg"),
  },
  {
    id: 2,
    desc: "",
    img: require("../../assets/images/2.svg"),
  },
  {
    id: 3,
    desc: "",
    img: require("../../assets/images/3.svg"),
  },
];

const FirstComponent = () => {
  return (
    <div className="p-10 rounded-md bg-[#F9F8EC] flex flex-col justify-center items-center">
      <h2 className="text-xl text-olive font-semibold mb-3 text-center">The only poultry world portal that verifies users</h2>
      {FIRST_DATA?.map((item, index) => {
        return (
          <motion.div
            key={item.id}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              yoyo: Infinity, // Makes it repeat back and forth
            }}
          >
            <Image src={item.img} alt="" width={150} height={150} />
          </motion.div>
        );
      })}
    </div>
  );
};

const SecondComponent = () => {
  return (
    <div className=" rounded-md bg-[#F9F8EC] flex">
      <div className="p-10 flex-[0.7]">
        <h2 className="text-3xl font-semibold mb-3"> Why tokenomics</h2>
        <p className="text-gray-600">
          With the introduction of EGGSTokens, Mondo Gallo not only creates a
          dynamic internal economic system, but also paves the way for a more
          participatory and decentralized governance. Through the power of
          tokens, users can already influence crucial decisions today and, in
          the future, will be able to be part of a community governed
          autonomously through a DAO. This approach ensures that the platform
          always remains aligned with the values ​​and needs of its community,
          offering an innovative and sustainable governance model.
        </p>
        <Button className="px-6 py-4 rounded-md bg-[#CB4A1B] mt-4">
          Find out more
        </Button>
      </div>
      <div className="relative flex-[0.3]">
        <div className="absolute right-0 bottom-0">
          <Image
            src={require("../../assets/images/token.svg")}
            alt=""
            height={600}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

const ThirdComponent = () => {
  return (
    <div className="flex rounded-md bg-[#F9F8EC] ">
      <div className="flex-[0.4] relative">
        <div className="absolute left-0 top-0">
          <Image
            src={require("../../assets/images/chicken-nest.svg")}
            alt=""
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="flex-[0.6] p-14">
        <h2 className="text-3xl font-semibold text-[#CB4A1B] mb-6">
          There's not much left!
        </h2>
        <p className="text-[#7B8030] mb-4">We will soon be on the stores too</p>
        <Image
          src={require("../../assets/images/google_appstore.svg")}
          alt=""
        />
      </div>
    </div>
  );
};

const VerifyUser = () => {
  return (
    <section id="verify-user" className="mt-32 mb-20">
      <div className="container mx-auto ">
        <div className="flex">
          {/* Left Column */}
          <div className=" flex-[0.3]">
            <FirstComponent />
          </div>
          {/* Right Column */}
          <div className="ml-6 flex-[0.7] flex flex-col space-y-4">
            <SecondComponent />
            <ThirdComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyUser;
