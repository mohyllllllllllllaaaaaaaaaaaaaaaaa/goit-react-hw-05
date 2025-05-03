import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from './Navigation.module.css';
import { TfiHome } from "react-icons/tfi";
import { SlCamrecorder } from "react-icons/sl";

const Navigation = () => {
const setActivClass = ({isActive}) => {
    return clsx(style.link, {[style.isActive]: isActive})
}
    return(
        <header className={style.header}>
            <nav className="nav">
            <NavLink className={setActivClass} to='/'>Home<TfiHome className={style.icon}/></NavLink>
            <NavLink  className={setActivClass}  to='/movies'>Movies<SlCamrecorder className={style.icon}/></NavLink>
            </nav>
        </header>
    )
};
export default Navigation;