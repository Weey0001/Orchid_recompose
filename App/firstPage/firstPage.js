import React from 'react'
import {compose} from 'recompose';
import HocFirstPage from "./HocFirstPage/HocFirstPage";
import Shop from './components/shop/shop';
import WaitScreen from './components/waitScreen/waitScreen';

const FirstPage = props => props.isWait?<WaitScreen {...props}/>:<Shop {...props}/>

export default compose(
  HocFirstPage
)(FirstPage)