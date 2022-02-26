import { StyleSheet, ImageBackground } from 'react-native';

import LocationSearch from '../components/LocationSearch';
import { Text, View } from '../components/Themed';
const image = "../assets/images/background.jpg";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(image)}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.title}>Home Page</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <LocationSearch />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "absolute",
  },
});
