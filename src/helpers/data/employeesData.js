import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((result) => {
      const allEmployees = result.data;
      const employees = [];
      if (allEmployees != null) {
        Object.keys(allEmployees).forEach((fbId) => {
          const newEmployee = allEmployees[fbId];
          newEmployee.id = fbId;
          employees.push(newEmployee);
        });
      }
      resolve(employees);
    })
    .catch((error) => reject(error));
});

export default { getAllEmployees };
