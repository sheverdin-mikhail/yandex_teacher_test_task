import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import cls from './Layout.module.css'
import { Footer } from "../Footer/Footer";
import { ClassNames } from "../../shared/lib/ClassNames/ClassNames";
export const Layout = (props) => {

    return (
        <div className={cls.wrapper}>
            <Header className={cls.header} />
            <div className={ClassNames(cls.main, {}, ["container"])}>
                <Outlet/>
            </div>
            <Footer className={cls.footer} />
        </div>
 );
}