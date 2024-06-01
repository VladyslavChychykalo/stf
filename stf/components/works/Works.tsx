import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type carouselT = {
  path: string;
  widthMobile: number;
  widthDesktop: string;
};

const carouselList: carouselT[] = [
  {
    path: "/assets/images/carousel/carousel1.png",
    widthMobile: 289,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel2.png",
    widthMobile: 161,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel3.png",
    widthMobile: 152,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel4.png",
    widthMobile: 185,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel5.png",
    widthMobile: 203,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel6.png",
    widthMobile: 158,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel7.png",
    widthMobile: 152,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel8.png",
    widthMobile: 271,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel9.png",
    widthMobile: 152,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel10.png",
    widthMobile: 134,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel11.png",
    widthMobile: 190,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel12.png",
    widthMobile: 152,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel13.png",
    widthMobile: 159,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel14.png",
    widthMobile: 152,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel15.png",
    widthMobile: 152,
    widthDesktop: "",
  },
  {
    path: "/assets/images/carousel/carousel16.png",
    widthMobile: 152,
    widthDesktop: "",
  },
];

const Works = () => {
  return (
    <section className="swiper-container mb-5 mt-[52px]">
      <h3 className="mb-5 text-center text-[18px] font-bold uppercase leading-[24px]">
        Наші роботі
      </h3>
      <Swiper
        slidesOffsetAfter={16}
        slidesOffsetBefore={16}
        modules={[Pagination, Navigation]}
        slidesPerView={"auto"}
        spaceBetween={8}
        pagination={{
          el: ".swiper-pagination",
          clickable: false,
        }}
        centeredSlides={false}
      >
        {carouselList.map(({ path, widthMobile, widthDesktop }: carouselT) => {
          return (
            <SwiperSlide
              style={{ width: widthMobile + "px", height: "203px" }}
              key={path}
            >
              <Image
                className="rounded-[10px]"
                src={path}
                fill
                style={{ objectFit: "cover" }}
                alt="Transformer"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Works;
