import {FaStar} from "react-icons/fa"
import "./style.css"
import { useState } from "react"
const Comp1 = ({noOfStar})=>{
    // const [star,setStar] = useState([1,2,3,4,5])
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);

    const handleClick = (getCurrentIndex)=>{
        console.log(getCurrentIndex)
        setRating(getCurrentIndex)
    }

    const handleMouseEnter =(getCurrentIndex)=>{
        console.log(getCurrentIndex)
        setHover(getCurrentIndex)
    }

    const handleMouseLeave = ()=>{
       
        setHover(rating)
    }

    return(
        <>
        

        <div className="starrating">
            <div className="contaner">
        <h3><FaStar></FaStar> Star Rating Project using React</h3>
            {
                [...Array(noOfStar)].map((element,index)=>{
                    index += 1
                    return(
                        <FaStar 
                            key={index} 
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={()=> handleClick(index)}
                            onMouseMove={()=> handleMouseEnter(index)}
                            onMouseLeave={()=> handleMouseLeave()}
                            size={40}/>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}

export default Comp1;