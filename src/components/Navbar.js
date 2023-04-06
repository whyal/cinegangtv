import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-center items-end py-8">
      <div className="text-2xl">
        <Link href="/">Current Works</Link>
      </div>
      <div className="">
        <span className="font-semibold text-4xl">Cinegangtv's Logo</span>
      </div>
      <div className="text-2xl">
        <Link href="/">Past Works</Link>
      </div>
    </nav>
  );
};

export default Navbar;
