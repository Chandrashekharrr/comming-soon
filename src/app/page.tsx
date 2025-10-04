import { Noto_Sans } from "next/font/google";
import { Notable } from "next/font/google";


const noto = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"]
});


const notable = Notable({
  variable: "--font-notable",
  subsets: ["latin"],
  weight: ["400"]
}); 


export default function Home() {



  return (
    <main className="bg-zinc-900 w-full h-screen text-white">

      <div className="nav w-full justify-center items-center flex">


        <img className="h-20 mt-5" src="/images/logo.png" alt="Logo" />

      </div>


      <div className={` heading w-full uppercase  px-10 flex flex-wrap`}>

        <div className={`${noto.variable} one text-[6vw] mt-20 md:mt-0 font-thin flex flex-col items-end`}>
          <h1 className="">Trendsetting</h1>
          <h1 className="leading-none mt-5 md:mt-10">Starts</h1>
          <h1 className="leading-none">Now</h1>
        </div>
        <div className="video bg-green-500 mt-10 md:ml-auto rounded-md">
          <video className="w-[90vw] md:w-[60vw] lg:w-[40vw] rounded-md overflow-hidden object-cover" autoPlay loop muted>
            <source src="/images/toy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>




        <div className="two w-full flex justify-end mt-10 ">
          <h1 className={`${notable.className} text-[8vw]  md:text-[6vw] text-[#f4511e]`}>celebrate</h1>
        </div>


      </div>





    </main>
  );
}