import { Icon, Image, Text, TouchableOpacity, View } from '@components'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export const HomeHeader = () => {
  const navigation = useNavigation()
  return (
    <View backgroundColor='onPrimary' align='center'  row padding paddingTop='xl' space='between'>
       <View row gap align='center'>
        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
        <Image src='Dp' width={60} height={60} />
        </TouchableOpacity>
        <View gap='xs'>
        <Text color='name' font='PopinsRegular' size='h5' text='Hello, Judy Robinson'/>
        <Text color='primary' size='h6' font='OleoRegular' text='Welcome Back'  />
        </View>
       </View>
       <View row gap>
        <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
            <Icon name='Notification'/>
        </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Icon name='Menu' />
            </TouchableOpacity>
       </View>
    </View>
  )
}