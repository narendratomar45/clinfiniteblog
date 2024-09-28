import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-[40%] left-3 z-30">
      <FcPrevious size={50} />
    </button>
  );
};

const NextBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-[40%] right-3 z-30">
      <FcNext size={50} />
    </button>
  );
};

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
  };

  const slider = [
    {
      id: 1,
      img: {
        src: "https://clinfinite.com/img/Biospecimen_&_Biorepository_Solutions_Background.webp",
        alt: "biospecimen",
      },
      descrip: "Bio-Specimen & Bio-Repository Solutions",
    },
    {
      id: 2,
      img: {
        src: "https://clinfinite.com/img/Biometrics_Background.webp",
        alt: "biometrics",
      },
      descrip: "Biometrics Solutions",
    },
    {
      id: 3,
      img: {
        src: "https://clinfinite.com/img/Project_&_Site_Management_Solutions_Background.webp",
        alt: "biometrics",
      },
      descrip: "Project & Site Management Solutions",
    },
    {
      id: 4,
      img: {
        src: "https://clinfinite.com/img/Clinical_Developmen_Solutions_Background.webp",
        alt: "Clinical Development",
      },
      descrip: "Clinical Development Solutions",
    },
  ];

  return (
    <Slider {...settings}>
      {slider.map((slide) => (
        <div key={slide.id} className="w-full relative">
          <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <p className="font-bold text-xl font-serif capitalize text-white max-md:text-xs max-md:text-center">
              Your Research & Development Partner ICH-GCP Compliant CRO
            </p>
            <div className="font-bold text-6xl font-sans text-center text-white my-5 max-md:my-2 max-md:text-center max-md:text-2xl">
              <p>{slide.descrip}</p>
            </div>
            <div className="flex justify-center gap-8 my-5 max-md:my-2 ">
              <button className="p-3 rounded text-white cursor-pointer bg-blue-800  hover:bg-blue-950 transition-all w-[185px] max-md:p-1 max-md:w-[120px]">
                Learn More
              </button>
              <button className="border border-white p-3 rounded w-[185px] text-white hover:bg-white hover:text-black transition-all max-md:p-1 max-md:w-[120px]">
                Contact Us
              </button>
            </div>
          </div>
          <img
            src={slide.img.src}
            alt={slide.img.alt}
            className="w-full h-full object-cover max-md:bg-contain"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
