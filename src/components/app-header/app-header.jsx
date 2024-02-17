import React from "react";
import {ProfileIcon, ListIcon, BurgerIcon, Button, Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

export const AppHeader = () => {
    return (
        <header className="header pt-3 pb-3">
            <div className="container">
                <nav className={styles.nav} aria-label="Меню">
                    <div className={styles.buttons}>
                        <Button htmlType="button" className={`${styles.button} pl-4 pr-4 pb-5 pt-5`} type="secondary" size="small">
                            <BurgerIcon type="primary" />
                            <span>
                                Конструктор
                            </span>
                        </Button>
                        <Button htmlType="button" className={`${styles['button-secondary']} pl-4 pr-4 pb-5 pt-5`} type="secondary" size="small">
                            <ListIcon type="secondary" />
                            <span>
                                Лента заказов
                            </span>
                        </Button>
                    </div>
                    <Logo />
                    <div className={styles.cabinet}>
                        <Button htmlType="button" className={`${styles['button-secondary']}`} type="secondary" size="small">
                            <ProfileIcon type="secondary" />
                            <span>
                                Личный кабинет
                        </span>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}