import { ClassNames } from '../../lib/ClassNames/ClassNames';
import './Loader.css';

export const Loader = (props) => {
    const { className } = props;

    return (
        <div className={ClassNames("lds-circle", {}, [className ?? ''])}><div></div></div>
 );
}