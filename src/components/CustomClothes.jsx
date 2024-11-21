import React from 'react';

const CustomClothes = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-custom-purple">
            Shop By Category
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Life's better when your clothes fit.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.src}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-custom-purple bg-white opacity-0 hover:opacity-90">
                  <h2 className="tracking-widest text-lg title-font font-medium text-custom-purple mb-1">{item.title}</h2>
                  <h1 className="title-font text-medium font-small text-gray-900 mb-3">{item.subtitle}</h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const galleryItems = [
  {
    src: "/images/shirts.jpg",
    title: "SHIRTS",
    subtitle: "lorem epsum",
    description: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
  {
    src: "/images/tees.jpg",
    title: "TEES",
    subtitle: "lorem epsum",
    description: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
  {
    src: "/images/polos.jpg",
    title: "POLOS",
    subtitle: "lorem epsum",
    description: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
  {
    src: "/images/suits.jpg",
    title: "SUITS",
    subtitle: "lorem epsum",
    description: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
  {
    src: "/images/jeans.jpg",
    title: "JEANS",
    subtitle: "lorem epsum",
    description: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
  {
    src: "/images/chinos.jpg",
    title: "CHINOS",
    subtitle: "lorem epsum",
    description: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
  {
    src: "/images/shorts.jpg",
    title: "SHORTS",
    subtitle: "lorem epsum",
    description: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
  {
    src: "/images/dresspants.jpg",
    title: "DRESS PANTS",
    subtitle: "lorem epsum",
    description: "lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum",
  },
];

export default CustomClothes;