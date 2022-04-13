import classes from "./GalleryOverlay.module.scss";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TrapFocus from '@mui/base/TrapFocus';

const GalleryOverlay = (props) => {
    const { images, imagesThumbnail, imagesArray, imagesThumbnailArray, current } = props;

    const [currentImage, setCurrentImage] = useState(current);

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

    const closeHandler = () => {
        props.close();
    }

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

    const close = (
        <svg width="18" height="19" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 14 15'>
            <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
            />
        </svg>
    );
    return (
        <div className={classes.overlay}>
            <div className={classes.gallery} >
                <TrapFocus open>
                    <Box tabIndex={-1}>

                        <button className={classes.close} onClick={closeHandler}>{close}</button>
                        <img src={images[imagesArray[currentImage]]} alt="shoes" />
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
                    </Box>
                </TrapFocus>
            </div>
        </div>
    );
};

export default GalleryOverlay;
