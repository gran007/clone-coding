'use client';

import style from './style.module.css'
import Header from './header'
import { useState } from 'react';

type LanguageType = {
    icon: string,
    name: string,
}

const language: LanguageType[] = [
    { icon: "🇺🇸", name: "English" },
    { icon: "🇰🇷", name: "한국어" },
    { icon: "🇯🇵", name: "日本語" },
]

export default function Swivel() {

    const [showModal, setShowModal] = useState(false);
    const [languageIndex, setLanguageIndex] = useState(1);

    const onClickLanguageButton = (index: number) => {
        setLanguageIndex(index);
        setShowModal(false);
    }

    return (
        <div className={style.body}>
            <Header onClickLanguageButton={() => setShowModal(true)} />
            <div onClick={() => setShowModal(false)}
                className={`${style.blurBackground} ${showModal ? style.show : ''}`} />
            <div className={`${style.modal}  ${showModal ? style.show : ''}`}>
                <div className={style.modalInner}>
                    <div className={style.topBar}></div>
                    <h3 className={style.modalText}>언어 선택</h3>
                    {
                        language.map(({icon, name}, index) => (
                            <button 
                                onClick={()=>onClickLanguageButton(index)}
                                key={index} 
                                className={`${style.modalButton} `+
                                ` ${showModal ? style.show : ''}` +
                                ` ${languageIndex === index ? style.selected : ''}`}>
                                <span className={style.icon}>{icon}</span>
                                <span className={style.modalButtonText}>{name}</span>
                                <div className={style.rightCircle}></div>
                            </button>
                        ))
                    }

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
