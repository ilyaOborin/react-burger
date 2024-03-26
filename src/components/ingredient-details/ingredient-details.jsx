import React from "react";
import styles from "../ingredient-details/ingredient-details.module.css";
import {getPropertyTypes} from "../../utils/types";

export const IngredientDetails = ({data}) => {
    return (
        <div className={`${styles.card} pr-5 pl-5`}>
            <div className={`${styles.img}`}>
                <img src={data.image} alt={data.name}/>
            </div>
            <div className={styles.text}>
                <p className={styles.title}>
                    {data.name}
                </p>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <p className={styles.category}>Калории,ккал</p>
                        <p className={styles.value}>{data.calories}</p>
                    </li>
                    <li className={styles.item}>
                        <p className={styles.category}>Белки, г</p>
                        <p className={styles.value}>{data.proteins}</p>
                    </li>
                    <li className={styles.item}>
                        <p className={styles.category}>Жиры, г</p>
                        <p className={styles.value}>{data.fat}</p>
                    </li>
                    <li className={styles.item}>
                        <p className={styles.category}>Углеводы, г</p>
                        <p className={styles.value}>{data.carbohydrates}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    data:getPropertyTypes()
}