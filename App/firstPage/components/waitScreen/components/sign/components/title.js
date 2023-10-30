import React,{forwardRef} from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, StyleSheet , Dimensions } from 'react-native';

const {width,height} = Dimensions.get('screen')

export const Title = forwardRef((props,ref) => 
  <Animatable.View
    useNativeDriver={true}
    animation="bounceIn"
    duration={1000}
    delay={500}
    ref={ref}
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
          style={{
            ...styles.part1,
            fontSize:props.isLog? width/10:width/8
          }}
        >
          {props.part1} 
        </Text>  
        <Text style={{
          ...styles.part2,
          fontSize:props.isLog? width/10:width/8
        }}>
          {props.part2}
        </Text>   
        <Text style={{
          ...styles.part1,
          fontSize:props.isLog? width/10:width/8
        }}>
          {props.part3}
        </Text>         
      </View>

    </Animatable.View>
  </Animatable.View>
)

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
  },
  part2:{
    color:'white',
    backgroundColor:'black',
    top:-10,
  }
});