import React,{forwardRef,useRef} from 'react'
import { TextInput,View, Dimensions,Button } from 'react-native'
import * as Animatable from 'react-native-animatable'

const {width,height} = Dimensions.get('screen')

export const InputComp = forwardRef((props,ref)=>{
  let {
    placeHolder,
    index,
    onSubmitEditing,
    np
  } = props
  return(
    <Animatable.View 
      style={{margin:width/75}}
      useNativeDriver={true}
      duration={800}
      animation='flipInY'
      delay={index*300}
    >
      <Animatable.View
        useNativeDriver={true}
        iterationDelay={2000}
        duration={1000}
        animation='rubberBand'
        iterationCount='infinite'
        style={{
          borderRadius:20,           
          backgroundColor:'white',    
        }}
        delay={index*200}
      >
        <TextInput
          ref={ref}
          placeholder={placeHolder}
          style={{
            width:width/3*2,
            textAlign:'center'
          }}
          onSubmitEditing={()=>{
            onSubmitEditing()
          }}
          keyboardType={np? "phone-pad":'default'}
        />      
      </Animatable.View>
      
    </Animatable.View>

  )
})

export const Btn = (props) =>{

  let countainer = useRef();
  let {
    someFunction,
    color,
    title,
    index,
    animation
  } = props

  let handleAnim = () => {

    countainer
      .current
      .swing(500)
      .then(end=>{
        if(end.finished){
          someFunction()
        }
      })
  }
  
  return(
    <Animatable.View
      useNativeDriver={true}
      ref={countainer}
      animation="flipInY"
      duration={1000}
      delay={index*100}
    >
    
      <Button 
        color={color} 
        title={title}
        onPress={()=>{
          handleAnim()
        }} 
      /> 
    </Animatable.View>
  )
}

