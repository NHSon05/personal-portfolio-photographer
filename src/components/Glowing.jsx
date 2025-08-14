import '../App.css'

function Glowing(){
    return(
        <div className='glowing'>
            <span style={{'--i':1}}></span>
            <span style={{'--i':2}}></span>
            <span style={{'--i':3}}></span>
        </div>
    )
}

export default Glowing