import { responseJson } from "../hooks/useWeatherAPI";
import { StyleSheet, Image, Pressable } from "react-native";
import { Text, View } from "../components/Themed";
import { Card } from "react-native-elements";

export default function MiniWeather(props) {
  return (
    <View>
      <Pressable
        onPress={() => {
          props.navigation.navigate("Report");
        }}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <Card>
          <Card.Title>Date: {props.data.date}</Card.Title>
          <Text style={styles.text}>
            Weather: {props.data.hour[0].condition.text}
          </Text>
          <View>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: "https:" + props.data.hour[0].condition.icon }}
            />
          </View>
        </Card>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    top: 0,
  },
  text: {
    color: "#000",
  },
});
