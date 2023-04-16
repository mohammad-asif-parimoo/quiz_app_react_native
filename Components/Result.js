import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import Title from './Title';

const Result = ({navigation, route}) => {
  const {score} = route.params

  const resultBanner= score>40?"https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png" :"https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"
  return (
    <View style={styles.container}>
      <Title titleText='RESULTS' />
      <Text style={styles.scoreValue}>Your Score is: {score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri:resultBanner,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  banner: {
    height: windowHeight * 0.3,
    width: windowWidth * 0.8,
    maxWidth: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: windowHeight * 0.1,
    paddingHorizontal: windowWidth * 0.05,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    paddingVertical: 16,
    paddingHorizontal: windowWidth * 0.05,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: windowHeight * 0.05,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue:{
    fontSize: 24,
    fontWeight:'800',
    alignSelf:'center',
    marginBottom: windowHeight * 0.05,
  }
});

export default Result;