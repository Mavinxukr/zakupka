import React from "react";
import styles from './Classifier.scss';

const Classifier = () => (
    <>
        <div className={styles.containerMain}>
            <input type="text"/>
            <div className={styles.containerTree}>
                <p>Tree</p>
            </div>
            <div className={styles.conteinerInfo}>
                <p>Item from tree</p>
            </div>
            <div className={styles.buttons}>
                <button type="button" className={styles.}>Вибрати</button>
                <button type="button" >Скасувати</button>
            </div>
        </div>
    </>
);

export default Classifier;