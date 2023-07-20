import React, { useContext, useState } from 'react'
import navimg from "../navimg.png"

import { AiOutlineHome, AiOutlineSearch, AiFillStar } from "react-icons/ai"
import { MdAdd } from "react-icons/md"
import { PiFilmReelFill, PiTelevisionBold } from "react-icons/pi"
import { HiDotsVertical } from "react-icons/hi"
import HeaderItem from './HeaderItem'
import {auth,provider} from "./../Constant/FirebaseConfig"
import profile from "./../profile.png"
import { AppContext } from '../Services/ContextApi'
import { useNavigate } from 'react-router-dom'






function Header() {


    const {user,setUser} = useContext(AppContext);
    const [toggle,setToggle] = useState(false);
    const [change, setChange] = useState(false);
    const menu = [
        {
            name: "HOME",
            icon: AiOutlineHome
        },
        {
            name: "SEARCH",
            icon: AiOutlineSearch
        },
        {
            name: "WATCHLIST",
            icon: MdAdd
        },
        {
            name: "ORIGINALS",
            icon: AiFillStar
        },
        {
            name: "MOVIES",
            icon: PiFilmReelFill
        },
        {
            name: "SERIES",
            icon: PiTelevisionBold
        }
    ]
    const navigate = useNavigate();
    function handleLogOut(){
        setUser(null)
        navigate('/')
    }

    
    return (

        <div className='flex  justify-between p-5 relative'>
            <div className='flex items-center gap-5 md:gap-8 '>
                <img src={navimg} alt='' className='w-[80px] md:w-[115px] object-cover' />
                
                        <div>
                            <div className='hidden md:flex gap-8'>
                    {
                        menu.map((item, index) => {
                            return (<HeaderItem key={index} name={item.name} Icon={item.icon} />)
                        })
                    }
                </div>
                <div className='flex md:hidden gap-6 mt-2'>
                    {
                        menu.map((item, index) => index < 3 && (
                            <HeaderItem name={''} Icon={item.icon} />)
                        )
                    }
                    <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical}/>
                        {toggle ? <div className='absolute mt-3 bg-[#121212] right-10 md:right-0 border-[1px] border-gray-700 p-3 px-5 py-4 z-[60]'>
                            {
                                menu.map((item, index) => index >= 3 && (
                                    <HeaderItem name={item.name} Icon={item.icon} />)
                                )
                            }
                        </div> : null}
                    </div>
                </div>
                        </div>
                    

            </div>
            <img src={user ? user.photoURL : profile} alt='' className='w-[30px] md:w-[40px]  rounded-full cursor-pointer' onClick={()=>setChange(!change)}/>
            {
                change ? (<button className='text-white text-[10px] md:text-[15px] font-semibold border-solid border-2 border-white cursor-pointer mr-3 md:mr-8 text-center px-3 py-1 md:px-5 md:py-2 rounded-lg bg-transparent absolute right-[-5px] mt-16 md:right-16 md:mt-0  z-[100]'onClick={handleLogOut} >Log Out</button>) : (null)
            }
        </div>
    )
}

export default Header;

