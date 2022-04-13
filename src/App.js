import classes from "./App.module.scss";
import Description from "./components/Item/Description/Description";
import Gallery from "./components/Item/Gallery/Gallery";
import MainHeader from "./components/MainHeader/MainHeader";
import { useSelector } from 'react-redux';
import Cart from "./components/Cart/Cart";

function App() {
  const amount = useSelector(store => store.cart.amount);
  console.log(amount);
  return (
    <div className={classes.App}>
      <MainHeader />
      <main className={classes.main}>
        <Gallery />
        <Description
          compnay="sneaker compnay"
          title="Fall Limited Edition Sneakers"
          text="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          price={(125.00).toFixed(2)}
          discount="50%"
          oldPrice={(250.00).toFixed(2)}
          id='p1'
        />

      </main>
    </div>
  );
}

export default App;
