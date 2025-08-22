import '../App.css'
import { HeadingTitle, Button } from '../components/Component'

function Card({cardTitle,cardDes,cardImg}){
    return (
        <>
            <div className='bg-gray-900 w-full h-auto relative py-4 px-8 space-y-4 rounded-xl
                            animate__animated animate__bounce animate__delay-2s'>
                <h1 className='text-center text-Content bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text 
                                text-transparent text-2xl font-medium'>
                    {cardTitle}
                </h1>
                <img src={cardImg} className='rounded-l'/>
                <p>
                    {cardDes}
                    
                </p>
            </div>
        </>
    )
}


function Services() {
    return (
        <div id='services' className='bg-[#111827]
                       px-24 py-16 m-auto space-y-16'>
            <HeadingTitle
                textTitle="Services"
                cssHeading="title-white text-center"
                cssLine="title-line-white"
            />
            <div className='grid grid-cols-4 gap-4 container'>
                <Card
                    cardTitle='Portrait'
                    cardImg='/Portrait.JPG'
                    cardDes='Capture your persionality with professional and expressive portrait photography.'
                />
                <Card
                    cardTitle='Fashion'
                    cardImg='/Fashion.JPG'
                    cardDes='Bring your brand story to life with creative visuals and storytelling images.'
                />
                <Card
                    cardTitle='Graduation'
                    cardImg='/Gra.JPG'
                    cardDes='Capture your persionality with professional and expressive portrait photography.'
                />
                <Card
                    cardTitle='Military'
                    cardImg='/Military.JPG'
                    cardDes='Capture your persionality with professional and expressive portrait photography.'
                />
                <Card
                    cardTitle='Event'
                    cardImg='/Event.JPG'
                    cardDes='From parties to corporate events, I capture the energy and key moments seamlessly.'
                />
                <Card
                    cardTitle='Travel'
                    cardImg='/Travel.JPEG'
                    cardDes='Authentic travel experiences captured from around the world for editorial or personal use.'
                />
                <Card
                    cardTitle='Couple'
                    cardImg='/Couple.JPG'
                    cardDes='Capture your persionality with professional and expressive portrait photography.'
                />
                <Card
                    cardTitle='Ao Dai'
                    cardImg='/AoDai.JPG'
                    cardDes='Capture your persionality with professional and expressive portrait photography.'
                />
                <Card
                    cardTitle='Yearbook'
                    cardImg='/Yearbook.JPG'
                    cardDes='Capture your persionality with professional and expressive portrait photography.'
                />
                <Card
                    cardTitle='Lanscape'
                    cardImg='/Lanscape.JPG'
                    cardDes='Capture your persionality with professional and expressive portrait photography.'
                />
            </div>
        </div>
    )
}

export default Services