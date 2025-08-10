import './App.css'

// Button Component
function Button({buttonText}) {
    return (
        <button className=" border-2 border-(--main-color-2) bg-(--main-color-1)
                            hover:bg-(--main-color-2) hover:text-(--main-color-1)
                            hover:border-2 hover:border-(--main-color-1)">
        <p className=''>{buttonText}</p>
        </button>
    )
}

// Heading componentgit init


function Section() {
  return (
    // container
    <div>
        {/* Personal Information */}
        <div className='grid grid-cols-2 
                        bg-(--main-color-2) p-24'>
            {/* Image */}
            <div className=''>
                <h1 className='text-Section-1'>Image</h1>
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
            <div>
                <h1 className='text-Section-2 font-heading-sec text-4xl'>
                    About me
                </h1>
                <div className='w-[80px] h-[2px] bg-white m-auto mt-2'></div>
            </div>
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

        <footer>
            hehe
        </footer>

    </div>
  )
}

export default Section
