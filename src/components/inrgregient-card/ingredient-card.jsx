import React, {useMemo} from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import styles from "./ingredient-card.module.css";
import {useSelector} from "react-redux";


export const IngredientCard = ({ingredient, onOpen}) => {
    const burgerIngredients = useSelector(state => state.burgerIngredients.burgerIngredients);
    const [{isDragging}, drag] = useDrag({
        type: "ingredient",
        item: {ingredient},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const countIngredients = useMemo(() => {
        let number = 0;
        burgerIngredients.forEach(item => {
            if (item.name === ingredient.name) {
                number += ingredient.type === "bun" ? 2 : 1;
            }
        });

        return number;
    }, [burgerIngredients]);
    const count = countIngredients;
    const border = isDragging ? '2px dashed #ff9900' : '';

    return (
        <>
            <div className={`${styles.card}`} style={{border: border}} onClick={onOpen} ref={drag}>
                {count !== 0 && (
                    <div className={styles.count}>
                        <p className="text text_type_digits-default">{count}</p>
                    </div>
                )}
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
        </>
    )
}

IngredientCard.propTypes = {
    ingredient:PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired
}