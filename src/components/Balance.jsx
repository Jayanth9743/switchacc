import { RxArrowTopRight } from "react-icons/rx";

const Balance = () => {
  return (
    // <div>
    //   <div className="container">
    //     <span className="w-4 h-4 mb-1 absolute rounded-full top-0 left-[calc(100%-20px)] bg-red-400"></span>
    //   </div>
    // </div>
    <div className="flex items-center justify-center w-full h-full mt-12">
        <div className="flex justify-start relative flex-col gap-7 items-start rounded-xl w-[500px] h-[300px] bg-[#D3E3FF]">
          <p className="mt-2 ml-4 text-2xl font-semibold">Supplier Balance</p>
          <div className="flex ml-3 flex-col justify-start gap-6 items-start border border-[#C3C3C3] w-[80%] h-[6rem] rounded-md bg-white">
            <p className="mt-2 ml-2 font-medium">Total Balance</p>
            <p className="ml-2 font-medium">₹2500000.00</p>
          </div>
          <div className="flex items-center justify-around w-full">
            <div className="flex flex-col gap-4 justify-start items-start border border-[#C3C3C3] w-[9rem] h-[6rem] bg-white rounded-md">
              <p className="mt-2 ml-2 font-medium">Total Weight</p>
              <p className="ml-2 text-lg font-semibold">2500000Kgs</p>
            </div>
            <div className="flex flex-col justify-start gap-4 items-start border border-[#C3C3C3] w-[9rem] h-[6rem] bg-white rounded-md">
              <p className="mt-2 ml-2 font-medium">Billing Amount</p>
              <p className="ml-2 text-lg font-semibold">₹2500000</p>
            </div>
            <div className="flex flex-col justify-start gap-4 items-start border border-[#C3C3C3] w-[9rem] h-[6rem] bg-white rounded-md">
              <p className="mt-2 ml-2 font-medium">Recived Amount</p>
              <p className="ml-2 text-lg font-semibold">₹2500000</p>
            </div>
          </div>
          <span className="absolute cursor-pointer w-[2rem] top-2 right-2 h-[2rem] flex justify-center text-xl bg-white items-center rounded-full"><RxArrowTopRight/></span>
        </div>
    </div>
  )
}

export default Balance
