import React, {useRef, useEffect, useState} from "react";
import {IngredientCard} from "../inrgregient-card/ingredient-card";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import {getIngredientsList} from "../../services/actions/ingredients";
import {Modal} from "../modal/modal";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {clearIngredientData, setIngredientData} from "../../services/actions/current-ingredient";

export const BurgerIngredients = () => {
    const ingredients = useSelector(state => state.ingredients.ingredients);
    const currentIngredient = useSelector(state => state.currentIngredient.currentIngredient);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredientsList());
        document.querySelector('#ingredients').addEventListener('scroll', handleScroll);
        return () =>  document.querySelector('#ingredients').removeEventListener('scroll', handleScroll);
    }, [dispatch])

    const [isOpen, setIsOpen] = useState(false);
    function handleOpenModal(ingredient) {
        dispatch(setIngredientData(ingredient))
        setIsOpen(true)
    }
    function handleCloseModal() {
        dispatch(clearIngredientData())
        setIsOpen(false)
    }

    const types = [
        {
            code: 'bun',
            name: 'Булки',
            ref: useRef(null)
        },
        {
            code: 'sauce',
            name: 'Соусы',
            ref: useRef(null)
        },
        {
            code: 'main',
            name: 'Начинки',
            ref: useRef(null)
        }
    ];
    const [current, setCurrent] = React.useState(`${types[0].code}`);

    const scrollToBlock = value => {
        types.find(type => type.code === value)?.ref.current?.scrollIntoView({behavior: "smooth"})
    }

    const onClickTab = value => {
        setCurrent(value);
        scrollToBlock(value);
    }

    const handleScroll = () => {
        const currentTab = types.reduce((prev, current) => {
            const currentTop = current.ref.current.getBoundingClientRect().top;
            if (currentTop < prev.top && currentTop > 0) {
                return { top: currentTop, code: current.code };
            }
            return prev;
        }, { top: Infinity, code: 'main' });
        setCurrent(currentTab.code);
    }

    const list = types.map(type =>
        <div className={`${styles.block} pt-10`} key={type.code} ref={type.ref}>
            <p>
                {type.name}
            </p>
            <div className={`${styles['block-items']} pb-10 pt-6 pl-4 pr-10`}>
                {ingredients.filter(item => item.type === type.code)
                    .map((item) =>
                        <IngredientCard ingredient={item} key={item._id} onOpen={() => (handleOpenModal(item))} />
                    )
                }
            </div>
        </div>
    );

    const tabs = types.map(type =>
        <Tab value={type.code} active={current === `${type.code}`} key={type.code} onClick={onClickTab}>
            {type.name}
        </Tab>
    );

    return (
        <>
            <div className={styles.content}>
                <p className="mb-5">
                    Собери бургер
                </p>
                <div className={styles.categories}>
                    {tabs}
                </div>
                <div id='ingredients' className={`${styles.ingredients} custom-scroll`}>
                    {ingredients.length !== 0 ? (
                        list
                    ) : <div className={styles.loader}></div>}
                </div>
            </div>
            {isOpen && (
                <Modal onClose={handleCloseModal} children={<IngredientDetails data={currentIngredient} />} title="Детали ингридиента"/>
            )}
        </>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.any),
}