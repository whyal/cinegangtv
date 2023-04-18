import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavBar = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="w-full flex flex-col top-0 z-10 sticky bg-[#7149C6] text-[#FFDEB9]">
      <div className="h-[70px] flex justify-between items-center">
        <span className="mx-5 font-semibold text-xl">CinegangTV's Logo</span>
        <div
          onClick={toggleNavBar}
          className={`${styles.hamburgerWrapper} ${
            showNav ? styles.open : null
          }`}
        >
          <div className={styles.hamburger}></div>
        </div>
      </div>
      <div
        className={`${
          !showNav ? "translate-x-[100%]" : null
        } absolute top-[70px] w-full h-[100%-70px] bg-[#7149C6] flex flex-col justify-center items-center py-4 transition ease-in-out delay-150`}
        onClick={toggleNavBar}
      >
        <div className="text-2xl md:relative">
          <Link className="nav-hover" scroll={false} href="/past-works">
            Past Works
          </Link>
        </div>
        <div className="text-2xl md:relative">
          <Link className="nav-hover" scroll={false} href="#clients">
            Clients
          </Link>
        </div>
        <div className="text-2xl md:relative">
          <Link className="nav-hover" scroll={false} href="#contact">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
