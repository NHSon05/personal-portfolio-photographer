import '../App.css'
import { HeadingTitle, Button, SocialMedia } from '../components/Component.jsx'
import Glowing from '../components/Glowing.jsx'

function WelcomeScreen() {
    return (
        <div className='relative bg-[url(/DaNangCity.jpg)]
                        bg-center bg-cover py-20 pt-36'>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            {/* Black layer */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            {/* Container */}
            <div className='container grid grid-cols-2'>
                {/* Text */}
                <div className="relative z-10 py-24 space-y-4 text-Content text-Section-2">
                    <div className='text-center w-[20em]
                                    bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-l'>
                        <p className='text-2xl py-2 text-Content'>Welcome to my Portfolio</p>
                    </div>
                    <h1 className='text-6xl'>
                        Hi! I'm Son Nguyen <br/>
                            <p className='   bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text 
                                                text-transparent text-4xl font-bold'>
                                Freelance Photographer
                            </p>
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
                <div className='relative z-10 w-100 h-100 my-auto rounded-full overflow-hidden justify-self-end'>
                    <img src='/avatar.JPG ' className='w-full h-full object-cover'/>
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
        </div>
    )
}

export default WelcomeScreen