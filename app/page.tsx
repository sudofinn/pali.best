import Image from 'next/image'

export default function Home() {
  return (
   <div className="relative flex h-full w-full font-extrabold text-xl">
  <div className="h-screen w-1/2 bg-black">
    <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
      <div>
        <p className="text-5xl">Pali.best</p>
        <p className='text-2xl'>Passive learning for everyone.</p>
      </div>
      <div className="my-8">
        <button className="flex w-full    bg-gradient-to-r  from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-gradient-to-l  justify-center rounded-3xl border-none bg-white  text-black hover:bg-gray-200 sm:p-2"></button>
      </div>
      <div>
        <fieldset className="border-t border-solid border-gray-600">
          <legend className="mx-auto px-2 text-center ">Get notified on launch day !</legend>
        </fieldset>
      </div>
      <div className="mt-10">
        <form action={process.env.NEXT_PUBLIC_KEY} method="POST">
           <div className="mt-4">
            <label  className="mb-2.5 block font-extrabold" htmlFor="name">Name</label>
            <input type="name"name="name" id="name" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-emerald-500 shadow" placeholder="Elon Musk"/>
          </div>

          <div className="mt-4">
            <label className="mb-2.5 block font-extrabold" htmlFor="email">Email *</label>
            <input type="password" name="name" id="email" className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-500 shadow" placeholder="elonmusk@gmail.com"/>
          </div>
          
          <div className="my-10">
            <button className="w-full rounded-full  p-5 bg-gradient-to-l  from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 text-black font-extrabold
            hover:bg-gradient-to-r  hover:scale-110 duration-300 ">Notify me</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="h-screen w-1/2  ">
    <img src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg" className="h-full w-full " />
  </div>
</div>

  )
}
