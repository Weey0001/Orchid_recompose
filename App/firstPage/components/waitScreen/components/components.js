import React,{forwardRef} from "react"
import * as Animatable from 'react-native-animatable';
import { StyleSheet,Dimensions } from 'react-native';

const {width,height} = Dimensions.get('screen')

export const TitleTop = forwardRef((props,ref)=>
  <Animatable.View
    useNativeDriver={true}
    animation='bounceIn'
    duration={1500}
    style={styles.titleCountainer}
    ref={ref}
    delay={600}
  >
    <Animatable.Image
      useNativeDriver={true}
      animation="rubberBand"
      duration={3000}
      source={require('./img/title.png')}
      style={styles.title}
      iterationCount='infinite'
    />         
  </Animatable.View>
)

export const MidlImg = forwardRef((props,ref)=>
  <Animatable.View
    useNativeDriver={true}
    style={styles.logoCountainer}
    animation='bounceIn'
    duration={1000}
    ref={ref}
    delay={100}
  >
    <Animatable.Image
      useNativeDriver={true}
      animation="pulse"
      duration={2000}
      source={require('./img/logo.png')}
      style={styles.logo}
      iterationCount='infinite'
    />
  </Animatable.View>
)

export const BotText = forwardRef((props,ref)=>
  <Animatable.View
    useNativeDriver={true}
    style={{
      display:props.display,
      ...styles.chargCountainer
    }}
    ref={ref}
    delay={1000}
    duration={1000}
    animation='flipInX'
  >
    <Animatable.Text
      useNativeDriver={true}
      style={styles.charg}
      animation='pulse'
      duration={1100}
      iterationCount='infinite'
    >
      Chargement
    </Animatable.Text>
    <Dot index={0}/>
    <Dot index={1}/>
    <Dot index={2}/>
  </Animatable.View>
)

const Dot = ({index}) => 
  <Animatable.Text
    useNativeDriver={true}
    duration={1000}
    animation="bounceIn"
    iterationCount='infinite'
    iterationDelay={100}
    delay={index*200}
    style={styles.charg}
  >
    .
  </Animatable.Text>

const styles = StyleSheet.create({

  titleCountainer:{
   zIndex: 2,
  },
  title:{
   width:width-width/5,
   height:width/2-width/9
  },
  logoCountainer:{

  },
  logo:{
    width:width/4*3,
    height:width/4*3
  },
  chargCountainer:{
    flexDirection: 'row',
  },
  charg:{
    color:"#ffffffa6",
    textShadowColor:'black',
    textShadowRadius:1,
    fontSize:width/15,
    marginLeft:5
  }
});