import React from "react";
import styles from "../order-details/order-details.module.css";
import image from "../../images/order.png";
import {useSelector} from "react-redux";

export const OrderDetails = () => {
    const order = useSelector(state => state.order.order);
    return (
        <div className={`${styles.card} pr-5 pl-5`}>
            {order.length !== 0 ? (
                <>
                    <p className="text text_type_digits-large">
                        {order.order.number}
                    </p>
                    <p className="text text_type_main-medium">
                        {order.name}
                    </p>
                </>
            ) : (
                <>
                    <span className={styles.loader}></span>
                    <span className={styles.loader}></span>
                </>
            )}
            <div className={styles.image}>
                <img src={image} alt="Гифка"/>
            </div>
            <div className={styles.text}>
                <p className="text text_type_main-small">Ваш заказ начали готовить</p>
                <p className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
            </div>
        </div>
    )
}