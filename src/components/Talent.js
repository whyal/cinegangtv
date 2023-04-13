import Image from "next/image";
const Talent = ({ name, title }) => {
  return (
    <div className="group flex flex-col items-center mx-2">
      <div className="rounded-full h-48 w-48 flex justify-center items-center overflow-hidden">
        <Image
          className="w-full object-cover group-hover:opacity-50 relative z-0"
          src={`/images/${name}.jpg`}
          width={300}
          height={300}
          alt={name}
        />
        <div className="absolute hidden group-hover:block z-10 capitalize font-semibold">
          {name}
        </div>
      </div>
      <p className="mt-2 font-semibold text-2xl">{title}</p>
    </div>
  );
};

export default Talent;
