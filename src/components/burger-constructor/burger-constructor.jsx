import React, {useState, useMemo, useCallback} from "react";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Modal} from "../modal/modal";
import {OrderDetails} from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {
    deleteIngredientFromBurger, moveIngredientsInBurger,
    setIngredientToBurger
} from "../../services/actions/burgerIngredients";
import {useDrop} from "react-dnd";
import { v4 } from 'uuid';
import styles from "./burger-constructor.module.css";
import {closeOrderModal, getOrderData} from "../../services/actions/order";
import {ConstructorCard} from "../constructor-card/constructor-card";

export const BurgerConstructor = () => {
    const burgerIngredients = useSelector(state => state.burgerIngredients.burgerIngredients);
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();
    function handleOpenModal() {
        dispatch(getOrderData(burgerIngredients))
    }

    function handleCloseModal() {
        dispatch(closeOrderModal())
    }

    const handleDrop = (ingredient) => {
        dispatch(setIngredientToBurger(ingredient));
    };

    const handleDelete = (item) => {
        dispatch(deleteIngredientFromBurger(item));
    };

    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop(ingredient) {
            handleDrop(ingredient);
        },
    });

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        dispatch(moveIngredientsInBurger({dragIndex, hoverIndex}))
    }, [])

    const ingredientBun = burgerIngredients.find((item) => item.type === "bun");

    const totalIngredientsPrice = useMemo(() => {
        return burgerIngredients.reduce((total, item) => {
            if (item.price) {
                if (item.type === "bun") {
                    return total + item.price * 2;
                }
                return total + item.price;
            }
            return total;
        }, 0);
    }, [burgerIngredients]);

    const renderCard = useCallback((item, index) => {
        return (
            <ConstructorCard
                item={item}
                id={item.id}
                key={v4()}
                moveCard={moveCard}
                index={index}
                handleDelete={handleDelete}
            />
        )
    }, [])

    const ingredientsList = burgerIngredients.map((item, index) => {
        if(item.type !== "bun") {
            return (
                renderCard(item, index)
            )
        }
    })

    return (
        <div className={`${styles.content} pt-25 pl-4 pr-4`}>
            <div className={styles.constructor} ref={dropTarget}>
                {ingredientBun ? (
                    <div className={styles.top}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${ingredientBun.name} (верх)`}
                            price={ingredientBun.price}
                            thumbnail={ingredientBun.image}
                        />
                    </div>
                ) : (
                    <div className={styles.plug}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text='Добавьте булку на свой вкус'
                            price={0}
                        />
                    </div>
                )}
                <ul className={`${styles.list} custom-scroll`}>
                    {ingredientsList}
                </ul>
                {ingredientBun ? (
                    <div className={styles.top}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${ingredientBun.name} (низ)`}
                            price={ingredientBun.price}
                            thumbnail={ingredientBun.image}
                        />
                    </div>
                ) : (
                    <div className={styles.plug}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text='Добавьте булку на свой вкус'
                            price={0}
                        />
                    </div>
                )}
            </div>
            <div className={styles.block}>
                <div className={styles.price}>
                    <p className="text text_type_digits-medium">{totalIngredientsPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button
                    htmlType="button" type="primary" size="medium"
                    onClick={handleOpenModal} disabled={burgerIngredients.length === 0 || !burgerIngredients.find(item => item.type === "bun")}>
                    Оформить заказ
                </Button>
            </div>
            {order.setIsOpen && (
                <Modal onClose={handleCloseModal} children={<OrderDetails />}/>
            )}
        </div>
    )
}

