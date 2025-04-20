import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from './Navigation.module.css';

const Navigation = () => {
const setActivClass = ({isActive}) => {
    return clsx(style.link, {[style.isActive]: isActive})
}
    return(
        <header className={style.header}>
            <nav className="nav">
            <NavLink className={setActivClass} to='/'>Home</NavLink>
            <NavLink  className={setActivClass}  to='/movies'>Movies</NavLink>
            </nav>
        </header>
    )
};
export default Navigation;