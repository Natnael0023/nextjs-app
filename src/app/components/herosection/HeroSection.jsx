import Image from "next/image"
import Link from "next/link"
import  hero from '../../../../public/hero.jpg'
import  man from '../../../../public/man.jpg'
import nat from '../../../../public/nat.png'

const HeroSection = () => {
  return (
    <div className="  flex flex-col items-center mt-20 ">
      <div className="gradient"></div>
      <div className=" flex-1 flex flex-col items-center space-y-5">
       <div className=" flex flex-col gap-2">
        <h1 className=" lg:text-7xl md:text-4xl font-bold text-xl text-center ">Creative solutions </h1>
        <h1 className=" lg:text-7xl md:text-3xl font-bold font-sans text-2xl bg-gradient-to-r  from-secondary via-primary to-secondary bg-clip-text text-transparent">
          For your products & services</h1>
       </div>
        <div className="  text-gray-300 font-semibold tracking-widest">
          Turning your idea into reality. We bring the professionals 
        </div>
        <div>
        <Link href={'/contact'} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:bg-gradient-to-br hover:from-primary hover:to-secondary group-hover:from-primary group-hover:to-secondary hover:text-white dark:text-white focus:ring-4 focus:outline-none  dark:focus:secondary">
          <span className=" bg-white text-black py-3 px-10 font-semibold rounded-lg">
            Start project
          </span>
        </Link>
      </div>

      <div className="  hidden animate-spi rounded-full mt-2 sm:flex justify-center items-center  lg:w-[27rem] lg:h-[27rem]">
        {/* <div className=" relative w-full h-full  mx-auto  ">
          <Image
          src={''}
          fill
          alt="p"
          className=" rounded-lg object-cover"/>
        </div> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="693.398" height="656" viewBox="0 0 693.398 656">
  <g id="Group_9" data-name="Group 9" transform="translate(-342.279 -134)">
    <g id="Ellipse_33" data-name="Ellipse 33" transform="translate(420 226)" fill="none" stroke="#36c6e6" stroke-width="3" opacity="0.4">
      <circle cx="254.5" cy="254.5" r="254.5" stroke="none"/>
      <circle cx="254.5" cy="254.5" r="253" fill="none"/>
    </g>
    <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(393 198)" fill="none" stroke="#36c6e6" stroke-width="3" opacity="0.4">
      <ellipse cx="282.5" cy="282" rx="282.5" ry="282" stroke="none"/>
      <ellipse cx="282.5" cy="282" rx="281" ry="280.5" fill="none"/>
    </g>
    <g id="Ellipse_6" data-name="Ellipse 6" transform="translate(404 210)" fill="none" stroke="#36c6e6" stroke-width="5" opacity="0.63">
      <ellipse cx="271" cy="270.5" rx="271" ry="270.5" stroke="none"/>
      <ellipse cx="271" cy="270.5" rx="268.5" ry="268" fill="none"/>
    </g>
    <g id="Group_2" data-name="Group 2" transform="translate(342.279 412.212)">
      <path id="Path_2" data-name="Path 2" d="M61.9,0S95.937,29.1,111.39,55.961s12.318,51.464,12.318,51.464S92.8,135.87,61.9,135.87.084,107.425.084,107.425-1.91,82.817,13.543,55.961,61.9,0,61.9,0Z" transform="translate(123.969 135.87) rotate(180)" fill="#36c6e6"/>
      <path id="Path_3" data-name="Path 3" d="M61.9,0s-.452,14.02,0,31.59c.139,5.427-.3,11.191,0,17.369.1,2.137.184-.309,0,7-.124,9.094-.044,6.019,0,9.094.083,5.489.182,10.752,0,15.748-.462,12.707,0,21.8,0,21.8a179.538,179.538,0,0,0,0,22.281c.421,5.148-.433.656,0,10.987C30.99,135.87.084,107.425.084,107.425S-1.91,82.817,13.543,55.961,61.9,0,61.9,0Z" transform="translate(124.001 135.87) rotate(180)" fill="#fc61f0"/>
    </g>
    <g id="Group_1" data-name="Group 1" transform="translate(585.879 134)">
      <text id="_" data-name="&lt;" transform="translate(0.121 127)" fill="#36c6e6" font-size="120" font-family="Impact"><tspan x="0" y="0">&lt;</tspan></text>
      <text id="_2" data-name="/" transform="translate(64.121 121)" fill="#fc61f0" font-size="120" font-family="Impact"><tspan x="0" y="0">/</tspan></text>
      <text id="_3" data-name="&gt;" transform="translate(114.121 127)" fill="#36c6e6" font-size="120" font-family="Impact"><tspan x="0" y="0">&gt;</tspan></text>
    </g>
    <path id="Path_4" data-name="Path 4" d="M46.684,34.029C60.471,25.568,87.005,23.28,87.54,23.563s28.887-1.071,41.641,16.751,2.054,42,2.054,42,28.518-7.847,33.939,4.408c2.228,5.037,5.526,9.2,3.665,18.589s.2,18.571-34.387,18.853-56.654,1.6-102.058,1.32-43.007-15.839-43.007-28.094S-4.19,79.944,5.527,73.033s26.866-5.168,26.866-5.168S32.9,42.489,46.684,34.029Z" transform="translate(866.292 405.616)" fill="#fc61f0"/>
    <g id="Group_3" data-name="Group 3" transform="translate(622.539 683.06)">
      <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(0.461 70.94)" fill="none" stroke="#fc61f0" stroke-width="10">
        <rect width="35" height="36" rx="10" stroke="none"/>
        <rect x="5" y="5" width="25" height="26" rx="5" fill="none"/>
      </g>
      <g id="Rectangle_2" data-name="Rectangle 2" transform="translate(88.461 70.94)" fill="none" stroke="#36c6e6" stroke-width="10">
        <rect width="36" height="36" rx="10" stroke="none"/>
        <rect x="5" y="5" width="26" height="26" rx="5" fill="none"/>
      </g>
      <g id="Rectangle_3" data-name="Rectangle 3" transform="translate(44.461 -0.06)" fill="none" stroke="#36c6e6" stroke-width="10">
        <rect width="36" height="36" rx="10" stroke="none"/>
        <rect x="5" y="5" width="26" height="26" rx="5" fill="none"/>
      </g>
      <line id="Line_1" data-name="Line 1" y1="14.494" transform="translate(18.33 56.696)" fill="none" stroke="#fc61f0" stroke-width="5"/>
      <line id="Line_2" data-name="Line 2" x1="39.645" transform="translate(16.199 56.696)" fill="none" stroke="#fc61f0" stroke-width="5"/>
      <line id="Line_3" data-name="Line 3" x1="39.645" transform="translate(66.927 56.696)" fill="none" stroke="#36c6e6" stroke-width="5"/>
      <line id="Line_4" data-name="Line 4" y2="16.199" transform="translate(106.999 54.991)" fill="none" stroke="#36c6e6" stroke-width="5"/>
      <line id="Line_5" data-name="Line 5" x1="39.645" transform="translate(55.844 56.696)" fill="none" stroke="#36c6e6" stroke-width="5"/>
      <line id="Line_6" data-name="Line 6" y2="23" transform="translate(62.461 35.94)" fill="none" stroke="#36c6e6" stroke-width="5"/>
    </g>
  </g>
</svg>


      </div>
     </div>
    </div>
  )
}

export default HeroSection