import './App.css'

function Taskbar(){
    return(
        <div className='flex fixed justify-between items-center 
                        top-0 right-0 left-0 z-99
                        py-4 mx-24'>
            <ul className='justify-center z-1'>
                <li className='text-3xl font-heading-sec
                                bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text 
                                text-transparent font-bold'>
                    Son Nguyen Foto
                </li>
            </ul>
            <ul className='inline-flex space-x-8 z-1 text-xl font-bold'>
                <li>Home</li>
                <li>About me</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>Feedback</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Taskbar