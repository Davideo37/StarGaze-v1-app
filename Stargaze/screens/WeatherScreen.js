import { StyleSheet, ImageBackground, Image, SafeAreaView, StatusBar } from "react-native";
import { Text, View } from "../components/Themed";
import checkWeather from "../hooks/checkWeather";
import { formatDate } from "../components/MiniWeather";
const image = "../assets/images/background.jpg";

export default function WeatherScreen(props) {
  if (props.weatherData) { // Only render if weatherdata exists
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require(image)}
          style={styles.background}
          resizeMode="cover"
        >
          <Text style={styles.title}> Weather Report</Text>
          <Text style={styles.report}>Weather for 
            {" " +props.weatherData.location.name + ", " + props.weatherData.location.region + " "}
            on {formatDate(props.weatherData.forecast.forecastday[props.dayIndex].date)}
          </Text>
          <Text style={styles.report}>
            {checkWeather(
              props.weatherData.forecast.forecastday[props.dayIndex].hour[0].condition.text,
              props.weatherData.forecast.forecastday[props.dayIndex].hour[0].temp_f
            )}
          </Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Image
            style={styles.weatherImage}
            source={{
              uri:
                "https:" +
                props.weatherData.forecast.forecastday[props.dayIndex].hour[0].condition.icon,
            }}
          />
        </ImageBackground>
      </View>
    );
  } else {
    return <View></View>;
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
    fontSize: 50,
    fontWeight: "bold",
    width: "100%",
    color: "#FFFFFF",
    textShadowColor: "#000",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  report: {
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
  weatherImage: {
    width: 100,
    height: 100,
  },
  background: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: "100%",
    alignItems: "center",
  },
});
