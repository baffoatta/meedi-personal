import { motion } from "framer-motion";

import {styles}  from "../style/style";


const HeroSection = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start  justify-end gap-5`}
      >
        <div className="">
        <p className="text-2xl font-semibold text-black ">I'm</p> 
        <h1 className={`${styles.heroHeadText} text-black justify-start` }>
           
           Happy <span className='text-[#9a073f]'>Baffo</span>
          </h1>
          <p className="hidden sm:flex text-lg font-semibold text-black mr-6 mt-60 ">
          Over the years, I have honed my skills in <br />creating mobile apps, designing user interfaces, 
          <br /> developing APIs, and building dynamic web applications. 
          </p>
        </div>
        
        <div className='flex flex-col justify-center items-center mt-10'>
          <div className='w-5 h-5 rounded-full bg-[#9a073f]' />
          <div className='w-1 sm:h-80 h-40 bg-[#9a073f]' />
          <div className='w-5 h-5 rounded-full bg-[#9a073f] -mb-48' />
          <div className='w-5 h-5 rounded-full bg-[#9a073f]' />
        </div>

        <div>
          
          <p className={`${styles.heroSubText} mt-44  md:mt-48 text-black`}>
            I Build Mobile apps, user <br className='sm:block hidden' />
            interfaces, APIs, and web applications
          </p>
        </div>
      </div>

     

      <div className='absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[38px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-black mb-4'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;