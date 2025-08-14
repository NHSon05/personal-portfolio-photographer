import '../App.css'
import { HeadingTitle, Button } from '../components/Component'

function Portfolio(){
    return (
        <div className=' bg-[#111827]
                        px-24 py-16 m-auto text-center space-y-16'>
            <HeadingTitle
                textTitle="Portfolio"
                cssHeading="title-white"
                cssLine="title-line-white"  
            />
            <p className='text-[var(--main-color-2] text-xl'>
                These are actual works of mine
            </p>
        </div>
    )
}

export default Portfolio