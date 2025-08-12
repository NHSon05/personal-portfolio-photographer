import './App.css'

function ListTaskbar({text,link}){
    return(
        <a className='cursor-pointer' href={link}>
        <li className='hover:text-blue-500 text-Content font-bold text-white'>{text}</li>
    </a>
    )
}

function Taskbar(){
    return(
            <div className='container'>
            {/* <div className=" inset-0 bg-white z-1 max-w-full max-h-15"></div> */}
                <div className='items-center flex justify-between z-50 py-4'>
                    <ul className='z-1'>
                        <li>
                            <a href='#'>
                                <span className='bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text font-heading-sec
                                                text-transparent text-4xl font-bold'>
                                    Son Nguyen Foto
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul className='inline-flex space-x-8 z-1 text-xl font-bold'>
                        <ListTaskbar text="Home"/>
                        <ListTaskbar text="About me"/>
                        <ListTaskbar text="Portfolio"/>
                        <ListTaskbar text="Services"/>
                        <ListTaskbar text="Feedback"/>
                        <ListTaskbar text="Contact"/>
                    </ul>
                </div>
            </div>
    )
}

export default Taskbar