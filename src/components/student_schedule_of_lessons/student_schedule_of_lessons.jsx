import React from "react";
import classes from "./student_schedule_of_lessons.module.css";

const StudentScheduleOfLessons = () => {
    return (
      <table class={classes.content_table}>
      <thead>
        <tr>
          <th>Урок</th>
          <th>Понедельник</th>
          <th>Вторник</th>
          <th>Среда</th>
          <th>Четверг</th>
          <th>Пятница</th>
          <th>Суббота</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div>1</div>9:00-9:45</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>

        </tr>
        <tr class={classes.active_row}>
          <td><div>2</div>10:00-10:45</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
        </tr>
        <tr>
          <td><div>3</div>11:00-11:45</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
        </tr>
        <tr>
          <td><div>4</div>12:00-12:45</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
        </tr>
        <tr class={classes.active_row}>
          <td><div>5</div>13:00-13:45</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
        </tr>
        <tr>
          <td><div>6</div>14:00-14:45</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
        </tr>
        <tr>
          <td><div>7</div>14:00-14:45</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
        </tr>
        <tr>
          <td><div>8</div>14:00-14:45</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
          <td>Рус. яз.</td>
        </tr>
      </tbody>
    </table>
    )
}
export default StudentScheduleOfLessons;
  
  




   