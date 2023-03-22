import React, { useState } from "react";
import ImageModal from "./Components/imageModal";

const images = [
  "../ngodata/event1.jpeg",
  "../ngodata/event2.jpeg",
  "../ngodata/event3.jpeg",
  "../ngodata/event4.jpeg",
  "../ngodata/event5.jpeg",
  "../ngodata/event6.jpeg",
  "../ngodata/event7.jpeg",
  "../ngodata/event8.jpeg",
  "../ngodata/event9.jpeg",
  "../ngodata/event10.jpeg",
  "../ngodata/event11.jpeg",
  "../ngodata/event12.jpeg",
  "../ngodata/event13.jpeg",
  "../ngodata/news1.jpeg",
  "../ngodata/news2.jpeg",
  "../ngodata/news3.jpeg",
  "../ngodata/news4.jpeg",
  "../ngodata/news5.jpeg",
  "../ngodata/news6.jpeg",
  "../ngodata/news7.jpeg",
  "../ngodata/news8.jpeg",
  "../ngodata/news9.jpeg",
  "../ngodata/news10.jpeg",
  "../ngodata/news11.jpeg",
  "../ngodata/event12.jpeg",
  "../ngodata/event13.jpeg",
  "../ngodata/event14.jpeg",
  "../ngodata/event15.jpeg",
  "../ngodata/event16.jpeg",
  "../ngodata/event17.jpeg",
  "../ngodata/event18.jpeg",
  "../ngodata/event19.jpeg",
  "../ngodata/event20.jpeg",
  "../ngodata/event21.jpeg",
  "../ngodata/event22.jpeg",
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="animate-slideinup">
        <div className="flex flex-wrap w-full flex-col items-center text-center">
          <p className="text-3xl font-bold text-center py-5 divide-y divide-blue-200">
            Gallery
          </p>
          <span className="text-center inline-block h-0.5 w-72 lg:w-96 rounded bg-indigo-500 mt-2 lg:mb-4"></span>
        </div>
        <div className="flex flex-wrap lg:px-20">
          {images.map((imageUrl) => (
            <div key={imageUrl} className="w-full md:w-1/3 p-3 ">
              <img
                src={imageUrl}
                alt="Image"
                className="h-64 mx-auto w-full object-cover cursor-pointer hover:border-t-4 hover:border-t-[#ff0800] p-2 rounded shadow-lg lg:h-90 lg:w-auto md:w-auto xl:w-auto border lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-105 lg:duration-300"
                onClick={() => handleImageClick(imageUrl)}
              />
            </div>
          ))}
          <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
        </div>
      </div>
    </>
  );
};

export default GallerySection;
