import React from 'react';
import { 
  compose , 
  withState,
  lifecycle,
  withProps
 } from 'recompose';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';

let path = FileSystem.documentDirectory+'/userData';
let Api = "http://192.168.42.158:5000"

let addState = withState('UserProfil','setProfil',false)
// let addProps = withProps()
let addLifeCycle = lifecycle({
  shouldComponentUpdate(){return true},
  componentDidUpdate(prev){
    if(this.props.UserProfil!==prev.UserProfil) {
      checkInfo(this.props.UserProfil)
    }
  },
  componentWillUnmount(){
    this.props.setProfil(false)
  }
})

export default HocSign = compose(
  addState,
  // addProps,
  addLifeCycle
)



let checkInfo = (data) => {
  let arrayInfo = Object.values(data),
    validation=[];

  arrayInfo.forEach(ele=>{
    if(ele!==""){
      validation.push("ok")
    }
  })

  let {
    pseudo,
    mail,
    phone,
  } = data

  let tompon = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  test = tompon.test(mail.trim());

  let len = validation.length;
  ((len===3)&&(test===true)&&(phone.length===10))? checkemailexistence(data):alert("Verifiez vos entrees")
}

let checkemailexistence = async (info) => {

  let result = await axios.post(Api+'/clients/checkEmailExistence',info)

  if(result.data==="Exist"){
    alert('exists')
  }else if(result.data==="Not exist"){
    addToServer(info)
  }else{
    alert('Erreur de connection au server')
  }
}

let addToServer = async (data) =>{
  try {
    let result = await axios.post(Api+"/clients/addClient",data)
    if (result.status===200){
      data.id = result.data
      addToInt(data)
    }
  } catch (error) {
    alert(error)
  }
}

let addToInt = async (data) => {
  try {
    await FileSystem.makeDirectoryAsync(path)
    await FileSystem.writeAsStringAsync(
      path+'/data.txt',
      JSON.stringify(data),
      {
        encoding:'utf8'
      }
    )
    let info = await FileSystem.getInfoAsync(path+'/data.txt')
    if(info.exists){
      let stringInfo = await FileSystem.readAsStringAsync(path+"/data.txt")
      alert(stringInfo)
    }
  } catch (error) {
    alert(error)
  }
}