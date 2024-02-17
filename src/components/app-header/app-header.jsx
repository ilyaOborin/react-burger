import React from "react";
import {ProfileIcon, ListIcon, BurgerIcon, Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

export const AppHeader = () => {
    return (
        <header className="header pt-3 pb-3">
            <div className="container">
                <nav className={styles.nav} aria-label="Меню">
                    <div className={styles.links}>
                        <a href="/" className={`${styles.link} pl-4 pr-4 pb-5 pt-5`}>
                            <BurgerIcon type="primary" />
                            <span>
                                Конструктор
                            </span>
                        </a>
                        <a href="/" className={`${styles['link-secondary']} pl-4 pr-4 pb-5 pt-5`}>
                            <ListIcon type="secondary" />
                            <span>
                                Лента заказов
                            </span>
                        </a>
                    </div>
                    <Logo />
                    <div className={styles.cabinet}>
                        <a href="/" className={`${styles['link-secondary']}`}>
                            <ProfileIcon type="secondary" />
                            <span>
                                Личный кабинет
                        </span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}