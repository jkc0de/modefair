import Image from "next/image";
import Slider from "react-slick";

export default function Gallery({
  gallery,
}: {
  gallery: { name: string; image: string }[];
}) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="relative h-full w-full">
        <Slider {...settings}>
          {gallery?.map((item, index) => (
            <div key={index} className="relative h-full w-full bg-[#fafafa]">
              <Image
                src={item.image}
                height={0}
                width={0}
                sizes="100"
                alt={item.name}
                className="mx-auto"
                style={{ width: "auto", height: "392px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
