import { Icon, Image, Text, TouchableOpacity, View } from '@components'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Platform } from 'react-native'

export const ChatHeader = () => {
  const navigation = useNavigation()
  return (
    <View backgroundColor='onPrimary' align='center'  row padding paddingTop={Platform.OS === 'ios' ? 'xl' : 'b'} space='between'>
       <View row gap align='center'>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Icon name='BackBlack' size='xs'/>
        </TouchableOpacity>
        <Image src='Dp' width={45} height={45} />
        <View gap='xs'>
        <Text color='onBackground' font='PopinsMedium' size='h6' text='Judy Robinson'/>
        <Text color='success' size='body' font='PopinsRegular' text='Online'  />
        </View>
       </View>
       <View row gap>
        <TouchableOpacity >
            <Icon name='Call'/>
        </TouchableOpacity>
            <TouchableOpacity>
            <Icon name='Video' />
            </TouchableOpacity>
       </View>
    </View>
  )
}