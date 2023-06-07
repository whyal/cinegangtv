import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Talents from "@/components/Talents";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Testimonies from "@/components/Testimonies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CurrentWorks from "@/components/Current-works";

const myFont = localFont({ src: "../../public/fonts/De-Facto-Zamosc.otf" });

export default function Home() {
	return (
		<div className={myFont.className}>
			<Layout>
				<Navbar />
				<Hero />
				<div className='w-[90%] md:w-4/5 xl:w-3/5 mx-auto'>
					<CurrentWorks />
					<Testimonies />
					<Talents />
				</div>
				<Footer />
			</Layout>
			<Contact />
		</div>
	);
}
