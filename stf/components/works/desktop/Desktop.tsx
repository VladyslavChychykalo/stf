import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type carouselT = {
  path: string;
  widthDesktop: number;
};

const carouselList: carouselT[] = [
  {
    path: "/assets/images/carousel/carousel1.png",
    widthDesktop: 793,
  },
  {
    path: "/assets/images/carousel/carousel2.png",
    widthDesktop: 439,
  },
  {
    path: "/assets/images/carousel/carousel3.png",
    widthDesktop: 416,
  },
  {
    path: "/assets/images/carousel/carousel4.png",
    widthDesktop: 505,
  },
  {
    path: "/assets/images/carousel/carousel5.png",
    widthDesktop: 555,
  },
  {
    path: "/assets/images/carousel/carousel6.png",
    widthDesktop: 431,
  },
  {
    path: "/assets/images/carousel/carousel7.png",
    widthDesktop: 416,
  },
  {
    path: "/assets/images/carousel/carousel8.png",
    widthDesktop: 742,
  },
  {
    path: "/assets/images/carousel/carousel9.png",
    widthDesktop: 415,
  },
  {
    path: "/assets/images/carousel/carousel10.png",
    widthDesktop: 365,
  },
  {
    path: "/assets/images/carousel/carousel11.png",
    widthDesktop: 518,
  },
  {
    path: "/assets/images/carousel/carousel12.png",
    widthDesktop: 416,
  },
  {
    path: "/assets/images/carousel/carousel13.png",
    widthDesktop: 416,
  },
  {
    path: "/assets/images/carousel/carousel14.png",
    widthDesktop: 416,
  },
  {
    path: "/assets/images/carousel/carousel15.png",
    widthDesktop: 416,
  },
  {
    path: "/assets/images/carousel/carousel16.png",
    widthDesktop: 417,
  },
];

const DesktopSwiper = () => {
  return (
    <div className="relative">
      <Swiper
        slidesOffsetAfter={16}
        slidesOffsetBefore={16}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={24}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        centeredSlides={false}
      >
        {carouselList.map(({ path, widthDesktop }) => (
          <SwiperSlide
            className="flex justify-center"
            key={path}
            style={{ height: "555px", width: `${widthDesktop}px` }}
          >
            <div className="relative h-full w-full">
              <Image
                src={path}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[10px]"
                alt="Transformer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-[-80px] left-0 right-0 flex justify-center px-4">
        <div>
          <button className="custom-prev mr-[71px]">
            {/* <Image
              src="assets/icons/navigation/arrow-right.svg"
              alt="navigation"
              width={40}
              height={40}
              className="left-arrow"
            /> */}

            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="left-arrow"
            >
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="23.5"
                stroke="#1B4A9D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.2929 16.2929C23.6834 15.9024 24.3166 15.9024 24.7071 16.2929L31.7071 23.2929C32.0976 23.6834 32.0976 24.3166 31.7071 24.7071L24.7071 31.7071C24.3166 32.0976 23.6834 32.0976 23.2929 31.7071C22.9024 31.3166 22.9024 30.6834 23.2929 30.2929L28.5858 25H17C16.4477 25 16 24.5523 16 24C16 23.4477 16.4477 23 17 23H28.5858L23.2929 17.7071C22.9024 17.3166 22.9024 16.6834 23.2929 16.2929Z"
                fill="#1B4A9D"
              />
            </svg>
          </button>

          <button className="custom-next">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="23.5"
                stroke="#1B4A9D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.2929 16.2929C23.6834 15.9024 24.3166 15.9024 24.7071 16.2929L31.7071 23.2929C32.0976 23.6834 32.0976 24.3166 31.7071 24.7071L24.7071 31.7071C24.3166 32.0976 23.6834 32.0976 23.2929 31.7071C22.9024 31.3166 22.9024 30.6834 23.2929 30.2929L28.5858 25H17C16.4477 25 16 24.5523 16 24C16 23.4477 16.4477 23 17 23H28.5858L23.2929 17.7071C22.9024 17.3166 22.9024 16.6834 23.2929 16.2929Z"
                fill="#1B4A9D"
              />
            </svg>

            {/* <Image
              src="assets/icons/navigation/arrow-right.svg"
              alt="navigation"
              width={40}
              height={40}
            /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopSwiper;
