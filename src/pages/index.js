import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Talents from "@/components/Talents";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Testimonies from "@/components/Testimonies";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Testimonies />
      <Talents />
      <Contact />
    </Layout>
  );
}
