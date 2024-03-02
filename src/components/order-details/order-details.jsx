import React from "react";
import styles from "../order-details/order-details.module.css";
import image from "../../images/order.png";

export const OrderDetails = () => {
    return (
        <div className={`${styles.card} pr-5 pl-5`}>
            <p className="text text_type_digits-large">034536</p>
            <p className="text text_type_main-medium">Идентификатор заказа</p>
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