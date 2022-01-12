import axios from 'axios';

const apiSpaceX = axios.create({
  baseURL: 'https://api.spacexdata.com/v5/launches',
});

export default apiSpaceX;
