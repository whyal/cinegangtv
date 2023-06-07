import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);

	const toggleNavBar = () => {
		setShowNav(!showNav);
	};

	return (
		<nav className='w-screen h-auto flex flex-col top-[780px] z-10 absolute bg-[#2D2D2D] text-white'>
			<hr className='w-full h-1 border-dashed border-t-[15px] border-white' />
			<div className='h-[100px] flex justify-between items-center md:justify-center'>
				<ul className='flex w-1/2 justify-evenly text-2xl'>
					<li>Home</li>
					<li>About Us</li>
					<li>Portfolio</li>
				</ul>
				<div
					onClick={toggleNavBar}
					className={`hidden ${styles.hamburgerWrapper} ${showNav ? styles.open : ""}`}>
					<div className={`${styles.hamburger}`}></div>
				</div>
			</div>
			<hr className='w-full h-1 border-dashed border-t-[15px] border-white' />
			<div
				className={`${
					!showNav ? "translate-x-[100%] hidden" : null
				} absolute top-[130px] w-full h-max bg-[#2D2D2D] flex flex-col justify-center items-center py-4 transition ease-in-out delay-150`}
				onClick={toggleNavBar}>
				<div className='text-2xl md:relative'>
					<Link className='nav-hover' scroll={false} href='/'>
						Home
					</Link>
				</div>
				<div className='text-2xl md:relative'>
					<Link className='nav-hover' scroll={false} href='#clients'>
						About Us
					</Link>
				</div>
				<div className='text-2xl md:relative'>
					<Link className='nav-hover' scroll={false} href='#contact'>
						Portfolio
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
