import React from "react";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <a href="/aboutus">
              <h5 className="font-medium text-xl mb-4 justify-center justify-items-center text-center">
                About Us
              </h5>
              <p className="mb-4 text-center">
                Soft The Next is a non-profit organization dedicated to
                improving the lives of underprivileged communities.
              </p>
            </a>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="font-medium text-xl mb-4 text-center">Quick Links</h5>
            <ul className="list-reset text-center">
              <li className="mb-2 ">
                <a className="text-white hover:text-gray-400" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-gray-400" href="/event">
                  Event
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-gray-400" href="/donateus">
                  Donate
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 ">
            <a href="/contactus">
              <h5 className="font-medium text-xl mb-4 text-center">Contact Us</h5>
            </a>
            <ul className="list-reset text-center">
              <li className="mb-2">
                <a className="text-white hover:text-gray-400">
                  gmbssrupur@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-gray-400">+91 9922246165</a>
                <span className="ml-2">
                  <a className="text-white hover:text-gray-400">+91 9763014364</a>
                </span>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-gray-400" href="#">
                  At. Kalsmbar TQ.
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-gray-400" href="#">
                  DIST. Beed - 431125
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="lg:my-1 md:my-1 my-1 border-gray-200 sm:mx-auto" />
      <span className="block text-sm text-white text-center ">
        {1900 + new Date().getYear()}
        <a href="https://stnshops.com" className="ml-1 hover:underline">
          Soft The Next
        </a>
        . All rights reserved.
      </span>
    </footer>
  );
}
