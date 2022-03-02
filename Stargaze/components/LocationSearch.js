import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { Text, View } from "./Themed";
import useWeatherAPI from "../hooks/useWeatherAPI";
import { Button } from "react-native-elements";
import * as geoLocation from "expo-location";
import { SearchBar } from "react-native-elements/dist/searchbar/SearchBar";
import { useNavigation } from "@react-navigation/native";

// Location search box
export default function LocationSearch() {
  const nav = useNavigation();
  const [location, setLocation] = useState("");
  const [tempLocation, setTempLocation] = useState("");

  const handleSubmitLocation = () => {
    Keyboard.dismiss();
    useWeatherAPI(tempLocation)
      .then(
        (resp) => {
          setLocation(
            resp.location.name +
              ", " +
              (resp.location.region
                ? resp.location.region
                : resp.location.country)
          );
        },
        (reason) => console.warn(reason)
      )
      .then(() => nav.navigate("Report"));
  };

  const handleSubmitGeolocation = () => {
    geoLocation.getCurrentPositionAsync().then((geoResponse) => {
      useWeatherAPI(
        geoResponse.coords.latitude + "," + geoResponse.coords.longitude
      )
        .then(
          (resp) =>
            setLocation(
              resp.location.name +
                ", " +
                (resp.location.region
                  ? resp.location.region
                  : resp.location.country)
            ),
          (reason) => console.warn(reason)
        )
        .then(() => nav.navigate("Report"));
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
        <TextInput
          style={styles.input}
          value={tempLocation}
          placeholder={"Enter a location"}
          placeholderTextColor={"#3BCBFF"}
          onChangeText={setTempLocation}
          onSubmitEditing={handleSubmitLocation}
        />
        <TouchableOpacity
          style={styles.submitButton}
          title={"submit"}
          onPress={handleSubmitLocation}
        >
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
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
    width: "100%",
    height: 125,
    paddingBottom: "5%",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  input: {
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#1fb77a",
    borderRadius: 10,
    backgroundColor: "#222222",
    padding: 10,
    color: "#3BCBFF",
    fontSize: 20,
    height: "55%",
    width: "75%",
    top: "5%",
    left: "10%",
  },
  submitButton: {
    color: "#000",
    backgroundColor: "#135299",
    borderColor: "#1fb77a",
    borderWidth: 3,
    position: "absolute",
    height: "55%",
    width: "15%",
    top: "14%",
    right: "5%",
    justifyContent: "center",
    borderRadius: 10,
  },
  button: {
    width: "50%",
    height: 50,
    color: "#000",
    alignSelf: "center",
    backgroundColor: "#135299",
    borderColor: "#1fb77a",
    borderWidth: 3,
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
