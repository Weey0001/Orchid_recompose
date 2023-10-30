import React from 'react';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';

export const Api = "http://192.168.42.158:5000"

export const Path = FileSystem.documentDirectory+'/userData'

export const connections = async (props) => {

  try {

    let allItems = await axios.post(Api+'/items/allitems/5e83161f04be3f216807b021')
   
    await props.setItems(allItems.data)
    
    setTimeout(() => {
      props.ToShop()
    }, 3000);
    
  } catch (error) {
    props.setWait(true)
    alert(error)
  }

}