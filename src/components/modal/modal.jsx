import React, {useEffect} from "react";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import {ModalOverlay} from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modals");
export const Modal = ({onClose, children, title}) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return ReactDOM.createPortal (
        (
            <>
                    <div className={`${styles.modal} pb-10 pt-10 pl-10 pr-10`}>
                        <div className={styles.top}>
                            {title && (
                                <p className={styles.title}>
                                    {title}
                                </p>
                            )}
                            <button className={styles.button} onClick={onClose}>
                                <CloseIcon type="primary"/>
                            </button>
                        </div>
                        {children}
                    </div>
                    <ModalOverlay onClose={onClose}/>
                </>
        ), modalRoot
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    title: PropTypes.any,
}