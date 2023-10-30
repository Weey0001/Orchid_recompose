import React from 'react'
import { View, Text, FlatList } from 'react-native'
import HOCshop from './hocShop/hocshop';
import { compose } from "recompose";

const Shop = props => 

  <View>
    <FlatList
      data={props.allItems}
      renderItem={({item,index})=>
        <View style={{flex:1}}>
          <Text
            style = {{color:'white'}}
          >
            {JSON.stringify(item)}
          </Text>        
        </View>
      }
      keyExtractor={(item,index)=>item._id}
    />
    {/* <Text style={{color:"white"}}>
      {JSON.stringify(props.allItems)}
    </Text> */}
  </View>

export default compose(
  HOCshop
)(Shop)