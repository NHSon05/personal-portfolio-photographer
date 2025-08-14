import '../App.css'
import { HeadingTitle, Button } from "../components/Component.jsx";

function Info(){
    return (
        <>
            <div className='grid grid-cols-2 bg-[#111827] px-24'>
                {/* Image */}
                <div className='flex justify-center'>
                    <img src='' alt='Son picture'></img>
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
                    <Button buttonText="Hire me"/>
                </div>
            </div>
        </>
    )
}

export default Info