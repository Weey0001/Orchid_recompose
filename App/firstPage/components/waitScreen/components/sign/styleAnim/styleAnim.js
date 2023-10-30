import React from 'react';
import * as Animatable from 'react-native-animatable'
import { 
  StyleSheet, 
  Dimensions, 
  Animated,
  Easing  
} from 'react-native'

const {width,height} = Dimensions.get('screen')
  
const { 
  Value, 
  timing, 
  parallel, 
} = Animated ;

export const transHeight = new Value(height/(3*5))
let config0 = {
  duration: 300,
  toValue: 0,
  easing: Easing.inOut(Easing.ease)
}
let config01 = {
  duration:300,
  toValue: height/(5*3),
  easing: Easing.inOut(Easing.ease)
}
const anim = timing(transHeight,config0)
const anim01 = timing(transHeight,config01)

export const transHeight1 = new Value(0)
let config1 = {
  duration:300,
  toValue:height/(3*5),
  easing: Easing.inOut(Easing.ease)
}
const anim1 = timing(transHeight1,config1)

export const transPass = new Value(height/(5*3))
let configPassAnim = {
  duration:300,
  toValue:0,
  easing: Easing.inOut(Easing.ease)
}
let configPassAnim0 ={
  duration:300,
  toValue:height/(5*3),
  easing: Easing.inOut(Easing.ease)
}

const animPass = timing(transPass,configPassAnim)
const animPass0 = timing(transPass,configPassAnim0)

export const styles = StyleSheet.create({

  countainer:{
    position: 'absolute',
    width: width,
    height: height,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  countTitle:{
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

  countInp:{
    top: width/5,
    flex:1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  countBtn:{
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',
  },

  btnCount:{
    flex: 1,
    margin:15
  },

  textForget:{
    color:'white',
    margin:5,
    backgroundColor:'#000000ab',
    textAlign:'center',
    padding:5,
    borderRadius:10
  },

  pass:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  forget:{
    width:width/2,
    alignSelf: 'center',
  }
  
});

export const checkInfo = async (
  props,
  pseudo,
  email,
  phone,
  pass,
  titleRef,
  firstRef,
  secondRef,
  thirdRef,
  fourthRef
) => {

  try {

    let info = {
      pseudo:pseudo.current._lastNativeText.trim(),
      email:email.current._lastNativeText.trim(),
      phone:phone.current._lastNativeText.trim(),
      pass:pass.current._lastNativeText.trim()
    }
    
    titleRef
      .current
      .bounceOut(800)

    setTimeout(() => {
      firstRef
        .current
        .fadeOutLeftBig(500)
    }, 100);
    
    setTimeout(() => {
      secondRef
        .current
        .fadeOutRightBig(500)     
    }, 200);

    setTimeout(() => {
      thirdRef
        .current
        .fadeOutLeftBig(500)
    }, 300);

    setTimeout(() => {
      fourthRef
        .current
        .fadeOutLeftBig(500)
    }, 400);

    setTimeout(async() => {
      await props.setProfil(info)
      props.setOn(false)
    }, 800);

  } catch (error) {

    props.errEntrie()
    props.setError(true)

  }
}

export const animToLog = (
  props,
  pseudo,
  phone,
  titleRef,
  firstRef,
  thirdRef
) => {

  titleRef
    .current
    .bounceOut(500)

  setTimeout(() => {
    firstRef
      .current
      .fadeOutLeftBig(500)
  }, 100);

  setTimeout(() => {
    thirdRef
      .current
      .fadeOutRightBig(500)
  }, 300);

  setTimeout(() => {

    parallel([
      anim1,
      anim,
    ]).start(()=>{
      props.setLog(true)
    })

  }, 800);

}

export const tolog = (
  props,
  titleLogRef,
  email,
  pass,
  secondRef,
  fourthRef
) => {

  try {
    let info = {
      email: email.current._lastNativeText.trim(),
      pass: pass.current._lastNativeText.trim()
    }

    titleLogRef
      .current
      .bounceOut(500)

    setTimeout(() => {
      secondRef
        .current
        .fadeOutRightBig(500)     
    }, 200);

    setTimeout(() => {
      fourthRef
        .current
        .fadeOutLeftBig(500)
    }, 300);

    setTimeout(async() => {
      await props.setUserLog(info)
      props.setOn(false)
    }, 400);  

  } catch (error) {
    props.errEntrie()
    props.setError(true)
  }

}

export const animToSign = (
  props,
  titleLogRef
) => {

  titleLogRef
    .current
    .bounceOut(500)

  setTimeout(() => {

    parallel([
      anim01,
      animPass0
    ]).start(()=>{
      props.setForget(false)
      props.setLog(false) 
    })

  }, 600); 

}

export const actionForget = (props,textRef) => {

  textRef
    .current 
    .flash(500)

  setTimeout(() => {
    animPass.start(()=>{
      props.setForget(true)
    })
  }, 550);

}