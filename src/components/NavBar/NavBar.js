import classes from "./NavBar.module.scss";
import { useState } from "react";
import imageOpen from "../../images/icon-menu.svg";
import imageClose from "../../images/icon-close.svg";

const NavBar = (props) => {
    const [openMenu, setOpenMenu] = useState(false);

    const navOpenClickHandler = () => {
        setOpenMenu(true);
    };
    const navCloseClickHandler = () => {
        setOpenMenu(false);
    };

    let menuClass = classes.hide;
    let overlayClass = '';
    if (openMenu) {
        menuClass = classes.show;
        overlayClass = classes.overlay;
    }

    return (
        <div className={classes["nav-bar"] + ' ' + props.className}>
            <button className={classes['btn-open']} type="button" onClick={navOpenClickHandler}>
                <img src={imageOpen} alt="open menu" />
            </button>
            <div className={overlayClass}></div>
            <div className={menuClass + ' ' + classes.menu}>
                <button className={classes['btn-close']} type="button" onClick={navCloseClickHandler}>
                    <img src={imageClose} alt="close menu" />
                </button>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <a href="#">Collections</a>
                        </li>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Women</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
