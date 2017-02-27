import axios from 'axios';

const findProperLocale = (locale) => {
  return locale.find(language => language.Name.split(' ').shift() === ARGS.locale);
}

axios.get(`http://partners.api.skyscanner.net/apiservices/reference/v1.0/locales?apikey=<your_api_key>`)
  .then((response) => response.data.Locales)
  .then((locale = []) => {
    setResponse(new HttpResponse(200, JSON.stringify(findProperLocale(locale))));
  })
  
  .catch((error) => {
    setResponse(new HttpResponse(400, error, 'text/plain'));
  });
