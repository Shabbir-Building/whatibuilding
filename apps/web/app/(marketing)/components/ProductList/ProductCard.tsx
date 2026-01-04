import Link from "next/link";
import IncomeChart from "./IncomeChart";
import Image from "next/image";
import ProductImage from "@/public/profile-image.png";
import { CircleDollarSign, LockKeyhole } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="bg-white w-full max-w-120 rounded-2xl pb-4 overflow-visible">
      <Link
        href="https://www.chattrn.com/"
        target="_blank"
        className="block p-6 w-full hover:rounded-2xl hover:scale-105 hover:bg-neutral-300 transition"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              alt="product-image"
              src={ProductImage}
              width={24}
              height={24}
            />
            <h2 className="text-md font-semibold">Chattrn</h2>
          </div>

          <span className="text-sm">
            <span className="font-semibold">30</span> Active Users
          </span>
        </div>
        <p className="text-sm text-neutral-600 mt-2">
          Let the AI agent handle your customer
        </p>
      </Link>
      <IncomeChart />
      <div className="px-3">
        <div className="h-24 bg-gray-100 text-yellow-500 rounded-xl mt-2 p-4 text-xs w-full flex justify-center items-center">
          <LockKeyhole size={14} className="mr-1" /> Earnings Confidential
        </div>
      </div>
      <div className="px-3">
        <div className="h-24 bg-gray-100 text-yellow-500 rounded-xl mt-2 p-4 text-xs w-full flex justify-center items-center">
          <CircleDollarSign size={14} className="mr-1" /> No Earnings Yet
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
