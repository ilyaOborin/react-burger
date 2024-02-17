import React from "react";
import styles from "./burger-constructor.module.css";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const BurgerConstructor = () => {
    return (
        <div className={`${styles.content} pt-25 pl-4 pr-4`}>
            <div className={styles.constructor}>
                <div className={styles.top}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
                    />
                </div>
                <ul className={`${styles.list} custom-scroll`}>
                    <li className={styles['list-item']}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                        />
                    </li>
                    <li className={styles['list-item']}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/salad.png"
                        />
                    </li>
                    <li className={styles['list-item']}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/cheese.png"
                        />
                    </li>
                    <li className={styles['list-item']}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/sauce-03.png"
                        />
                    </li>
                    <li className={styles['list-item']}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
                        />
                    </li>
                    <li className={styles['list-item']}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
                        />
                    </li>
                </ul>
                <div className={styles.bottom}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                    />
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.price}>
                    <p className="text text_type_digits-medium">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}
