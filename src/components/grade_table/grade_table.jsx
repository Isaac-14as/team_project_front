import React from "react";
import classes from "./grade_table.module.css";



const GradeTable = () => {
    return (
        <div className={classes.grade_table_main}>
            <div className={classes.h_text}>Русский язык</div>

            <table class={classes.content_table}>
            <thead>
            <tr>
                <th rowspan="2">ФИО</th>
                <th colspan="2">Занятие 1</th>
                <th colspan="2">Занятие 2</th>
                <th colspan="2">Занятие 3</th>
                <th colspan="2">Занятие 4</th>
                <th colspan="2">Занятие 5</th>
                <th colspan="2">Занятие 6</th>
                <th colspan="2">Занятие 7</th>
                <th colspan="2">Занятие 8</th> 
            </tr>
            <tr>
                <th>Явка</th>
                <th>Оценка</th>
                <th>Явка</th>
                <th>Оценка</th>
                <th>Явка</th>
                <th>Оценка</th>
                <th>Явка</th>
                <th>Оценка</th>
                <th>Явка</th>
                <th>Оценка</th>
                <th>Явка</th>
                <th>Оценка</th>
                <th>Явка</th>
                <th>Оценка</th>
                <th>Явка</th>
                <th>Оценка</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><div>Еланский Дмитрий</div></td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
            </tr>
            <tr class={classes.active_row}>
                <td><div>Краев Илья</div></td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
            </tr>
            <tr>
                <td><div>Балин Максим</div></td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
            </tr>
            <tr>
                <td><div>Чернов Тимур</div></td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
                <td>True</td>
                <td>5</td>
            </tr>
            </tbody>
        </table>
      </div>
    )
}
export default GradeTable;