import Link from "next/link";
import Image from "next/image";
import Facebook from "../../public/icons/facebook-f.js";
import Youtube from "../../public/icons/youtube.js";
import Twitter from "../../public/icons/twitter.js";

const Footer = () => {
  return (
    <footer className="mt-24 w-full h-[400px] bg-sky-900 text-white flex flex-col justify-center">
      <section className="flex flex-col items-center flex-wrap after:content-[''] after:w-3/4 after:h-[2px] after:bg-slate-400 after:rounded after:mt-8">
        <Link
          className="hover:text-slate-400 text-xl"
          scroll={false}
          href="#current-works"
        >
          Current Works
        </Link>
        <Link
          className="hover:text-slate-400 text-xl"
          scroll={false}
          href="#clients"
        >
          Clients
        </Link>
        <Link
          className="hover:text-slate-400 text-xl"
          scroll={false}
          href="/past-works"
        >
          Past Works
        </Link>
      </section>
      <section className="flex flex-col items-center mt-8 mb-4">
        <h1 className="text-lg uppercase font-semibold text-slate-400">
          Follow Us
        </h1>
        <div className="flex justify-center mt-4">
          <a href="https://www.youtube.com" target="_blank">
            <Youtube className="w-8 h-8 fill-white mx-2 hover:fill-slate-400" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <Facebook className="w-8 h-8 fill-white mx-2 hover:fill-slate-400" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <Twitter className="w-8 h-8 fill-white mx-2 hover:fill-slate-400" />
          </a>
        </div>
      </section>
      <small className="text-center text-slate-400">
        CinegangTV&copy; Copyright 2023
      </small>
    </footer>
  );
};

export default Footer;
