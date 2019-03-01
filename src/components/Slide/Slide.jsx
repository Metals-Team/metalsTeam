import React from 'react';
import styles from './Slide.module.scss';

export default (props)=>{
    const slideStyle = {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize:'cover'
    };

    const slideOverlayStyle = props.overlayColor ? {
        backgroundColor: props.overlayColor
    } : {};


    return (
        <div className={styles.slide} style={slideStyle}>
            <div className={styles.slideOverlay} style={slideOverlayStyle}></div>
        </div>
    );
};