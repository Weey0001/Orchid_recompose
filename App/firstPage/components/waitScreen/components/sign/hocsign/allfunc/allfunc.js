import React from 'react';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { connections, Api, Path } from '../../../../../config/connections/connections';

export const checkInfo = (data) => {
  let arrayInfo = Object.values(data.UserProfil),
    validation=[];

  arrayInfo.forEach(ele=>{
    if(ele!==""){
      validation.push("ok")
    }
  })

  let {
    pseudo,
    email,
    phone,
    pass
  } = data.UserProfil

  let tompon = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  test = tompon.test(email.trim());

  let len = validation.length;
  ((len===4)&&(test===true)&&(phone.length===10)&&pass.length>=8)? checkemailexistence(data):handleError(data)
}

let handleError = (props) => {
  props.errEmph()
  props.setError(true)
}

let checkemailexistence = async (props) => {
  let {
    UserProfil,
  } = props

  let result = await axios.post(Api+'/clients/checkEmailExistence',UserProfil)

  if(result.data==="emailE"){
    props.errEmail()
    props.setError(true)
  }else if(result.data==="phoneE"){
    props.errPhone()
    props.setError(true)
  }else if(result.data==="Not exist"){
    addToServer(props)
  }else{
    props.errConnection()
    props.setError(true)
  }
}

let addToServer = async (props) =>{

  let {
    setOn,
    UserProfil,
    ToShop
  } = props;

  try {
    let result = await axios.post(Api+"/clients/addClient",UserProfil)
    if (result.status===200){
      UserProfil.id = result.data
      addToInt(props)
    }
  } catch (error) {
    props.errConnection()
    props.setError(true)
  }
}

const addToInt = async (props) => {
  try {
    await FileSystem.makeDirectoryAsync(Path)
    await FileSystem.writeAsStringAsync(
      Path+'/data.txt',
      JSON.stringify(props.UserProfil),
      {
        encoding:'utf8'
      }
    )
    let info = await FileSystem.getInfoAsync(Path+'/data.txt')
    if(info.exists){
      connections(props)
    }
  } catch (error) {
    props.errConnection()
    props.setError(true)
  }
} 

