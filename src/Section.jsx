import './App.css'
import Taskbar from './Taskbar.jsx'
import { HeadingTitle, Button, SocialMedia } from './Component.jsx'

// Services Item


function Section() {
  return (
    // container
    <div>
        {/* Taskbar */}
        <Taskbar/>
        {/* Start */}
        <div className='grid grid-cols-2 relative
                        bg-[url(/DaNangCity.jpg)] bg-center bg-cover px-24 py-20'>
            {/* Black layer */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            {/* Text */}
            <div className="relative z-10 py-24 space-y-4 m-auto font-heading-sec text-Section-2">
                <div className='text-center w-[20em]
                                bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-l'>
                    <p className='text-2xl py-2'>Welcome to my Portfolio</p>
                </div>
                <h1 className='text-6xl'>
                    Hi! I'm Son Nguyen <br/>
                        <span className='   bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text 
                                            text-transparent text-4xl font-bold'>
                            Freelance Photographer
                        </span>
                </h1>
                <ul className='space-x-2 flex'>
                    <SocialMedia
                        iconName="fa-brands fa-facebook-f"
                        bgColor="bg-blue-500"
                        linkMedia="https://www.facebook.com/sonnguyenn.photo"
                    />
                    <SocialMedia
                        iconName="fa-brands fa-instagram"
                        bgColor="bg-linear-65 from-purple-500 to-pink-500"
                        linkMedia="https://www.instagram.com/songuyen.foto/"
                    />
                    <SocialMedia
                        iconName="fa-brands fa-threads"
                        bgColor="bg-black"
                        linkMedia="https://www.threads.com/@songuyen.33"
                    />
                    <SocialMedia
                        iconName="fa-brands fa-behance"
                        bgColor="bg-black"
                        linkMedia="https://www.behance.net/sonnguyen05"
                    />
                </ul>
                <div className='space-x-6'>
                    <Button
                        buttonText="Hire me"
                        cssButton="color-button"
                    />
                    <Button
                        buttonText="View my works"
                        cssButton="transparent-button"
                    />
                </div>
            </div>
            {/* Avatar */}
            <div className='relative z-10 w-100 h-100 m-auto rounded-full overflow-hidden'>
                <img src='/avatar.JPG ' className='w-full h-full object-cover'/>
                {/* <span class="absolute inset-0 rounded-full 
                            border-8 border-transparent border-t-cyan-400 border-dashed animate-spin-slow">
                </span> */}
                <svg class="absolute inset-0 animate-spin-slow" viewBox="0 0 200 200">
                    <defs>
                        <linearGradient id="gradBorder" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#8b5cf6" /> 
                            <stop offset="100%" stop-color="#d946ef" />
                        </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="98"
                            fill="none"
                            stroke="url(#gradBorder)"       
                            stroke-width="4"
                            stroke-dasharray="60 10"
                            stroke-linecap="round"
                    />
                </svg>
            </div>
        </div>


        {/* Personal Information */}
        <div className='grid grid-cols-2 
                        bg-(--main-color-2) px-24'>
            {/* Image */}
            <div className='flex justify-center'>
                <img src='/3__151_-removebg-preview.png' alt='Son picture'></img>
            </div>
            {/* Introduction */}
            <div className='py-24 space-y-4'>
                <h1 className=' text-Section-1
                                font-heading-sec text-6xl'>
                    Photographer & Designer
                </h1>
                <h2 className='text-Section-1 font-heading-sec text-2xl'>
                    Da Nang, Viet Nam
                </h2>
                <p className='text-Section-1 text-2xl'>
                    Hello! I'm Son, a passionate freelance photographer with a love for capturing emotion, 
                    light, and storytelling through the lens.
                </p>
                <Button
                    buttonText="Hire me"
                />
            </div>
        </div>

        {/* About me */}
        <div className='
                        bg-(--main-color-1)
                        px-24 py-16 m-auto text-center space-y-16'>
            {/* <div>
                <h1 className='text-Section-2 font-heading-sec text-4xl'>
                    About me
                </h1>
                <div className='w-[80px] h-[2px] bg-white m-auto mt-2'></div>
            </div> */}
            <HeadingTitle
                textTitle="About me"
                cssHeading="title-white"
                cssLine="title-line-white"
            /> 
            <div className='space-y-4 text-l opacity-70'>
                <p className='text-Section-2'>
                    Hello! I'm Son, a passionate freelance photographer with a love for capturing emotion, light, and storytelling through the lens. 
                    Whether it's serene landscapes, candid portraits, or styled editorial shots — I aim to freeze time and create timeless visual experiences.
                </p>
                <p className='text-Section-2'>
                    With a deep appreciation for natural light and minimal aesthetics, my work reflects a clean yet expressive style.
                    I'm always inspired by the little details, the in-between moments, and the beauty found in everyday life. 
                    Let's tell your story through photography.
                </p>
            </div>
            <Button
                buttonText="View my works">
            </Button>
        </div>
        {/* Portfolio */}
        <div className=' bg-(--main-color-2)
                        px-24 py-16 m-auto text-center space-y-16'>
            <HeadingTitle
                textTitle="Portfolio"
                cssHeading="title-brown"
                cssLine="title-line-brown"  
            />
            <p className='text-[var(--main-color-1)] text-xl'>
                These are actual works of mine
            </p>
        </div>

        {/* Services */}
        <div className='bg-(--main-color-1)
            <            px-24 py-16 m-auto text-center space-y-16'>
            <HeadingTitle
                textTitle="Services"
                cssHeading="title-white"
                cssLine="title-line-white"
            />
            <div className='grid grid-cols-8'>
                
            </div>
        </div>
        <footer>
        </footer>

    </div>
  )
}

export default Section
