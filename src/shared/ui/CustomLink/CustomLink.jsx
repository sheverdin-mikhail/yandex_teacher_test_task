import { Link, useLocation } from 'react-router-dom';
import cls from './CustomLink.module.css';
import { useEffect, useState } from 'react';
import { ClassNames } from '../../lib/ClassNames/ClassNames';

export const CustomLink = (props) => {
    const { className, to, children } = props;
    const [isActive, setIsActive] = useState(false)
    const location = useLocation() 

    useEffect(()=>{
        if(location.pathname === to){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    },[location.pathname, to])

    return (
        <Link 
            to={to} 
            className={ClassNames(
                cls.link, 
                {
                    [cls.active]: isActive
                }, 
                [className ?? '']
            )} >{children}</Link>
 );
}