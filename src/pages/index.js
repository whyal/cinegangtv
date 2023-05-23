import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Talents from "@/components/Talents";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Testimonies from "@/components/Testimonies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CurrentWorks from "@/components/Current-works";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="w-[90%] md:w-4/5 xl:w-3/5 mx-auto">
          <Hero />
          <CurrentWorks />
          <Testimonies />
          <Talents />
        </div>
        <Footer />
      </Layout>
      <Contact />
    </>
  );
}
