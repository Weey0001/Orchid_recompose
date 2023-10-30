import React from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, StyleSheet , Dimensions } from 'react-native';

const {width,height} = Dimensions.get('screen')

export const Title = props => 
  <Animatable.View
    useNativeDriver={true}
    animation="bounceIn"
    duration={800}
  >
    <Animatable.View
      useNativeDriver={true}
      animation='swing'
      duration={1000}
      iterationCount='infinite'
      iterationDelay={2000}
      style={styles.countainer}
    >
      <View style={styles.countainerText}>
        <Text
          style={styles.part1}
        >
          S' 
        </Text>  
        <Text style={styles.part2}>
          inscrire
        </Text>            
      </View>

    </Animatable.View>
  </Animatable.View>

const styles = StyleSheet.create({
  countainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countainerText:{
    transform: [{ rotate: '-15deg' }],
    flexDirection: 'row'
  },
  part1:{
    color:'black',
    backgroundColor:'white',
    fontSize:width/8,
  },
  part2:{
    color:'white',
    backgroundColor:'black',
    fontSize:width/8,
    top:-10,
  }
});