import Image from "next/image";
const Talent = ({ name, title }) => {
  return (
    <div className="flex flex-col items-center mx-2">
      <div className="rounded-full h-48 w-48 flex justify-center items-center overflow-hidden">
        <Image
          className="w-full object-cover"
          src={`/images/${name}.jpg`}
          width={300}
          height={300}
          alt={name}
        />
      </div>
      <p className="mt-2 font-semibold text-2xl">{title}</p>
    </div>
  );
};

export default Talent;
