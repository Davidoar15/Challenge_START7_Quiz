import axios from 'axios';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_CATEGORIES = 'GET_CATEGORIES';

const endpoints = {
    profile: 'https://quiz-7.com/profile.json',
    categories: 'https://quiz-7.com/categories.json',
}

export const getProfile = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoints.profile}`);
            if (response) {
                const profileData = response.data;
                console.log(profileData)
                dispatch({
                    type: 'GET_PROFILE',
                    payload: profileData,
                });
            }
        } catch(error) {
            console.error('Error fetching Profile', error);
        }
    };
};

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoints.categories}`);
            if (response) {
                const categoriesData = response.data;
                console.log(categoriesData)
                dispatch({
                    type: 'GET_CATEGORIES',
                    payload: categoriesData,
                });
            }
        } catch(error) {
            console.error('Error fetching Profile', error);
        }
    };
};