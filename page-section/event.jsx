import React, { useState } from "react";
import Modal from "react-modal";

export default function EventSection() {
  const [modalOpen01, setModalOpen01] = useState(false);
  const [modalOpen02, setModalOpen02] = useState(false);
  const [modalOpen03, setModalOpen03] = useState(false);
  const [modalOpen04, setModalOpen04] = useState(false);
  const [modalOpen05, setModalOpen05] = useState(false);
  const [modalOpen06, setModalOpen06] = useState(false);
  const [modalOpen07, setModalOpen07] = useState(false);
  const [modalOpen08, setModalOpen08] = useState(false);
  const [modalOpen09, setModalOpen09] = useState(false);
  const [modalOpen10, setModalOpen10] = useState(false);
  const [modalOpen11, setModalOpen11] = useState(false);

  const handleImage01Click = () => {
    setModalOpen01(true);
  };
  const handleImage02Click = () => {
    setModalOpen02(true);
  };
  const handleImage03Click = () => {
    setModalOpen03(true);
  };
  const handleImage04Click = () => {
    setModalOpen04(true);
  };
  const handleImage05Click = () => {
    setModalOpen05(true);
  };
  const handleImage06Click = () => {
    setModalOpen06(true);
  };
  const handleImage07Click = () => {
    setModalOpen07(true);
  };
  const handleImage08Click = () => {
    setModalOpen08(true);
  };
  const handleImage09Click = () => {
    setModalOpen09(true);
  };
  const handleImage10Click = () => {
    setModalOpen10(true);
  };
  const handleImage11Click = () => {
    setModalOpen11(true);
  };

  const handleModal01Close = () => {
    setModalOpen01(false);
  };
  const handleModal02Close = () => {
    setModalOpen02(false);
  };
  const handleModal03Close = () => {
    setModalOpen03(false);
  };
  const handleModal04Close = () => {
    setModalOpen04(false);
  };
  const handleModal05Close = () => {
    setModalOpen05(false);
  };
  const handleModal06Close = () => {
    setModalOpen06(false);
  };
  const handleModal07Close = () => {
    setModalOpen07(false);
  };
  const handleModal08Close = () => {
    setModalOpen08(false);
  };
  const handleModal09Close = () => {
    setModalOpen09(false);
  };
  const handleModal10Close = () => {
    setModalOpen10(false);
  };
  const handleModal11Close = () => {
    setModalOpen11(false);
  };
  return (
    <div className="animate-slideinup">
      <div className="flex flex-wrap w-full flex-col items-center text-center">
        <p className="text-3xl font-bold text-center py-5 divide-y divide-blue-200">
          Events
        </p>
        <span className="text-center inline-block h-0.5 w-72 lg:w-96 rounded bg-indigo-500 mt-2 lg:mb-4"></span>
      </div>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
              <img
                src="/ngodata/news1.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage01Click}
              />
              <Modal isOpen={modalOpen01} onRequestClose={handleModal01Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news1.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal01Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
            </div>
            <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                Donated Seating Benches
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
              >
                Reporter amol jadhav gave seating benches to our organisation
              </a>
              <p className="pb-3 text-sm">
                By
                <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                  Soft The Next
                </a>
                , 2021
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                "आपला पिरिवार", Journalist from Nandurghat Mr Amol Jadhav and
                his wife Sonali Jadhav with children Visited the ashram.
                Grandparents will be able to sit on a garden bench that has been
                donated.
              </p>
            </div>
          </article>
        </div>
      </main>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
              <img
                src="/ngodata/news2.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage02Click}
              />
              <Modal isOpen={modalOpen02} onRequestClose={handleModal02Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news2.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal02Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
            </div>
            <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                decisive wisdom of living birds
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
              >
                The decisive wisdom of living birds with the elderly
              </a>
              <p className="pb-3 text-sm">
                By
                <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                  Soft The Next
                </a>
                , 2021
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                In Kalsambar, Beed Taluka, Manisha Pawar has provided shelter
                and care for the elderly in her family. With the help of
                numerous donors, her family has been able to support many
                elderly people in their community, providing them with a
                comfortable and caring home. Along with her work with the
                elderly, Manisha Pawar is also passionate about animal welfare.
                She has taken steps to protect animals in her community,
                including storing sorghum for the animals during times of
                shortage. This has earned her recognition and appreciation from
                her community. Recently, due to the heavy rainfall, all the
                crops in the fields have been destroyed. As a result, the birds
                in the area have been left without food. To help the birds,
                Manisha Pawar's family has set aside an acre of land on their
                property to grow sorghum, which they will share with the birds.
                They have also planted trees to provide shade and shelter for
                the birds. Manisha Pawar's dedication to both the elderly and
                animals in her community is truly admirable. Her efforts have
                made a positive impact on the lives of many, and she serves as a
                role model for others to follow.
              </p>
            </div>
          </article>
        </div>
      </main>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
            <img
                src="/ngodata/news3.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage03Click}
              />
              <Modal isOpen={modalOpen03} onRequestClose={handleModal03Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news3.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal03Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
            </div>
            <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                Help from the Pandharpurkar family
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
              >
                Help from the Pandharpurkar family
              </a>
              <p className="pb-3 text-sm">
                By
                <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                  Soft The Next
                </a>
                , 2021
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                Pandharpur Pilgrims from Pune: The family brought Shyam Sundar
                Sarda and through Akshay Baheti, they started a Kirtan group in
                Kalasambhav. Their own family: Donated fifteen टाळ to an
                orphanage in Pandharpur. They visited the ashram and saw blind,
                disabled, and homeless elderly residents living there, seeking
                peace and quiet, but lacking literature to read. Akshay and Anil
                Baheti shared this information with Shyam Sundar Sarda and asked
                him to share it with other pilgrims in Pandharpur. As a result,
                the family donated fifteen टाळ to the ashram. Now, the
                grandparents of the family are enjoying a variety of programs
                organized using these टाळ. They are very happy. Akshay Baheti
                and his family continue to make efforts to provide various
                comforts and conveniences to their own family, and also to
                donate and help others. Therefore, as part of their efforts,
                they donated टाळ to the Pandharpur Pilgrims, and Manisha Pawar,
                the director of the ashram, thanked the Pandharpur pilgrims,
                Shyam Sundar Sarda, and Akshay Baheti for their generosity.
              </p>
            </div>
          </article>
        </div>
      </main>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
            <img
                src="/ngodata/news4.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage04Click}
              />
              <Modal isOpen={modalOpen04} onRequestClose={handleModal04Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news4.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal04Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
            </div>
            <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                मुलीचे कन्यादान With the help of Punekars
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
              >
                With the help of Punekars, another girl's wedding was conducted
              </a>
              <p className="pb-3 text-sm">
                By
                <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                  Soft The Next
                </a>
                , 2021
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                A girl's wedding was successfully organized with the help of
                Sahayog Setu in Pune, thanks to the efforts of Manisha Pawar,
                director of a local old-age home in Kalambasambhar (Beed) and
                social workers Archana Sanap and others. The family of the girl,
                who was from Limbarui (Beed), had faced financial difficulties
                and had to move to Shikrapur (Pune) for work. When the social
                workers learned of the situation, they stepped in and organized
                the wedding with the help of Smruti Dhapate, Swarupa Shirke,
                Shila Dandekar, Manisha Pawar, Archana Sanap, and others. The
                group also collected donations for the wedding. Rahul Bobde, the
                head of Sahayog Setu, attended the wedding and was warmly
                welcomed. The success of this initiative has been widely
                praised, as the group has previously helped organize seven other
                weddings in the Beed district.
              </p>
            </div>
          </article>
        </div>
      </main>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
            <img
                src="/ngodata/news5.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage05Click}handleImageClick
              />
              <Modal isOpen={modalOpen05} onRequestClose={handleModal05Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news5.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal05Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
            </div>
            <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                financial assistance to the elderly without any source of income
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
              >
                Providing financial assistance to the elderly without any source
                of income
              </a>
              <p className="pb-3 text-sm">
                By
                <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                  Soft The Next
                </a>
                , 2022
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                Providing financial assistance to the elderly without any source
                of income, creating a foundation for them to rely on. the story
                of a girl who was helped by a group of Punekars. When her mother
                died, the girl was left with no money to pay for the funeral.
                The Punekars gave her money and helped her sell some of her
                mother's belongings to pay for the funeral. Afterwards, she
                started a social service organization called "Aapla Parivar"
                which provides care for the elderly who have no one else to turn
                to. Despite the challenges of caring for the elderly, the girl
                remains dedicated to her mission and sees it as her calling to
                help those in need.
              </p>
            </div>
          </article>
        </div>
      </main>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
            <img
                src="/ngodata/news6.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage06Click}
              />
              <Modal isOpen={modalOpen06} onRequestClose={handleModal06Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news6.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal06Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
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
                , 2022
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                A group of social workers in Kalsambur, Beed district,
                Maharashtra, has been running an old age home for senior
                citizens who have no family support. The initiative was started
                by Manisha Pawar, who has been facing several challenges but has
                managed to keep the home running with the help of donations from
                individuals and organizations. Recently, in memory of their late
                father, the family of Sw. Gyaneshwar Kshirsagar, an employee of
                the district court in Beed, donated 15 blankets and some other
                items to the old age home. Sw. Gyaneshwar Kshirsagar's family
                also donated two acres of land for the home. The family hopes
                that their donation will encourage others to come forward and
                support the old age home. The event was attended by his sons,
                Sajivanee Kshirsagar, Kapil Kshirsagar, Rameshwar Kshirsagar,
                his daughter Manosha Kshirsagar, and social worker Manisha
                Pawar.
              </p>
            </div>
          </article>
        </div>
      </main>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
            <img
                src="/ngodata/news7.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage07Click}
              />
              <Modal isOpen={modalOpen07} onRequestClose={handleModal07Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news7.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal07Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
            </div>
            <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                Sevadip Puraskar
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
              >
                आपला परिवार वृद्धाश्रम has been awarded the Sevadip Puraskar
              </a>
              <p className="pb-3 text-sm">
                By
                <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                  Soft The Next
                </a>
                , 2022
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                relfor company in Pune Given by registered organization Sevadip
                Award 2021 "आपला परिवार वृद्धाश्रम". Announced in Pune. By the
                Railway Foundation organization. At their office, five lakh
                rupees and a trophy will be given as a token of honor. The
                manager of our family, Manisha Pavar.
              </p>
            </div>
          </article>
        </div>
      </main>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
            <img
                src="/ngodata/news8.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage08Click}
              />
              <Modal isOpen={modalOpen08} onRequestClose={handleModal08Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news8.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal08Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
            </div>
            <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                आपला परिवार वृद्धाश्रम
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
              >
                Help to our आपला परिवार वृद्धाश्रम from Nitin Lodha.
              </a>
              <p className="pb-3 text-sm">
                By
                <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                  Soft The Next
                </a>
                , 2022
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                Chairman Nitin Seth Loda of Bhimashankar Sugar Factory in
                Chausala, Beed, provided financial assistance to the
                construction of an old age home for his family at Kalasambhara
                on Sunday. The family, located near Neknoor, is in the process
                of building a new hall in the old age home for the elderly
                residents to live in. To this end, Nitin Loda has provided his
                family with 10,000 sheets of iron, two truckloads of gravel, and
                100 bags of cement for the construction work. In the meantime,
                the late Sateesh Loda's son Nitin Loda is taking over, and he
                visited the old age home with his wife to seek the blessings of
                the elderly residents. Manisha Pavar has expressed gratitude on
                behalf of Nitin Loda and Sonali Loda for their assistance.
              </p>
            </div>
          </article>
        </div>
      </main>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
            <img
                src="/ngodata/news9.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage09Click}
              />
              <Modal isOpen={modalOpen09} onRequestClose={handleModal09Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news9.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal09Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
            </div>
            <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                Celebration of Advocate Aarti Songara's
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
              >
                Celebration of Advocate Aarti Songara's birthday was organized
                at the Kalasambar वृद्धाश्रम by a social initiative.
              </a>
              <p className="pb-3 text-sm">
                By
                <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                  Soft The Next
                </a>
                , 2021
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                Aarti Tai Songara, President of the R.K. Songara Foundation,
                celebrated her family's birthday by organizing a program at an
                orphanage for the elderly. At this time, she was able to visit
                her grandparents herself after a few days. She also mentioned
                that they would soon donate a hall for the ashram. She urged
                them to do social work on a large scale and promised them a long
                and healthy life. She also prayed and wished for the well-being,
                prosperity, happiness, peace, and satisfaction of her
                grandparents and the R.K. Songara Foundation. Through this help,
                her grandparents are currently able to stand on their own feet.
                As the ashram's roof is made of metal sheets, when it rains, it
                makes a loud noise in the sky, which makes us feel scared.
                However, due to their cooperation, we will not have to face this
                difficulty in the upcoming rainy season.
              </p>
            </div>
          </article>
        </div>
      </main>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
            <img
                src="/ngodata/news10.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage10Click}
              />
              <Modal isOpen={modalOpen10} onRequestClose={handleModal10Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news10.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal10Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
            </div>
            <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                donated one acre of land
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
              >
                Manisha Pawar has donated one acre of land to the "आपला परिवार
                वृद्धाश्रम"!
              </a>
              <p className="pb-3 text-sm">
                By
                <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                  Soft The Next
                </a>
                , 2020
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                In Kalsambhar's "Aapla Parivar" Anath Vridhashram, Manisha Pawar
                has donated two acres of her own land. Gautam Khatod incurred a
                stamp duty expense of fifteen thousand rupees for this purpose.
                Due to this decision, they have received praise for their
                generosity. For the past two years, Manisha has been working
                with the Gaubai Women's Volunteer Organization, which is run by
                Supur in the Bheed taluka. They have made arrangements for 200
                people to live in their Anath Vridhashram in the future. Such
                arrangements are necessary to be made. Therefore, the
                cooperation of individuals through donations is also necessary
                for this work. For this reason, the secretary of the
                organization, Vaishnath Khodave, has donated money to help those
                in need.
              </p>
            </div>
          </article>
        </div>
      </main>
      <main className="flex w-4/4 lg:px-10 p-2">
        <div>
          <article className="my-4 shadow lg:flex sm:block">
            <div className="lg:w-3/6">
            <img
                src="/ngodata/news11.jpeg"
                alt="Image"
                className="object-cover cursor-pointer h-auto w-auto mx-auto"
                onClick={handleImage11Click}
              />
              <Modal isOpen={modalOpen11} onRequestClose={handleModal11Close}>
                <div className="h-full overflow-auto">
                  <img
                    src="/ngodata/news11.jpeg"
                    alt="Image"
                    className="w-full"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-2 md:invisible"
                  onClick={handleModal11Close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Modal>
            </div>
            <div className="flex flex-col lg:p-6 p-2 bg-white lg:w-3/6">
              <a
                href="#"
                className="my-2 text-sm font-bold uppercase border-b-2 border-yellow-500 text-blue-600"
              >
                The inauguration of the hall was done by Bhartitai Sonagra at
                "Aapla Parivar Ashram".
              </a>
              <a
                href="#"
                className="pb-4 text-3xl font-serif font-bold hover:text-gray-700 sm:text-justify"
              >
                The inauguration of the hall was done by Bharti tai Sonagra at
                "Aapla Parivar Ashram".
              </a>
              <p className="pb-3 text-sm">
                By
                <a href="#" className="font-semibold hover:text-gray-800 ml-1">
                  Soft The Next
                </a>
                , 2022
              </p>
              <p className="pb-6 2xl:text-xl text-justify">
                'आपला परिवार आश्रमात भारतीताई सोनाग्रा यांच्या हस्ते हॉलचे
                लोकार्पण परिवार आश्रमात भारतीताई सोनाग्रा यांच्या हस्ते हॉलचे
                लोकार्पण
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

// import React, { useState } from 'react';
// import Modal from 'react-modal';

// const ImageComponent = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleImageClick = () => {
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div className="relative w-64 h-64">
//       <img
//         src="/ngodata/news5.jpeg"
//         alt="Image"
//         className="absolute w-full h-full object-cover cursor-pointer"
//         onClick={handleImageClick}
//       />
//       <Modal isOpen={modalOpen} onRequestClose={handleModalClose}>
//         <div className="h-full overflow-auto">
//           <img src="/ngodata/news5.jpeg" alt="Image" className="w-full" />
//         </div>
//         <button className="absolute top-0 right-0 p-2 md:invisible" onClick={handleModalClose}>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
//             <path
//               fillRule="evenodd"
//               d="M11.414 10l4.293-4.293a1 1 0 1 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default ImageComponent;
