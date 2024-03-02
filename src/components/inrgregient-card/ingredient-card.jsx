import React from "react";
import styles from "./ingredient-card.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientCard = ({ingredient}) => {
    return (
        <div className={styles.card}>
            <div className={styles.count}>
                <p className="text text_type_digits-default">1</p>
            </div>
            <div className={`${styles.img} pl-4 pr-4`}>
                <img className={`${styles.img} pl-4 pr-4`} src={ingredient.image} alt=""/>
            </div>
            <div className={styles.price}>
                <p className="text text_type_digits-default">{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={styles.name}>
                {ingredient.name}
            </p>
        </div>
    )
}