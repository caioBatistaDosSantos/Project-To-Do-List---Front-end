import axios from 'axios';

const APP_TO_DO_BACK_URL = 'https://to-do-list-back-dev-caio.herokuapp.com';

const getAllList = () => {
  return axios.get(`${APP_TO_DO_BACK_URL}/list`).then((response) => response.data);
}

export default getAllList;