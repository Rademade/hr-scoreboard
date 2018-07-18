const axios = require('axios');

class CleaverstaffApiService {
  auth(resp) {
    axios.post('https://cleverstaff.net/hr/person/auth', {
      login: process.env.USER_LOGIN,
      password: process.env.USER_PASSWORD
    }).then(resp);
  }

  loadVacancies(res, cookie) {
    axios
      .post(
        'https://cleverstaff.net/hr/client/get',
        {country: null, city: null, name: null},
        {headers: {'Cookie': 'JSESSIONID=' + cookie}}
      )
      .then((resp) => {
        return res.json(resp.data.objects);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

module.exports.CleaverstaffApiService = new CleaverstaffApiService();