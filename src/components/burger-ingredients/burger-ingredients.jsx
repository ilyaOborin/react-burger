import React, {useRef} from "react";
import {IngredientCard} from "../inrgregient-card/ingredient-card";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";

export const BurgerIngredients = ({ingredients}) => {
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

    const list = types.map(type =>
        <div className={`${styles.block} pt-10`} key={type.code} ref={type.ref}>
            <p>
                {type.name}
            </p>
            <div className={`${styles['block-items']} pb-10 pt-6 pl-4 pr-10`}>
                {ingredients
                    .filter(item => item.type === type.code)
                    .map((item) => <IngredientCard ingredient={item} key={item._id} />)
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
       <div className={styles.content}>
               <p className="mb-5">
                   Собери бургер
               </p>
               <div className={styles.categories}>
                   {tabs}
               </div>
           <div className={`${styles.ingredients} custom-scroll`}>
               {list}
           </div>
       </div>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.any),
}