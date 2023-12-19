import Image from "next/image"
import Link from "next/link"
import hero from './/../../../../public/hero.jpg'


const HeroSection = () => {
  return (
    <div className="  flex flex-col items-center border mt-5 border-red-400">
      <div className=" flex-1 flex flex-col items-center space-y-5">
       <div className=" flex gap-2">
        <h1 className=" lg:text-4xl md:text-3xl font-bold text-2xl ">Better Design For Your </h1>
        <h1 className=" lg:text-4xl md:text-3xl font-bold text-2xl bg-gradient-to-r  from-primary to-secondary bg-clip-text text-transparent"> Digital Products</h1>
       </div>
        <div>
          Turning your idea into reality. We bring togethrt the teams from global tech industry
        </div>
        <div>
          <Link href={'/'}
          className=" bg-primary p-3 px-5 rounded-full ">See our works</Link>
        </div>
      </div>
      <div className=" relative flex-1 md:w-[10rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem]" >
        <Image 
        src={hero}
        fill={true}
        className=" rounded-md">
        </Image>
      </div>
     
    </div>
  )
}

export default HeroSection