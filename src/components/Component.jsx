import '../App.css'

// Social Media Components
export const SocialMedia = ({iconName,bgColor,linkMedia}) => {
    return (
        <li className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor}`}>
            <a href={linkMedia} target='_blank'>
                <i className={`${iconName} text-xl text-white`}></i>
            </a>
        </li>
    )
}

// title Components
export const HeadingTitle = ({textTitle,cssHeading,cssLine}) => {
    return (
        <div>
            <h1 className={cssHeading}>
                {textTitle}
            </h1>
            <div className={cssLine}></div>
        </div>
    )
}

// Button Components
export const Button = ({buttonText,cssButton}) => {
    return (
        <button className={`transition-transform duration-1000 ease-in-out hover:scale-105
                            rounded-xl text-center text-Content relative
                            ${cssButton}`}>
        <p className=''>{buttonText}</p>
        </button>
    )    
}