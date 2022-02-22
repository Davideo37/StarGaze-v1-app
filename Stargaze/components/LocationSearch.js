import { SafeAreaView, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Text, View } from "./Themed";
import useWeatherAPI from "../hooks/useWeatherAPI";
import {Button} from 'react-native-elements';
import * as geoLocation from 'expo-location';


export default function LocationSearch() {
    const [location, setLocation] = useState("");
    const [tempLocation, setTempLocation] = useState("");
    const handleSubmitLocation = () => {
      useWeatherAPI(tempLocation);
    }

    const handleSubmitGeolocation = () => {
      geoLocation.getCurrentPositionAsync().then(geoResponse => {
        useWeatherAPI(geoResponse.coords.latitude+","+geoResponse.coords.longitude);
        console.log("Submitted coords of "+geoResponse.coords.latitude+","+geoResponse.coords.longitude)
      });
    }

    return (
      <View>
        <SafeAreaView style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={tempLocation}
            placeholder={"Enter a zipcode"}
            placeholderTextColor={"#3BCBFF"}
            onChangeText={setTempLocation}
            onSubmitEditing={handleSubmitLocation}
          />
          <Button
            title={"Submit my current location"}
            onPress={handleSubmitGeolocation}
          />
        </SafeAreaView>
      </View>
    );
}
const styles = StyleSheet.create({
  inputView: {
    alignItems: "center",
    justifyContent: "center",
    
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    margin: 12,
    borderWidth: 3,
    borderColor: "#0FC",
    padding: 10,
    color: "#FF0",
    fontSize: 25,
  },
});