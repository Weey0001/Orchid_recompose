import React,{useRef,useEffect} from 'react';
import { TitleTop , MidlImg , BotText } from './components';
import { View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const WaitScreen = ({isOff}) =>{
  
  let titleRef= useRef()
  let midlRef = useRef()
  let countMidlRef = useRef()
  let botRef = useRef()

  handleAnim = () => {
    if(isOff){
      setTimeout(() => {
        titleRef
          .current
          .zoomOut(500)        
      }, 200);
      setTimeout(() => {
        midlRef
          .current
          .zoomOut(500)       
        countMidlRef
          .current
          .rotate(1000) 
      }, 400);
      setTimeout(() => {
        botRef
          .current
          .zoomOut(500)         
      }, 600);
    }
  }

  useEffect(() => {
    handleAnim()
  }, [isOff])

  return(
    <View style={styles.countainer}>
      <TitleTop ref={titleRef}/>
      <Animatable.View
        useNativeDriver={true}
        animation='rotate'
        duration={1000}
        delay={800}
        ref={countMidlRef}
      >
        <MidlImg ref={midlRef}/>      
      </Animatable.View>
      <BotText ref={botRef}/>
    </View>    
  )
}

const styles = StyleSheet.create({
  countainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
  }
});