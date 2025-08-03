import style from './style.module.css'

export default function BoxShadow() {
    return (
        <div className={style.section}>
            <div className={style.pageBody}>
                <div className={`${style.boxShadow} ${style.boxShadow1}`}>
                    box-shadow: 3px 3px black
                </div>
                <div className={`${style.boxShadow} ${style.boxShadow2}`}>
                    box-shadow: 3px 3px 3px black
                </div>
                <div className={`${style.boxShadow} ${style.boxShadow3}`}>
                    box-shadow: 3px 3px 3px 3px black
                </div>
                <div className={`${style.boxShadow} ${style.boxShadow4}`}>
                    box-shadow: inset 3px 3px 3px 3px black
                </div>
                <div className={`${style.boxShadow} ${style.boxShadow5}`}>
                    box-shadow: 3px 3px 3px 3px black, -3px -3px 3px 3px black
                </div>
            </div>
        </div>
    )
}