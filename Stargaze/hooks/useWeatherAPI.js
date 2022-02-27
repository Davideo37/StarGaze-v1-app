let responseJson;

// Method for fetching weather data from the API
export default async function useWeatherAPI(location) {
  let response = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=634424cdd90b439aad3152833221802&q=" +
      location +
      "&days=5&hour=20&raqi=no&alerts=no"
  );
  responseJson = await response.json();
  console.log(responseJson.location.name);
}
export { responseJson };
