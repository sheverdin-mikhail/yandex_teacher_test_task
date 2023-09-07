import { ClassNames } from '../../shared/lib/ClassNames/ClassNames';
import cls from './SecondPage.module.css';
import { Canvas } from "@react-three/fiber";
import { Experience } from "../../3D/Experience";
import { Suspense } from 'react';
import { Loader } from '../../shared/ui/Loader/Loader';


export const SecondPage = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.secondPage, {}, [className])}>
            <Suspense fallback={<Loader className={cls.loader} />}>
                <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
                    <Experience />
                </Canvas>
            </Suspense>
            
        </div>
 );
}