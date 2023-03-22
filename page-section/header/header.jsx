import React, { useState, useEffect } from "react";
import Link from "next/link";

function HeaderSection() {
  const [rtusOpen, setRtusOpen] = useState(false);
  const [sdOpen, setSdOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const [isOpen, setIsOpen] = React.useState(false);
  // on scroll shadow code
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  // on scroll shadow code

  return (
    <>
      <nav
        className={classNames(
          scrollPosition > 0 ? "shadow-lg shadow-indigo-200/50" : "shadow-none",
          "sticky z-50 top-0 flex items-center justify-between flex-wrap bg-black lg:px-20 py-1 px-1"
        )}
      >
        <span href="/">
          <div className="flex items-center flex-shrink-0 text-white lg:mr-6">
            <img
              src="/softthenext.png"
              alt="Soft The Next"
              className="lg:w-20 lg:h-20 w-12 h-12 mr-3"
            />
            <p className="sm:text-xs lg:font-semibold lg:text-xl tracking-tight">
              Soft The Next
            </p>
          </div>
        </span>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-2 py-2 border rounded border-black hover:text-white hover:border-black"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.828z" />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center text-center lg:w-auto`}
        >
          {/* <div className="text-sm lg:flex-grow"> */}
          <a
            href="/"
            className="block p-2 text-base lg:inline-block font-medium text-white hover:text-white lg:mr-4 hover:border-b-4 border-black"
          >
            Home
          </a>
          <div className="relative">
            <a
              className="text-white hover:text-white px-3 py-2 text-sm font-medium"
              onMouseEnter={() => setRtusOpen(true)}
              onMouseLeave={() => setRtusOpen(false)}
            >
              Ready To Use Software
            </a>
            <div
              className={`${
                rtusOpen ? "opacity-100" : "opacity-0"
              } absolute z-10 left-0 mt-8 text-left shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300`}
              onMouseEnter={() => setRtusOpen(true)}
              onMouseLeave={() => setRtusOpen(false)}
            >
              <Link href="/">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Inventory and Billing Software
                </span>
              </Link>
              <Link href="/">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Dairy Software
                </span>
              </Link>
              <Link href="/">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Poultry Software
                </span>
              </Link>
            </div>
          </div>
          <div className="relative">
              <a
                className="text-white hover:text-white px-3 py-2 text-sm font-medium"
                onMouseEnter={() => setSdOpen(true)}
                onMouseLeave={() => setSdOpen(false)}
              >
                Students Delight
              </a>
              <div
                className={`${
                  sdOpen ? "block" : "hidden"
                } absolute z-10 left-0 mt-8 text-left shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300`}
                onMouseEnter={() => setSdOpen(true)}
                onMouseLeave={() => setSdOpen(false)}
              >
                <Link href="/">
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Register Here
                  </span>
                </Link>
                <Link href="/">
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Internships
                  </span>
                </Link>
                <Link href="/">
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Job Training
                  </span>
                </Link>
              </div>
          </div>
          {/* <div className="relative">
            <a
              className="text-white hover:text-white px-3 py-2 text-sm font-medium"
              onMouseEnter={() => 
               {
                setSdOpen(true);
                console.log("hi1");
              }
              }
              onMouseLeave={() => {
                setSdOpen(false);
                console.log("hi2");
              }}
            >
              Students Delight
            </a>
            <div
              className={`${
                sdOpen ? "block" : "hidden"
              } absolute z-10 left-0 mt-4 text-left shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300`}
              onMouseEnter={
                () => {
                  setSdOpen(true);
                  console.log("hi3");
                }
              }
              onMouseLeave={() => setSdOpen(false)}
              style={{ visibility: sdOpen ? "visible" : "hidden" }}
            >
              <Link href="/">
                <span className="dropdown-link block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Register Here
                </span>
              </Link>
              <Link href="/">
                <span className="dropdown-link block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Internships
                </span>
              </Link>
              <Link href="/">
                <span className="dropdown-link block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Job Training
                </span>
              </Link>
            </div>
          </div> */}

          <div className="relative">
            <a
              className="text-white hover:text-white w-full px-3 py-2 text-sm font-medium"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              More
            </a>
            <div
              className={`${
                moreOpen ? "opacity-100" : "opacity-0"
              } absolute z-50 left-0 mt-8 w-32 text-left shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300`}
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <Link href="/">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Services
                </span>
              </Link>
              <Link href="/">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Portfolio
                </span>
              </Link>
              <Link href="/">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  About Us
                </span>
              </Link>
              <Link href="/">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default HeaderSection;

// import React, { useState, useEffect } from "react";

// import Link from 'next/link'

// function Navbar() {
//   const [isOpen, setIsOpen] = React.useState(false)

//   function toggleDropdown() {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//               onClick={toggleDropdown}
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Hamburger button icon */}
//             </button>
//           </div>
//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="hidden sm:block sm:ml-6">
//               <div className="flex space-x-4">
//                 <Link href="/">
//                   <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                     Home
//                   </span>
//                 </Link>
//                 <div className="relative">
//                   <button
//                     type="button"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                     onMouseEnter={() => setIsOpen(true)}
//                     onMouseLeave={() => setIsOpen(false)}
//                   >
//                     Dropdown
//                   </button>
//                   <div
//                     className={`${
//                       isOpen ? 'opacity-100' : 'opacity-0'
//                     } absolute z-10 left-0 mt-8 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300`}
//                     onMouseEnter={() => setIsOpen(true)}
//                     onMouseLeave={() => setIsOpen(false)}
//                   >
//                     <Link href="/">
//                       <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         Option 1
//                       </span>
//                     </Link>
//                     <Link href="/">
//                       <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         Option 2
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link href="/">
//             <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               Home
//             </span>
//           </Link>
//           <Link href="/">
//             <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//               Dropdown
//             </span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
