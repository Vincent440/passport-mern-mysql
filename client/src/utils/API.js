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
      return res.data;
    }
    catch (err) {
      return console.log(err);
    }
  }

}
