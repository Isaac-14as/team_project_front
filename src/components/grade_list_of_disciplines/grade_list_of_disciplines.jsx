import React from "react";
import classes from "./grade_list_of_disciplines.module.css";


const GradeListOfDisciplines = () => {
    return (
      <div className={classes.list_of_disciplines_main}>
            <div className={classes.h_text}><b>Выберите предмет для просмотра таблицы</b></div>

            <div className={classes.box}>
                <div className={classes.item}>Математика</div>
                <div className={classes.item}>Иностранный язые</div>


                <div className={classes.item}>Русский язык</div>
                <div className={classes.item}>Математика</div>
                <div className={classes.item}>Иностранный язые</div>


                <div className={classes.item}>Русский язык</div>
                <div className={classes.item}>Математика</div>
                <div className={classes.item}>Иностранный язые</div>

                <div className={classes.item}>Русский язык</div>
                <div className={classes.item}>Математика</div>
                <div className={classes.item}>Иностранный язые</div>

                <div className={classes.item}>Русский язык</div>
                <div className={classes.item}>Математика</div>
                <div className={classes.item}>Иностранный язые</div>
            </div>
      </div>
    )
}
export default GradeListOfDisciplines;