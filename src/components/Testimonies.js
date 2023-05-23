import Image from "next/image";
import nextIcon from "../../public/icons/arrow-right-solid.svg";
import prevIcon from "../../public/icons/arrow-left-solid.svg";
import Carousel from "nuka-carousel";

const props = {
  defaultControlsConfig: {
    nextButtonClassName: "nextNav",
    prevButtonClassName: "prevNav",
    nextButtonText: <Image src={nextIcon} height={30} width={30} />,
    prevButtonText: <Image src={prevIcon} height={30} width={30} />,
  },
};

const Testimonies = () => {
  return (
    <div id="clients" className="my-72">
      <h1 className="font-semibold text-4xl text-[#7149C6]">Testimonies</h1>
      <Carousel {...props}>
        <div className="h-[800px] bg-sky-400">
          <h1>Client #1</h1>
        </div>
        <div className="h-[800px] bg-red-400">
          <h1>Client #2</h1>
        </div>
        <div className="h-[800px] bg-green-400">
          <h1>Client #3</h1>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonies;
