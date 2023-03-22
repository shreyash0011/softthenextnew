import React from "react";

export default function DonateusSection() {
  return (
    <div className="animate-slideinup">
      <section className="bg-[#ffd700] p-10 text-center ">
        <h2 className="text-3xl font-bold">Support Our Cause</h2>
        <p className="text-xl mt-4">
          Your donation can make a difference. Help us in our mission to create
          a better world.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600"
          >
            Donate Now
          </a>
        </div>
      </section>
      <div className="bg-[#f5fffa] flex justify-center justify-items-center shadow-xl">
        <div className="flex md:flex-row">
          <div className="lg:p-4 text-right">
            <p className="lg:text-base p-2 font-bold text-xs">Account Name :</p>
            <p className="lg:text-base p-2 font-bold text-xs">Account Number :</p>
            <p className="lg:text-base p-2 font-bold text-xs">IFSC Code :</p>
            <p className="lg:text-base p-2 font-bold text-xs">Bank Name :</p>
            <p className="lg:text-base p-2 font-bold text-xs">Branch Name :</p>
            <p className="lg:text-base p-2 font-bold text-xs">Branch Code :</p>
          </div>
          <div className="lg:p-4">
            <p className="lg:text-base p-2 font-bold text-xs">Gaoubai Mahila Bahuuddeshiya Sevabhavi Sanstha</p>
            <p className="lg:text-base p-2 font-bold text-xs">62502620423</p>
            <p className="lg:text-base p-2 font-bold text-xs">SBIN0021843</p>
            <p className="lg:text-base p-2 font-bold text-xs">State Bank Of India</p>
            <p className="lg:text-base p-2 font-bold text-xs">Wasanwadi</p>
            <p className="lg:text-base p-2 font-bold text-xs">-</p>
          </div>
        </div>
      </div>
      <div className="bg-[#00ced1]">
        <p className="text-center text-2xl font-bold p-4">UPI - Gpay Accepted</p>
        <img className="mx-auto w-96 h-full" src="/ngodata/gpay.png" />
      </div>
    </div>
  );
}
