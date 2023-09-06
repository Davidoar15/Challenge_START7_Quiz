import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Profile from "./Profile/Profile";
import Categories from "./Categories/Categories";
import { getProfile, getCategories } from "../Redux/actions";


function Home({ profile, categories, getProfile, getCategories }) {
    const [initialFetch, setInitialFetch] = useState(false);

    useEffect(() => {
        if (!initialFetch && !profile.length && !categories.length) {
          getProfile();
          getCategories();
          setInitialFetch(true);
        }
    }, [profile, categories, getProfile, getCategories, initialFetch]);

    const profileData = profile;
    const categoriesData = categories;

    return (
      <div>
        {((profileData) && (categoriesData.length > 0))
            ? (
                <div>
                    <Profile profile={profileData}/>
                    <Categories categories={categoriesData}/>
                </div>
            ) 
            : (
                <h2>Loading...</h2>
            )
        }
      </div>
    )
  }
  
const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        categories: state.categories
    };
};

export default connect(mapStateToProps, { getProfile, getCategories })(Home)

/*
  const initialState = {
    profile: [],
    categories: [],
  };
*/