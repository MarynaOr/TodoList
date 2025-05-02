import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'
// lassName="flex bg-amber-500 left-2"
const Header = () => {
  return (
    <>
      <header className="flex bg-amber-500 gap-4 ">
        <NavLink className={({isActive}) => clsx(s.link, isActive && s.active)} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => clsx(s.link, isActive && s.active)} to='/todos'>Todos</NavLink>
      </header>
    </>
  );
};

export default Header;