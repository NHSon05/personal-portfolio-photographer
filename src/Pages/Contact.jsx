import '../App.css'
import { Button, HeadingTitle,SocialMedia } from '../components/Component'
import Glowing from '../components/Glowing'

function Input({titleLabel,type,name,cssInput,placeholder,htmlfor,index}){
    return (
        <label htmlFor={htmlfor} className='block text-lg text-gray-300 text-Content font-bold'>
            <span>{titleLabel}</span>
            <input 
                type={type}
                id={index}
                name={name}
                placeholder={placeholder}
                className={`text-Content mt-1 block w-full px-4 py-2 text-l border-0 border-b-2 border-gray-600 focus:ring-0 focus:border-purple-500 bg-transparent text-white ${cssInput}`}
            />
        </label>
    )
}

function ContactTitle({titleContact, titleDes,classTitle,classDesc}){
    return (
        <>
            <h1 className={`text-Content bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text 
                            text-transparent text-2xl font-medium text-Content ${classTitle}` }>
                {titleContact}
            </h1>
            <p className={`text-Content ${classDesc}` }>
                {titleDes}
            </p>
        </>
    )
}

function WorkInfo({workingTitle,workDesc,icon,bg}){
    return (
        <div className='grid grid-cols-4 px-4 py-4 bg-gray-900 relative  mt-4 items-center rounded-xl'>
            <div className='col-span-1'>
                <SocialMedia
                    iconName={icon}
                    bgColor={bg}
                />
            </div> 
            <div className='col-span-3 justify-self-start'>
                <h2 className='text-Content bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text 
                                text-transparent text-xl font-bold'>
                    {workingTitle}
                </h2>
                <p>{workDesc}</p>
            </div>
        </div>
    )
}

function Contact(){
    return(
        <div className='bg-[#111827]
                        px-24 py-16 m-auto space-y-16'>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            <Glowing/>
            <HeadingTitle
                textTitle="Contact Me"
                cssHeading="title-white text-center"
                cssLine="title-line-white"  
            />
            <div className='grid grid-cols-5 container'>
                {/* Contact Information */}
                <div className='col-span-3 mr-24'>
                    <ContactTitle
                        titleContact='Contact Information'
                        titleDes='Thank you for visiting our website. We are here to assist you with any inquiries you may have.'
                        classTitle='text-8xl'
                        classDesc='text-xl mr-32'
                    />
                    <div className='grid grid-cols-2 space-x-2'>
                        <WorkInfo
                            icon='fa-solid fa-clock'
                            bg='bg-pink-500'
                            workingTitle='Working Hours'
                            workDesc='Sat-Sun: 7:00am to 19:00pm'
                        />
                        <WorkInfo
                            icon='fa-solid fa-location-dot'
                            bg='bg-green-500 '
                            workingTitle='Working Places'
                            workDesc='Quang Tri, Da Nang'
                        />
                        <WorkInfo
                            icon='fa-solid fa-phone'
                            bg='bg-blue-500'
                            workingTitle='Phone Number'
                            workDesc='+84 387756949'
                        />
                    </div>

                </div>

                {/* Input */}
                <div className='col-span-2 rounded-3xl p-8 relative space-y-4 bg-gray-900'>
                    <ContactTitle
                        titleContact='Ask A Question'
                        titleDes='If you have any question, you can contact us. Fill down the form below.'
                        classTitle='text-4xl'
                        classDesc='text-lg'
                    />
                    <div className='grid grid-cols-2 space-y-4 space-x-4'>
                        <Input
                            titleLabel='First Name'
                            htmlfor='firstName'
                            index='firstName'
                            type='text'
                            name='firstName'
                            require
                        />
                        <Input
                            titleLabel='Last Name'
                            htmlfor='lastName'
                            index='lastName'
                            type='text'
                            name='name'
                            require
                        />
                        <Input
                            titleLabel='Phone Number'
                            htmlfor='phoneNumber'
                            index='phoneNumber'
                            type='number'
                            name='phoneNumber'
                            require
                        />
                        <Input
                            titleLabel='Email'
                            htmlfor='email'
                            index='email'
                            type='text'
                            name='email'
                        />
                    </div>
                    <div class="w-full max-w-xl">
                        <label for="message" className="block text-xl font-bold mb-2 text-Content">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                class="text-Content w-full px-4 py-4 text-l border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400"
                                placeholder="Enter your message here..."
                            ></textarea>
                    </div>
                    <Button
                        buttonText='Submit'
                        cssButton='color-button'
                    />
                </div>
            </div>
        </div> 
    )
}

export default Contact