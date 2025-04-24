import React, { useContext } from 'react'
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { ThemeContext } from './DarkLight';
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";


const Website = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);
  


    return (
        <>
      <IoSunnySharp onClick={toggleTheme}  className={`cursor-pointer absolute top-2 right-2.5 ${theme === 'dark' ? 'hidden' : 'block'}`}/>
      <FaMoon onClick={toggleTheme}  className={`cursor-pointer absolute top-2 right-2.5 text-white  ${theme === 'dark' ? 'block' : 'hidden'}`}/>
    
    <div className={` h-svh w-full  flex flex-col items-center justify-center   ${theme === 'dark' ? 'bg-gray-900 text-white ' : 'bg-gray-100 text-black'}`}>
      <h1 className='text-4xl font-bold'>Dark Light Mode Website</h1>
      <p className='flex items-center gap-2 text-xl py-2'>
        Hello!! My Friends 
        <BsFillHandThumbsUpFill className='text-yellow-400 text-2xl ' />
      </p>
      <button className='py-5 px-2.5 rounded-2xl mt-4 cursor-pointer bg-blue-500 text-[16px] ' onClick={toggleTheme}>Switch To {theme === 'dark' ? 'Light' : 'Dark'} Mode</button>
    </div>
    </>
  )
}

export default Website
