import React from 'react';
import { 
  compose , 
  withState,
  lifecycle,
  withProps,
  withHandlers,
  withReducer
 } from 'recompose';
import { checkInfo  } from './allfunc/allfunc';
import { checkInfoLog } from './allfunc/allFuncLog';

let addState = withState('UserProfil','setProfil',false)
let addState0 = withState('isLog','setLog',false)
let addState1 = withState('UserLog','setUserLog',false)
let addState2 = withState('isForget',"setForget",false)

let addLifeCycle = lifecycle({

  shouldComponentUpdate(){return true},
  componentDidUpdate(prev){
    if(this.props.UserProfil!==prev.UserProfil) {
      checkInfo(this.props)
    }else if(this.props.UserLog!==prev.UserLog){
        checkInfoLog(this.props)
    }
  }

})

export default HOCsign = compose(
  addState,
  addState0,
  addState1,
  addState2,
  addLifeCycle
)





