import { useState, useEffect } from "react";


export default function fetchWeatherData( location: string) {
    const [loadingComplete, setLoadingComplete] = useState(false);
    const [name, setName] = useState("");
    const [temp, setTemp] = useState(0);
    const [weatherText, setWeatherText] = useState("");
    const [weatherImage, setWeatherImage] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
      /* Function to fetch the weather data from the API based on a location (town name, zip code, etc),
       *  then set all the appropriate values
       */
      async function getWeatherAPI() {
        try {
          let response = await fetch(
            "http://api.weatherapi.com/v1/current.json?key=000164ffa1bd49d48e3172911222001&q=" +
              location +
              "&aqi=no"
          );
          let responseJson = await response.json();
          setName(responseJson.location.name);
          setTemp(parseInt(responseJson.current.temp_f));
          setWeatherText(responseJson.current.condition.text);
          setWeatherImage(responseJson.current.condition.icon);
          setTime(responseJson.location.localtime.slice(11)); // The localtime value includes the date and time as a string, so we slice off the date
        } catch (error) {
          console.error(error);
        }
      }
    }, []);
}