import Button from "../Button/Button";
import './../ItemCard/ItemCard.scss'

const ItemCard = (props) => {
    return ( 
        <article className="item_card">
            <img src={props.img} alt="" />
            <p>{props.name}</p>
            <p>€{props.price}</p>
            <Button />
        </article>
    );
}

export default ItemCard;