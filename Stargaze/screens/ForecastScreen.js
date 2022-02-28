import { StyleSheet, Pressable, ImageBackground, StatusBar } from "react-native";
import { Text, View } from "../components/Themed";
import MiniWeather from "../components/MiniWeather";
import { responseJson } from "../hooks/useWeatherAPI";
import { SafeAreaView } from "react-native-safe-area-context";
const image = "../assets/images/background.jpg";

export default function ForecastScreen({ navigation }, weatherData) {
  if (responseJson) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require(image)}
          style={styles.background}
          resizeMode="cover"
        >
          <Text style={styles.title}>Forecast</Text>
          <Text style={styles.text}>Tap a day to see more details!</Text>
          <SafeAreaView style={styles.cards}>
            {responseJson.forecast.forecastday.map((day, i) => {
              return <MiniWeather data={day} key={i} navigation={navigation} index={i} />;
            })}
          </SafeAreaView>
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
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    width: "100%",
    color: "#FFFFFF",
    textShadowColor: "#000",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    color: "#FFFFFF",
    textShadowColor: "#000",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  background: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: "100%",
    alignItems: "center",
  },
  cards: {
    alignContent: "center",
    flex: 1,
    position: "absolute",
    top: "15%",
  },
});
