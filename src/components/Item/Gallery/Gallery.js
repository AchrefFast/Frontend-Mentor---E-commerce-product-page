import classes from "./Gallery.module.scss";
import { useState } from "react";
import GalleryOverlay from "./GalleryOverlay";
import { Fragment } from 'react';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace("./", "")] = r(item);

    });
    return images;
}

const images = importAll(
    require.context("../../../images/shoes", false, /\.(png)||(svg)||(jpe?g)$/)
);
const imagesThumbnail = importAll(
    require.context(
        "../../../images/thumbnail",
        false,
        /\.(png)||(svg)||(jpe?g)$/
    )
);
// const images = require.context('../../../images', false, /\.(jpe?g)$/);
// We will use the local images from "./images" folder

const imagesArray = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
];
const imagesThumbnailArray = [
    "image-product-1-thumbnail.jpg",
    "image-product-2-thumbnail.jpg",
    "image-product-3-thumbnail.jpg",
    "image-product-4-thumbnail.jpg",
];

const Gallery = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [extendImage, setExtendImage] = useState(false);

    const changeNextImageHandler = () => {
        setCurrentImage((state) => {
            if (state + 1 >= imagesArray.length) {
                return 0;
            } else {
                return state + 1;
            }
        });
    };
    const changePreviousImageHandler = () => {
        setCurrentImage((state) => {
            if (state - 1 < 0) {
                return imagesArray.length - 1;
            } else {
                return state - 1;
            }
        });
    };

    const setImageHandler = (index) => {
        setCurrentImage(index);
    };

    const extendImageHandler = (event) => {
        if (event.key) {
            if (event.key === 'Enter') {
                setExtendImage(true);
                return;
            } else {
                return;
            }
        }
        setExtendImage(true);
    };

    const closeExtendedImage = () => {
        setExtendImage(false);
    };

    const left = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18">
            <path
                className={classes.arrow}
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
            />
        </svg>
    );
    const right = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18">
            <path
                className={classes.arrow}
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
            />
        </svg>
    );
    // console.log(imagesThumbnail);

    return (
        <Fragment>
            <div className={classes.gallery}>
                <img
                    className={classes['main-image']}
                    src={images[imagesArray[currentImage]]}
                    alt="shoes"
                    tabIndex={0}
                    onClick={extendImageHandler}
                    onKeyDown={extendImageHandler}
                />
                <div className={classes["arrows-controle"]}>
                    <button
                        className={classes["left-arrow"]}
                        onClick={changePreviousImageHandler}
                    >
                        {left}
                    </button>
                    <button
                        className={classes["right-arrow"]}
                        onClick={changeNextImageHandler}
                    >
                        {right}
                    </button>
                </div>
                <div className={classes["gallery-controle"]}>
                    {imagesThumbnailArray.map((image, index) => (
                        <button
                            key={index}
                            className={index === currentImage ? classes.active : ""}
                            onClick={() => setImageHandler(index)}
                        >
                            <img src={imagesThumbnail[image]} alt={"shoes " + index} />
                        </button>
                    ))}
                </div>
            </div>
            {extendImage && (

                <GalleryOverlay
                    images={images}
                    imagesThumbnail={imagesThumbnail}
                    imagesArray={imagesArray}
                    imagesThumbnailArray={imagesThumbnailArray}
                    close={closeExtendedImage}
                    current={currentImage}
                />

            )}
        </Fragment>
    );
};

export default Gallery;
