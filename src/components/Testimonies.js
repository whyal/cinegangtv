import Image from "next/image";
import NextIcon from "../../public/icons/arrow-right-solid.svg";
import PrevIcon from "../../public/icons/arrow-left-solid.svg";
import Carousel from "nuka-carousel";

const props = {
	defaultControlsConfig: {
		nextButtonClassName: "nextNav",
		prevButtonClassName: "prevNav",
		nextButtonText: <NextIcon height={30} width={30} />,
		prevButtonText: <PrevIcon height={30} width={30} />,
	},
};

const Testimonies = () => {
	return (
		<div id='clients' className='my-72'>
			<h1 className='font-semibold text-4xl text-[#21bcff]'>Testimonies</h1>
			<Carousel {...props}>
				<div className='h-[800px] flex justify-center items-center'>
					<h1>Client #1</h1>
				</div>
				<div className='h-[800px] flex justify-center items-center'>
					<h1>Client #2</h1>
				</div>
				<div className='h-[800px] flex justify-center items-center'>
					<h1>Client #3</h1>
				</div>
			</Carousel>
		</div>
	);
};

export default Testimonies;
