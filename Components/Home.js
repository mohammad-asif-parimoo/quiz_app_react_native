import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from './Title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='Quiz App' />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: '50%',
    width: '80%',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: '10%',
    paddingHorizontal: '5%',
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    borderRadius: 16,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: '5%',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});