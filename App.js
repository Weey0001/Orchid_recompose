import React, { Component } from 'react'
import FirstPage from './App/firstPage/firstPage'
import Back3D from './App/firstPage/components/back3D/Back3D'

export default class App extends Component {
  render() {
    return (
      <Back3D>
        <FirstPage/>  
      </Back3D>
    )
  }
}

