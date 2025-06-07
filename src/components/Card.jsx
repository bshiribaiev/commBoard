import './Card.css'

const Card = (props) => {

    return (
        <div className="cardInfo"> 
            <h2>{props.name}</h2>
            <p>{props.course}</p>
            <button>Access</button>
        </div>
    )
}

export default Card;