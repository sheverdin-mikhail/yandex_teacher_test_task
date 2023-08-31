import { ClassNames } from '../../shared/lib/ClassNames/ClassNames';
import { Navigation } from '../Navigation/Navigation';
import cls from './Header.module.css';

export const Header = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.header, {}, [className])}>
            <Navigation />
        </div>
 );
}