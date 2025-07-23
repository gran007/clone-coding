import style from './style.module.css'


export default function Swivel() {
  return (
    <div className={style.body}>
        <header className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.headerContents}>
                    <button className={style.headerLeftButton}>
                        <img 
                            src="logo.webp" 
                            alt="Logo" 
                            loading='lazy'
                            width={32}
                            height={32}
                            className={style.logoImg}/>
                        <span className={style.logoText}>Swivel</span>
                    </button>
                </div>
            </div>
        </header>
        <section className={style.section}>
            <div className={style.videoContainer}>
                <video 
                autoPlay
                muted
                loop 
                playsInline 
                preload='auto' 
                className={style.video} src="/landing_video.mp4"/>
            </div>
        </section>
    </div>
  );
}
