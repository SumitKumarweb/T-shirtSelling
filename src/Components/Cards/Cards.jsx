import Card from "../Card/Card";
import './Cards.css'
function Cards(){
    return (
        <div className="Cards-wrapper">
        <div className="Card-wrapper">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <button className="viewMore">
            View More
        </button>
        </div>
    )
}
export default Cards;