import React from "react";
import classes from "./header.module.css";
import { Link } from 'react-router-dom';


// const role = "student";
const role = "teacher";
// const role = "admin";



const Header = () => {
    return (
        <header className="">

  <nav className={classes.navbar}>
    {/* LOGO */}
    <div className={classes.logo}>GT</div>

    {/* NAVIGATION MENU*/}
    <ul className={classes.nav_links}>
    {/* USING CHECKBOX HACK */}
    {/* <input type="checkbox" id="checkbox_toggle" />
    <label for="checkbox_toggle" className="hamburger">&#9776;</label> */}

    {/* NAVIGATION MENUS  */}
    <div className={classes.menu}>

    {role == "student" ? <li> <Link to="/profile">Профиль</Link></li>: null}
    {role == "student" ? <li> <Link to="/student_schedule_of_lessons">Расписание</Link></li>: null}
    {/* {role == "student" ? <li> <Link to="/profile">Профиль</Link></li>: null}
    {role == "student" ? <li> <Link to="/profile">Профиль</Link></li>: null}
    {role == "student" ? <li> <Link to="/profile">Профиль</Link></li>: null} */}

    


   

    {/* <li className="services">
    <a href="/">Предметы</a> */}

     {/* DROPDOWN MENU  */}
    {/* <ul className="dropdown">
    <li><a href="/">Предмет 1 </a></li>
    <li><a href="/">Предмет 2</a></li>
    <li><a href="/">Предмет 2</a></li>
    <li><a href="/">Предмет 3</a></li>
    <li><a href="/">Предмет 4</a></li>
    </ul>

    </li> */}

    <li> <Link to="/grade_list_of_disciplines">Оценки</Link></li>
    <li> <Link to="/dz_1">ДЗ</Link></li>


    </div>
    </ul>
    </nav>
</header>
    )
}

export default Header;