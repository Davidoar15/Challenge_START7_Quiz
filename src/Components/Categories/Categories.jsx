import Category from "../Category/Category";
import style from "./Categories.module.css"

function Categories({ categories }) {

    return (
      <div className={style.container}>
        <div className={style.msj}>
          <h3>Let's Play</h3>
        </div>

        <div className={style.categories}>
          {
            categories.map((category, index) => (
              <Category 
                key={index}
                category={category}
              />
            ))
          }
        </div>
      </div>
    )
  }
  
export default Categories;