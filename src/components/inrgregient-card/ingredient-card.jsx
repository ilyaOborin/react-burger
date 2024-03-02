import React, {useEffect, useState} from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Modal} from "../modal/modal";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import styles from "./ingredient-card.module.css";

export const IngredientCard = ({ingredient}) => {

    const [isOpen, setIsOpen] = useState(false);
    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }

    return (
        <>
            <div className={styles.card} onClick={handleOpenModal}>
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
            {isOpen && (
                <Modal onClose={handleCloseModal} children={<IngredientDetails data={ingredient} />} title="Детали ингридиента"/>
            )}
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