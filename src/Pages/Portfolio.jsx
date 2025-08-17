import { useEffect, useState } from 'react'
import '../App.css'
import { HeadingTitle, Button } from '../components/Component'

function List({name}) {
    return (
        <button className='text-[var(--main-color-2] text-xl
                            bg-transparent border-2 rounded-full'
        >
            {name}
        </button>
    )
}

function Portfolio(){

// Call API
    const [portfolioData, setPortfolioData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);


    useEffect(() => {
    // Use an async function inside useEffect
        const fetchPortfolio = async () => {
            try {
                const response = await fetch(`http://localhost:3000/portfolio`);
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
    },[])

    if (loading) {
        return <div>Đang tải dữ liệu...</div>;
    }

    if (error) {
        return <div>Đã xảy ra lỗi: {error}</div>;
    }

    return (
        <div className=' bg-[#111827]
                        px-8 py-16 text-center space-y-16'>
            <HeadingTitle
                textTitle="Portfolio"
                cssHeading="title-white"
                cssLine="title-line-white"  
            />
            <p className='text-[var(--main-color-2] text-xl'>
                These are actual works of mine
            </p>
            <div className='space-x-4 space-y-4'>
                <List
                    name="All"
                />
                <List
                    name="Portrait"
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