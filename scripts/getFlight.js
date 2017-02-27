import axios from 'axios';

const { country, currency, locale, originPlace, destinationPlace, outboundDate = "anytime" } = ARGS;

axios.get(`http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/${country}/${currency}/${locale}/${originPlace}/${destinationPlace}/${outboundDate}?apikey=<your_api_key>`)
  .then((response) => response.data.Routes)
  .then((data) => {
    setResponse(new HttpResponse(200, JSON.stringify(data)));
  })
  
  .catch((error) => {
    setResponse(new HttpResponse(400, error, 'text/plain'));
  });
