import { ClassNames } from '../../shared/lib/ClassNames/ClassNames';
import cls from './SecondPage.module.css';

export const SecondPage = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.secondPage, {}, [className])}>
            SecondPage
        </div>
 );
}