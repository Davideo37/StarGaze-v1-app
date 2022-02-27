import { StyleSheet, ImageBackground, Image, SafeAreaView, StatusBar } from "react-native";
import { Text, View } from "../components/Themed";
import checkWeather from "../hooks/checkWeather";

const image = "../assets/images/background.jpg";

export default function WeatherScreen(props) {
  if (props.weatherData) { // Only render if weatherdata exists
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require(image)}
          style={styles.background}
          resizeMode="cover"
        >
          <Text style={styles.title}>
            {props.weatherData.location.name + ", " + props.weatherData.location.region}
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
      </SafeAreaView>
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
    fontSize: 30,
    fontWeight: "bold",
    width: "60%",
    color: "#3BCBFF",
  },
  report: {

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
