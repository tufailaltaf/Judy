import { Icon, Text, TouchableOpacity, View } from '@components'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Platform } from 'react-native'

export const Header = ({text}:{text:string}) => {
    const navigation = useNavigation()
    return (
        <View row align='center' paddingTop={Platform.OS === 'ios' ? 'xl' : 's'} paddingBottom>
            <TouchableOpacity onPress={()=>navigation.goBack()} paddingLeft paddingTop='s'>
                <Icon name='BackBlack' size='xs' />
            </TouchableOpacity>
            <View flex align='center' paddingRight='l'>
            <Text font='PlusJakartaSemiBold' size='h4' text={text} />
            </View>
        </View>
    )
}
