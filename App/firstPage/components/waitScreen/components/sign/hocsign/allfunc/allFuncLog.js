import React from 'react';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import { connections, Api, Path } from '../../../../../config/connections/connections';

export const checkInfoLog = (data) => {
  let arrayInfo = Object.values(data.UserLog),
  validation=[];

  arrayInfo.forEach(ele => {
    if(ele!==""){
      validation.push("ok")
    }
  });

  let {
    email,
    pass
  } = data.UserLog

  let tompon = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  test = tompon.test(email.trim());
  let len = validation.length;
  ((len===2)&&(test===true)&&pass.length>=8)? checkLogData(data):handleError(data)
}

let handleError = (props) => {
  props.errEmph()
  props.setError(true)
}

let checkLogData = async props => {
  let {
    UserLog
  } = props

  let result = await axios.post(Api+'/clients/login',UserLog)
  if(result.data === 'notfound'){
    props.errLog()
    props.setError(true)
  }else if(result.data!=="notfound"){
    addToInt(props,result.data)
  }else{
    props.errConnection()
    props.setError(true)
  }
}

const addToInt = async (props,data) => {
  try {
    await FileSystem.makeDirectoryAsync(Path)
    await FileSystem.writeAsStringAsync(
      Path+'/data.txt',
      JSON.stringify(data),
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