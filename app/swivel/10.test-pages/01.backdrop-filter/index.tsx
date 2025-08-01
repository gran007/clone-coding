import style from './style.module.css'
import { Animated } from '@/app/swivel/05.components';

export default function BackdropFilterPage() {
    return (
        <div className={style.section}>
            <div className={style.pageBody}>
                <div className={`${style.blurBox1} ${style.backdrop1}`}>
                    흐림처리<br/>
                    backdrop-filter: blur(12px);
                </div>
                <div className={`${style.blurBox1} ${style.backdrop2}`}>
                    밝기<br/>
                    backdrop-filter: brightness(50%);
                </div>
                <div className={`${style.blurBox1} ${style.backdrop3}`}>
                    색상 대비<br/>
                    backdrop-filter: contrast(200%);
                </div>
                <div className={`${style.blurBox1} ${style.backdrop4}`}>
                    회색조<br/>
                    backdrop-filter: grayscale(50%);
                </div>
                <div className={`${style.blurBox1} ${style.backdrop5}`}>
                    색조<br/>
                    backdrop-filter: hue-rotate(90deg);
                </div>
                <div className={`${style.blurBox1} ${style.backdrop6}`}>
                    색상 반전<br/>
                    backdrop-filter: invert(75%);
                </div>
                <div className={`${style.blurBox1} ${style.backdrop7}`}>
                    채도<br/>
                    backdrop-filter: saturate(30%);
                </div>
                <div className={`${style.blurBox1} ${style.backdrop8}`}>
                    세피아<br/>
                    backdrop-filter: sepia(60%);
                </div>
            </div>
        </div>
    )
}