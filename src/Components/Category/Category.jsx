import { NavLink } from "react-router-dom";

function Category({ category }) {

    const { title, questions, icon } = category;
    const fixedIcon = "https://quiz-7.com"+icon;

    return (
      <div>
        <NavLink to={`/question/${title}`} style={{textDecoration: "none", color: "black"}}>
          <div>
            <img 
              src={fixedIcon}
              alt={title}
            />
          </div>

          <div>
            <h5>{title}</h5>
            <h6>{questions} questions</h6>
          </div>
        </NavLink>
      </div>
    )
  }
  
export default Category;