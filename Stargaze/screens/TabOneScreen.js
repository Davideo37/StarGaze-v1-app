import { StyleSheet, Pressable, ImageBackground } from "react-native";
import { Text, View, Card } from "../components/Themed";
import MiniWeather from "../components/MiniWeather";
import { responseJson } from "../hooks/useWeatherAPI";
const image = "../assets/images/background.jpg";

export default function TabOneScreen({ navigation }) {
  if (responseJson) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require(image)}
          style={styles.background}
          resizeMode="cover"
        >
          <Text style={styles.title}>Forecasted Weather</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Card>
            {responseJson.forecast.forecastday.map((day, i) => {
              return <MiniWeather navigation={navigation} data={day} index={i} />;
            })}
          </Card>
        </ImageBackground>
      </View>
    );
  } else {
    return (<View></View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
