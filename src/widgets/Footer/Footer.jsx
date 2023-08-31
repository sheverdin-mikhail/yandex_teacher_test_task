import { ClassNames } from '../../shared/lib/ClassNames/ClassNames';
import cls from './Footer.module.css';

export const Footer = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.footer, {}, [className])}>
            <p className={cls.text}>
                Copyright by Sheverdin Mikhail. 2023.
            </p>
        </div>
 );
}