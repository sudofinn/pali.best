import Image from 'next/image'
import Link from 'next/link'

import HeaderImageSm from "../assets/pali_new_background.png"
import HeaderImage from "../assets/pali_new_background.png"

import AppStoreImage from "../assets/App Store.svg"
import PlayStoreImage from "../assets/Play Store.svg"
import MacBookImage from "../assets/macbook.svg"

import Favicon from "./favicon.ico"

export default function Home() {
  return (
    <div className="min-h-screen  bg-cover bg-fixed bg-headersm xl:bg-headerlg">
      <div className="w-full container mx-auto">
        <div className="w-full flex items-center justify-between pl-8">
          <Link className="flex pt-8 items-center no-underline hover:no-underline font-bold text-2xl text-[#DE0100] lg:text-4xl" href="/">
            Pali.<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6069EE] to-[#F6A915]">best</span>
          </Link>

          <div className="flex w-1/2 justify-end content-center pt-8">
            <a className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?text=Pali%20is%20launching%20soon%2C%20an%20app%20where%20you%20can%20learn%20on%20the%20fly.%20Get%20notified%20when%20it's%20live%20at%20https%3A%2F%2Fwww.pali.best%2F" target="_blank">
              <svg className="fill-current h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                ></path>
              </svg>
            </a>
           
          </div>


          
        </div>
      </div>

      <div className="container  pl-0 md:pl-8 pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4  text-5xl  md:text-5xl xl:text-6xl 2xl:text-7xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#DE0100]  to-[#F6A915]">
              Learn anytime,
            </span>
             <span className=''> </span><p className='text-[#6069EE]'>anywhere.</p>
          </h1>
          <p className="leading-normal text-white text-base  md:text-2xl mb-8 text-center md:text-left">
            Study on the fly and get smarter in no time.
          </p>

          <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
          action={process.env.NEXT_PUBLIC_KEY}
            method="POST">
            <div className="mb-4">
              <label  className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
                Get an email on launch day.
              </label>
              <input name="in-pr"
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="emailaddress"
                type="text"
                placeholder="my@email.com"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <button name="btn-prim"
                className="bg-gradient-to-r from-[#6069EE] to-[#F6A915]  text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                 role="button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="w-full xl:w-3/5 p-12 overflow-hidden">
          <Image alt="macbook"   className="mx-auto w-full md:w-11/12   transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src={MacBookImage} />
        </div>

        

        <div className="w-full pt-16 pb-32 text-sm text-center md:text-left fade-in">
        </div>
      </div>

        <div className='flex justify-center '>

<ol className="relative border-l border-gray-200 dark:border-gray-700 pt-32 pb-24 text-3xl ml-6 lg:ml-0">                  
    <li className="mb-10 ml-6 ">            
        <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-white">
            <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1  font-semibold text-gray-900 dark:text-white">Day 1  <span className=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-white text-black ml-3">Noob</span></h3>
        <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">You jump into learning with Pali without knowing it it works.</p>
    </li>

    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-white">
            <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1  font-semibold text-gray-900 dark:text-white">Day 3</h3>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">You already notice how much more you can learn in a day.</p>
    </li>

     <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-white">
            <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1  font-semibold text-gray-900 dark:text-white">Day 7 <span className=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-white text-black ml-3">Intermediate</span></h3>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">Pali becomes part of your routine, you use it every day.</p>
    </li>

     <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-white">
            <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1  font-semibold text-gray-900 dark:text-white">Day 30</h3>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">Pali is part of your life.</p>
    </li>

    <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-white">
            <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1  font-semibold text-gray-900 dark:text-white">Day 60 <span className=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-white text-black ml-3">Pro</span></h3>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">You = Pali</p>
    </li>
    
    
</ol>
</div>

<div className="container pt-64  mx-auto md:px-6 text-white">
  <section className="pb-32">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
      <div className="text-center">
        <div
          className="mt-[-170px] block rounded-lg bg-[hsla(0,0%,100%,0.55)] bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12">
          <h1 className="mb-16 text-4xl lg:text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Get notified when <br /><span className="text-danger dark:text-danger-400">Pali launches.</span>
          </h1>
          <form action={process.env.NEXT_PUBLIC_KEY}
            method="POST">
            <input name="name" className="mb-2 text-black transition hover:scale-105 duration-300 ease-in-out shadow-xl shadow-[#DE0100] hover:shadow-gray-900 inline-block rounded bg-danger px-12 pt-4 pb-3.5 text-sm font-medium  leading-normal    md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" placeholder='my@email.com' ></input>
          <button name="btn-sec" className="inline-block transition hover:scale-105 duration-300 ease-in-out rounded px-12 shadow-xl shadow-[#6366F1] hover:shadow-gray-900 pt-4 pb-3.5 text-sm font-medium  leading-normal text-danger  "
            data-te-ripple-init data-te-ripple-color="light"  role="button">Subscribe</button>

          </form>
          
        </div>
      </div>
    </div>
  </section>
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

  )
}