import classes from "./CartItem.module.scss";
import trash from '../../images/icon-delete.svg';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
    const dispatch = useDispatch();

    const removeItemHandler = () => {
        dispatch(cartActions.removeItem({ id: props.id, amount: props.amount }));
    }
    return (
        <div className={classes.item}>
            <img src={props.image} alt={props.title} />
            <div className={classes.content}>
                <h3 className={classes.title}>{props.title}</h3>
                <p className={classes.price}>
                    {`$${props.price} x${props.amount}`}
                    <span> ${(+props.price * +props.amount).toFixed(2)}</span>
                </p>
            </div>
            <button className={classes.remove} onClick={removeItemHandler}><img src={trash} alt={`remove ${props.title}`} /></button>
        </div>
    );
};

export default CartItem;
