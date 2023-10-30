import React,{useRef} from 'react'
import { View, Text, StyleSheet, Keyboard, Dimensions } from 'react-native'
import {compose} from 'recompose';
import { InputComp,Btn } from './components/inputComp';
import * as Animatable from 'react-native-animatable';
import { Title } from './components/title'
import HocSign from './hocsign/hocsign';


const {width,height} = Dimensions.get('screen')

const Sign = (props) => {

  let pseudo = useRef()
  let email = useRef()
  let phone = useRef()

  let checkInfo = async () => {

    let info = {
      pseudo: pseudo.current._lastNativeText.trim(),
      mail: email.current._lastNativeText.trim(),
      phone: phone.current._lastNativeText.trim()
    }

    await props.setProfil(info)

  }

  return (
    <View style={styles.countainer}>
      <Title/>
      <View>
        <InputComp
          placeHolder='pseudo'
          ref={pseudo}
          index={1}
          onSubmitEditing={()=>{
            email.current.focus()
          }}
        />
        <InputComp
          placeHolder='Email'
          ref={email}
          index={2}
          onSubmitEditing={()=>{
            phone.current.focus()
          }}
        />
        <InputComp
          placeHolder='Telephone'
          ref={phone}
          index={3}
          onSubmitEditing={()=>{
            Keyboard.dismiss()
          }}
          np={true}
        />

      </View>

      <Btn
        someFunction={()=>{
          checkInfo()
        }}
        color='#00a82ab8'
        title="valider"
        index={3}
      />
      
    </View>
  )
}

export default compose(
  HocSign
)(Sign)

const styles = StyleSheet.create({
  countainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
});