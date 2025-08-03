import style from './style.module.css'
import { useState } from 'react'

export default function MediaQuery() {

    return (
        <div className={style.section}>
            <div className={style.pageBody}>
                <div className={style.grid}>
                    <div className={`${style.card} ${style.card1}`}>
                        Card1
                    </div>
                    <div className={`${style.card} ${style.card2}`}>
                        Card2
                    </div>
                    <div className={`${style.card} ${style.card3}`}>
                        Card3
                    </div>
                    <div className={`${style.card} ${style.card4}`}>
                        Card4
                    </div>
                </div>
            </div>
        </div>
    )
}