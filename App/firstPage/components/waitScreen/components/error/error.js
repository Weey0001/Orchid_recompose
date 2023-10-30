import React from 'react'
import Modal from 'react-native-modal'
import {
  StyleSheet, 
  View, 
  Text, 
  Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { compose } from 'recompose';
import HOCerror from './hocerror/hocerror';

const {width,height} = Dimensions.get('screen')

const Error = props =>
  <Modal
    useNativeDriver={true}
    style={styles.modal}
    isVisible={props.onerror}
    animationIn='bounceIn'
    animationInTiming={1000}
    animationOut='fadeOut'
    animationOutTiming={500}
    onModalWillHide={()=>props.setOn(true)}
  >
    <View style={styles.coutainer}>
      <Text style={styles.text} >
        Erreur
      </Text>
    </View>

    <View style={styles.countainerText0}>
      <Animatable.Image 
        useNativeDriver={true}
        source={require("./img/0.png")} 
        style={styles.imgBackErr} 
        animation="pulse"
        duration={300}
        delay={500}
        iterationCount='infinite'
      />
      <Text style={styles.text0} >
        {props.actionText}
      </Text>      
    </View>

  </Modal>


export default compose(
  HOCerror
)(Error)

const styles = StyleSheet.create({
  modal:{
    justifyContent: 'center',
    alignItems: 'center',
    margin:0
  },
  coutainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow:1,
  },
  text:{
    color:'white',
    fontSize:width/7
  },
  countainerText0:{
    flexGrow:1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  imgBackErr:{
    height:width-width/3,
    position: 'absolute',
    width:width,
    bottom:0
  },
  text0:{
    color:'white',
    textShadowColor:'black',
    textShadowRadius:1,
    fontSize:width/15
  }

});