import classes from './Description.module.scss';
import AddToCart from './AddToCart';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';


const Description = (props) => {
    const dispatch = useDispatch();
    const addToCart = (amount) => {
        console.log('Add to cart: ', amount);
        dispatch(cartActions.addItem({ id: props.id, title: props.title, amount: +amount, price: props.price }));
    }

    return (
        <div className={classes.description}>
            <p className={classes['company-name']}>{props.compnay}</p>
            <h2 className={classes.title}>{props.title}</h2>
            <p className={classes.text}>{props.text}</p>
            <div className={classes['price-box']}>
                <p className={classes.price}>${props.price} <span>{props.discount}</span></p>
                <p className={classes['old-price']}><s>${props.oldPrice}</s></p>
            </div>
            <AddToCart onAddToCart={addToCart} />
        </div>
    );
}

export default Description;