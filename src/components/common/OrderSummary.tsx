import {  Text, View } from '@components'
import React from 'react'

export const OrderSummary = () => {
  return (
    <View gap>
 <View marginTop  row space='between'>
          <Text font='PopinsRegular' size='h6' text='Sub-Total' color='light'/>
          <Text font='PopinsMedium' size='h6' text='$170.75'/>
       </View>
       <View  row space='between'>
          <Text font='PopinsRegular'  size='h6' text='Delivery' color='light'/>
          <Text font='PopinsMedium'  size='h6' text='$20.00'/>
       </View>
       <View  row space='between'>
          <Text font='PopinsRegular' size='h6' text='Discount' color='light'/>
          <Text font='PopinsMedium'  size='h6' text='$10.00'/>
       </View>
       <View style={{borderWidth: 1, borderColor: '#E0E0E0',borderStyle: 'dashed'}}/>
       <View  row space='between'>
          <Text font='PopinsRegular' size='h6' text='Total' color='light'/>
          <Text font='PopinsMedium'  size='h6' text='$180.99'/>
       </View>
    </View>
  )
}
