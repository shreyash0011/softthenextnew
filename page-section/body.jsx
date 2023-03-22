import React from "react";
import Slider from "react-slick";
import About from "../pages/contactus";

function BodySection() {
  const PreviousBtn = (props) => {
    // console.log("check props", props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-24 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-24 text-black"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  };

  return (
    <>
      <div className="carousel">
        <Slider
          autoplay
          autoplaySpeed={5000}
          // dots
          initialSlide={2}
          infinite
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          dotsclassName="slick-dots custom-indicator"
        >
          <div>
            <div className="flex bg-white">
              <div className="w-full">
                <img
                  src="/ngodata/event1e.png"
                  alt=""
                  className="h-44 w-full lg:h-full"
                />
              </div>
              <div className="self-center bg-[#00ffff] w-2/3">
                <p className="text-xs capitalize lg:text-3xl font-serif text-center lg:p-2">
                  Abhishtchintan ceremony
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-white">
              <div className="w-full">
                <img
                  src="/ngodata/event2e.png"
                  alt=""
                  className="h-44 w-full lg:h-full"
                />
              </div>
              <div className="self-center bg-[#00ffff] w-2/3">
                <p className="text-xs capitalize lg:text-3xl font-serif text-center lg:p-2">
                  Abhishtchintan ceremony
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-white">
              <div className="w-full">
                <img
                  src="/ngodata/event6.jpeg"
                  alt=""
                  className="h-44 w-full lg:h-full"
                />
              </div>
              <div className="self-center bg-[#00ffff] w-2/3">
                <p className="text-xs capitalize lg:text-3xl font-serif text-center lg:p-2">
                  Environment - Tree Plantation
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-white">
              <div className="w-full">
                <img
                  src="/ngodata/news3e.png"
                  alt=""
                  className="h-44 w-full lg:h-full"
                />
              </div>
              <div className="self-center bg-[#00ffff] w-2/3">
                <p className="text-xs capitalize lg:text-3xl font-serif text-center lg:p-2">
                  Help from the Pandharpurkar
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-white">
              <div className="w-full">
                <img
                  src="/ngodata/news4e.png"
                  alt=""
                  className="h-44 w-full lg:h-full"
                />
              </div>
              <div className="self-center bg-[#00ffff] w-2/3">
                <p className="text-xs capitalize lg:text-3xl font-serif text-center lg:p-2">
                  girl's wedding was successfully organized
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-white">
              <div className="w-full">
                <img
                  src="/ngodata/news7e.png"
                  alt=""
                  className="h-44 w-full lg:h-full"
                />
              </div>
              <div className="self-center bg-[#00ffff] w-2/3">
                <p className="text-xs capitalize lg:text-3xl font-serif text-center lg:p-2">
                  आपला परिवार वृद्धाश्रम has been awarded the Sevadip Puraskar
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-white">
              <div className="w-full">
                <img
                  src="/ngodata/news10e.png"
                  alt=""
                  className="h-44 w-full lg:h-full"
                />
              </div>
              <div className="self-center bg-[#00ffff] w-2/3">
                <p className="text-xs capitalize lg:text-3xl font-serif text-center lg:p-2">
                  Manisha Pawar has donated one acre of land to the "आपला परिवार
                  वृद्धाश्रम"!
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="grid p-6 bg-[#dcdcdc] justify-center justify-items-center">
        <p className="text-3xl text-center font-serif">
          "Join Hands, Make a Difference"
        </p>
        <div className="mt-8">
          <a
            href="/donateus"
            className="bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600"
          >
            Donate Now
          </a>
        </div>
      </div>
      <div className="px-4">
        <p className="text-center font-bold text-3xl mb-2 bg-[#00ffff]">
          Information About आपला परिवार अनाथ वृद्धाश्रम
        </p>
        <img className="mx-auto" src="/ngodata/home.jpeg" />
        <div className="bg-[#f0e68c]">
          <p className="text-2xl text-justify">
            The issue of water scarcity in the Beed district of Maharashtra and
            its impact on the agricultural sector and the people living in the
            area. This issue has been a cause for worry for some time now, with
            irregular and insufficient rainfall causing problems for farmers and
            those who depend on agriculture for their livelihood. The situation
            is further compounded by the fact that many of the small and
            landless farmers in the area do not have access to adequate
            irrigation facilities or water storage systems, which makes it
            difficult for them to sustain their crops during periods of low
            rainfall. Moreover, the lack of employment opportunities in the
            district has led to a rise in unemployment and poverty, with many
            people struggling to make ends meet. This has led to a number of
            social problems, including a rise in the number of farmer suicides
            and children dropping out of school due to a lack of resources. It
            is important for the government and other stakeholders to take
            urgent steps to address this issue and provide the necessary support
            to the people in the area. This could include measures such as the
            provision of adequate irrigation facilities and water storage
            systems, the creation of employment opportunities, and the
            implementation of social welfare schemes to support those in need.
            The situation in Beed is a clear example of the challenges faced by
            many rural communities in India, and it highlights the urgent need
            for a comprehensive approach to address the issue of water scarcity
            and its impact on agriculture and livelihoods. It is important for
            all stakeholders to work together to find solutions and ensure that
            people in these communities have access to the resources and support
            they need to build a better future for themselves and their
            families.
          </p>
          <p className="text-center text-2xl my-2 font-bold bg-[#00ffff]">
            Project Needs
          </p>
          <p className="text-2xl text-justify">
            In the current divided family system and fast-paced life, elderly
            parents are often neglected by their B-youth. Elderly mothers and
            fathers suffer from neglect. In addition, in the Beed district,
            facing constant challenges due to natural disasters, there are no
            industries, and therefore, children must work in sugarcane fields or
            small jobs to make ends meet. In such situations, elderly mothers
            and fathers also suffer from neglect. Sometimes, even in favorable
            circumstances, some people do not have elderly grandparents at home.
            Then, at such times, they need a support system. We have therefore
            established an ashram for such elderly people.
          </p>
          <p className="text-center text-2xl my-2 font-bold bg-[#00ffff]">
            Project Update{" "}
          </p>
          <p className="text-2xl text-justify">
            Amidst the dire financial situation of the organization, they have
            managed to build two paper homes with a 20X20 area, using their own
            funds. However, with only 10 individuals residing in the homes, it
            is impossible to accommodate the remaining people who are in need,
            including those who are expected to come to the ashram. Moreover, as
            the homes are made of paper, there is a possibility of them being
            blown away during windy weather conditions, risking the lives of the
            people living in them. Thus, there is a pressing need for a sturdy
            building or structure, especially with plans to accommodate 100
            individuals in the future. Assuming 3 beds per room, it would
            require 31 rooms to accommodate 100 people. In addition to this,
            there is a need for a kitchen, a dining hall, a library, and other
            facilities. It is also worth noting that the lack of electricity in
            the paper homes poses a risk of fire, which could potentially result
            in fatalities. Therefore, it is imperative to construct a permanent
            building to ensure the safety and well-being of the individuals in
            need.
          </p>
          <p className="text-center font-bold my-2 text-3xl bg-[#00ffff]">
            The objectives of the project
          </p>
          <div className="mx-auto lg:text-left w-1/2">
            <ol className="text-2xl ">
              <li className="font-bold">
                1. To provide regular and nutritious meals
              </li>
              <li className="font-bold">2. To reduce physical discomfort</li>
              <li className="font-bold">3. To provide mental support</li>
              <li className="font-bold">
                4. To provide timely medical treatment
              </li>
              <li className="font-bold">5. To provide entertainment</li>
              <li className="font-bold">
                6. To take care of their health needs
              </li>
              <li className="font-bold">
                7. To provide them with love and attention
              </li>
              <li className="font-bold">
                8. To help them overcome loneliness and grief
              </li>
              <li className="font-bold">
                9. To establish a project with the primary objectives of
                addressing their physical and mental needs.
              </li>
            </ol>
          </div>
          <p className="text-center font-bold my-2 text-3xl bg-[#00ffff]">
            The organization has the following resources available
          </p>
          <div className="mx-auto lg:text-left w-1/2">
            <ol className="text-2xl">
              <li className="font-bold">
                1. 2-acre space owned by the organization
              </li>
              <li className="font-bold">
                2. borewell for water supply (including a solar pump)
              </li>
              <li className="font-bold">3. 20X20 hall for the elderly</li>
              <li className="font-bold">4. 10X12 kitchen</li>
              <li className="font-bold">5. 10X15 caretaker's residence</li>
              <li className="font-bold">6. Two toilets</li>
              <li className="font-bold">7. One bathhouse</li>
            </ol>
          </div>
          <p className="text-center font-bold text-3xl bg-[#00ffff]">
            Essential items for वृद्धाश्रम
          </p>
          <p className="text-2xl text-justify">
            Our family is planning to accommodate 200 grandparents for a few
            days, and for that, a solid building is necessary. Therefore, a
            four-story building has been planned, which includes 31 rooms with a
            kitchen, a dining hall, and attached toilet-bathrooms. One of the
            rooms has already been constructed in Pune by R.K.Foundation in
            memory of late Arati Taai Sonagra. If we consider a monthly expense
            of at least 5,000 INR per person, it would cost around 50,000 INR
            for ten people. This amount includes food, tea, breakfast, and
            medical facilities. We need to make necessary arrangements for the
            current occupants. Therefore, we urge you to extend your helping
            hand to make this possible.
          </p>
        </div>
      </div>
      <div className="block lg:flex justify-center">
        <div className="">
          <img src="/vis-abt.png" alt="" className="h-44 w-96 lg:h-full" />
        </div>
        <div className="lg:rounded-lg text-center self-center p-2 justify-center bg-[#008000]">
          <p className="text-base font-bold text-white capitalize lg:text-2xl font-serif text-center lg:p-2">
            The miracle is not that we do this work, but that we are happy to do
            it.
          </p>
          <a
            href="/aboutus"
            className="text-xs text-white lg:text-base hover:text-black"
          >
            Read More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div>
        <article className="my-4 shadow lg:flex sm:block">
          <div className="lg:w-3/6">
            <a href="#">
              <img
                className="hover:opacity-75 h-full w-full"
                src="/ngodata/news6.jpeg"
              />
            </a>
          </div>
          <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
            <a
              href="#"
              className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
            >
              Blanket-Wrapped, Found Peace: A Comforting Night
            </a>
            <a
              href="#"
              className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
            >
              Blanket-Wrapped, Found Peace: A Comforting Night
            </a>
            <p className="pb-3 text-sm">
              By
              <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                Soft The Next
              </a>
              , 2019
            </p>
            <p className="pb-6 3xl:text-xl text-justify">
              A group of social workers in Kalsambur, Beed district,
              Maharashtra, has been running an old age home for senior citizens
              who have no family support. The initiative was started by Manisha
              Pawar, who has been facing several challenges but has managed to
              keep the home running with the help of donations from individuals
              and organizations. Recently, in memory of their late father, the
              family of Sw. Gyaneshwar Kshirsagar, an employee of the district
              court in Beed, donated 15 blankets and some other...
            </p>
            <a
              href="/event"
              className="uppercase text-xs text-blue-600 hover:text-yellow-500"
            >
              Continue Reading <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}

export default BodySection;
