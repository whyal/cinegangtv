import HeroLanding from "../../public/images/hero.svg";

const Hero = () => {
	return (
		<div
			id='hero'
			className='w-screen h-max flex justify-center items-center relative top-[-100px] md:top-[-30px] overflow-hidden'>
			<HeroLanding className='shrink-0 z-0' />
			<div className='outline outline-8 outline-[#4B9AF9] rounded-xl border-4 border-[#8C4634] px-8 py-4 bg-[#F2694C] absolute top-[600px]'>
				<h1 className='text-6xl text-white brand'>CinegangTV</h1>
			</div>
		</div>
	);
};

export default Hero;
