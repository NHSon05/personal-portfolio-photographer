import '../App.css'
import WelcomeScreen from '../Pages/WelcomeScreen'

function ListTaskbar({text,link,listIndex}){
    return(
        <a className='cursor-pointer' href={link}>
        <li className='hover:text-blue-500 text-Content font-bold text-white'
                        onClick={() => {document.getElementById(`${listIndex}`).scrollIntoView({behavior: 'smooth'});}}
        >
                {text}
        </li>
    </a>
    )
}

function Taskbar(){
    return(
        <div className='bg-[#003E59] opacity-100 fixed top-0 left-0 w-full z-50'>
            <div className='container'>
            {/* <div className=" inset-0 bg-white z-1 max-w-full max-h-15"></div> */}
                <div className='items-center flex justify-between z-50 py-2'>
                    <ul className='z-1 cursor-pointer'>
                        <li onClick={() => {
                                document.getElementById('welcomeScreen').scrollIntoView({behavior: 'smooth'});
                            }}>
                            <a>
                                <span className='bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text font-heading-sec
                                                text-transparent text-3xl font-bold'>
                                    Son Nguyen Foto
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul className='inline-flex space-x-8 z-1 text-xl font-bold'>
                        <ListTaskbar text="Home" listIndex='welcomeScreen'/>
                        <ListTaskbar text="About me" listIndex='about'/>
                        <ListTaskbar text="Portfolio" listIndex='portfolio'/>
                        <ListTaskbar text="Services" listIndex='services'/>
                        <ListTaskbar text="Feedback"/>
                        <ListTaskbar text="Contact" listIndex='contact'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Taskbar