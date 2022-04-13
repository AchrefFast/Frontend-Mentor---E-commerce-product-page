import classes from './Cart.module.scss';
import { useSelector } from 'react-redux';
import shoesImage from '../../images/thumbnail/image-product-1-thumbnail.jpg';
import CartItem from './CartItem';
import { Fragment } from 'react';

const Cart = (props) => {
    const items = useSelector(store => store.cart.items);
    console.log(items);
    return (
        <div className={classes.container}>
            <header className={classes.header}>Cart</header>
            {items.length !== 0 &&
                <Fragment>
                    <ul>
                        {(items || []).map(item => <li key={item.id}>
                            <CartItem id={item.id} title={item.title} price={item.price} amount={item.amount} image={shoesImage} />
                        </li>)}
                    </ul>
                    <button className={classes['checkout']}>Checkout</button>

                </Fragment>

            }
            {items.length === 0 && <p className={classes.empty}>Your cart is empty</p>}
        </div>
    );
}

export default Cart;