import axios from 'axios';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_SPORTS = 'GET_SPORTS';
export const GET_CHEMISTRY = 'GET_CHEMISTRY';
export const GET_MATH = 'GET_MATH';
export const GET_HISTORY = 'GET_HISTORY';
export const GET_BIOLOGICAL = 'GET_BIOLOGICAL';
export const GET_GEOGRAPHY = 'GET_GEOGRAPHY';

const endpoints = {
    profile: 'https://quiz-7.com/profile.json',
    categories: 'https://quiz-7.com/categories.json',
    sports: 'https://quiz-7.com/questions/1.json',
    chemistry: 'https://quiz-7.com/questions/2.json',
    math: 'https://quiz-7.com/questions/3.json',
    history: 'https://quiz-7.com/questions/4.json',
    biological: 'https://quiz-7.com/questions/5.json',
    geography: 'https://quiz-7.com/questions/6.json'
}

export const getProfile = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoints.profile}`);
            if (response) {
                const profileData = response.data;
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

export const getSports = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoints.sports}`);
            if (response) {
                const sportsData = response.data;
                dispatch({
                    type: 'GET_SPORTS',
                    payload: sportsData,
                });
            }
        } catch(error) {
            console.error('Error fetching Profile', error);
        }
    };
};

export const getChemistry = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoints.chemistry}`);
            if (response) {
                const chemistryData = response.data;
                dispatch({
                    type: 'GET_CHEMISTRY',
                    payload: chemistryData,
                });
            }
        } catch(error) {
            console.error('Error fetching Profile', error);
        }
    };
};

export const getMath = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoints.math}`);
            if (response) {
                const mathData = response.data;
                dispatch({
                    type: 'GET_MATH',
                    payload: mathData,
                });
            }
        } catch(error) {
            console.error('Error fetching Profile', error);
        }
    };
};

export const getHistory = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoints.history}`);
            if (response) {
                const historyData = response.data;
                dispatch({
                    type: 'GET_HISTORY',
                    payload: historyData,
                });
            }
        } catch(error) {
            console.error('Error fetching Profile', error);
        }
    };
};

export const getBiological = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoints.biological}`);
            if (response) {
                const biologicalData = response.data;
                dispatch({
                    type: 'GET_BIOLOGICAL',
                    payload: biologicalData,
                });
            }
        } catch(error) {
            console.error('Error fetching Profile', error);
        }
    };
};

export const getGeography = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoints.geography}`);
            if (response) {
                const geographyData = response.data;
                dispatch({
                    type: 'GET_GEOGRAPHY',
                    payload: geographyData,
                });
            }
        } catch(error) {
            console.error('Error fetching Profile', error);
        }
    };
};