import Image from "next/image";
import Marquee from "react-fast-marquee";
const Testimonies = () => {
  return (
    <div className="w-3/4 mx-auto mt-48">
      <h1 className="font-semibold text-7xl">Our Partners</h1>
      <Marquee
        className="py-48 overflow-hidden"
        pauseOnHover={true}
        speed={100}
      >
        <div className="flex items-center mr-96">
          <div className="w-[300px]">
            <Image
              src="/images/klook.png"
              width={300}
              height={300}
              alt="Klook's Logo"
            />
          </div>
          <div className="flex flex-wrap w-96 ml-24 italic text-lg">
            <q>
              From start to finish, the team at CinegangTV demonstrated a high
              level of professionalism and creativity. The production process
              was seamless, and the final video exceeded John's expectations.
              The attention to detail, innovative concepts, and flawless
              execution truly set CinegangTV apart from the competition. John
              highly recommends CinegangTV for their exceptional video
              production services and looks forward to working with them again
              in the future.
            </q>
          </div>
        </div>

        <div className="flex items-center mr-96">
          <div className="w-[300px]">
            <Image
              src="/images/tsl.png"
              width={300}
              height={300}
              alt="TheSmartLocal's Logo"
            />
          </div>
          <div className="flex flex-wrap w-96 ml-24 italic text-lg">
            <q>
              As a small business, TheSmartLocal was looking to create a
              promotional video for our company's website. CinegangTV exceeded
              our expectations in every way. From the initial consultation to
              the final product, we were impressed with the professionalism,
              creativity, and attention to detail demonstrated by the team at
              CinegangTV.
            </q>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonies;
