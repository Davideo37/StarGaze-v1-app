import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Text, View } from "./Themed";
import useWeatherAPI from "../hooks/useWeatherAPI";
import { Button } from "react-native-elements";
import * as geoLocation from "expo-location";
import { SearchBar } from "react-native-elements/dist/searchbar/SearchBar";

// Location search box
export default function LocationSearch() {
  const [location, setLocation] = useState("");
  const [tempLocation, setTempLocation] = useState("");
  const handleSubmitLocation = () => {
    useWeatherAPI(tempLocation).then((res) =>
      setLocation(res.location.name + ", " + res.location.region)
    );
  };

  const handleSubmitGeolocation = () => {
    geoLocation.getCurrentPositionAsync().then((geoResponse) => {
      useWeatherAPI(
        geoResponse.coords.latitude + "," + geoResponse.coords.longitude
      ).then((res) =>
        setLocation(res.location.name + ", " + res.location.region)
      );
      console.log(
        "Submitted coords of " +
          geoResponse.coords.latitude +
          "," +
          geoResponse.coords.longitude
      );
    });
  };

  return (
    <View style={{ backgroundColor: "transparent" }}>
      <View style={styles.inputView}>
        <SearchBar
          style={styles.input}
          value={tempLocation}
          placeholder={"Enter a location"}
          placeholderTextColor={"#3BCBFF"}
          onChangeText={setTempLocation}
          onSubmitEditing={handleSubmitLocation}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        title={"Use my current location"}
        onPress={handleSubmitGeolocation}
      >
        <Text style={styles.buttonText}>Use GPS</Text>
      </TouchableOpacity>
      {location ? (
        <View style={styles.locationView}>
          <Text style={styles.locationText}>Using location:</Text>
          <Text style={styles.locationText}>{location}</Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  inputView: {
    width: "90%",
    paddingBottom: "5%",
    backgroundColor: "transparent",
  },
  input: {
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#0FC",
    backgroundColor: "#222222",
    padding: 10,
    color: "#3BCBFF",
    fontSize: 20,
  },
  button: {
    width: "50%",
    height: 50,
    color: "#000",
    alignSelf: "center",
    backgroundColor: "#0e2654",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  locationView: {
    justifyContent: "center",
    alignContent: "center",
    top: 30,
    backgroundColor: "transparent",
  },
  locationText: {
    fontSize: 30,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
});
