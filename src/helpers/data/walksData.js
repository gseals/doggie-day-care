import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((result) => {
      const allWalks = result.data;
      const walks = [];
      if (allWalks != null) {
        Object.keys(allWalks).forEach((fbId) => {
          const newWalk = allWalks[fbId];
          newWalk.id = fbId;
          walks.push(newWalk);
        });
      }
      resolve(walks);
    })
    .catch((error) => reject(error));
});

const createNewWalk = (walkInfo) => axios.post(`${baseUrl}/walks.json`, walkInfo);

const deleteAWalk = (walkId) => axios.delete(`${baseUrl}/walks/${walkId}.json`);

export default { getAllWalks, createNewWalk, deleteAWalk };
