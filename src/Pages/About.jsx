import '../App.css'
import { HeadingTitle,Button } from '../components/Component.jsx'

import Glowing from '../components/Glowing.jsx'
import { useEffect, useRef, useState } from 'react'

function Achivement({appearCondition = 800, end, duration = 2000,Description,plus}) {
   const [count, setCount] = useState(0)
   const hasRun = useRef(false)         // Initially, the window don't scroll down

    useEffect(() => {
        const handleScroll = () => {
            if (hasRun.current) return;
            // When the window scroll down over the condition
            if (window.scrollY > appearCondition){
                 hasRun.current = true
                 startCounting();
            }
        }
        const startCounting = () => {
    
            // save the time when start counting 
            let startTime = null;
    
            const step = (Time) => {
                if (!startTime) startTime = Time;
                const progress = Math.min((Time - startTime) / duration, 1)
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            }
            requestAnimationFrame(step);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [end, duration, appearCondition]);
    
    return(
        <div className='border-1 rounded-2xl p-4'>
            <h1 className='text-8xl bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text 
                                                text-transparent font-bold'>
                {count}{`${plus}`}
            </h1>
            <p className='font-medium text-xl'>
                {Description}
            </p>
        </div>
    )
}

function About(){


    return (
        <div id='about' className='bg-[#111827] px-24 py-16 m-auto space-y-16'>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            <HeadingTitle
                textTitle="About me"
                cssHeading="title-white text-center"
                cssLine="title-line-white"
            /> 
            <div className='text-xl grid grid-cols-2 gap-12 mx-24'>
                <p className='text-Section-2'>
                    Hello! I'm Son, a passionate freelance photographer with a love for capturing emotion, light, and storytelling through the lens. 
                    Whether it's serene landscapes, candid portraits, or styled editorial shots — I aim to freeze time and create timeless visual experiences.
                    With a deep appreciation for natural light and minimal aesthetics, my work reflects a clean yet expressive style.
                    I'm always inspired by the little details, the in-between moments, and the beauty found in everyday life. 
                    Let's tell your story through photography.
                </p>
                <div className='bg-gray-900 relative rounded-xl p-4 space-y-4'>
                    <h1 className=' text-2xl font-bold text-center p-4'>Tools used:</h1>
                    <div className='flex flex-wrap gap-8 justify-center p-4 items-center mx-auto'>
                        <div className='border-1 rounded-4xl w-48 h-48 flex flex-col justify-center items-center text-center'>
                            <img src='public/Photoshop.png' className='w-1/2 h-auto mx-auto'></img>
                            <p className='text-center font-bold'>Photoshop</p>
                        </div>
                        <div className='border-1 rounded-4xl w-48 h-48 flex flex-col justify-center items-center text-center'>
                            <img src='public/Lighroom.png' className='w-1/2 h-auto mx-auto'></img>
                            <p className='text-center font-bold'>Lighroom</p>
                        </div>
                        <div className='border-1 rounded-4xl w-48 h-48 flex flex-col justify-center items-center text-center'>
                            <img src='public/Figma.png' className='w-1/2 h-auto mx-auto'></img>
                            <p className='text-center font-bold'>Figma</p>
                        </div>
                        <div className='border-1 rounded-4xl w-48 h-48 flex flex-col justify-center items-center text-center'>
                            <img src='public/AI.png' className='w-1/2 h-auto mx-auto'></img>
                            <p className='text-center font-bold'>AI</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-12 mx-24 relative text-center mt-16'>
                <Achivement
                    end={1}
                    plus='+'
                    duration={1000}
                    Description='Year of experience'
                />
                <Achivement
                    end={3}
                    plus=''
                    duration={1000}
                    Description='Tools used'
                />
                <Achivement
                    end={10}
                    plus=''
                    duration={1000}
                    Description='Concept'
                />
                <Achivement
                    end={30}
                    plus='+'
                    duration={1000}
                    Description='Projects'
                />
            </div>
        </div>
    )
}
export default About