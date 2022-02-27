import { SafeAreaView, StyleSheet, ImageBackground, StatusBar } from 'react-native';

import LocationSearch from '../components/LocationSearch';
import { Text, View } from '../components/Themed';
const image = "../assets/images/background.jpg";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require(image)}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>To</Text>
        <Text style={styles.title}>STARGAZE!</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <LocationSearch />
      </ImageBackground>
    </SafeAreaView>
  );
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
    width: "40%",
    color: "#3BCBFF",
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
});
