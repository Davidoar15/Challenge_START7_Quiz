import { NavLink } from "react-router-dom";
import style from "./Category.module.css";

function Category({ category }) {

    const { title, questions, icon } = category;
    const fixedIcon = "https://quiz-7.com"+icon;

    return (
      <div className={style.container}>
        <NavLink to={`/question/${title}`} style={{textDecoration: "none", color: "black"}}>
          <div className={style.categoryImg}>
            <img 
              src={fixedIcon}
              alt={title}
            />
          </div>
          <hr className={style.hr}/>
          <div className={style.infoCategory}>
            <h5>{title}</h5>
            <h6>{questions} questions</h6>
          </div>
        </NavLink>
      </div>
    )
  }
  
export default Category;