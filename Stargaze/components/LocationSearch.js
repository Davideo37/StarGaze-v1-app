import { SafeAreaView, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Text, View } from "./Themed";

export default function LocationSearch() {
    const [location, setLocation] = useState("");
    const [tempLocation, setTempLocation] = useState("");
    const handleSubmitLocation = () => {
      setLocation(tempLocation);
      alert(tempLocation);
    };
    return (
        <View>
            <SafeAreaView style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    value={tempLocation}
                    placeholder={"Enter a zipcode"}
                    placeholderTextColor={"#FF0"}
                    onChangeText={setTempLocation}
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
    backgroundColor: "#011",
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