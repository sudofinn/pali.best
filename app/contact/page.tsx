import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


import HeaderImageSm from "../assets/header.png"
import HeaderImage from "../assets/header_old.png"

import Favicon from "../../assets/pali_first_favicon.png"



const Index = () => {
  return (
    <div className="w-full bg-cover bg-fixed bg-headersm lg:bg-headerlg min-h-screen font-extrabold text-white bg-black    ">
      <Head>
        <title>Reach out</title>
        <meta name="description" content="Contact Freelance OS" />
      </Head>

      <div className="p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8  ">
          <p
            data-aos="fade-up"
            className="text-6xl font-bold text-center  mb-4 mt-16 "
          >
            Contact
          </p>
          <p data-aos="fade-up" className="py-6 text-xl text-center ">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action={process.env.NEXT_PUBLIC_KEY}
            method="POST"
            className=" flex flex-col w-full md:w-1/2 mb-32  "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-white text-black  border-white rounded-md focus:outline-none border-4  "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 text-black p-2  bg-white rounded-md  border-4 border-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={9}
              className="p-2 text-black bg-white  rounded-md border-white border-4  focus:outline-none"
            ></textarea>

            <button className="relative hover:text-black mt-4  items-center px-12 py-3 overflow-hidden text-2xl   border-white border-4 rounded-md  group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-white  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 text-black h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative">Let us talk !</span>
            </button>
          </form>
        </div>


     


      </div>

      <footer className="rounded-lg shadow   text-white">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
                <Image src={Favicon} alt="Favicon" className="h-8 w-8 rounded-xl mr-3 "  />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pali</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
                <li>
                    <Link href="/terms" className="mr-4 hover:underline md:mr-6 ">Terms</Link>
                </li>
                <li>
                    <Link href="/privacy" className="mr-4 hover:underline md:mr-6">Privacy </Link>
                </li>
                <li>
                    <Link href="/cookies" className="mr-4 hover:underline md:mr-6 ">Cookies</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center ">© 2023 <Link href="/" className="hover:underline">Pali</Link>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  );
};

export default Index;