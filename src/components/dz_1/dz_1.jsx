import React from "react";
import classes from "./dz_1.module.css";



const Dz_1 = () => {
    return (
      <div className={classes.dz_1}>
        <div className={classes.title_page}><b>Домашнее задание</b></div>

        <div className={classes.dz_box}>
          <div className={classes.item_name}>Математика</div>
          <div className={classes.teacher}>От Надежды Александровны</div>
          <div className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint repellendus neque recusandae velit, inventore ullam animi deleniti maxime ab commodi perferendis natus ex quas tenetur nostrum aliquam enim soluta labore!</div>
          <div className={classes.files}>
            <a className={classes.file_item} download>Ссылка_1</a>
            <a className={classes.file_item} download>Ссылка_2</a>
            <a className={classes.file_item} download>Ссылка_3</a>
          </div>
          <button className={classes.btn_dz}>Отправить</button>
        </div>
      </div>
    )
}
export default Dz_1;
  
  


