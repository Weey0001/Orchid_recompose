import React from 'react';
import * as FileSystem from 'expo-file-system';
import { connections,Path } from '../../../config/connections/connections';

export const checkIntData = async (props) => {
  let info = await FileSystem.getInfoAsync(Path+'/data.txt')
  if(info.exists){
    //todo: action for existing internalData
    connections(props)
    // deletAs()
  }else{

    setTimeout(() => {
      props.setOn(true)    
    }, 2000);

  }
}

let deletAs = async () => {
  await FileSystem.deleteAsync(Path)
  let info = await FileSystem.getInfoAsync(Path)
  alert(info.isDirectory)
}