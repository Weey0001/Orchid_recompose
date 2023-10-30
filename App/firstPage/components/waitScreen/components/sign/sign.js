import React,{useRef} from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Keyboard, 
  Dimensions, 
  TouchableWithoutFeedback,
  Animated
} from 'react-native'
import {compose} from 'recompose';
import { InputComp,Btn } from './components/inputComp';
import * as Animatable from 'react-native-animatable';
import { Title } from './components/title'
import HOCSign from './hocsign/hocsign';
import { Outanim } from './components/outanim';
import { 
  checkInfo, 
  styles, 
  animToLog, 
  tolog, 
  animToSign, 
  actionForget,
  transHeight,
  transHeight1,
  transPass
} from './styleAnim/styleAnim';
import { Choice } from './components/signLogBtn/signLogBtn';
// import Animated from 'react-native-reanimated';

const {width,height} = Dimensions.get('screen')

const Sign = (props) => {

  let pseudo = useRef()
  let email = useRef()
  let phone = useRef()
  let pass = useRef()
  let titleRef = useRef()
  let titleLogRef = useRef()
  let firstRef = useRef()
  let secondRef = useRef()
  let thirdRef = useRef()
  let titleLog = useRef()
  let fourthRef = useRef()
  let textRef = useRef()

  let actionBtn = () => {
    !props.isLog?
      checkInfo(
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
      )
      :!props.isForget?
        tolog(
          props,
          titleLogRef,
          email,
          pass,
          secondRef,
          fourthRef
        )
      :alert('isForgetLoaded')
  }

  return (
    <View style={styles.countainer}>
      <View style={styles.countTitle}>
        {
          !props.isLog
          &&
          <Title 
            ref={titleRef}
            part1="S'"
            part2="inscrire"
            part3=""
            {...props}
          />
        }
        {
          props.isLog
          &&
          <Title 
            ref={titleLogRef}
            part1="Se"
            part2="Conn"
            part3="ecter"
            {...props}
          />
        }       
      </View>

      <View style={styles.countInp} >
        <Animated.View
          style={{
            height:transHeight,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {
            !props.isLog
            &&
            <Outanim ref={firstRef} >
              <InputComp
                placeHolder='pseudo'
                ref={pseudo}
                index={1}
                onSubmitEditing={()=>{
                  email.current.focus()
                }}
              />   
    
            </Outanim>          
          }
        </Animated.View>
        <Outanim ref={secondRef} >
          <InputComp
            placeHolder='Email'
            ref={email}
            index={2}
            onSubmitEditing={()=>{
              props.isLog? pass.current.focus() : phone.current.focus()
            }}
          />

        </Outanim>
        <Animated.View
          style={{
            height:transHeight,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {
            !props.isLog
            &&
            <Outanim ref={thirdRef} >
              <InputComp
                placeHolder='Telephone'
                ref={phone}
                index={3}
                onSubmitEditing={()=>{
                  pass.current.focus()
                }}
                np={true}
              />
            </Outanim>
          }        
        </Animated.View>

        <Animated.View
          style={{
            height:transPass,
            ...styles.pass
          }}
        >
          {
            !props.isForget
            &&
            <Outanim ref={fourthRef} >
              <InputComp
                placeHolder='Mot de pass > 8 caracteres'
                ref={pass}
                index={4}
                onSubmitEditing={()=>{
                  Keyboard.dismiss()
                }}
              />
            </Outanim>
          }        
        </Animated.View>

        <Animated.View 
          style={{
            ...styles.forget,
            height:transHeight1
          }} 
        >
          {
            props.isLog
            &&
            <Animatable.View
              useNativeDriver={true}
              animation='pulse'
              duration={600}
              iterationCount='infinite'
              iterationDelay={2000}
            >
              <TouchableWithoutFeedback
                onPress={()=>{
                  actionForget(props,textRef)
                }}
              >
                <Animatable.Text 
                  style={styles.textForget}
                  ref={textRef}
                >
                  Mot de pass oublier ?
                </Animatable.Text>
              </TouchableWithoutFeedback>
            </Animatable.View>
          }
        </Animated.View>

      </View>

      <View style={styles.countBtn}>
        <View style={styles.btnCount}>
          <Choice 
            {...props}
            someFunction={
              ()=>{
                animToLog(
                  props,
                  pseudo,
                  phone,
                  titleRef,
                  firstRef,
                  thirdRef,
                )
              }
            }

            someFunction0 = {
              ()=> {
                animToSign(
                  props,
                  titleLogRef
                )
              }
            }
          />           
        </View>
        <View style={styles.btnCount}>
          <Btn
            someFunction={()=>{
              actionBtn()    

            }}
            color='#00a82ab8'
            title="valider"
            index={3}
          />
        </View>
     
      </View>  

    </View>
  )
}

export default compose(
  HOCsign
)(Sign)

