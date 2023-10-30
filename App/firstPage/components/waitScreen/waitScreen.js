import React,{useRef,useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { compose } from 'recompose';
import HOCwait from './HocWait/hocwait';
import { TitleTop, MidlImg, BotText } from './components/components';
import Sign from './components/sign/sign';
import Error from './components/error/error';

const {width,height} = Dimensions.get('screen')

const WaitScreen = (props) =>{
  
  let titleRef = useRef()
  let midlRef = useRef()
  let countMidlRef = useRef()
  let botRef = useRef()
  
  let animTitle = {
    0:{
      scale:1,
      transform: [
        {translateY: 0},
        {rotate:"0deg"}
      ],
    },
    1:{
      scale:0.5,
      transform: [
        {translateY: width/2},
        {rotate:"16deg"}
      ],
    }
  }

  let animImage = {
    0:{
      scale:1,
      transform: [{ translateY: 0 }]
    },
    1:{
      scale:0.6,
      transform: [{ translateY: -width }]
    }
  }

  let animTitleOrg = {
    0:{
      scale:0.5,
      transform: [
        {translateY: width/2},
        {rotate:"16deg"}
      ],
    },
    1:{
      scale:1,
      transform: [
        {translateY: 0},
        {rotate:"0deg"}
      ],
    }
  }

  let animImageOrg = {
    0:{
      scale:0.6,
      transform: [{ translateY: -width }]
    },
    1:{
      scale:1,
      transform: [{ translateY: 0 }]
    }
  }

  let enterShop = {
    0:{
      scale:1,
      opacity:1,
      transform: [{ rotate: '0deg' }],
    },
    1:{
      scale:5,
      opacity:0,
      transform: [{ rotate: '360deg' }],
    }
  }

  handleAnim = () => {

    if(props.isOn&&props.actionToDo==="wait"){
      titleRef
        .current
        .animate(animTitle)     
      countMidlRef
        .current
        .animate(animImage)
      midlRef
        .current
        .rotate(1000) 
      props.setOrg(true)
    }else if(!props.isOn&&props.isOrg){
      titleRef
        .current
        .animate(animTitleOrg)   
      countMidlRef
        .current
        .animate(animImageOrg)
      midlRef
        .current
        .rotate(1000)
      props.setOrg(false)   
    }else if(!props.isOn&&props.actionToDo==="toShop"){
      titleRef
        .current
        .zoomOutUp(500)  
      countMidlRef
        .current
        .animate(enterShop)
      botRef
        .current
        .flipOutX(500)
      setTimeout(() => {
        props.setWait(false)
      }, 600);
    }

  }

  useEffect(() => {
    handleAnim()
  }, [props.isOn,props.actionToDo])

  return(
    <View style={styles.countainer}>
      <TitleTop ref={titleRef}/>
      <Animatable.View
        useNativeDriver={true}
        animation='rotate'
        duration={800}
        delay={100}
        ref={countMidlRef}
      >
        <MidlImg ref={midlRef}/>
      </Animatable.View>
      <View
        style={{
          height:width/15,
          width:width,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {!props.isOn&&<BotText ref={botRef}/>}
      </View>

      {props.isOn&&<Sign {...props}/>}
      <Error {...props}/>
    </View>
  )
}

export default compose(
  HOCwait
)(WaitScreen)

const styles = StyleSheet.create({
  countainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
  }
});

