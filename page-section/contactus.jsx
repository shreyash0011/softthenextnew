import React from "react";

export default function ContactusSection() {
  return (
    <div className="bg-white lg:p-6 rounded-lg shadow-lg animate-slideinup">
      <div className="lg:flex lg:flex-wrap w-full flex-col items-center text-center">
        <p className="text-3xl font-bold text-center py-2 lg:py-5 divide-y divide-blue-200">
          Contact Us
        </p>
        <span className="text-center inline-block h-0.5 w-72 lg:w-96 rounded bg-indigo-500 mt-2 lg:mb-4"></span>
      </div>
      <p className="text-center text-xl">
        Contact us to speak with a representative from our organization. We are
        always here to assist you. Give us a Call/Email for further assistance.
      </p>
      <div className="bg-[#f0e68c] lg:flex justify-center justify-items-center lg:m-4">
        <div className="lg:m-4 p-2 shadow-lg lg:hover:shadow-2xl lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:border-t-4 hover:border-t-[#4658AD]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 mx-auto p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-center font-bold">
          At. Kalsmbar TQ.
          </p>
          <p className="text-center font-bold">DIST. Beed - 431125</p>
        </div>
        <div className="lg:m-4 p-2 shadow-lg lg:hover:shadow-2xl lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:border-t-4 hover:border-t-[#4658AD]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 mx-auto p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <p className="text-center font-bold">+91 9922246165</p>
          <p className="text-center font-bold">+91 9763014364</p>
        </div>
        <div className="lg:m-4 p-2 shadow-lg lg:hover:shadow-2xl lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:border-t-4 hover:border-t-[#4658AD]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 mx-auto p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <p className="text-center font-bold">gmbssrupur@gmail.com</p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.282795762586!2d75.80281769999999!3d18.8300896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5290c21686e0b%3A0xaa5cae712087bd88!2sApala%20Pariwar%20Anath%20Vruddhashram!5e0!3m2!1sen!2sin!4v1677674423229!5m2!1sen!2sin"
        className="lg:w-2/3 h-96  mx-auto"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
