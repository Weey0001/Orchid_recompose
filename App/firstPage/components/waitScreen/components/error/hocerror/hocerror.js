import React from 'react';
import {
  compose,
  lifecycle
} from 'recompose';

let addLifeCycle = lifecycle({
  componentDidUpdate(prev){
    if(this.props.onerror!==prev.onerror){

      setTimeout(() => {
        
        this.props.setError(false)
      }, 2000);

    }

  }
})

export default HOCerror = compose(
  addLifeCycle
)