import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import styles from "./styles.module.css";

export const Pagination = ({page, totalPages, onLeftClick, onRightClick}) => {
    const arrowleft = <AiOutlineArrowLeft size='20'cursor='pointer'/>
    const arrowright = <AiOutlineArrowRight size='20'cursor='pointer'/>
    return (
        <div className={styles.paginationContainer}> 
            <button 
            onClick={onLeftClick}>
                <div>{arrowleft}</div>
                </button>
            <div> {page} de {totalPages} </div>
            <button onClick={onRightClick}><div>{arrowright}</div></button>
        </div>
    ) 
}
