const Card = (props) => {

    return (
        <div className="cardInfo"> 
            <h3>{props.name}</h3>
            <button>Access</button>
        </div>
    )
}

export default Card;