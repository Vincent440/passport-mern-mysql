import axios from "axios";

export default {

  getLoginStatus: async () => {
    try {
      const res = await axios.get('/api/login/status');
      return res.data;
    }
    catch (err) {
      return console.log(err);
    }
  },
  postUserLogin: async (user) => {
    try {
      const res = await axios.post('/api/login', user);
      console.log(res);
      return res.data;
    }
    catch (err) {
      return console.log(err);
    }
  },
  getLoggedOut: async () => {
    try {
      const res = await axios.get('/api/logout');
      console.log(res);
      return res;
    }
    catch (err) {
      return console.log(err);
    }
  }

}
