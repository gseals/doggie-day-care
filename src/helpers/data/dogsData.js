import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((result) => {
      const allDogs = result.data;
      const dogs = [];
      if (allDogs != null) {
        Object.keys(allDogs).forEach((fbId) => {
          const newDog = allDogs[fbId];
          newDog.id = fbId;
          dogs.push(newDog);
        });
      }
      resolve(dogs);
    })
    .catch((error) => reject(error));
});

const getSingleDog = (dogId) => axios.get(`${baseUrl}/dogs/${dogId}.json`);

export default { getAllDogs, getSingleDog };
