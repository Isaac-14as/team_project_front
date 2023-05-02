import React from "react";
import classes from "./profile.module.css";
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        // Просмотр
        <div className={classes.profile_main}>
            <div className={classes.title_page}><b>Ваш профиль</b></div>
            <div className={classes.info_box}>
                <div className={classes.second_name}><b>Фамилия: </b><cite>Еланский</cite></div>
                <div className={classes.name}><b>Имя: </b><cite>Дмитрий</cite></div>
                <div className={classes.surname}><b>Отчество: </b><cite>Олегович</cite></div>
                <div className={classes.email}><b>E-mail: </b><cite>elan.dmitriy@gmail.com</cite></div>
                <div className={classes.date_of_birth}><b>Дата рождения: </b><cite>27.06.2002</cite></div>
                <div className={classes.role}><b>Роль: </b><cite>администратор</cite></div>
            </div>
            <div className={classes.btn_box}>
                <Link className={classes.change_btn} to="change_profile"> Изменить</Link>
            </div>
        </div>


    

        // Изменение

        // <div className="profile_main">
        //     <div className="title_page"><b>Изменение профиля</b></div>
        //     <form action="" className="info_box">
        //         <div>
        //             <label for=""><b>Фамилия:</b></label>
        //             <input className="second_name" type="text">
        //         </div>
    
        //         <div>
        //             <label for=""><b>Имя:</b></label>
        //             <input className="name" type="text">
        //         </div>
    
        //         <div>
        //             <label for=""><b>Отчество:</b></label>
        //             <input className="surname" type="text">
        //         </div>
    
        //         <div>
        //             <label for=""><b>E-mail:</b></label>
        //             <input className="email" type="text">
        //         </div>
    
        //         <div>
        //             <label for=""><b>Дата рождения:</b></label>
        //             <input className="date_of_birth" type="text">
        //         </div>
    
        //         <div>
        //             <label for=""><b>Роль:</b></label>
        //             <input className="role" type="text">
        //         </div>
        //         <div className="btn_box">
        //             <button className="change_btn">Сохранить</button>
        //         </div>
        //     </form>
        // </div>
    )
}
export default Profile;





   

