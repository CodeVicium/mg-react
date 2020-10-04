import axios from 'axios';

export default axios.create({
  baseURL: "https://back-mgeventos.herokuapp.com/",
  headers: {
    'Content-Type': 'application/json',
  }
});
