import Image from "next/image";
const Talent = ({ name, title }) => {
  return (
    <div className="group flex flex-col items-center w-1/2 sm:w-1/3 lg:w-64">
      <div className="flex justify-center items-center px-1">
        <div className="rounded-full w-full flex aspect-square mx-1.5 justify-center items-center overflow-hidden">
          <Image
            className="w-full object-cover group-hover:opacity-25 relative z-0"
            src={`/images/${name}.jpg`}
            width={300}
            height={300}
            alt={name}
          />
        </div>
        <div className="absolute hidden group-hover:block z-10 capitalize text-xl font-semibold text-[#FE6244]">
          {name}
        </div>
      </div>
      <p className="my-2 font-semibold text-center text-xl">{title}</p>
    </div>
  );
};

export default Talent;
