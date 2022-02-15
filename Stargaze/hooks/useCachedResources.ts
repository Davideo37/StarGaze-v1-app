import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
let responseJson;
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [location, setLocation] = useState("01984");

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
        //setLocation("01984");
        let response = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=000164ffa1bd49d48e3172911222001&q=" +
            location +
            "&aqi=no"
        );
        responseJson = await response.json();
        console.log(responseJson);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
export { responseJson };