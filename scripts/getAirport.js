import axios from 'axios';

axios.get(`http://partners.api.skyscanner.net/apiservices/geo/v1.0?apikey=<your_api_key>`)
  .then((response) => response.data.Continents[0])
  .then((countries) => {
    console.log('countries', countries);
    setResponse(new HttpResponse(200, JSON.stringify(countries.Countries.some(y => y.Name === ARGS.airport))));
  })
  
  .catch((error) => {
    setResponse(new HttpResponse(400, error, 'text/plain'));
  });
