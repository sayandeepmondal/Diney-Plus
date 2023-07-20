import React, { useContext } from 'react'
import bg from "./../assets/images/login-background.jpg"
import hulu from "./../assets/images/hulu.png"
import logo from "./../assets/images/logo.png"
import espn from "./../assets/images/espn.png"
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'
import navimg from "../navimg.png"
import {auth,provider} from "./../Constant/FirebaseConfig"
import { signInWithPopup } from 'firebase/auth'
import { AppContext } from '../Services/ContextApi'

function Login() {

    const {setUser} = useContext(AppContext)

    function handleGoogleSignIn(){
        signInWithPopup(auth,provider).then((result)=>{
            const user=result.user
            setUser(user)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (

        <div>

            <div className='flex items-center justify-between gap-8 mt-5 '>
                <img src={navimg} alt='' className='w-[80px] md:w-[115px] object-cover'/>
                <div className=' '>
                        <button className='text-white text-[15px] font-semibold border-solid border-2 border-white cursor-pointer mr-3 md:mr-8 text-center px-5 py-2 rounded-lg bg-transparent ' onClick={handleGoogleSignIn} >LOGIN</button>
                    </div>
            </div>

            <div className="relative overflow-x-hidden overflow-y-hidden">
                <div className='fixed top-0 left-0 right-0 bottom-0 z-[-1]'>
                    <img src={bg} className='w-full h-full object-cover' />
                </div>
                <div className='h-screen flex flex-col items-center justify-center gap-y-4'>
                    <div className='flex '>
                        <img src={hulu} className='w-20 md:w-48' />
                        <img src={logo} className=' w-48 mb-5 md:w-96 md:mb-10' />
                        <img src={espn} className='w-20 md:w-48' />
                    </div>
                    <div>
                        <button className=' bg-blue-500 w-[350px] md:w-[720px] h-16 mt-[-50px]'>
                            <h2 className='text-2xl font-mono' onClick={handleGoogleSignIn}>GET ALL THERE</h2>
                        </button>
                    </div>
                    <div className='w-[350px] md:w-[720px]'>
                        <p className='text-lg text-center font-sans'>Get Premier Access to all Movies and the Latest Shows with an additional fee with a Disney+ Subscription. As of Latest Changes, the price of Disney+ and The Disney Bundle will increase by $1.</p>
                    </div>
                    <div className='flex  justify-evenly '>
                        <img src={disney} className='w-20 md:w-40' />
                        <img src={pixar} className='w-20 md:w-40' />
                        <img src={marvel} className='w-20 md:w-40' />
                        <img src={starwar} className='w-20 md:w-40' />
                        <img src={nationalG} className='w-20 md:w-40' />
                    </div>
                </div>
            </div>

        </div>





    )
}

export default Login