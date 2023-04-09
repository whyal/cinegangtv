import Link from "next/link";
const Navbar = () => {
	return (
		<nav className='flex justify-center items-end py-8'>
			<div className='text-2xl hover:border-b-black mr-4'>
				<Link href='/'>Current Works</Link>
			</div>
			<div className=''>
				<span className='font-semibold text-4xl'>CinegangTV's Logo</span>
			</div>
			<div className='text-2xl ml-4'>
				<Link href='/'>Past Works</Link>
			</div>
		</nav>
	);
};

export default Navbar;
