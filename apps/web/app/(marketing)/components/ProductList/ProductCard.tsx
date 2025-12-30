import IncomeChart from "./IncomeChart";

const ProductCard = () => {
  return (
    <div className="bg-white w-full max-w-120 rounded-2xl pb-4 overflow-visible">
      <div className="p-6 hover:rounded-2xl hover:scale-105 hover:bg-neutral-300 transition">
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold">Chattrn</h2>
          <span className="text-sm">
            <span className="font-semibold">30</span> Active Users
          </span>
        </div>
        <p className="text-sm text-neutral-600">
          Let the AI agent handle your customer
        </p>
      </div>
      <IncomeChart />
      {/* <div className="h-32.5 bg-gray-100 rounded-xl mt-2 p-4 text-xs w-full flex justify-center items-center">
        Earnings Confidential
      </div> */}
    </div>
  );
};

export default ProductCard;
