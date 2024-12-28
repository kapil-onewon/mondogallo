import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-olive text-white">
      <div className="container mx-auto grid grid-cols-5 gap-8  py-8">
        {/* Rooster World Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Rooster World</h3>
          <ul className="space-y-2">
            <li>Announcements</li>
            <li>Events</li>
            <li>Wallet</li>
            <li>Code of Ethics</li>
            <li>Public FAQ</li>
            <li className="text-red-500">Who we are</li>
          </ul>
        </div>

        {/* Associations Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Associations</h3>
          <ul className="space-y-2">
            <li className="text-red-500">Statute</li>
            <li className="text-red-500">Membership</li>
          </ul>
        </div>

        {/* Tokenomics Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Tokenomics</h3>
          <ul className="space-y-2">
            <li>Pricing</li>
            <li>Rewards</li>
            <li>Token sale</li>
            <li>Those</li>
            <li>Why tokenomics</li>
          </ul>
        </div>

        {/* Regulation Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Regulation</h3>
          <ul className="space-y-2">
            <li>Rules</li>
            <li>Dispute Resolution</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="mb-4">
            Sign up to our newsletter and stay updated on Mondogallo news
          </p>
          <div className="flex space-x-2 mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 flex-grow border rounded-md focus:outline-none"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Send
            </button>
          </div>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-olive">
              <Facebook width={10} height={10} />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-olive">
              {/* <i className="fab fa-instagram"></i> */}
              <Twitter width={10} height={10} />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-olive">
              {/* <i className="fab fa-twitter"></i> */}
              <Instagram width={10} height={10} />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-olive">
              {/* <i className="fab fa-youtube"></i> */}
              <Youtube width={10} height={10} />    
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lime text-olive py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Company Details */}
          <div className="text-sm text-center md:text-left mb-4 md:mb-0">
            <p>
              Newcococo Srl Benefit Company Chioggia (VE)
              <br />
              Seminario Street, 724 - 30015 PEC newcococo@pec.it - REA VE -
              455995
              <br />
              P.I. e C.F. 04841550272 Cod. SDI KRRH6B9
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-red-500">
              Terms and Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-red-500">
              Privacy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-red-500">
              Cookie Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-red-500">
              Copyright © 2024 Newcococo
            </a>
            <span>|</span>
            <a href="#" className="hover:text-red-500">
              MondoGallo™
            </a>
          </div>

          {/* Payment Icons */}
          <div className="flex space-x-2 mt-4 md:mt-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
              alt="MasterCard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Maestro_logo.svg"
              alt="Maestro"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
