import cls from './MainPage.module.css';
import Photo_1 from '../../shared/assets/img/img1.jpg'
import Video from '../../shared/assets/video/video.mp4'
import { ReactComponent as Arrow } from '../../shared/assets/icons/arrow.svg'
import { ClassNames } from '../../shared/lib/ClassNames/ClassNames';
import { Suspense } from 'react';
import VideoPlayer from '../../widgets/VideoPlayer/VideoPlayer';
import { Loader } from '../../shared/ui/Loader/Loader';

export const MainPage = (props) => {
    const { className } = props;

    const videoPlayerOptions = {
        autoplay: false,
        width: 700,
        height: 700,
        controls: true,
        responsive: false,
        fluid: false,
        sources: [{
        src: Video,
        type: 'video/mp4'
        }]
    };

   function ScrollToVideoHandler(){
        const videoPlayer = document.getElementById('videoPlayer')
        videoPlayer.scrollIntoView({behavior: 'smooth'})
   }

    return (
        <div className={ClassNames(cls.MainPage, {}, [className, 'container'])}>
            <div className={cls.column}>
                <p className={cls.text}>
                    <strong className={cls.subtitle}>Как я полюбил программирование?</strong>
                    Это был долгий и тернистый путь, с принятием сложных жизненно важных решений... Да нет, конечно :) как только я узнал 
                    о такой профессии как "Программист", я незадумываясь заявил родителям, что хочу заниматься именно этим, просто потому что мне
                    нравилось возиться с компьютером: играть в игры, устанавливать родителям skype, удалять скаченные при этом браузеры Amigo и
                    кучу других странных программ. Потом когда я стал немного старше класс 6-7, я впервые в жизни познакомился с настоящим программистом!
                    Ну и сразу же попросил научить меня программированию, он мне сказал, попробуй поизучать HTML и CSS... Так я и полюбил программирование. 
                </p>
                <img className={cls.img} src={Photo_1} alt="it's me :)" />
                <Arrow className={cls.arrow} onClick={()=>ScrollToVideoHandler()}/>
            </div>
            
            <div className={cls.video} id='videoPlayer'>
                <Suspense fallback={<Loader className={cls.loader}/>}>
                        <VideoPlayer options={videoPlayerOptions} className={"vjs-matrix video-js"}/>
                </Suspense>
            </div>
        </div>
 );
}