import { Icon, Image, Text, TouchableOpacity, View } from '@components'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Platform } from 'react-native'

export const BookHeader = () => {
  const navigation = useNavigation()
  return (
    <View backgroundColor='onPrimary' align='center'  row padding paddingTop={Platform.OS === 'ios' ? 'xl' : 'b'} space='between'>
       <View row gap align='center'>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Icon name='BackBlack' marginTop='xs' size='xs'/>
        </TouchableOpacity>
        <Text color='onBackground' font='PlusJakartaBold' size='h5' text='Books Store'/>
   
       </View>
       <View row gap>
        <TouchableOpacity onPress={()=>navigation.navigate('MyCart')} >
            <Icon name='Cart'/>
        </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
            <Icon name='Notification' />
            </TouchableOpacity>
       </View>
    </View>
  )
}