
import { useState } from "react";
export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0)

    const handleClick = (getCurrentIndex) => {

        setRating(getCurrentIndex);
    }
    const handleMouseEnter = (getCurrentIndex) => {

        setHover(getCurrentIndex);
    }
    const handleMouseLeave = () => {

        setHover(rating);
    }
    return (
        <section className="star_rating container">
            <h3 className="heading">star rating sytem</h3>
            <div className="stars">
                {
                    [...Array(noOfStars)].map((_, index) => {
                        index += 1
                        return (<span
                            key={index}
                            className={`bx bx-star ${index <= (hover || rating) ? 'active' : 'inactive'}`}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                        ></span>)
                    })
                }
            </div>
        </section>
    )
}