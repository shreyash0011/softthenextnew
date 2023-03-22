import React from "react";

export default function AboutSection() {
  return (
    <div className="animate-slideinup my-div lg:min-h-[77vh]">
      <div className="relative lg:flex lg:flex-wrap w-full flex-col items-center text-center">
        <p className="text-3xl font-bold text-center py-2 lg:py-5 divide-y divide-blue-200">
          About Us
        </p>
        <span className="text-center inline-block h-0.5 w-72 lg:w-96 rounded bg-indigo-500 mt-2 lg:mb-4"></span>
      </div>

      <div className="flex lg:p-4 justify-centerbg-blue-100 shadow-2xl rounded-lg text-base text-[#2f4f4f] lg:mx-20 lg:mb-10">
        <p className="text-justify text-xl m-2 ">
          <strong>Soft The Next</strong> is a non-profit organization
          dedicated to improving the lives of underprivileged communities.
          Founded in <strong>2009</strong> by a group of passionate individuals
          with a shared vision of creating a better world, our organization has
          since grown into a thriving community of like-minded individuals
          working together towards a common goal. At
          <strong> Soft The Next</strong>, we believe that everyone
          deserves access to the resources and support they need to thrive and
          reach their full potential. That's why we work tirelessly to provide
          essential resources, promote education and health, and advocate for
          the rights and well-being of those we serve. With a team of dedicated
          and compassionate professionals, we have made a tangible difference in
          the lives of thousands of people, and we're just getting started. Our
          mission is simple: to improve the quality of life for underprivileged
          communities, one step at a time. We're proud of what we've
          accomplished so far, but there's still so much work to be done. With
          your support, we can continue to make a positive impact on the lives
          of those in need. Join us today and help us build a brighter future
          for all.
        </p>
      </div>

      <div className="lg:flex justify-center my-4 bg-[#fff8dc]">
        <div className="lg:m-4 lg:w-96 lg:hover:shadow-2xl lg:hover:-translate-y-1 shadow-yellow-400 lg:hover:scale-105 hover:border-t-4 hover:border-t-[#4658AD]">
          <div className="justify-items-center justify-center ju">
            <img src="/mission.png" className="mx-auto w-24 h-24" alt="mission" />
          </div>
          <h5 className="text-center"> Misson</h5>
          <p className="text-justify p-2 lg:text-xl">
            To improve the quality of life for underprivileged communities by
            providing essential resources and support, promoting education and
            health, and advocating for their rights and well-being.
          </p>
        </div>
        <div className="lg:m-4 lg:w-96 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-2xl hover:border-t-4 hover:border-t-[#4658AD]">
          <div className="icon">
            <img src="/vision.png" className="mx-auto w-24 h-24" alt="vison" />
          </div>
          <h5 className="text-center">Vision</h5>
          <p className="text-justify m-2 lg:text-xl">
            A world where everyone has access to the essential resources and
            support they need to thrive and reach their full potential.
          </p>
        </div>
      </div>

      <div className="lg:flex lg:justify-center">

        <div className="relative lg:w-96 lg:h-96 m-2">
          <img className="w-80 h-96 mx-auto" src="/ab1.jpg" />
          <div className="w-72 absolute bottom-0 left-0 right-0 px-4 py-2 bg-[#ffff00]">
            <h3 className="text-base text-black font-bold">
              Mrs. Manisha Pawar
            </h3>
            <p className="mt-2 text-sm text-black">President</p>
          </div>
        </div>
        {/* <div className="relative lg:w-96 lg:h-96 m-2">
          <img src="../ab3.png" />
          <div className="w-72 absolute bottom-0 left-0 right-0 px-4 py-2 bg-white">
            <h3 className="text-base text-black font-bold">
              Mrs. Shrimati Shalini Sakharam
            </h3>
            <p className="mt-2 text-sm text-black">Vice President</p>
          </div>
        </div>
        <div className="relative lg:w-96 lg:h-96 m-2">
          <img src="../ab4.png" />
          <div className="w-72 absolute bottom-0 left-0 right-0 px-4 py-2 bg-white">
            <h3 className="text-base text-black font-bold">
              Dr. Sanjay Bhupal Mane
            </h3>
            <p className="mt-2 text-sm text-black">Secretary</p>
          </div>
        </div>
        <div className="relative lg:w-96 lg:h-96 m-2">
          <img src="../ab1.png" />
          <div className="w-72 absolute bottom-0 left-0 right-0 px-4 py-2 bg-white">
            <h3 className="text-base text-black font-bold">Mr. Prashant Mane</h3>
            <p className="mt-2 text-sm text-black">
              Leader : Siddhivinayak Rescue Team
            </p>
          </div>
        </div> */}

      </div>
    </div>
  );
}
