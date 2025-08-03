import style from './style.module.css'
import { useState, useEffect } from 'react'

export default function Transition() {
    const [show, setShow] = useState(false);
    
    useEffect(()=> {
        setShow(true);
    }, []);

    return (
        <div className={style.section}>
            <div className={style.pageBody}>
                <div className={`${show ? `${style.show}` : ''} ${style.transition}`}>
                    Transition
                </div>
            </div>
        </div>
    )
}