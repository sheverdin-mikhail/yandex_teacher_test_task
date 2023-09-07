import cls from './Navigation.module.css';
import { CustomLink } from '../../shared/ui/CustomLink/CustomLink';
import IGithub from '../../shared/assets/icons/git-icon.png'

export const Navigation = (props) => {

    return (
        <div className='container'>
            <div className={cls.links}>
                <CustomLink className={cls.link} to={'/'}>Главная</CustomLink>
                <CustomLink className={cls.link} to={'/enjoy'}>Enjoy :)</CustomLink>
                <a href="https://github.com/sheverdin-mikhail/yandex_teacher_test_task" target='_blank' className={cls.gitLink} rel="noreferrer">
                    <img src={IGithub} className={cls.icon} alt='github-icon' />
                </a>
            </div>
        </div>
 );
}