import { v4 as uuidv4} from 'uuid';
import ItemCard from './../ItemCard/ItemCard'
import './../ItemsContainer/ItemsContainer.scss'

const ItemsContainer = (props) => {
    return ( 
        <section className="items_container">
            {props.productsArr.map((item) => <ItemCard
            key={uuidv4()}
            img={item.img_url}
            name={item.name}
            price={item.price}
            />
            )}
        </section>
    );
}
export default ItemsContainer;
