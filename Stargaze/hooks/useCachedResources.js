import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
let responseJson;
export default function useCachedResources(location) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

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
          "http://api.weatherapi.com/v1/forecast.json?key=000164ffa1bd49d48e3172911222001&q=" +
           location  +
            "&days=5&hour=20&raqi=no&alerts=no"
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