import React,{useRef, forwardRef} from 'react'
import { View, Dimensions,Button } from 'react-native'
import * as Animatable from 'react-native-animatable'

export const Choice = props => {

  let connect = useRef()
  let inscription = useRef()

  let handlAnimConnect = async () => {
    await connect
      .current
      .fadeOut(200)
      .then(end=>{
        if (end.finished) props.someFunction()
      })

  }

  let handlAnimInscription = async () => {
    await inscription
      .current
      .fadeOut(200)
      .then(end=>{
        if (end.finished) props.someFunction0()
      })
  }

  return(
 
    <Animatable.View
      useNativeDriver={true}
      animation='swing'
      duration={1000}
      delay = {props.index*100}
      iterationCount = 'infinite'
      iterationDelay = { 2000 }
    >

      {
        !props.isLog
        &&
        <Animatable.View
          useNativeDriver={true}
          animation="bounceIn"
          duration={500}
          ref={connect}
        >
          <Button 
            color="#005effab" 
            title="Se connecter" 
            onPress={()=>handlAnimConnect()}
          />
        </Animatable.View>
      }
      {
        props.isLog
        &&
        <Animatable.View
          useNativeDriver={true}
          ref={inscription}
          animation='bounceIn'
          duration={500}
          ref={inscription}
        >
          <Button 
            color="#ff8c00ab" 
            title="S'inscrire" 
            onPress={()=>handlAnimInscription()}
          />
        </Animatable.View>
      }
    </Animatable.View>
  )
}
