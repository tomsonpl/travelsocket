import axios from 'axios';

axios.get(`http://partners.api.skyscanner.net/apiservices/reference/v1.0/countries/${ARGS.locale}?apikey=<your_api_key>`)
  .then((response) => response.data.Countries)
  .then((countries = []) => {
    setResponse(new HttpResponse(200, JSON.stringify(countries)));
  })
  
  .catch((error) => {
    setResponse(new HttpResponse(400, error, 'text/plain'));
  });
