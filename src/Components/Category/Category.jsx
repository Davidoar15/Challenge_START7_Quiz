
function Category({ category }) {

    const { title, questions, icon } = category;
    const fixedIcon = "https://quiz-7.com"+icon;

    return (
      <div>
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
      </div>
    )
  }
  
export default Category;