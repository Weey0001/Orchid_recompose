import React, { forwardRef } from 'react'
import * as Animatable from 'react-native-animatable';

export const Outanim = forwardRef((props,ref) => 
  <Animatable.View
    useNativeDriver={true}
    ref={ref}
  >
    {props.children}
  </Animatable.View>
)
