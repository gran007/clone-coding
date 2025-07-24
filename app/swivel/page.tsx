'use client';

import style from './style.module.css'
import Header from './header'
import { useState } from 'react';

export default function Swivel() {

    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className={style.body}>
            <Header onClickLanguageButton={()=>setShowModal(true)} />
            <div onClick={()=>setShowModal(false)} 
                className={`${style.blurBackground} ${showModal ? style.show : ''}`}/>
            <div className={`${style.modal}  ${showModal ? style.show : ''}`}>
                <div className={style.modalInner}>
                    <div className={style.topBar}></div>
                    <h3 className={style.modalText}>언어 선택</h3>
                    <button className={`${style.modalButton}  ${showModal ? style.show : ''}`}>
                        <span className={style.icon}>🇺🇸</span>
                        <span className={style.modalButtonText}>English</span>
                    </button>
                </div>
            </div>
            <section className={style.section}>
                <div className={style.videoContainer}>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className={style.video} src="/landing_video.mp4" />
                </div>
            </section>
        </div>
    );
}
