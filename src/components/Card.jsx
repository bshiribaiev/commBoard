import './Card.css'

const Card = (props) => {

    return (
        <div className="cardInfo"> 
            <h2>{props.name}</h2>
            <p>{props.course}</p>
            <a href={props.link} target="_blank">
            <button>Access</button>
            </a>
        </div>
    )
}

export default Card;