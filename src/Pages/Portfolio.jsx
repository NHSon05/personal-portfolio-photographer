import { useEffect, useState } from 'react'
import '../App.css'
import { HeadingTitle, Button } from '../components/Component'

function Portfolio(){

    // Call API
    const [portfolioData, setPortfolioData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const [type, setType] = useState('')

    function List({name,classname}) {
        const handleClick = (e) => {
            if (e.target.textContent == 'All')
                setType('')
            else setType(e.target.textContent);
        }
        return (
            <button className={`text-[var(--main-color-2] text-xl
                                bg-transparent border-2 rounded-full relative ${classname}`}
                    onClick={handleClick}
            >
                {name}
            </button>
        )
    }

    useEffect(() => {
    // Use an async function inside useEffect
        const fetchPortfolio = async () => {
            try {
                const response = await fetch(`http://localhost:3000/portfolio?title=${type}`);
                if (!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPortfolioData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchPortfolio();
    },[type])

    if (loading) {
        return <div>Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div>Đã xảy ra lỗi: {error}</div>;
    }

    return (
        <div id='portfolio' className=' bg-[#111827]
                        px-8 py-16 text-center space-y-16'>
            <HeadingTitle
                textTitle="Portfolio"
                cssHeading="title-white"
                cssLine="title-line-white"  
            />
            <p className='text-[var(--main-color-2] text-xl'>
                These are actual works of mine
            </p>
            <div className='space-x-4 space-y-4 mx-16'>
                <List
                    name="All"
                    classname='transparent-button'
                />
                <List
                    name="Portrait"
                    classname='transparent-button'
                />
                <List
                    name="Fashion"
                    classname='transparent-button'
                />
                <List
                    name="Graduation"
                    classname='transparent-button'
                />
                <List
                    name="Military"
                    classname='transparent-button'
                />           
                <List
                    name="Event"
                    classname='transparent-button'
                />
                <List
                    name="Travel"
                    classname='transparent-button'
                />
                <List
                    name="Couple"
                    classname='transparent-button'
                />
                <List
                    name="Ao Dai"
                    classname='transparent-button'
                />
                <List
                    name="Yearbook"
                    classname='transparent-button'
                />
                <List
                    name="Lanscape"
                    classname='transparent-button'
                />
            </div>
            <div className='columns-5 gap-4 space-y-4 relative'>
                {portfolioData.map(item => (
                    <div key={item.id} className='break-inside-avoid'>
                        {/* Trình duyệt tự động truy cập URL công khai */}
                        <img src={item.url} className='w-full h-auto object-cover object-top'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio