import { SafeAreaView, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Text, View } from "./Themed";
import useWeatherAPI from "../hooks/useWeatherAPI";

// Location search box
export default function LocationSearch() {
    const [location, setLocation] = useState("");
    const handleSubmitLocation = () => {
      useWeatherAPI(location);
    }
    return (
      <View>
        <SafeAreaView style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={location}
            placeholder={"Enter a location"}
            placeholderTextColor={"#3BCBFF"}
            onChangeText={setLocation}
            onSubmitEditing={handleSubmitLocation}
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
    color: "#3BCBFF",
    fontSize: 25,
  },
});