import Category from "../Category/Category";

function Categories({ categories }) {

    return (
      <div>
        {
          categories.map((category, index) => (
            <Category 
              key={index}
              category={category}
            />
          ))
        }
      </div>
    )
  }
  
export default Categories;