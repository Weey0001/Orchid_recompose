import React, { PureComponent, useRef } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import * as Animatable from 'react-native-animatable';
import { View, Dimensions,Button, Text, StatusBar } from 'react-native';

const {width,height} = Dimensions.get("screen")

const Back3D = ({children}) => {
  
  return (
    <View
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <StatusBar hidden = {true} />

      <Animatable.Image
        useNativeDriver={true}
        source={require('./img/0.jpg')}
        style={{
          width:width/6*7,
          height:height/5*6,
          position: 'relative',
        }}
      />

      <View style={{
        position: 'absolute',
        width:width,
        height:height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#0000006e'
      }}>
        {children}
      </View>
      
    </View>
  )
}

export default Back3D
