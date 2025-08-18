import '../App.css'
import { HeadingTitle,Button } from '../components/Component.jsx'
import Glowing from '../components/Glowing.jsx'

function About(){
    return (
        <div className='bg-[#111827] px-24 py-16 m-auto text-center space-y-16'>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            <Glowing/>
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
        </div>
    )
}
export default About