import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllDogs = (uid) => new Promise((resolve, reject) => {
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
      console.log(dogs);
    })
    .catch((error) => reject(error));
});

export default { getAllDogs };
