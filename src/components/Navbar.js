import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-[#7149C6] flex justify-center items-end py-8 text-[#FFDEB9]">
      <div className="text-2xl mr-4 relative ">
        <Link className="nav-hover" href="/current-works">
          Current Works
        </Link>
      </div>
      <div className="">
        <span className="font-semibold text-4xl">CinegangTV's Logo</span>
      </div>
      <div className="text-2xl ml-4 relative">
        <Link className="nav-hover" href="/">
          Past Works
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
