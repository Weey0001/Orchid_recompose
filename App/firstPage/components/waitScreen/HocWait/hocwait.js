import React from 'react'
import {
  lifecycle,
  compose,
  withState,
} from 'recompose';
import {checkIntData} from './allFunc/allfunc';

let addState = withState('isOn','setOn',false)
let addState0 = withState('isOrg','setOrg',false)

let addLifecycle = lifecycle({
  componentDidMount(){
    checkIntData(this.props)
  },
})

export default HOCwait = compose(
  addState,
  addState0,
  addLifecycle
)