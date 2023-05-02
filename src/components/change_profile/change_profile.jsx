import React from "react";
import classes from "./change_profile.module.css";
import { Link } from 'react-router-dom';

const ChangeProfile = () => {
    return (
        <div className={classes.profile_main}>
            <div className={classes.title_page}><b>Изменение профиля</b></div>
            <form action="" className={classes.info_box}>
                <div>
                    <label for=""><b>Фамилия:</b>
                        <input className={classes.second_name} type="text" />
                    </label>
                </div>
    
                <div>
                    <label for=""><b>Имя:</b>
                        <input className={classes.name} type="text"/>
                    </label>
                </div>
    
                <div>
                    <label for=""><b>Отчество:</b>
                        <input className={classes.surname} type="text"/>
                    </label>
                </div>
    
                <div>
                    <label for=""><b>E-mail:</b>
                        <input className={classes.email} type="text"/>
                    </label>
                </div>
    
                <div>
                    <label for=""><b>Дата рождения:</b>
                        <input className={classes.date_of_birth} type="text"/>
                    </label>
                </div>
    
                <div>
                    <label for=""><b>Роль:</b>
                        <input className={classes.role} type="text"/>
                    </label>
                </div>
                <div className={classes.btn_box}>
                    <button className={classes.change_btn}>Сохранить</button>
                </div>
            </form>
        </div>
    )
}
export default ChangeProfile;





   

